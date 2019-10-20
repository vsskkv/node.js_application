const http = require('http')

const server = http.createServer((request, responce) => {
    
    console.log(request.url)

    if(request.url === '/about'){

        return responce.end('THE ABOUT PAGE')

    }else if (request.url === '/contact'){

        return responce.end('THE CONTACR PAGE')

    }else if (request.url === '/'){

        return responce.end('THE HOME PAGE')

    }else{

        responce.writeHead(404)

        responce.end('NOT FOUND')

    }


})


server.listen(3000)