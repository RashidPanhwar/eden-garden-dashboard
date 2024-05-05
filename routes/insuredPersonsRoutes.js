const express = require('express');
const router = express.Router();
const {addInsuredPerson, getAllInsuredPersons, getSingleInsuredPerson, deleteInsuredPerson, updateInsuredPerson} = require('../controller/insuredPersonsController');

router.post("/addInsuredPerson", addInsuredPerson);
router.get("/getAllInsuredPersons", getAllInsuredPersons);
router.get("/getSingleInsuredPerson/:personId", getSingleInsuredPerson);
router.delete("/deleteInsuredPerson/:personId", deleteInsuredPerson);
router.put("/updateInsuredPerson/:personId", updateInsuredPerson);

module.exports = router;