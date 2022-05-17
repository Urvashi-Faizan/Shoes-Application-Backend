const express= require('express');
const AdminController = require('../controller/admin.controller');
const multer = require('multer');
const router = express.Router();
var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
var upload = multer({ storage: storage });
router.post('/signup',upload.single('adminimage') ,  AdminController.signup);
router.post('/signin',AdminController.signin);
router.post('/updateadmin',upload.single('adminimage'),AdminController.updateAccount);
router.delete('/deleteadmin',AdminController.deleteAccount);

module.exports=router