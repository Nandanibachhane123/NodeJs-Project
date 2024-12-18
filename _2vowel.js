import fs from "fs";
let x;
fs.readFile("./_1xyz.txt" , (err,data)=>{
    err?console.log(err):
    x=data;
});

setTimeout(()=>{
    let arr = x.toString().split(" ");
    let arr1 = arr.filter(x=>{
        let a=x.charAt(0);
        if(a==="a"||a==="A"||a==="e"||a==="E"||a==="o"||a==="O"||a==="i"||a==="I"||a==="u"||a==="U"){
            return x;
        }
    })
    console.log(arr1.length);
},2000)




// import fs from 'fs';

// let x;

// fs.readFile("./_1xyz.txt", 'utf8', (err, data) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     // Assign data to 'x' once the file has been read
//     x = data;

//     // Now that 'x' is set, proceed with the logic
//     let arr = x.split(" ");
//     let arr1 = arr.filter(word => {
//         let firstChar = word.charAt(0).toLowerCase();
//         return ['a', 'e', 'i', 'o', 'u'].includes(firstChar);
//     });

//     console.log(arr1.length);
// });
