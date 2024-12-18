/* 
http:-
it is used to create server.
normal code who to make server.
*/
import http from "http";
const server = http.createServer((request,response)=>{
    response.write("Hello clinet[Mess from server]");
    response.end();
});
server.listen(3000,()=>{
    console.log("server is started............")
})

