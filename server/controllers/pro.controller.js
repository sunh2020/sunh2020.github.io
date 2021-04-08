const { response } = require("express");
const { Pro } = require('../models/pro.model');


module.exports.createPro  = (request, response) => {
    console.log(request.body)
    const { name } = request.body;
    const { language } = request.body;
    const { description } = request.body;
    // const { skill1 } = request.body;
    // const { skill2 } = request.body;
    // const { skill3 } = request.body;

    Pro.create({
        name,
        language,
        description,
        // skill1,
        // skill2,
        // skill3
    })
        .then(pro=>response.json(pro))
        .catch(err=>response.status(400).json(err))
}

module.exports.getAllPro = (request, response) => {
    Pro.find({})
        .then(pros => response.json(pros))
        .catch(err=>response.status(400).json(err));
}

module.exports.getPro = (request, response) => {
    Pro.findOne({_id:request.params.id})
        .then(pro => response.json(pro))
        .catch(err=>response.status(400).json(err))
}

module.exports.updatePro = (request, response) => {
    Pro.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true})
        .then(updatedPro => response.json(updatedPro))
        .catch(err=>response.status(400).json(err))
}

module.exports.deletePro = (request, response) => {
    Pro.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err=>response.status(400).json(err))
}