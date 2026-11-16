@echo off
echo ===================================================
echo   FIIT FORMACION - Next.js Enterprise Portal
echo   Futura Innovative Information Technology (Chennai)
echo   Engineered by EntryKode Technologies
echo ===================================================
echo.
echo Select Run Mode:
echo [1] Production Mode (Recommended: Instantaneous ^<50ms page transitions)
echo [2] Fast Dev Mode (Turbopack: 10x faster hot reload)
echo [3] Standard Dev Mode (Webpack)
echo.
set /p mode="Enter choice [1, 2, or 3] (default is 1): "
if "%mode%"=="" set mode=1

cd HomePage

if "%mode%"=="1" (
  echo.
  echo Checking production build ...
  if not exist .next (
    echo Building production package ...
    call npm run build
  )
  echo.
  echo Starting Ultra-Fast Production Server on http://localhost:3000 ...
  call npm run start
) else if "%mode%"=="2" (
  echo.
  echo Starting Turbopack Dev Server on http://localhost:3000 ...
  call npm run dev:turbo
) else (
  echo.
  echo Starting Dev Server on http://localhost:3000 ...
  call npm run dev
)
pause
