
@echo off
node auto_patch_labels.js
if %errorlevel% neq 0 (
  echo.
  echo Patch fallita.
  pause
  exit /b %errorlevel%
)
echo.
echo Ora esegui:
echo cd frontend
echo npm run build
pause
