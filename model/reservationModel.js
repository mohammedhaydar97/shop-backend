import mongoose from 'mongoose';

const reservationSchema = mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    isTrue: {
      type: Boolean,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    court: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
