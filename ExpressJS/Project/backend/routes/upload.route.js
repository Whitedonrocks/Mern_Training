import express from 'express';
import multer from 'multer';
import path from 'path';
import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY,
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
});

const router= express.Router();

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        const fileName=Date.now()+'_'+file.originalname;
        cb(null,fileName)
    },
});

const fileFilter = (req, file, cb) => {
    const allowedExtensions = /jpeg|jpg|png|webp/;
    const extension = path.extname(file.originalname)
        .toLowerCase()
        .replace('.', '');

    const mimeType = file.mimetype.startsWith('image/');

    if (mimeType || allowedExtensions.test(extension)) {
        cb(null, true);
    } else {
        cb(new Error('Only image files are allowed!'), false);
    }
};

const upload = multer({
    storage,
    fileFilter,
    limits:{fileSize:5*1024*1024}
});

router.post('/',upload.single('image'),async (req,res)=>{
    const result = await cloudinary.uploader.upload(req.file.path,{
        folder:"himalayashop"
    });
    res.send({message:"Image Uploaded!",image:result.secure_url});
});

export default router;