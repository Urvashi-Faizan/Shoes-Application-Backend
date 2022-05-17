const express = require('express')
const multer = require('multer')
const UserController =require('../controller/user.controller')
const router = express.Router();
const storage = multer.diskStorage({
    destination: "public/images",
    filename: (request, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname);
    }
});
const upload = multer({ storage: storage });
router.post('/signup',upload.single('image'),UserController.Signup);
router.post('/signin',UserController.Signin);
router.post('/updateaccount',upload.single('image'),UserController.UpdateACC);
router.post('/deleteaccount',UserController.DeleteAccount);
module.exports = router;