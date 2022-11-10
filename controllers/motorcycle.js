var motorcycle = require('../models/motorcycle');
// List of all motorcycles
exports.motorcycle_list = function(req, res) {
    res.send('NOT IMPLEMENTED: motorcycle list');
};
// for a specific motorcycle.
exports.motorcycle_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: motorcycle detail: ' + req.params.id);
};
// Handle motorcycle create on POST.
exports.motorcycle_create_post = async function(req, res) {
    console.log(req.body)
    let document = new motorcycle();
    document.model = req.body.model;
    document.cylindercapacity = req.body.cylindercapacity;
    document.colour= req.body.colour;
     try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};

// Handle motorcycle delete form on DELETE.
exports.motorcycle_delete = function(req, res) {
    res.send('NOT IMPLEMENTED: motorcycle delete DELETE ' + req.params.id);
};

// Handle motorcycle update form on PUT.

exports.motorcycle_update_put = function(req, res) {
    res.send('NOT IMPLEMENTED: motorcycle update PUT' + req.params.id);
};

exports.motorcycle_list = async function(req, res) {
    try{
        themotorcycles = await motorcycle.find();
        res.send(themotorcycles);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};

// VIEWS
// Handle a show all view

exports.motorcycle_view_all_Page = async function(req, res) {
    try{
        themotorcycles = await motorcycle.find();
        res.render('motorcycle', { title: 'motorcycle Search Results', results: themotorcycles });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }  
};