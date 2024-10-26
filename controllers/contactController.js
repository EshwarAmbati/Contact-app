const asyncHandler = require('express-async-handler');
const Contact = require("../models/contactModel");
//@desc Get all contants
//@route GET/api/contacts
//@access Private
const getContacts = asyncHandler(async (req, res)  => {
    const contacts = await Contact.find({user_id: req.user.id});;
    res.status(200).json({message:"get all contacts"});
});
//@desc  get contact
//@route GET/api/contacts/:id
//@access Private
const getContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not Found");
    }
    res.status(200).json(contact);
});
//@desc  create contact
//@route POST/api/contacts
//@access Private
const createContact = asyncHandler(async (req,res)=>{
    console.log("request body is:",req.body);
    const { name, email, phone} = req.body;
    if(!name  || !email || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id:req.user.id,
    })
    res.status(201).json(contact);

});
//@desc  update contact
//@route PUT/api/contacts/:id
//@access Private
const updateContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not Found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user  not authorized to update other contacts");
    }
    const updateContact = await Contact.findById(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updateContact);
});
//@desc delect contact
//@route DELECT api/contacts/:id
//@access Private
const delectContact = asyncHandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(400);
        throw new Error("Contact not Found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(403);
        throw new Error("user  not authorized to update other contacts");
    }
    await Contact.deleteOne({_id: req.params.id});
    res.status(200).json(contact);
});

module.exports = {getContacts,createContact,getContact,updateContact,delectContact};