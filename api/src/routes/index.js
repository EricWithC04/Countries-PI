const { Router } = require('express');
const { getAllCountries } = require("../controllers/index.js");
const { Country, Activity } = require("../db.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/countries", async (req, res) => {
    try {
        const { name } = req.query;
        let allCountries = await getAllCountries();
        if (name) {
            const pais = await allCountries.find(c => c.name.toLowerCase() === name.toLowerCase());
            pais ?
            res.status(200).send(pais) :
            res.status(404).send("Este país no se encuentra")
        } else if (!name) {
            res.status(200).send(allCountries) 
        }
    } catch (error) {
        console.error(error)
        res.status(404).send("Ha ocurrido un error en la peticion")
    }
})

router.get("/countries/:idPais", async (req, res) => {
    const { idPais } = req.params;
    let country = await (await getAllCountries()).find(pais => pais.id === idPais);
    country ?
    res.status(200).send(country) :
    res.status(404).send("No se ha encontrado este pais")
})

router.post("/activities", async (req, res) => {
    try {
        const { idd, name, difficulty, duration, season } = req.body;
        if (!idd || !name || !difficulty || !duration || !season) {
            res.status(404).send("Por favor, complete todos los datos");
        }
        const newActivity = await Activity.findOrCreate({
            where: { name: name },
            defaults: { 
                name,
                difficulty,
                duration,
                season 
            }
        })
        let country = await Country.findAll({ where: { id: idd } })
        
        country.map(async (pais) => {
            await pais.addActivity([newActivity[0].id])
        })
        res.status(201).send("Actividad creada correctamente!");
    } catch (error) {
        console.error(error);
        res.status(404).send("ha ocurrido un error durante el proceso!")
    }
})


module.exports = router;
