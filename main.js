import express from 'express';


const app = express();

app.use(express.json())
app.use(express.static("./"))

const PORT = 3000;

app.get('/', (req, res)=>{
      res.render('index.html')
})

app.get('/prompt', (req, res)=>{
    console.log(req.query)
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})