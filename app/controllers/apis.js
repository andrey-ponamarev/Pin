import express from 'express';
import multer from 'multer';

const storage = multer.diskStorage({
    destination: './uploads/',
    filename(req, file, cb) {
        let ext;
        switch (file.mimetype) {
            case 'image/jpeg':
                ext = '.jpeg';
                break;
            case 'image/png':
                ext = '.png';
                break;
            case 'image/gif':
                ext = '.gif';
                break;
            default:
                ext = '';
        }

        cb(null, file.originalname.slice(0, 4) + Date.now() + ext);
    }
});
const upload = multer({storage: storage});
const router = express.Router();

router.post('*', upload.single('file'), (req, res) => {
    console.log('post', req.file);

    if (req.file && req.file.originalname) {
        console.log(`Received file ${req.file.originalname}`);
    }

    res.send({responseText: req.file.path});
});

export default router;
