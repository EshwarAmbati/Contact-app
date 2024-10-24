const express = require('express');
const router = express.Router();
const {getContacts, createContact, getContact, updateContact, delectContact} = require('../controllers/contactController');

// router.get('/',function(req,res){
//     res.status(200);
//     res.send("Get all contacts");
// });
router.route("/").get(getContacts);
router.route('/:id').get(getContact);
router.route('/').post(createContact);
router.route('/:id').put(updateContact);
router.route('/:id').delete(delectContact);

module.exports = router;
