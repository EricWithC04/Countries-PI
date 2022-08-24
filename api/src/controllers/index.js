const axios = require("axios");
const { Country, Activity } = require("../db.js");

const dataApi = async () => {
    const aData = [];
    const dataCountries = await axios.get("https://restcountries.com/v3/all")
        .then(response => response.data.forEach(pais => {
            aData.push({
                id: pais.cca3,
                name: pais.name.common,
                image: pais.flags[0],
                continent: pais.continents.toString(),
                capital: pais.capital ? pais.capital.toString() : "desconocida",
                subregion: pais.subregion || pais.region,
                area: pais.area,
                population: pais.population
            })
        }))
    return aData;
}

/* const dataDB = async () => {
    return await Country.findAll({
        model: Activity,
        attributes:["name"],
        through:{
            attributes:[]
        }
    })
} */

const getAllCountries = async () => {
    let db = await Country.findAll({include: Activity});
    if (!db.length) {
        await Country.bulkCreate(await dataApi());
        db = await Country.findAll({include: Activity});
    }
    return db;
}

module.exports = {
    dataApi,
    /* dataDB, */
    getAllCountries
}