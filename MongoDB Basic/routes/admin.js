const express = require('express');
const { getAllAdmin, singleAdmin, createAdmin, updateAdmin, deleteAdmin } =require('../controllers/adminController');
const { adminLogin } = require('../controllers/authController');
const router=express.Router();

//create admin route

router.get('/',getAllAdmin);
router.get('/:id',singleAdmin);
router.post('/',createAdmin);
router.put('/:id',updateAdmin);
router.patch('/:id',updateAdmin);
router.delete('/:id',deleteAdmin);
router.post('/login',adminLogin);



//export admin router
module.exports=router