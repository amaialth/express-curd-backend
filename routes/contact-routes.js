const express = require('express');

const contactController = require('../controller/contact-controller');

const contactRouter = express.Router();

// READ
contactRouter.get("", contactController.getAllContacts);


// CREATE
contactRouter.post("", contactController.createContact);

// UPDATE
contactRouter.put("", contactController.updateContact);

// DELETE
contactRouter.delete("/:id", contactController.deleteContact);

module.exports = contactRouter;