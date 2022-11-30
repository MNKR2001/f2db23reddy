
var express = require('express');
var router = express.Router();

// Require controller modules.
var api_controller = require('../controllers/api');
var motorcycle_controller = require('../controllers/motorcycle');

/// API ROUTE ///

// GET resources base.
router.get('/', api_controller.api);

/// University ROUTES ///

// POST request for creating a Motorcycle.
router.post('/motorcycle', motorcycle_controller.motorcycle_create_post);

// PUT request to update Motorcycle.
router.put('/motorcycle/:id', motorcycle_controller.motorcycle_update_put);
// GET request for one Motorcycle.
router.get('/motorcycle/:id', motorcycle_controller.specific_motorcycle);

// DELETE request to delete Motorcycle.
router.delete('/motorcycle/:id', motorcycle_controller.motorcycle_delete);


// GET request for list of all Motorcycle items.
router.get('/motorcycle', motorcycle_controller.motorcycle_list);

/* GET update Motorcycle page */ 
router.get('/update', motorcycle_controller.motorcycle_update_Page); 

// A little function to check if we have an authorized user and continue on 
// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET update motorcycle page */ 
router.get('/update', secured,    
   motorcycle_controller.motorcycle_update_Page);   
module.exports = router;