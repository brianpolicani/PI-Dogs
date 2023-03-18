const axios = require("axios");
require("dotenv").config;
const { API_URL, API_KEY } = process.env;
const { Temper } = require("../db");

let swap = true;

module.exports = async (req, res, next) => {
  if (swap) {
    const temperament = await axios.get(`${API_URL}?api_key=${API_KEY}`);
    const temperamentMap = temperament.data.map((x) => x.temperament);
    const temperamentJS = temperamentMap.join(", ").split(", ");
    const temperamentSet = new Set(temperamentJS);
    const temperamentResult = [...temperamentSet];
    const temperamentArray = temperamentResult.map((x) => {
      return {
        name: x,
      };
    });
    await Temper.bulkCreate(temperamentArray);
    swap = false;
  }
  next();
};
