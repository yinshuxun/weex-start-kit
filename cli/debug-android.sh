#run yarn build and cp to android dir

echo ":::start build::: "

yarn build

echo "copy start ..."

cp -rf ./dist/  ./platforms/android/app/src/main/assets/dist/

echo "copy finish ..."
