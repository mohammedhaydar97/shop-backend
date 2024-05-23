import asyncHandler from "./../middleware/asyncHandler.js";
import Champ from "./../model/champModel.js";

// @desc    Get all champs
// @route   GET /api/champs
// @access  Public
const getChamps = asyncHandler(async (req, res) => {
  const champs = await Champ.find({});
  res.json(champs);
});

// @desc    Get champ by ID
// @route   GET /api/champs/:id
// @access  Public
const getChampById = asyncHandler(async (req, res) => {
  const champ = await Champ.findById(req.params.id);

  if (champ) {
    res.json(champ);
  } else {
    res.status(404);
    throw new Error("Champ not found");
  }
});

// @desc    Create a new champ
// @route   POST /api/champs
// @access  Private/Admin
const createChamp = asyncHandler(async (req, res) => {
  const { image, desc, phone } = req.body;

  const champ = await Champ.create({
    image,
    desc,
    phone,
  });

  if (champ) {
    res.status(201).json(champ);
  } else {
    res.status(400);
    throw new Error("Invalid champ data");
  }
});

// @desc    Update champ
// @route   PUT /api/champs/:id
// @access  Private/Admin
const updateChamp = asyncHandler(async (req, res) => {
  const champ = await Champ.findById(req.params.id);

  if (champ) {
    champ.image = req.body.image || champ.image;
    champ.desc = req.body.desc || champ.desc;
    champ.phone = req.body.phone || champ.phone;

    const updatedChamp = await champ.save();

    res.json(updatedChamp);
  } else {
    res.status(404);
    throw new Error("Champ not found");
  }
});

// @desc    Delete champ
// @route   DELETE /api/champs/:id
// @access  Private/Admin
const deleteChamp = asyncHandler(async (req, res) => {
  const champ = await Champ.findById(req.params.id);

  if (champ) {
    await champ.deleteOne();
    res.json({ message: "Champ removed" });
  } else {
    res.status(404);
    throw new Error("Champ not found");
  }
});

export { createChamp, deleteChamp, getChampById, getChamps, updateChamp };
