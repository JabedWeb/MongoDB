const express=require('express');
const router=express.Router();

const {getAllStudents,getSingleStudent,createStudent,updateStudent,deleteStudent}=require('../controllers/studentController');

// router.delete('/:id',(req,res)=>{
//     res.send(`Patch Route Done with id : ${req.params.id} `)
// });
// router.get('/',getAllStudents);
// router.get('/:id',getSingleStudent);
// router.post('/',createStudent);
// router.put('/:id',updateStudent);
// router.patch('/:id',updateStudent);
// router.delete('/:id',deleteStudent);

router.route('/').get(getAllStudents).post(createStudent);
router.route('/:id').get(getSingleStudent).put(updateStudent).patch(updateStudent).delete(deleteStudent);


module.exports=router;