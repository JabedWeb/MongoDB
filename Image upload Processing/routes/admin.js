const express = require('express');
const { getAllAdmin, singleAdmin, createAdmin, updateAdmin, deleteAdmin, adminProfile, adminHome } =require('../controllers/adminController');
const { adminLogin } = require('../controllers/authController');
const { authCheck } = require('../middleware/authMiddleware');
const router=express.Router();

//create admin route
router.post('/login',adminLogin);

// access other pages for a admin
router.get('/profile',authCheck ,adminProfile);
router.get('/home',authCheck,adminHome);


router.get('/',getAllAdmin);
router.get('/:id',singleAdmin);
router.post('/',createAdmin);
router.put('/:id',updateAdmin);
router.patch('/:id',updateAdmin);
router.delete('/:id',deleteAdmin);




//export admin router
module.exports=router