param(
  [int]$StartPort = 4321,
  [int]$MaxAttempts = 20,
  [string]$HostName = "127.0.0.1",
  [switch]$OpenBrowser
)

$ErrorActionPreference = "Stop"

$RepoRoot = Split-Path -Parent $PSScriptRoot
$StateDir = Join-Path $RepoRoot ".localhost-server"
$StateFile = Join-Path $StateDir "server.json"
$StdoutLog = Join-Path $StateDir "server.out.log"
$StderrLog = Join-Path $StateDir "server.err.log"
$ExpectedContent = "Adam Rosi"

function Test-ProcessAlive {
  param([int]$PidToCheck)

  if ($PidToCheck -le 0) {
    return $false
  }

  return [bool](Get-Process -Id $PidToCheck -ErrorAction SilentlyContinue)
}

function Get-ChildProcessIds {
  param([int]$ParentPid)

  $children = Get-CimInstance Win32_Process -Filter "ParentProcessId = $ParentPid" -ErrorAction SilentlyContinue

  foreach ($child in $children) {
    [int]$child.ProcessId
    Get-ChildProcessIds -ParentPid ([int]$child.ProcessId)
  }
}

function Stop-ProcessTree {
  param([int]$RootPid)

  $processIds = @(Get-ChildProcessIds -ParentPid $RootPid) + @($RootPid)
  $processIds = $processIds | Select-Object -Unique | Sort-Object -Descending

  foreach ($processId in $processIds) {
    $process = Get-Process -Id $processId -ErrorAction SilentlyContinue

    if ($null -ne $process) {
      Stop-Process -Id $processId -Force -ErrorAction SilentlyContinue
    }
  }
}

function Test-PortAvailable {
  param(
    [string]$Address,
    [int]$Port
  )

  $activeListeners = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue

  if ($activeListeners) {
    return $false
  }

  $listener = $null

  try {
    $ipAddress = [System.Net.IPAddress]::Parse($Address)
    $listener = [System.Net.Sockets.TcpListener]::new($ipAddress, $Port)
    $listener.Start()
    return $true
  }
  catch {
    return $false
  }
  finally {
    if ($null -ne $listener) {
      $listener.Stop()
    }
  }
}

function Test-ProjectUrl {
  param([string]$Url)

  if ([string]::IsNullOrWhiteSpace($Url)) {
    return $false
  }

  try {
    $response = Invoke-WebRequest -Uri $Url -UseBasicParsing -TimeoutSec 3
    return ($response.StatusCode -eq 200 -and $response.Content.Contains($ExpectedContent))
  }
  catch {
    return $false
  }
}

function Wait-ProjectUrl {
  param(
    [string]$Url,
    [int]$TimeoutSeconds = 18
  )

  $deadline = (Get-Date).AddSeconds($TimeoutSeconds)

  while ((Get-Date) -lt $deadline) {
    if (Test-ProjectUrl -Url $Url) {
      return $true
    }

    Start-Sleep -Milliseconds 500
  }

  return $false
}

function Get-FreePort {
  param(
    [string]$Address,
    [int]$FirstPort,
    [int]$Attempts
  )

  for ($offset = 0; $offset -lt $Attempts; $offset++) {
    $port = $FirstPort + $offset

    if (Test-PortAvailable -Address $Address -Port $port) {
      return $port
    }
  }

  throw "No free port found from $FirstPort to $($FirstPort + $Attempts - 1)."
}

if (Test-Path $StateFile) {
  $state = Get-Content -LiteralPath $StateFile -Raw | ConvertFrom-Json

  $sameRepo = $state.repoRoot -and ([string]$state.repoRoot -eq $RepoRoot)
  $alive = Test-ProcessAlive -PidToCheck ([int]$state.pid)
  $servesThisProject = Test-ProjectUrl -Url ([string]$state.url)

  if ($sameRepo -and $alive -and $servesThisProject) {
    Write-Host "Local site is already running."
    Write-Host "PID: $($state.pid)"
    Write-Host "URL: $($state.url)"

    if ($OpenBrowser) {
      Start-Process $state.url
    }

    exit 0
  }

  Write-Host "Removing stale local site state."
  Remove-Item -LiteralPath $StateFile -Force
}

New-Item -ItemType Directory -Path $StateDir -Force | Out-Null

$port = Get-FreePort -Address $HostName -FirstPort $StartPort -Attempts $MaxAttempts
$npm = (Get-Command "npm.cmd" -ErrorAction Stop).Source
$arguments = @("run", "dev", "--", "--host", $HostName, "--port", "$port")

$process = Start-Process `
  -FilePath $npm `
  -ArgumentList $arguments `
  -WorkingDirectory $RepoRoot `
  -RedirectStandardOutput $StdoutLog `
  -RedirectStandardError $StderrLog `
  -WindowStyle Hidden `
  -PassThru

$url = "http://$HostName`:$port/"

if (-not (Wait-ProjectUrl -Url $url)) {
  Stop-ProcessTree -RootPid $process.Id
  throw "The dev server started on $url, but it did not return the expected Adam Rosinski page. Check $StdoutLog and $StderrLog."
}

$state = [ordered]@{
  pid = $process.Id
  port = $port
  host = $HostName
  url = $url
  repoRoot = $RepoRoot
  startedAt = (Get-Date).ToString("o")
  command = "npm run dev -- --host $HostName --port $port"
  stdoutLog = $StdoutLog
  stderrLog = $StderrLog
}

$state | ConvertTo-Json | Set-Content -LiteralPath $StateFile -Encoding UTF8

Write-Host "Local site started."
Write-Host "PID: $($process.Id)"
Write-Host "URL: $url"
Write-Host "State: $StateFile"

if ($OpenBrowser) {
  Start-Process $url
}
