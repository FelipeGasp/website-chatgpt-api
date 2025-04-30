import express from 'express';


const app = express();

app.use(express.json())
app.use(express.static("./"))

const PORT = 3000;

app.get('/', (req, res)=>{
      res.render('index.html')
})

app.get('/prompt', (req, res)=>{
    const titulo = req.query.titulo;
    const autor = req.query.autor;
    
    const promptVariables = {
        titulo: titulo,
        autor: autor
    }
    console.log(promptVariables)
    res.status(200).json(promptVariables)
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})