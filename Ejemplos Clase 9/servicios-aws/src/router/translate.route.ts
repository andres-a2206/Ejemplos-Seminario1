import express from 'express';
import translateController from '../controllers/translate.controller'; "../controllers/translate.controller";

const router = express.Router();
router.post('/TranslateText', translateController.TranslateText)
export default router;
