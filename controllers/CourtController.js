import asyncHandler from "../middleware/asyncHandler.js";
import Court from "./../model/courtModel.js";

// @desc    Get all courts
// @route   GET /api/courts
// @access  Public
const getCourts = asyncHandler(async (req, res) => {
  const courts = await Court.find({});
  res.json(courts);
});

// @desc    Get court by ID
// @route   GET /api/courts/:id
// @access  Public
const getCourtById = asyncHandler(async (req, res) => {
  const court = await Court.findById(req.params.id);

  if (court) {
    res.json(court);
  } else {
    res.status(404);
    throw new Error("Court not found");
  }
});

// @desc    Create a new court
// @route   POST /api/courts
// @access  Private/Admin
const createCourt = asyncHandler(async (req, res) => {
  const { name, location, surface, hourlyRate } = req.body;

  const court = await Court.create({
    name,
    location,
    surface,
    hourlyRate,
  });

  if (court) {
    res.status(201).json(court);
  } else {
    res.status(400);
    throw new Error("Invalid court data");
  }
});

// @desc    Update court
// @route   PUT /api/courts/:id
// @access  Private/Admin
const updateCourt = asyncHandler(async (req, res) => {
  const court = await Court.findById(req.params.id);

  if (court) {
    court.name = req.body.name || court.name;
    court.location = req.body.location || court.location;
    court.surface = req.body.surface || court.surface;
    court.hourlyRate = req.body.hourlyRate || court.hourlyRate;

    const updatedCourt = await court.save();

    res.json(updatedCourt);
  } else {
    res.status(404);
    throw new Error("Court not found");
  }
});

// @desc    Delete court
// @route   DELETE /api/courts/:id
// @access  Private/Admin
const deleteCourt = asyncHandler(async (req, res) => {
  const court = await Court.findById(req.params.id);

  if (court) {
    await court.deleteOne();
    res.json({ message: "Court removed" });
  } else {
    res.status(404);
    throw new Error("Court not found");
  }
});

export { createCourt, deleteCourt, getCourtById, getCourts, updateCourt };

