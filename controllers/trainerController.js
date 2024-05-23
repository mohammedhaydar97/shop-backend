import Trainer from "./../model/trainerModel.js";

// Create a new trainer
export const createTrainer = async (req, res) => {
  const { name, location, hourlyRate } = req.body;

  if (!name || !location || !hourlyRate) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const trainer = new Trainer({ name, location, hourlyRate });
    const createdTrainer = await trainer.save();
    res.status(201).json(createdTrainer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all trainers
export const getTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find({});
    res.json(trainers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single trainer by ID
export const getTrainerById = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);

    if (trainer) {
      res.json(trainer);
    } else {
      res.status(404).json({ message: 'Trainer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a trainer by ID
export const updateTrainer = async (req, res) => {
  const { name, location, hourlyRate } = req.body;

  if (!name && !location && !hourlyRate) {
    return res.status(400).json({ message: 'At least one field is required to update' });
  }

  try {
    const updatedTrainer = await Trainer.findByIdAndUpdate(
      req.params.id,
      { name, location, hourlyRate },
      { new: true, runValidators: true, omitUndefined: true }
    );

    if (updatedTrainer) {
      res.json(updatedTrainer);
    } else {
      res.status(404).json({ message: 'Trainer not found' });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a trainer by ID
export const deleteTrainer = async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);

    if (trainer) {
      await trainer.deleteOne();
      res.json({ message: 'Trainer removed' });
    } else {
      res.status(404).json({ message: 'Trainer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
