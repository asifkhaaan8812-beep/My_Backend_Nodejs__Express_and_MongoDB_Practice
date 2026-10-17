import express from 'express'
const router = express.Router();
import ejs from 'ejs'
import path from 'path'




router.get('/', (req, res)=>{
  let siteName = "Adidas"
  let Searchtext = "Search Now"
  res.render('index',

    //left side vala variable ejs mein use hota h aur right vala oper jo defive hova h ya database se jo ayega

     {sitename: siteName , Searchtext:Searchtext} 

  )
})
router.get('/:slug', (req,res)=>{
  let blogTitle = "Adidas why and when"
  let blogContent = "Its a very good brand"
  res.render('index',{blogTitle:blogTitle , blogContent:blogContent} )
})
export default router;
