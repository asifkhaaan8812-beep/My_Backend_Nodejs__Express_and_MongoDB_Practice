import express from 'express';
const router = express.Router();

router.get('/',(req, res)=>{
  res.send("this is the shop home page")
})

router.get('/about', (req, res)=>{
  res.send("this is the about shop page")
})

export default router;
