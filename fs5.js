import fs from "fs";
const readsample = ()=>{
   return new Promise((resolve,reject)=>{
    fs.readFile("./_1sample.txt","utf8",(err,data)=>{
      err ? reject(err) : resolve(data);
    });
   });
}
const readXyz = ()=>{
    return new Promise((resolve,reject)=>{
       fs.readFile("./_1xyz.txt","utf8",(err,data)=>{
         err ? reject(err) : resolve(data);
       });
    });
}

Promise.all([readsample(), readXyz()])
.then(results=>{
   fs.writeFile("./result.txt",results[0]+"\n"+results[1],(err)=>{
     err ? console.log("Operation Failed") : console.log("Operation success");
   })
}).catch(err=>{
    console.log(err);
});