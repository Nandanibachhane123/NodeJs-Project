import fs from "fs";
let data = "HELLO WORLD my self nandani bachhane........ !"
fs.writeFile('_1sample.txt' , data ,(err)=>{
    err ? console.log(err): console.log("write  succesfull........")
});




// setTimeout(()=>{
//     fs.writeFile("./_1xyz.txt" ,data,err=>{
//         err?console.log(err):console.log("copy success.........")
//     })
// },10000);
