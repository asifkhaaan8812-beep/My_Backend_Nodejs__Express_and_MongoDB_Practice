import express from 'express'
const app = express();
import router  from './req_res_rout.js';
import newsRouter  from './routes/news.js';
import middleRoutes from './middleware.js';
import shopRouter from './routes/shop.js';
import ejsRouter from './EJS_Learn.js';
import mainRouter from '../mongoose/main.js'

app.set('view engine' , 'ejs')
const port = 3000;


app.use('/blog', router)
app.use('/new' , newsRouter)
app.use('/shop', shopRouter)
app.use('/middleware' , middleRoutes)
app.use('/Ejs', ejsRouter)
app.use('/main', mainRouter)
app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });


// isi tara agar mujhe 100 blogs chaie to kia 100 k lia mein asa end points banata rahonaga bikul nhi express isko acha sa hal karta h.

// app.get('/blog/intro-to-js', (req, res)=>{
//   res.send("this is my js blog")
// })
// app.get('/blog/intro-to-python', (req, res)=>{
//   res.send("this is my python blog")
// })


//slug aur second aik url parameter h aur params se inki value get hoti h

app.get('/blog/:slug', (req, res)=>{
  res.send(`this is my ${req.params.slug}`)
  console.log(req.params)//for url which we paste 
  console.log(req.query)// for query after 
})


// app.get('/blog/:slug/:second', (req, res)=>{
//   res.send(`this is my ${req.params.slug} and ${req.params.second}`)
// })




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});