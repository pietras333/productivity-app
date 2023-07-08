import taskModel from "../models/tasksModel.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const taskManager = {
  connect() {
    return mongoose.connect(process.env.MONGO_URI);
  },
  async find(req, res, next) {
    await taskManager.connect();
    const token = req.headers.authorization.split(" ")[1];
    const list = req.body.list;
    const id = jwt.decode(token).email;
    const tasks = await taskModel.find({ id: id, list: list });
    if (tasks === undefined) {
      return res.status(404).send();
    }
    req.data = tasks;
    return next();
  },

  async subtasks(req, res, next) {
    const core = taskManager.handleCoreData(req);
    await taskManager.connect();
    const exists = await taskModel.findOne({
      id: core.id,
      category: core.category,
      subtasks: { $elemMatch: { name: core.subtasks.new.name } },
    });
    switch (core.action) {
      case "Addition":
        if (exists !== null) {
          return res.status(400).send("Subtask already exists");
        }
        const response = await taskManager.subtaskAddition(core);
        return res.status(200).send(response);
      case "Deletion":
        await taskManager.subtaskDeletion(core);
        return next();
      case "Edition":
        if (exists !== null) {
          return res.status(400).send("Subtask already exists");
        }
        await taskManager.subtaskEdition(core);
        return next();
    }
  },

  handleCoreData(req) {
    const token = req.headers.authorization.split(" ")[1];
    const action = req.headers.action;
    const id = jwt.decode(token).email;
    const subtasks = req.body.subtasks;
    const category = req.body.category;
    const list = req.body.list;
    return {
      action: action,
      token: token,
      id: id,
      subtasks: subtasks,
      category: category,
      list: list,
    };
  },
  async subtaskAddition(data) {
    await taskManager.connect();

    await taskModel.updateOne(
      { id: data.id, category: data.category },
      {
        $push: {
          subtasks: {
            name: data.subtasks.new.name,
            date: data.subtasks.new.date,
            completed: data.subtasks.new.completed,
          },
        },
      }
    );
    return await taskModel.find({ id: data.id, category: data.category });
  },
  async subtaskDeletion(data) {
    await taskManager.connect();
    await taskModel.updateOne(
      {
        id: data.id,
        category: data.category,
      },
      { $pull: { subtasks: { name: data.subtasks.name } } }
    );
  },
  async subtaskEdition(data) {
    await taskManager.connect();
    await taskModel.updateOne(
      {
        id: data.id,
        category: data.category,
        "subtasks.name": data.subtasks.name,
      },
      {
        $set: {
          "subtasks.$.name": data.subtasks.new.name,
          "subtasks.$.date": data.subtasks.new.date,
          "subtasks.$.completed": data.subtasks.new.completed,
        },
      }
    );
  },
};
export default taskManager;
