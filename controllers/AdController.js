import asyncHandler from "./../middleware/asyncHandler.js";
import Ad from "./../model/adsModel.js";

// @desc    Get all ads
// @route   GET /api/ads
// @access  Public
const getAds = asyncHandler(async (req, res) => {
  const ads = await Ad.find({});
  res.json(ads);
});

// @desc    Get ad by ID
// @route   GET /api/ads/:id
// @access  Public
const getAdById = asyncHandler(async (req, res) => {
  const ad = await Ad.findById(req.params.id);

  if (ad) {
    res.json(ad);
  } else {
    res.status(404);
    throw new Error("Ad not found");
  }
});

// @desc    Create a new ad
// @route   POST /api/ads
// @access  Private/Admin
const createAd = asyncHandler(async (req, res) => {
  const { image } = req.body;

  const ad = await Ad.create({
    image,
  });

  if (ad) {
    res.status(201).json(ad);
  } else {
    res.status(400);
    throw new Error("Invalid ad data");
  }
});

// @desc    Update ad
// @route   PUT /api/ads/:id
// @access  Private/Admin
const updateAd = asyncHandler(async (req, res) => {
  const ad = await Ad.findById(req.params.id);

  if (ad) {
    ad.image = req.body.image || ad.image;

    const updatedAd = await ad.save();

    res.json(updatedAd);
  } else {
    res.status(404);
    throw new Error("Ad not found");
  }
});

// @desc    Delete ad
// @route   DELETE /api/ads/:id
// @access  Private/Admin
const deleteAd = asyncHandler(async (req, res) => {
  const ad = await Ad.findById(req.params.id);

  if (ad) {
    await ad.deleteOne();
    res.json({ message: "Ad removed" });
  } else {
    res.status(404);
    throw new Error("Ad not found");
  }
});

export { createAd, deleteAd, getAdById, getAds, updateAd };
