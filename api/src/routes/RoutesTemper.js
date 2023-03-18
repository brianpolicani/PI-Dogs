const { Router } = require("express");
const router = Router();
require("dotenv").config;
const { Temper } = require("../db");
const middlewareTemperaments = require('../middleware.js/middlewareTemperaments')

router.get('/', middlewareTemperaments,async (req, res) => {
  try {
    const result = await Temper.findAll()
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send({error: error.message})
  }
})

module.exports = router;
