import http = require("http");
class Main
{
    constructor()
    {
        // httpサーバーを設定する
        var server:http.Server = http.createServer((request, response) => this.requestHandler(request, response));
        // サーバーを起動してリクエストを待ち受け状態にする
        server.listen(process.env.PORT || 3000);
    }

    /*
    * サーバーにリクエストがあった時に実行される関数
     */
    private requestHandler(request, response):void
    {
        response.end("Hello! Node.js with TypeScript ABCDEFG");
    }
}
var main:Main = new Main();