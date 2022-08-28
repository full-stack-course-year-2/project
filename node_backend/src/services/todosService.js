const Todos = require("../models/Todos");

// CRUD -> Create, Read, Update, Delete

const create = async (req, res) => {
  try {
    const data = await Todos.create(req.body);
    res.json(data);
  } catch (error) {
    res.status(403).json({ message: "Task could not created!" });
  }
};

const findTodos = async (req, res) => {
  try {
    const data = await Todos.find({ userId: req.query.userId }).exec();
    const responseData = data.map((item) => {
      return {
        id: item._id,
        userId: item.userId,
        task: item.task,
        completed: item.completed,
      };
    });

    res.json(responseData);
  } catch (error) {
    res.status(403).json({ message: "Tasks could not be found!" });
  }
};

const update = async (req, res) => {
  try {
    const data = await Todos.updateOne(
      { _id: req.body.id },
      { $set: req.body.task }
    ).exec();
    res.json(data);
  } catch (error) {
    res.status(403).json({ message: "Task could not be updated!" });
  }
};

const remove = async (req, res) => {
  try {
    const data = await Todos.deleteOne({ _id: req.query.id });
    res.json(data);
  } catch (error) {
    res.status(403).json({ message: "Task could not be deleted!" });
  }
};

module.exports = { create, findTodos, update, remove };
