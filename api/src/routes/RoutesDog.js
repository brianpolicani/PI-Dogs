const axios = require("axios");
const { Router } = require("express");
const router = Router();
require("dotenv").config();
const { API_URL, API_KEY } = process.env;
const { Dog, Temper } = require("../db");
const { Op } = require("sequelize");

router.post("/", async (req, res) => {
  const {
    name,
    heightMin,
    heightMax,
    weightMin,
    weightMax,
    yearsOfLifeMin,
    yearsOfLifeMax,
    image,
    temperament,
  } = req.body;

  try {
    if (
      name &&
      heightMin &&
      heightMax &&
      weightMin &&
      weightMax &&
      yearsOfLifeMin &&
      yearsOfLifeMax &&
      temperament
    ) {
      console.log(temperament);
      await Dog.create({
        name: name,
        heightMin: heightMin,
        heightMax: heightMax,
        weightMin: weightMin,
        weightMax: weightMax,
        yearsOfLifeMin: yearsOfLifeMin,
        yearsOfLifeMax: yearsOfLifeMax,
        image: image,
        temperament: temperament?.join(", "),
      });

      res.status(200).send("The dog has been created successfully");
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (id.includes("-")) {
    try {
      const dbId = await Dog.findOne({
        where: { id: id },
        includes: [Temper],
      });
      res.status(200).send(dbId);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  } else {
    try {
      const api = await axios.get(`${API_URL}?api_key=${API_KEY}`);

      let filterId = api.data.filter((x) => x.id == id);
      const obj = {
        image: filterId[0].image.url,
        name: filterId[0].name,
        temperament: filterId[0].temperament,
        height: filterId[0].height.metric,
        weight: filterId[0].weight.metric,
        yearsOfLife: filterId[0].life_span,
      };
      res.status(200).send(obj);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  }
});

router.get("/", async (req, res) => {
  let { name } = req.query;

  function formated(arr) {
    return arr.map((x) => {
      return {
        id: x.id,
        image: x.image.url,
        name: x.name,
        temperament: x.temperament,
        weight: x.weight.metric + " kg",
        height: x.height.metric + " cm",
      };
    });
  }

  if (name) {
    try {
      let dbName = await Dog.findAll({
        where: { name: { [Op.iLike]: `%${name}%` } },
        /*         includes: { model: Temper},
         */
      });

      let rawCallName = await axios.get(`${API_URL}?api_key=${API_KEY}`);
      rawCallName = rawCallName.data;

      let result = rawCallName.filter((x) =>
        x.name.toLowerCase().includes(name.toLowerCase())
      );

      let resultMap = result.map((x) => {
        return {
          id: x.id,
          image: x.image.url,
          name: x.name,
          temperament: x.temperament,
          weight: x.weight.metric + " kg",
          height: x.height.metric + " cm",
        };
      });

      if (!dbName.length && !resultMap.length)
        throw new Error(`${name} not found`);

      let searchResult = [...dbName, ...resultMap];

      res.status(200).send(searchResult);
    } catch (error) {
      res.status(404).send({ error: error.message });
    }
  } else {
    try {
      const callApi = await axios.get(`${API_URL}?api_key=${API_KEY}`);
      const result = formated(callApi.data);
      let dbName = await Dog.findAll();
      let searchResult = [...dbName, ...result];
      res.status(200).send(searchResult);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
});

module.exports = router;
