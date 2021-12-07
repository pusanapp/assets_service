const model = require('../models/index')
const Contact = model.admin_contact;

const saveNewContact = async (req,res) => {
    await Contact.create(req.body).then(result => {
        res.send({
            status: true,
            message: 'saved',
            data: result
        })
    }).catch(err=>{
        res.send({
            status: false,
            message: err.message
        })
    })
}

const getAllContacts = async (req, res) => {
    await Contact.findAll({}).then(data=> {
        res.send({
            status: true,
            message: 'get active contacts',
            data: data
        })
    }).catch(err=>{
        res.send({
            status: false,
            message: err.message
        })
    })
}

const getAllActiveContacts = async (req,res) => {
    await Contact.findAll({
        where: {
            status: true
        }
    }).then(data=> {
        res.send({
            status: true,
            message: 'get active contacts',
            data: data
        })
    }).catch(err=>{
        res.send({
            status: false,
            message: err.message
        })
    })
}

const deleteContact = async (req, res) =>{
    await Contact.destroy({
        where: {
            id: req.params.id
        }
    }).then(result=>{
        if(!result){
            res.send({
                status: false,
                message: 'delete failed'
            })
        }else {
            res.send({
                status: true,
                message: 'delete success'
            })
        }
    }).catch(err=>{
        res.send({
            status: false,
            message: err.message
        })
    })
}

const updateContact = async (req, res) => {
    await Contact.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(row=>{
        if(row>0){
            res.send({
                status: true,
                message: 'update success'
            })
        }else {
            res.send({
                status: false,
                message: 'update failed'
            })
        }
    }).catch(err=>{
        res.send({
            status: false,
            message: err.message
        })
    })
}

module.exports = {
    saveNewContact,
    getAllActiveContacts,
    getAllContacts,
    updateContact,
    deleteContact
}