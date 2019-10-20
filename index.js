const http = require('http')

//far system
const fs = require('fs')

//reads file then returns it into a var(const)
const aboutpage = fs.readFileSync('about.html')
const contactpage = fs.readFileSync('contact.html')
const homepage = fs.readFileSync('index.html')

const server = http.createServer((request, responce) => {
    
    console.log(request.url)

    if(request.url === '/about'){

        return responce.end(aboutpage)

    }else if (request.url === '/contact'){

        return responce.end(contactpage)

    }else if (request.url === '/'){

        return responce.end(homepage)

    }else{

        responce.writeHead(404)

        responce.end('NOT FOUND')

    }


})


server.listen(3000)