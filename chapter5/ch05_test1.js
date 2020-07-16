var http = require('http');

var server = http.createServer();

var port = 3000;
server.listen(port, function(){
    console.log('웹 서버가 시작되었습니다.:%d', port);
});

server.on('connection', function(socket){
    var addr = socket.address();
    console.log('클라이언트가 접속했습니다. : %s , %d', addr.address, addr.port);
});
server.on('request', function(req,res){
    console.log('클라이언트 요청이 들어왔습니다.');
    console.dir(req);
});
server.on('close', function(){
    console.log('서버가 종료됩니다.');
});
server.on('request', function(req,res){
    console.log('클라이언트 요청이 들어왔습니다.');
    
    res.writeHead(200,{"content-Type": "text/html; charset=urf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head>");
    res.write("<meta charset=\"UTF-8\">");
    res.write("<title>응답페이지</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("hi>노드제이에스로부터의 응답 페이지<h2>");
    res.write("</body>");
    res.write("</html>");
    res.end();
});