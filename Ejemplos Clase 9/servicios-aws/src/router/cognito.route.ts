import express from 'express';
import cognitoController from '../controllers/cognito.controller'; '../controllers/cognito.controller';

const router = express.Router();
router.post('/CreateUser', cognitoController.CreateUser)
export default router;
