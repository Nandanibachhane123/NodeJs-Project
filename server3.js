import http from "http";
import url, { parse } from "url";
http.createServer((request ,response)=>{
    const parseUrl = url.parse(request.url,true);
    console.log(parseURL);
    if(parse)

})