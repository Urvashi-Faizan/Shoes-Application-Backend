const express = require('express');
const Categorycontroller = require('../controller/category.controller');
const multer = require('multer');
const router = express.Router();
var storage = multer.diskStorage({
    destination: 'public/images',
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
var upload = multer({ storage: storage });
router.post('/addCat',upload.single('catimage'),Categorycontroller.AddCategory);
router.get("/viewCat", Categorycontroller.getCategory);
router.post('/updateCat',upload.single('catimage'),Categorycontroller.updateCategory);
router.delete('/deleteCat',upload.single('catimage'),Categorycontroller.deleteCategory);




module.exports= router;