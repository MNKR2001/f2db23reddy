var express = require('express');
var router = express.Router();

var motorcycle_controller = require('../controllers/motorcycle');
/* GET home page. */

router.get('/', motorcycle_controller.motorcycle_view_all_Page);
router.get('/detail', motorcycle_controller.motorcycle_view_one_Page);
router.get('/create', motorcycle_controller.motorcycle_create_Page);
router.get('/update', motorcycle_controller.motorcycle_update_Page);
router.get('/delete', motorcycle_controller.motorcycle_delete_Page);


module.exports = router;