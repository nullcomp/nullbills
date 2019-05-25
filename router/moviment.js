const movimentRouter = require('express').Router();
const controller = require('../controller/buillsController.js');


// função de inclusão de novo gasto
movimentRouter.post('/newbuill', controller.includeNewMoviment);

module.exports = {
	movimentRouter
}