setlocal enabledelayedexpansion
set i=0
for %%a in (*) do (
 if NOT "%%a" == "rn.bat" set /A i+=1 & ren "%%a" "!i!.png"
)