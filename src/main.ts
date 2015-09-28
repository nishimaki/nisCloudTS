import http = require("http");
import path = require('path');
import express = require('express');

import async = require('async');
import socketio = require('socket.io');

class Main
{
    constructor()
    {
        // httpサーバーを設定する
        var router = express();
        var server = http.createServer(router);
        router.use(express.static(path.resolve(__dirname, 'client')));
        // サーバーを起動してリクエストを待ち受け状態にする12345
        server.listen(process.env.PORT || 3000);
    }
}
var main:Main = new Main();