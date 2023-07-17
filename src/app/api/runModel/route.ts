import { NextRequest,NextResponse } from "next/server";

const {spawn} = require("child_process");

// const childPython = spawn('python',['./python/Pneuimonia-1.py']);

// const getData = ()=>{
//     childPython.stdout.on('data', (data:any)=>{
//         console.log(`${data}`);
//         return data;
//     })
    
//     childPython.stderr.on('data', (data:any)=>{
//         console.error(`${data}`);
//         return data.toString();
//     })
    
//     childPython.on('close', (code:any)=>{
//         console.log(`Exited with exit code ${code}`);
//     } )
// }

export async function GET(request:NextRequest){
    try {
        console.log("");
        
        let python = spawn('python', ['./python/Pneuimonia-1.py']);
        let dataToSend = '';
    
        for await (const data of python.stdout){
          //console.log(data.toString());
          dataToSend += data.toString();
        }

        console.log(dataToSend);
        
        return NextResponse.json({
            data:dataToSend,
            success:true
        })
    } catch (error:any) {
        console.log(error);
    }
}