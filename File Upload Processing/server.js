const dotenv=require('dotenv').config()
const express =require('express');
const app=express();
const colors=require('colors')

const path=require('path')

//for image uploaded
const multer=require('multer')


const storage= multer.diskStorage({
    destination :(req,file,cb)=>{

        cb(null,'./media/user')
    },
    filename: (req,file,cb)=>{

        if(file.fieldname=='photo'){
            let extname=path.extname(file.originalname);

            let fileName=Date.now()+'_'+ Math.round(Math.random()*1000000)+'.'+ extname;
    
            cb(null,fileName)
        }
        else if (file.fieldname=='cv'){
            let date=new Date();
            let currentDate=(date.getMonth+1)+'_'+date.getDate()+'_'+date.getFullYear;
            let fileName=currentDate+'_'+file.originalname;
            cb(null,fileName)
        }

    }
})
const upload=multer({
    storage : storage,
    limits : (1024*1024),
    fileFilter :(req,file,cb)=>{

        if(file.fieldname=='photo'){
            if(file.mimetype=='image/jpeg' || file.mimetype=='image/png' || file.mimetype=='image/png'){
                cb(null,true)
            }
    
            else{
                cb(console.log('file type invalid'))
            }
        }
        else if (file.fieldname=='cv'){
            if(file.mimetype=='application/pdf'){
                cb(null,true)
            }
            else{
                cb(console.log('File name is invalid'))
            }
        }

       
       
    }
})
  
//Environment Variables init
const PORT =process.env.SERVER_PORT;


const cpUpload=upload.fields([
    {
    name : 'photo',
    maxCount : 10
   },
   {
    name : 'cv',
    maxCount : 1
   }
  ]);


//Photo Upload
app.post('/upload',cpUpload,(req,res) =>{
    
    res.send("File send uploaded")
})

//add express express listener with port
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT} port`);
})