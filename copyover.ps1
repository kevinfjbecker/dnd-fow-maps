
param(
    [string] $downloadsFolder = "~\Downloads",
    [string] $projectFolder = "$PSScriptRoot\build\js",
    [string] $filter = "*"
)

Write-Host "You are here: $projectFolder" -ForegroundColor Yellow

$sourcePath = resolve-path $downloadsFolder -errorAction Stop
$destinationPath = resolve-path $projectFolder -errorAction Stop
$script:projectFolder = $destinationPath

Write-Verbose "Monitoring $path for changes"

$fsw = new-object System.IO.FileSystemWatcher $sourcePath, $filter
$fsw.NotifyFilter = [System.IO.NotifyFilters]'FileName, LastWrite'

$action = {

    $watchFiles = 'geometry.js', 'combatants.js'
    $fullPath = $event.SourceEventArgs.FullPath
    $fileName = Split-Path $fullPath -Leaf
    $destinationRoot = $event.MessageData

    if ($watchFiles.Contains("$fileName")) {
        Move-Item -Path $fullPath -Destination "$destinationRoot\$fileName" -Force
    }

}

register-objectEvent $fsw Created -SourceIdentifier FileCreated -Action $action -MessageData $destinationPath
register-objectEvent $fsw Changed -SourceIdentifier FileChanged -Action $action -MessageData $destinationPath

Write-Host 'To disable this--and all other event listeners--call the following:' -ForegroundColor Yellow
Write-Host 'Get-EventSubscriber | Unregister-Event' -ForegroundColor Green
