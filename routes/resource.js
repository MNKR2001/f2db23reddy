var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var motorcycle_controller = require('../controllers/motorcycle');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// motorcycle ROUTES ///
// POST request for creating a motorcycle.  
router.post('/motorcycles', motorcycle_controller.motorcycle_create_post);
// DELETE request to delete motorcycle.
router.delete('/motorcycles/:id', motorcycle_controller.motorcycle_delete);
// PUT request to update motorcycle.
router.put('/motorcycles/:id', motorcycle_controller.motorcycle_update_put);
// GET request for one motorcycle.
router.get('/motorcycles/:id', motorcycle_controller.motorcycle_detail);
// GET request for list of all motorcycle items.
router.get('/motorcycles', motorcycle_controller.motorcycle_list);
module.exports = router;
// GET request for one motorcyle. 
router.get('/motorcycle/:id', motorcycle_controller.motorcycle_detail); 