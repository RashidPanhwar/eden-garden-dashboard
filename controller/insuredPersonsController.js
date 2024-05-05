const InsuredPersons = require('../model/insuredPersonsModel');
const catchAsyncError = require('../midleware/catchAsynError');

exports.addInsuredPerson = catchAsyncError( async(req, res) => {
    const addPerson = await InsuredPersons.create(req.body);
    res.status(201).json({success: true, addPerson})
} );

exports.getAllInsuredPersons = catchAsyncError( async(req, res) => {
    const getPersons = await InsuredPersons.find();
    res.status(202).json({success: true, getPersons});
})

exports.getSingleInsuredPerson = catchAsyncError(async(req, res) => {
    const {personId} = req.params;
    const getSinglePerson = await InsuredPersons.findOne({insuredID: personId});
    res.status(202).json({success: true, getSinglePerson});
});

exports.deleteInsuredPerson = catchAsyncError(async(req, res) => {
    const {personId} = req.params;
    const deletedPerson = await InsuredPersons.findByIdAndDelete({_id: personId});
    res.status(203).json({success: true, deletedPerson});
});

exports.updateInsuredPerson = catchAsyncError(async(req, res) => {
    const {
        personID, 
        healthCode, 
        documentNo, 
        issueDate, 
        name, 
        planCode, 
        dateOfBirth, 
        age, 
        gender, 
        relation, 
        cnicNumber, 
        headCNIC } = req.body;

        const {personId} = req.params;
        const insuredPerson = await InsuredPersons.findById(personId);
        if(!insuredPerson){
            console.log("User Not Found");
            res.status(404).json({success: false, message: "User Not Found"});
        }
        await InsuredPersons.findByIdAndUpdate(personId, req.body);
        res.status(201).json({success: true, insuredPerson});

})