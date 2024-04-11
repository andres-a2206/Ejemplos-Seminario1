import express from 'express';
import RekognitionRouter from './rekognition.route';
import TranslateRouter from './translate.route';
import CognitoRouter from './cognito.route';

const router = express.Router();
router.use('/rekognition', RekognitionRouter);
router.use('/translate', TranslateRouter);
router.use('/cognito', CognitoRouter);
export default router;  