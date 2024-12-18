import fs from "fs";
fs.readFile("./datatxt",(err,data)=>{
    err ? console.log(err) : console.log(data.toString());
});