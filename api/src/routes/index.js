const RoutesDog = require('../routes/RoutesDog')
const RoutesTemper = require('../routes/RoutesTemper')
const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/dogs', RoutesDog)
router.use('/temperaments', RoutesTemper)

module.exports = router;
