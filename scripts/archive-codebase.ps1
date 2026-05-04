[CmdletBinding()]
param(
    [string]$ProjectRoot = "",
    [string]$OutputDir = ""
)

$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if ([string]::IsNullOrWhiteSpace($ProjectRoot)) {
    $ProjectRoot = (Resolve-Path (Join-Path $scriptDir "..")).Path
}
if ([string]::IsNullOrWhiteSpace($OutputDir)) {
    $OutputDir = Join-Path $scriptDir "archive-zip"
}

$resolvedProjectRoot = (Resolve-Path $ProjectRoot).Path
if (-not (Test-Path -LiteralPath $OutputDir)) {
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
}
$resolvedOutputDir = (Resolve-Path $OutputDir).Path

$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$projectName = Split-Path $resolvedProjectRoot -Leaf
$archiveName = "$projectName-codebase-$timestamp.zip"
$archivePath = Join-Path $resolvedOutputDir $archiveName

$gitCommand = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitCommand) {
    throw "git is required to build the codebase archive."
}

$includePrefixes = @(
    "README.md",
    ".gitignore",
    "package.json",
    "package-lock.json",
    "astro.config.mjs",
    "tsconfig.json",
    "src/",
    "public/",
    "scripts/",
    "docs/"
)

$excludePrefixes = @(
    ".astro/",
    ".github/",
    ".pages-publish-",
    ".pages-tmp/",
    "dist/",
    "export/",
    "node_modules/",
    "scripts/archive-zip/",
    "docs/context/",
    "docs/tasks/"
)

$excludeExtensions = @(
    ".png",
    ".jpg",
    ".jpeg",
    ".gif",
    ".webp",
    ".ico",
    ".pdf",
    ".docx",
    ".zip"
)

function Test-IncludedPath {
    param([string]$RelativePath)

    foreach ($prefix in $includePrefixes) {
        if ($RelativePath -eq $prefix -or $RelativePath.StartsWith($prefix)) {
            return $true
        }
    }

    return $false
}

function Test-ExcludedArchivePath {
    param([string]$RelativePath)

    foreach ($prefix in $excludePrefixes) {
        if ($RelativePath -eq $prefix -or $RelativePath.StartsWith($prefix)) {
            return $true
        }
    }

    if ($RelativePath.StartsWith("public/") -and $RelativePath.EndsWith(".svg")) {
        return $false
    }

    if ($RelativePath.StartsWith("docs/") -and $RelativePath.EndsWith(".md")) {
        return $false
    }

    $extension = [System.IO.Path]::GetExtension($RelativePath)
    if ($extension -and $excludeExtensions -contains $extension.ToLowerInvariant()) {
        return $true
    }

    return $false
}

$relativePaths = & git -C $resolvedProjectRoot ls-files --cached --others --exclude-standard
if ($LASTEXITCODE -ne 0) {
    throw "Failed to enumerate repository files with git ls-files."
}

$relativePaths = $relativePaths |
    Where-Object {
        $_ -and
        (Test-IncludedPath $_) -and
        -not (Test-ExcludedArchivePath $_)
    } |
    Sort-Object -Unique

if (-not $relativePaths) {
    throw "No repository files found to archive."
}

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$fileStream = [System.IO.File]::Open($archivePath, [System.IO.FileMode]::CreateNew)
try {
    $zipArchive = New-Object System.IO.Compression.ZipArchive($fileStream, [System.IO.Compression.ZipArchiveMode]::Create, $false)
    try {
        foreach ($relativePath in $relativePaths) {
            $sourcePath = Join-Path $resolvedProjectRoot $relativePath
            if (-not (Test-Path -LiteralPath $sourcePath -PathType Leaf)) {
                continue
            }

            $entryName = $relativePath.Replace("\", "/")
            $entry = $zipArchive.CreateEntry($entryName, [System.IO.Compression.CompressionLevel]::Optimal)
            $entryStream = $entry.Open()
            try {
                $sourceStream = [System.IO.File]::OpenRead($sourcePath)
                try {
                    $sourceStream.CopyTo($entryStream)
                }
                finally {
                    $sourceStream.Dispose()
                }
            }
            finally {
                $entryStream.Dispose()
            }
        }
    }
    finally {
        $zipArchive.Dispose()
    }
}
finally {
    $fileStream.Dispose()
}

Write-Output "Archive created: $archivePath"
