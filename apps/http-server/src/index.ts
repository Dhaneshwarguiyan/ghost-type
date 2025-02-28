import express from "express"

const app = express();

app.get('/api/test',(req,res)=>{
    res.send({
        message:"Hello world"
    })
})

app.listen(5000,()=>{
    console.log(`Server listening on port ${3000}`)
})