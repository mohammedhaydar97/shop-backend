import express from "express";
import {
    createAd,
    deleteAd,
    getAdById,
    getAds,
    updateAd,
} from "../controllers/AdController.js";

const router = express.Router();

router.route("/").get(getAds).post(createAd);
router.route("/:id").get(getAdById).put(updateAd).delete(deleteAd);

export default router;
