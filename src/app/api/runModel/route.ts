
import { NextRequest,NextResponse } from "next/server";

const {spawn} = require("child_process");

const childPython = spawn('python',['./python/Pneuimonia-1.py']);

const getData = async ()=>{
    childPython.stdout.on('data', (data:any)=>{
        console.log(`${data}`);
        return data.toString();
    })
    
    childPython.stderr.on('data', (data:any)=>{
        console.error(`${data}`);
        return data.toString();
    })
    
    childPython.on('close', (code:any)=>{
        console.log(`Exited with exit code ${code}`);
    } )
}

export async function GET(request:NextRequest){
    try {
        const result = await getData();
        return NextResponse.json({
            data:result,
            success:true
        })
    } catch (error:any) {
        console.log(error);
    }
}