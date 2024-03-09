const express = require("express");
const Persona = require("./schema.js");
const bodyParser = require("body-parser");
const connectDB = require("./db.js");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectDB()
app.set('view engine', 'ejs');

app.get("/", async (req,res)=>{
    try {
        const personas = await Persona.find({});
        console.log(personas);
        res.json(personas);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener personas' });
    }
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/datos", async (req,res)=>{
    try {
        const personas = await Persona.find({}, { nombre: 1, años: 1, _id: 0 }); 
        console.log(personas);
        res.render('indexx', { personas: personas });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener personas' });
    }
});


app.post('/agregar', async (req, res) => {
    const { nombre, años } = req.body;
    try {
        const persona = new Persona({ nombre, años });
        const personaGuarda = await persona.save()
        console.log(personaGuarda)
        res.redirect("/datos")
    } catch (error) {
        console.log(error)
    }
    
  });

app.listen(port,()=>{
    console.log("ON")
});