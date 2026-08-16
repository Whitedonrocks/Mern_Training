import fs from "fs";

// fs.writeFile('test.txt','This is written from JS',()=>{
//     console.log("File written successfully");
// })

// fs.appendFile('test.txt','This is appended from JS',()=>{
//     console.log("File written successfully");
// })

fs.readFile("./NodeJS/filesystem/test.txt",(err,data)=>{
    if(err) console.log(err.message);
    else console.log(data.toString());
})

fs.readFile("./NodeJS/filesystem/test2.txt",(err,data)=>{
    if(err) console.log(err.message);
    else console.log(data.toString());
})

// onlink delete exit aafai check

