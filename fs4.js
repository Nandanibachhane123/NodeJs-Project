import fs from "fs";
try{
 fs.writeFileSync("./abc.txt","Node js learning by pavan sir ,...............");
 console.log("Operation success...");
}
catch(err){
    console.log(err);
}