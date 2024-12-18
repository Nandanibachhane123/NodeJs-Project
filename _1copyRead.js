import fs from "fs";
let a;
fs.readFile("./_1sample.txt","utf8",(err,data)=>{
    err?console.log(err):a=data;

})
setTimeout(()=>{
    fs.writeFile("./_1xyz.txt",a,err=>{
        err?console.log(err):console.log("success");
    })
},1000);