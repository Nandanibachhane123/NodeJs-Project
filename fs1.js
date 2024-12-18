import fs from "fs";
console.log("at the start.....");
fs.writeFile("./datatxt" , "node js is superfast language" , (err)=>{
    err?console.log(err):console.log("success....")
});
console.log("at the end")
























