const express = require('express');
const router = express.Router();
const {addInsuredPerson, getAllInsuredPersons} = require('../controller/insuredPersonsController');

router.post("/addInsuredPerson", addInsuredPerson);
router.get("/getAllInsuredPersons", getAllInsuredPersons);

module.exports = router;