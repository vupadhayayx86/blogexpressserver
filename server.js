const express=require("express")
const app=express()
const cors=require("cors")
const fs=require("node:fs")


app.use(cors())
app.use(express.json())
let user={
    name:"Vishal",
    age:22
}
let message={
    text:"Hello World Get"
}
app.get("/",(req,res)=>{
    let filedata=fs.readFileSync("./blogdata.txt","utf-8")
    const data=filedata.split("|")
    const blogdata=data.map((item)=>{
        if(item){
            return JSON.parse(item)
        } else{
            return
        }
    })
   // console.log(blogdata)
    res.send(blogdata)
})

app.post("/",(req,res)=>{
    res.send(user)
    blogdata=JSON.stringify(req.body)+ "|"
    
   // blogdata=req.body
  
    let filedata=fs.readFileSync("./blogdata.txt","utf-8")

    fs.appendFileSync("./blogdata.txt",blogdata,(error)=>{
        if(error){
            console.log(error)
        }
    console.log("data written successfully")
    })
})

app.listen(3000,()=>console.log("Server started on port 3000"))