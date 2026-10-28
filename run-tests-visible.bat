@echo off
echo ====================================
echo Running Playwright Tests with Visible Browser
echo ====================================
echo.
echo This will open browser windows and show tests running...
echo Press Ctrl+C to stop at any time
echo.
pause

npx playwright test tests/qa-comprehensive.spec.ts --headed --workers=1 --reporter=list

echo.
echo ====================================
echo Tests Complete!
echo ====================================
echo.
echo To see the HTML report, run:
echo npx playwright show-report
echo.
pause
