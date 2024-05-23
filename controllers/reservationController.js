// Import the Reservation model
import asyncHandler from "./../middleware/asyncHandler.js";
import Reservation from "./../model/reservationModel.js";

// Get all reservations
const getReservations = asyncHandler(async (req, res) => {
  const reservations = await Reservation.find({});
  res.json(reservations);
});

// Get reservation by ID
const getReservationById = asyncHandler(async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);

  if (reservation) {
    res.json(reservation);
  } else {
    res.status(404);
    throw new Error("Reservation not found");
  }
});

// Create a new reservation
const createReservation = asyncHandler(async (req, res) => {
  const { id, isTrue, date, time, court } = req.body;

  const reservation = await Reservation.create({
    id,
    isTrue,
    date,
    time,
    court,
  });

  if (reservation) {
    res.status(201).json(reservation);
  } else {
    res.status(400);
    throw new Error("Invalid reservation data");
  }
});

// Update reservation
const updateReservation = asyncHandler(async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);

  if (reservation) {
    reservation.id = req.body.id || reservation.id;
    reservation.isTrue = req.body.isTrue || reservation.isTrue;
    reservation.date = req.body.date || reservation.date;
    reservation.time = req.body.time || reservation.time;
    reservation.court = req.body.court || reservation.court;

    const updatedReservation = await reservation.save();

    res.json(updatedReservation);
  } else {
    res.status(404);
    throw new Error("Reservation not found");
  }
});

// Delete reservation
const deleteReservation = asyncHandler(async (req, res) => {
  const reservation = await Reservation.findById(req.params.id);

  if (reservation) {
    await reservation.deleteOne();
    res.json({ message: "Reservation removed" });
  } else {
    res.status(404);
    throw new Error("Reservation not found");
  }
});



const getReservationByUsersId = asyncHandler(async (req, res) => {
    const reservation = await Reservation.find({ id: req.params.id });
  
    if (reservation) {
      res.json(reservation);
    } else {
      res.status(404);
      throw new Error("Reservation not found");
    }
  });

  const updateReservationIsFalse = asyncHandler(async (req, res) => {
    const reservation = await Reservation.findById(req.params.id);
  
    if (reservation) {
      reservation.isTrue = true;
  
      const updatedReservation = await reservation.save();
  
      res.json(updatedReservation);
    } else {
      res.status(404);
      throw new Error("Reservation not found");
    }
  });
  
export {
  createReservation,
  deleteReservation,
  getReservationById,
  getReservationByUsersId, getReservations,
  updateReservation, updateReservationIsFalse
};

