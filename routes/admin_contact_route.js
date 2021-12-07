const express = require('express');
const router = express.Router();
const adminContactController = require('../controller/admin_contact_controller')

router.post('/save/new', adminContactController.saveNewContact)
router.put('/update/:id', adminContactController.updateContact)
router.delete('/delete/:id', adminContactController.deleteContact)
router.get('/all/active', adminContactController.getAllActiveContacts)
router.get('/all', adminContactController.getAllContacts)


module.exports = router;
