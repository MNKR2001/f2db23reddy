
var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var motorcycle_controller = require('../controllers/motorcycle');

/// API ROUTE ///

// GET resources base.
router.get('/', api_controller.api);

/// University ROUTES ///

// POST request for creating a University.
router.post('/motorcycle', motorcycle_controller.motorcycle_create_post);

// PUT request to update University.
router.put('/motorcycle/:id', motorcycle_controller.motorcycle_update_put);
// GET request for one University.
router.get('/motorcycle/:id', motorcycle_controller.specific_motorcycle);

// DELETE request to delete University.
router.delete('/motorcycle/:id', motorcycle_controller.motorcycle_delete);


// GET request for list of all University items.
router.get('/motorcycle', motorcycle_controller.motorcycle_list);

module.exports = router;