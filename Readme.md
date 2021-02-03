# コンテナのビルド
``` sh
$ docker-compose build
```

# アプリの作成
``` sh
$ docker-compose run --rm node sh -c "npm install -g create-react-app && create-react-app react-sample"
```
アプリ名を変更した場合はdocker-compose.ymlの中にある、コマンドのアプリ名も変更する

# 立ち上げ
``` sh
$ docker-compose up
```