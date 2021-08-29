# 發生錯誤時執行終止指令
set -e

# 取得目前專案的遠端分支
originUrl=$(git config --get remote.origin.url)

nowStatus=${originUrl:0:5}
echo $nowStatus
if [ $nowStatus = 'https' ]
then
  echo '傳輸方式採用 HTTPs 模式'
  echo '目前遠端分支 URL：'$originUrl
else
  echo '傳輸方式採用 SSH 模式'
  echo '目前遠端分支 URL：'$originUrl
fi

# 打包編譯
npm run build

echo '移動目錄到編譯出來的 dist 資料夾'
#移動到打包資料夾下
cd dist
# 初始化並設置 Git
git init
git add .
git commit -m "update `date +'%Y-%m-%d %H:%M:%S'`";

# 上傳到到 gh-pages
git push -f $originUrl master:gh-pages

cd -