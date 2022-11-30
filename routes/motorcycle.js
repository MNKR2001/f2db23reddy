var express = require('express');
var router = express.Router();

var motorcycle_controller = require('../controllers/motorcycle');
/* GET home page. */
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
router.get('/update', secured,motorcycle_controller.motorcycle_update_Page); 
router.get('/', motorcycle_controller.motorcycle_view_all_Page);
router.get('/detail',secured, motorcycle_controller.motorcycle_view_one_Page);
router.get('/create',secured, motorcycle_controller.motorcycle_create_Page);
router.get('/update',secured, motorcycle_controller.motorcycle_update_Page);
router.get('/delete',secured, motorcycle_controller.motorcycle_delete_Page);


module.exports = router;