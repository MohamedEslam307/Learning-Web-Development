const http = require('http');
const fs = require('fs');

function onRequest(request, response) {
    let url = request.url;

    if(url === '/'){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(`
            <html>
                <head>
                    <title>Home</title>
                </head>
                <body>
                    <h1>Welcome to the Home Page</h1>
                    <form action="/create-user" method="POST">
                        <input type="text" name="username">
                        <button type="submit">Submit</button>
                    </form>
                    <button><a href="/users">Users</a></button>
                </body>
            </html>
        `);
        response.end();
        return;
    }else if(url === '/users'){
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(`
            <html>
                <head>
                    <title>Users</title>
                </head>
                <body>
                    <h1>Users</h1>
                    <ul>
                        <li>User 1</li>
                        <li>User 2</li>
                        <li>User 3</li>
                    </ul>
                </body>
            </html>
        `);
        response.end();
        return;
    
    }else if(url === '/create-user' && request.method === 'POST'){
        response.statusCode = 302;
        response.setHeader('Location', '/');
        response.end();

        const body = [];
        request.on('data',chunk=>{
            console.log(chunk.toString());
            body.push(chunk);
        })
        request.on('end',()=>{
            const parsedData = Buffer.concat(body).toString();
            const username = parsedData.split('=')[1];
            console.log(username);
            fs.appendFile('user.txt', "Username: "+username+ "\n", (err)=>{
                if(err){
                    console.log(err);
                }
            })
        
        return;
        })
    }
    
}

http.createServer(onRequest).listen(3000);