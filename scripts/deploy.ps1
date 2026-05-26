# Robust deployment script for GitHub Pages (gh-pages)
# Uses a git-ignored staging directory inside the workspace

$ErrorActionPreference = "Stop"

# Define staging directory path
$StagingDir = Join-Path $PSScriptRoot "..\.pages-publish-deploy"
$StagingDir = [System.IO.Path]::GetFullPath($StagingDir)

Write-Host "=== GitHub Pages Deployment Started ===" -ForegroundColor Cyan

# 1. Check if git is available
$gitCmd = Get-Command git -ErrorAction SilentlyContinue
if (-not $gitCmd) {
    throw "Error: git is not installed or not in PATH."
}

# 2. Get remote origin URL
Write-Host "Detecting remote repository URL..." -ForegroundColor Gray
$remoteUrl = git config --get remote.origin.url
if (-not $remoteUrl) {
    throw "Error: No remote 'origin' URL found in Git config."
}
Write-Host "Remote URL: $remoteUrl" -ForegroundColor Gray

# 3. Setup Staging Directory
if (-not (Test-Path -LiteralPath $StagingDir)) {
    Write-Host "Creating fresh staging clone in $StagingDir..." -ForegroundColor Cyan
    git clone -b gh-pages $remoteUrl $StagingDir
} else {
    Write-Host "Staging folder exists. Pulling latest gh-pages branch changes..." -ForegroundColor Cyan
    # Fetch and reset to origin/gh-pages to clean up any local inconsistencies
    git -C $StagingDir fetch origin
    git -C $StagingDir reset --hard origin/gh-pages
}

# 4. Build Astro project
Write-Host "Building Astro project..." -ForegroundColor Cyan
$env:GITHUB_ACTIONS = "true"
$env:GITHUB_REPOSITORY_OWNER = "grzegorz-samson"
$env:GITHUB_REPOSITORY = "grzegorz-samson/adam-rosinski"

npm run build

if ($LASTEXITCODE -ne 0) {
    throw "Error: npm run build failed."
}

# 5. Clean staging directory (except .git)
Write-Host "Clearing old staging files..." -ForegroundColor Gray
Get-ChildItem -Path $StagingDir -Force | Where-Object { $_.Name -ne ".git" } | ForEach-Object {
    if ($_.PsIsContainer) {
        Remove-Item $_.FullName -Recurse -Force
    } else {
        Remove-Item $_.FullName -Force
    }
}

# 6. Copy build output
Write-Host "Copying build output from dist to staging..." -ForegroundColor Gray
$DistDir = Join-Path $PSScriptRoot "..\dist"
$DistDir = [System.IO.Path]::GetFullPath($DistDir)

if (-not (Test-Path -LiteralPath $DistDir)) {
    throw "Error: Build output directory '$DistDir' does not exist."
}

Copy-Item -Path "$DistDir\*" -Destination $StagingDir -Recurse -Force

# 7. Create .nojekyll to disable Jekyll processing on GitHub Pages
Write-Host "Ensuring .nojekyll exists..." -ForegroundColor Gray
New-Item -Path (Join-Path $StagingDir ".nojekyll") -ItemType File -Force | Out-Null

# 8. Commit and Push
Write-Host "Committing and pushing to gh-pages branch..." -ForegroundColor Cyan
$timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
$commitMsg = "Deploy: $timestamp"

git -C $StagingDir add -A
# Check if there are changes to commit
$status = git -C $StagingDir status --porcelain
if (-not $status) {
    Write-Host "No changes detected. Skipping push." -ForegroundColor Yellow
} else {
    git -C $StagingDir commit -m $commitMsg
    Write-Host "Pushing to remote 'gh-pages' branch..." -ForegroundColor Cyan
    git -C $StagingDir push origin gh-pages
    Write-Host "Successfully deployed new version!" -ForegroundColor Green
}

Write-Host "=== GitHub Pages Deployment Completed ===" -ForegroundColor Cyan
