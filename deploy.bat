@echo off
echo 🚀 开始部署个人简历网站到GitHub Pages...
echo.

echo 📝 检查Git状态...
git status

echo.
echo 📦 添加所有文件...
git add .

echo.
echo 💾 提交更改...
git commit -m "Update resume website - %date% %time%"

echo.
echo 🚀 推送到GitHub...
git push origin main

echo.
echo ✅ 部署完成！
echo.
echo 🌐 你的网站将在几分钟后可以通过以下链接访问：
echo    https://your-username.github.io
echo    或者
echo    https://your-username.github.io/repository-name
echo.
echo 📋 请确保：
echo    1. GitHub仓库已设置为公开
echo    2. GitHub Pages已启用
echo    3. 等待几分钟让部署完成
echo.
pause
