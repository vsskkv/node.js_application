// build app faster
const express = require('express')

const app = new express()

app.get('/', (request, responce) => {

    responce.json({
        name: 'hello world'
    })

})

app.get('/about', (request, responce) => {

    responce.send({
        name: 'hello world'
    })

})

app.listen(3000, () => {

    console.log('app listeing on post 3000')

})

/* const http = require('http')

//far system
const fs = require('fs')

//reads file then returns it into a var(const)
// sync = synchronous (one must be complete for the other to take place) 

// NONE Blocking code

const aboutpage = fs.readFile('about.html')

const contactpage = fs.readFile('contact.html')

const homepage = fs.readFile('index.html')

//routes...
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


server.listen(3000) */