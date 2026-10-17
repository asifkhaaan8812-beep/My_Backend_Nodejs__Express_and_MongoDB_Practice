import fs, { readFile } from 'fs'
fs.writeFile("asif.txt","Asif is a very good programmer" , ()=>{
  console.log("done")
  fs.readFile("asif.txt", (err, data)=>{
    console.log(err , data.toString())
  })
})
fs.appendFile("asif.txt", "and he is a veryy good debugger", (e, d)=>{
  console.log(e,d)
})