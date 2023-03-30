const express = require('express')
const bp = require('body-parser')
const app = express();
const PORT = 2800;

const con = require('./DBConnection')

con.connect((err)=>{
    if (err) throw err
    console.log("Connected!")
});

app.use(bp.json())
app.use(bp.urlencoded({extended:true}))

app.get('/server', (req, res) => {
    res.json({ message: 'Hello World!' })
})

app.get('/server/health-check', (req, res) => {
    res.json({ message: 'Servidor levantado y corriendo' })
})

app.get('/server/instrument', (req, res) => {
    con.query('select * from Instrumentos;',(err,result)=>{
        if(err) throw err
        res.json({resultado: result})
    })
})

app.post('/server/instrument',(req,res)=>{
    const data = req.body
    const query = 'insert into Instrumentos VALUES (?,?,?);'
    con.query(query,[data.nombre,data.tipo,data.precio],(err,result)=>{
        if(err) throw console.log(err)
        res.json({"Filas insertadas": result.affectedRows})
    })
})

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto ', PORT)
})