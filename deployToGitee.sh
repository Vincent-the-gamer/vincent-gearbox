git clone git@gitee.com:vincent-the-gamer/gearbox.git ./remote
yarn run build
mv ./remote/.git ./dist

rm -rf ./remote

cd ./dist

# 现在的时间
time_now=`date "+%Y年%m月%d日---%H时%M分%S秒"`

git add .
git commit -m "部署: "${time_now}
git push origin master

cd ../

rm -rf ./dist