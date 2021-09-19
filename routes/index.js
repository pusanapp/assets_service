const express = require('express');
const router = express.Router();
const uploadController = require('../controller/upload_controller')

router.get('/', function(req, res, next) {
  res.send({
    message: 'assets service'
  })
});

router.post('/image/upload', uploadController.uploadImages)
router.post('/icon/upload', uploadController.uploadIcons)
router.post('/banner/upload', uploadController.uploadBanner)

module.exports = router;
