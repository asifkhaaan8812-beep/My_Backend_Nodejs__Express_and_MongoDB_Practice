import express from "express";
// routes ka tool create karna
const router = express.Router();
import path from 'path'

// router.get

// agar path same h to jo  route top pa hoga ya oper hoga ya pehla hoga browser mein vahi show hoga

router.get("/", (req, res) => {
  res.send(`<h1>this is the main page of blog<h1/>`);
});

// using slug
// router.get('/:slug' , (req , res)=>{
//   res.send(`This Blog tells about ${req.params.slug} `)
// })

router.post("/", (req, res) => {
  console.log("hi this is a post req");
  res.send("hello post req");
});

// put req

router.put("/", (req, res) => {
  console.log("hi this is a put req");
  res.send("hello put req");
});

// delete
router.delete("/", (req, res) => {
  console.log("hi this is a delete req");
  res.send("hello delete req");
});

// we can chain it in express like

// router
//   .get("/", (req, res) => {
//     res.send(`<h1>this is the main page of blog<h1/>`);
//   })
//   .post("/", (req, res) => {
//     console.log("hi this is a post req");
//     res.send("hello post req");
//   })
//   .put("/", (req, res) => {
//     console.log("hi this is a put req");
//     res.send("hello put req");
//   })
//   .delete("/", (req, res) => {
//     console.log("hi this is a delete req");
//     res.send("hello delete req");
//   });

// sending a complete file  like in a template folder 

router.get('/index', (req,res)=>{
  res.sendFile(path.resolve ('templates/index.html'))
})

// json data 
router.get('/api',(req , res)=>{
  res.json({a:1 , b:2 , c:3 , name :["harry", "asif"]})
})

export default router;
