import express from 'express';
import rekognitionController from '../controllers/rekognition.controller';
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();
router.post('/CompareFaces', upload.fields([{ name: 'SourceImage', maxCount: 1 }, { name: 'TargetImage', maxCount: 1 }]), rekognitionController.CompareFaces)
export default router;
