import express from 'express';
import {
  createTrainer,
  deleteTrainer,
  getTrainerById,
  getTrainers,
  updateTrainer,
} from '../controllers/trainerController.js';

const router = express.Router();

// Route to create a new trainer
router.post('/', createTrainer);

// Route to get all trainers
router.get('/', getTrainers);

// Route to get a single trainer by ID
router.get('/:id', getTrainerById);

// Route to update a trainer by ID
router.put('/:id', updateTrainer);

// Route to delete a trainer by ID
router.delete('/:id', deleteTrainer);

export default router;
