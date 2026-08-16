import http from 'http';

const users=[{username:"Prayag",password:"123"}];

const server=http.createServer((req,res)=>{
    // console.log(req.method,req.url);
    // res.end("Hello Master Prayag");
    // const path=req.url;
    // res.setHeader('Content-Type',"text/html");
    // if(path==="/home"){
    //     res.end("<h1>Master Home Page</h1>");
    // }
    // else if(path==="/"){
    //     res.end("Master Home Page");
    // }
    // else if(path==="/about"){
    //     res.end("<h2>Master About Page</h2>");
    // }
    // else{
    //     res.statusCode=404;
    //     res.end("Page Not Found 404");
    // }
    const path=req.url;
    res.setHeader('Content-Type',"application/json");
    console.log(req.method,req.url);
    if(req.method=="GET"){
        if(path=="/users"){
            res.end(JSON.stringify(users));
        }
    }
    else if (req.method=="POST"){
        if(path=="/users"){
           let body="";
           req.on("data", (chunk)=>(body+=chunk));
           req.on("end",()=>{
                let data=JSON.parse(body);
                users.push(data);
                res.end("User Added");
           })
        }
    }

});

server.listen(3000,()=>console.log("Server is up and running"));