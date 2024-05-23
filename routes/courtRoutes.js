import express from 'express';
import {
    createCourt,
    deleteCourt,
    getCourtById,
    getCourts,
    updateCourt
} from './../controllers/CourtController.js';

const router = express.Router();

// Routes
router.route('/').get(getCourts).post(createCourt);
router.route('/:id').get(getCourtById).put(updateCourt).delete(deleteCourt);

export default router;
