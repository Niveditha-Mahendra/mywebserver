var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/tree') { //check the URL of the current request
        
        data = "myFavouriteTree: palm "
        res.writeHead(200, { 'Content-Type': 'application/json' });
        //console.log(data)
        res.write(JSON.stringify(data));
        res.end();
    }

    else
        res.end('Invalid Request!');

});

server.listen(8080); //6 - listen for any incoming requests

console.log('My web server is running at 8080 port..')