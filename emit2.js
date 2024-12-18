import event from "events";

const eventEmitter =  new event.EventEmitter();

eventEmitter.once("done",()=>{
    console.log("Done event caught....");
});

eventEmitter.emit("done");
eventEmitter.emit("done");
//once me kitni baar hi call kiya ho ek hi baar chalta h
