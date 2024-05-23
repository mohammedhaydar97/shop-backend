import express from 'express';
import {
    createReservation,
    deleteReservation,
    getReservationById,
    getReservationByUsersId,
    getReservations,
    updateReservation,
    updateReservationIsFalse
} from './../controllers/reservationController.js';

const router = express.Router();

// Route to create a new trainer
router.post('/', createReservation);

// Route to get all trainers
router.get('/', getReservations);

// Route to get a single trainer by ID
router.get('/:id', getReservationById);

router.get('/getReservationByUsersId/:id', getReservationByUsersId);


// Route to update a trainer by ID
router.put('/:id', updateReservation);
router.put('/updatereservation/:id', updateReservationIsFalse);


// Route to delete a trainer by ID
router.delete('/:id', deleteReservation);

export default router;
