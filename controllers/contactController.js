const asyncHandler = require('express-async-handler');
//@desc Get all contants
//@route GET/api/contacts
//@access Public
const getContacts = asyncHandler(async (req, res)  => {
    res.status(200).json({message:"get all contacts"});
});
//@desc  get contact
//@route GET/api/contacts/:id
//@access Public
const getContact = asyncHandler(async (req,res)=>{
    res.status(200).send(`get contact for : ${req.params.id}`);
});
//@desc  create contact
//@route POST/api/contacts
//@access Public
const createContact = asyncHandler(async (req,res)=>{
    console.log("request body is:",req.body);
    const { name, email, phone} = req.body;
    if(!name  || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({message:"New contact created"});

});
//@desc  update contact
//@route PUT/api/contacts/:id
//@access Public
const updateContact = asyncHandler(async(req,res)=>{
    res.status(200).send(`updated contact for ${req.params.id}`);
});
//@desc delect contact
//@route DELECT api/contacts/:id
//@access Public
const delectContact = asyncHandler(async (req,res)=>{
    res.status(200).send(`delete contact for ${req.params.id}`);
});

module.exports = {getContacts,createContact,getContact,updateContact,delectContact};