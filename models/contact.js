const mongoose = require('mongoose');


const contactSchema = mongoose.Schema({
    name: {type:String, require: true},
    email: {type:String, require: true},
    phone: {type:String, require: true}
  });

  const Contact = mongoose.model('Contact', contactSchema);

  module.exports = Contact;