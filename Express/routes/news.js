import express from 'express';
const router = express.Router()

router.get('/', (req , res)=>{
  res.send("this is home page of news")
})

// about rout 

// respond with "hello world" when a GET request is made to the homepage

router.get('/about', (req, res) => {
  res.send('this is the about page');
});
router.get('/response', (req, res) => {
  res.send('this is the response page');
});

export default router;