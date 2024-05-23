import express from "express";
import {
    createChamp,
    deleteChamp,
    getChampById,
    getChamps,
    updateChamp,
} from "./../controllers/champController.js";

const router = express.Router();

router.route("/").get(getChamps).post(createChamp);
router.route("/:id").get(getChampById).put(updateChamp).delete(deleteChamp);

export default router;
