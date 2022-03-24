var express = require('express');
var router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const listCarsController = require('../controllers/listCarsController');
const addNewCarsController = require('../controllers/addNewCarsController');

/* GET index page. */
router.get('/', dashboardController.index);

// List Cars
router.get('/cars', listCarsController.index);

// Add New Cars
router.get('/new', addNewCarsController.index);

module.exports = router;
