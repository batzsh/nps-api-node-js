import { Router } from 'express';
import { UsersController } from './controllers/UsersController';
import { SurveysController } from './controllers/SurveysController';

const router = Router();

const usersController = new UsersController();
const surveysController = new SurveysController();

// Users routes

// Create users
router.post('/users', usersController.create);

// Surveys routes

// Create surveys
router.post('/surveys', surveysController.create);
// Show surveys
router.get('/surveys', surveysController.show);

export { router };
