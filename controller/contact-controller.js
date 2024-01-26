const Contact = require('../models/contact');
exports.getAllContacts= (req,res,next)=>{
    Contact.find({}).
    then(docs=>{
        console.log("Retrived all the documents");
        res.json(docs);
    });
}

exports.createContact = (req,res,next)=>{
    const contact = new Contact({...req.body});
    contact._id = null;
    Contact.findOne({email: req.body.email})
    .then(result=>{
        if(result==null){
            contact.save()
            .then((result)=>{
                res.json({message: "Record Saved successfully"});
            })
        } else {
            res.json({message: "Contact with email already exist"});
        }
    })
}

exports.updateContact = (req,res,next)=>{
    const contact = new Contact({...req.body});
    Contact.updateOne({_id:req.body._id}, contact)
    .then((result)=>{
        console.log(result);
        if(result.matchedCount == 0)
            res.status(404).json({message:"Contact not found"});
        else{
            if(result.modifiedCount>0){
                    res.status(200).json({message:"Updated successfully"});
            } else{
                res.status(201).json({message:"Nothing to update."});
            }
        }
    })
}

exports.deleteContact = (req,res,next)=>{
    const id = req.params.id;

    Contact.deleteOne({_id: id})
    .then((result)=>{
        if(result.deletedCount==1){
            res.status(200).json({message:"Deleted successfully"});
        } else {
            res.status(404).json({message:"Contact not found"});
        }
    })
}