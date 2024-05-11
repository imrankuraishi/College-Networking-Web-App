import User from "../models/User.js";
import Club from "../models/Club.js";
import Query from "../models/Query.js";

/* READ */

export const getAllUsers = async (req, res) => {
  try {
    const user = await User.find({ userType: { $ne: 0 } });
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id, body } = req.params;
    const user = await User.findByIdAndUpdate(id, body);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//
export const createClub = async (req, res) => {
  console.log("club");

  try {
    const { userId, name, description } = req.body;

    const newClub = new Club({
      userId,
      name,
      description,
    });

    await newClub.save();

    const clubs = await Club.find();
    res.status(201).json(clubs);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getAllClubs = async (req, res) => {
  try {
    const clubs = await Club.find();
    res.status(200).json(clubs);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getClub = async (req, res) => {
  try {
    const { id } = req.params;
    const club = await Club.findById(id);
    res.status(200).json(club);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateClub = async (req, res) => {
  try {
    const { id, name, description } = req.params;
    const club = await Club.findByIdAndUpdate(id, {
      $set: { name: name, description: description },
    });
    res.status(200).json(club);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const joinclub = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, picturePath, email, firstName } = req.body;

    const club = await Club.findById(id);
    club.participants.push({ userId, picturePath, email, firstName })
    club.save();

    res.status(200).json(club);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//
export const addQuery = async (req, res) => {
  try {
    const { userId, type, status, description } = req.body;

    const newQuery = new Query({
      userId,
      type,
      status,
      description,
    });

    await newQuery.save();

    const query = await Query.find();
    res.status(201).json(query);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getAllQuery = async (req, res) => {
  try {
    const query = await Query.find();
    res.status(200).json(query);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getQuery = async (req, res) => {
  try {
    const { id } = req.params;
    const query = await Query.findById(id);
    res.status(200).json(query);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const updateQuery = async (req, res) => {
  try {
    const { id } = req.params;
    const { feedback, status, email } = req.body;

    const query = await Query.findById(id);

    query.comments.push({ email, feedback });

    query.save();

    res.status(200).json(query);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteQuery = async (req, res) => {
  try {
    const { id } = req.params;

    const query = await Query.findByIdAndDelete(id);

    res.status(200).json("Query Deleted");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
