// order bahut imp h middleware mein jo middleware pehla likha vo pehla execute hoga

import express from 'express'
import fs from 'fs'
const app = express.Router();


// middleware 1
app.use((req, res, next)=>{
  fs.appendFileSync("test.txt", `${Date.now()} thi is a ${req.method}\n request`)
  console.log(`${Date.now()} thi is a ${req.method} request`)
  next();
})

//middleware 2
app.use((req, res, next)=>{
  console.log("m2")
  next()
})


app.get('/' , (req, res)=>{
  res.send("hello world")
})

//

export default app;