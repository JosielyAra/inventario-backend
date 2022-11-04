import Client from "../models/Client.js";

export const getClient = async (req, res) => {
  try {
    const { id } = req.body;
    const client = await Client.find({ userId: id });
    res.send(client);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createClient = async (req, res) => {
  try {
    const { userId, name, ci, phone } = req.body;

    const newClient = new Client({ name, ci, phone, userId });
     await newClient.save();
    return res.json(newClient);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateClient = async (req, res) => {
  try {
    console.log(req.params, req.body)
    const client = await Client.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    return res.json(client);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteClient = async (req, res) => {
  try {
     const client = await Client.findByIdAndDelete(req.params.id);
    if (!client) {
      return res.sendStatus(404);
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOneClient = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.sendStatus(404);
    }
    return res.json(client);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
