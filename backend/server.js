require("dotenv").config()
const express=require("express")

const app=express()


app.get("/",async(req,res)=>{
    res.send("app is running")
})

app.post("/signup",async(req,res)=>{
     const username=req.body
     const email=req.body
     const password=req.body
     const dateofbirth=req.body

    try {
        if(username || email || password || dateofbirth){
            res.status(200).send("Signup successful")
        }
        else{  
            
            if(!username){
                res.status(400).send("username cannot be empty")
            }
            else if(!email){
                res.status(400).send("Email cannot be empty")
            }
            else if(!(password>8 && password<16)){
                res.status(400).send("Password length should be greater than 8 and lesser than 16")
            }

        }
        
    } catch (error) {
        res.status(500).send("internal server error")
    }
})


const port=process.env.PORT

app.listen(port,async()=>{
    console.log(`app is running on http://localhost:${port}`)
})