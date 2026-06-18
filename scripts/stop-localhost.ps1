$ErrorActionPreference = "Stop"

$RepoRoot = Split-Path -Parent $PSScriptRoot
$StateDir = Join-Path $RepoRoot ".localhost-server"
$StateFile = Join-Path $StateDir "server.json"

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

if (-not (Test-Path $StateFile)) {
  Write-Host "No local site state found. Nothing to stop."
  exit 0
}

$state = Get-Content -LiteralPath $StateFile -Raw | ConvertFrom-Json
$pidToStop = [int]$state.pid

if ($pidToStop -le 0) {
  Remove-Item -LiteralPath $StateFile -Force
  Write-Host "Invalid local site state was removed."
  exit 0
}

$process = Get-Process -Id $pidToStop -ErrorAction SilentlyContinue

if ($null -eq $process) {
  Remove-Item -LiteralPath $StateFile -Force
  Write-Host "Stored PID is not running. Local site state removed."
  exit 0
}

Stop-ProcessTree -RootPid $pidToStop
Start-Sleep -Milliseconds 400
Remove-Item -LiteralPath $StateFile -Force

Write-Host "Local site stopped."
Write-Host "PID: $pidToStop"
if ($state.url) {
  Write-Host "URL was: $($state.url)"
}
