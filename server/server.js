
//引入http模块
// var http = require("http")
// var url = require("url")
// var server = http.createServer(function (req, res) {
//     res.setHeader("Content-Type", "text/html; charset=utf-8")
//     res.writeHead(200, "ok")
//     res.write("hello")
//     res.end()
// })
// server.listen(8080)
// console.log("服务器已打开，可以运行 http://localhost:8080");


var express = require("express")
var app = express()
var fs = require("fs")

app.get("/datas", function (req, res) {
    fs.readFile( __dirname + "/data/" + "ListData.json", "utf-8", function (err, data) {
        console.log(data);
        console.log(__dirname + "/data/" + "ListData.json");
        res.end(data)   
    })
})
var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
})