# Portfolio Image Setup Script
# This script helps you rename your images to match the portfolio placeholders

Write-Host "=== Reem's Portfolio Image Setup ===" -ForegroundColor Cyan
Write-Host ""

$publicPath = "c:\Users\reemk\OneDrive\Desktop\finallizzed_portfolio\public"

# Check if public folder exists
if (!(Test-Path $publicPath)) {
    Write-Host "Error: Public folder not found!" -ForegroundColor Red
    exit
}

Set-Location $publicPath

Write-Host "Current files in public folder:" -ForegroundColor Yellow
Get-ChildItem | Select-Object Name | Format-Table

Write-Host ""
Write-Host "=== IMAGE REPLACEMENT GUIDE ===" -ForegroundColor Green
Write-Host ""

$imageMap = @{
    "placeholder-user-photo.jpg" = "Your professional headshot photo"
    "placeholder-lg5yl.png" = "Loan Eligibility Prediction project screenshot"
    "placeholder-rn22z.png" = "StreeRaksha Safety System project screenshot"
    "placeholder-090gc.png" = "Lung Disease Classification project screenshot"
    "placeholder-hackathon1.jpg" = "Tech Avishkar 2.0 event photo"
    "placeholder-hackathon2.jpg" = "CodeBattle Hackathon photo"
    "placeholder-hackathon3.jpg" = "IET Workshop photo"
    "placeholder-hackathon4.jpg" = "IEEE Technical Event photo"
    "placeholder-hlnpj.png" = "Python for Data Science certificate"
    "placeholder-f1n23.png" = "Ethical Hacking certificate"
    "placeholder-xzb70.png" = "NVIDIA LLM certificate"
    "placeholder-e3po6.png" = "CodeBattle achievement photo"
    "placeholder-rzxdz.png" = "IET leadership photo"
}

foreach ($placeholder in $imageMap.Keys) {
    Write-Host "📁 $placeholder" -ForegroundColor White
    Write-Host "   └── $($imageMap[$placeholder])" -ForegroundColor Gray
    Write-Host ""
}

Write-Host "=== HOW TO ADD YOUR IMAGES ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Copy your images to this folder: $publicPath" -ForegroundColor White
Write-Host "2. Rename them to match the placeholder names above" -ForegroundColor White
Write-Host "3. Or use VS Code drag and drop method" -ForegroundColor White
Write-Host ""

Write-Host "=== QUICK RENAME EXAMPLE ===" -ForegroundColor Yellow
Write-Host 'Rename-Item "your_photo.jpg" "placeholder-user-photo.jpg"' -ForegroundColor Green
Write-Host 'Rename-Item "my_project.png" "placeholder-lg5yl.png"' -ForegroundColor Green
Write-Host ""

Write-Host "Run this script anytime to see the current status!" -ForegroundColor Cyan