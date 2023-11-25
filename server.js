const http= require('http');

const server=http.createServer((req,res)=>{
   if(req.url==='/'){
        res.end("here is the request")
   }
   if(req.url==='/about'){
        res.end("here is the about")
   }
   res.end("<h1>gooops</h1><a href='/'>go back</a>")
});
server.listen(5000);