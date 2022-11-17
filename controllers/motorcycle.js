var motorcycle = require('../models/motorcycle');
// List of all motorcycle
exports.motorcycle_list = async function (req, res) {
    try {
        result = await motorcycle.find();
        res.render('motorcycle', { title: 'Motorcycles Search Results', results: result });
        // res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific motorcycle.
exports.specific_motorcycle = async function (req, res) {
    // res.send('NOT IMPLEMENTED: motorcycles detail: ' + req.params.id);
    console.log("detail - " + req.params.id)
    try {
        result = await motorcycle.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle Motorcycle create on POST.
exports.motorcycle_create_post = async function (req, res) {
    console.log(req.body)
    let document = new motorcycle();

    /**  
     * We are looking for a body, since POST does not have query parameters.
     * Even though bodies can be in many different formats, we will be picky
     * and require that it be a json object
     
    */
     document._id= req.body._id;
    document.model= req.body.model;
    document.cylindercapacity = req.body.cylindercapacity;
    document.colour = req.body.colour;
    try {
        result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle motorcycle delete form on DELETE.
exports.motorcycle_delete = async function (req, res) {
    // res.send('NOT IMPLEMENTED: motorcycles delete DELETE ' + req.params.id);
        console.log("delete " + req.params.id)
        try {
        result = await motorcycle.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
        } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
        }
       
};
// Handle motorcycle update form on PUT.
exports.motorcycle_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
     try {
     let toUpdate = await motorcycle.findById(req.params.id)
     // Do updates of properties
     if(req.body._id) toUpdate._id = req.body._id;
     if(req.body.model)  toUpdate.model = req.body.model;
     if(req.body.cylindercapacity) toUpdate.cylindercapacity = req.body.cylindercapacity;
     if(req.body.colour) toUpdate.colour = req.body.colour;
     
     let result = await toUpdate.save();
     console.log("Sucess " + result)
     res.send(result)
     } catch (err) {
     res.status(500)
     res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
     }
    
};
exports.motorcycle_view_all_Page = async function (req, res) {
    try {
        let result = await motorcycle.find();
        res.render('motorcycle', { title: 'motorcycles Search Results', results: result });
        // res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};


//Assignment-12

// Handle a show one view with id specified by query

exports.motorcycle_view_one_Page = async function (req, res) {
    console.log("single view for id " + req.query.id)
    try {
      result = await motorcycle.findById(req.query.id)
      res.render('motorcycle-detail',
        { title: 'motorcycle Detail', toShow: result });
    }
    catch (err) {
      res.status(500)
      res.send(`{'error': '${err}'}`);
    }
  };
  
  // Handle building the view for creating a university.
  // No body, no in path parameter, no query.
  // Does not need to be async
  
  exports.motorcycle_create_Page = function (req, res) {
    console.log("create view")
    try {
        res.render('motorcycle-create', { title: 'motorcycle Create' });
    }
    catch (err) {
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
  };
  // Handle building the view for updating a university.
  // query provides the id
  
  exports.motorcycle_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await motorcycle.findById(req.query.id)
        res.render('motorcycle-update', { title: 'motorcycle Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
  };
  // Handle a delete one view with id from query
  
  exports.motorcycle_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await motorcycle.findById(req.query.id)
        res.render('motorcycle-delete', { title: 'motorcycle Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
  };
