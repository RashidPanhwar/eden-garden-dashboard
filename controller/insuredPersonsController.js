const InsuredPersons = require('../model/insuredPersonsModel');
const catchAsyncError = require('../midleware/catchAsynError');

exports.addInsuredPerson = catchAsyncError( async(req, res) => {
    const addPerson = await InsuredPersons.create(req.body);
    res.status(201).json({success: true, addPerson})
} )

exports.getAllInsuredPersons = catchAsyncError( async(req, res) => {
    const getPersons = await InsuredPersons.find();
    res.status(202).json({success: true, getPersons});
})