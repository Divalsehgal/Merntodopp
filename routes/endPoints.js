const express = require("express");
const routes = express.Router();
const todoModel = require("../model/todoModel");
routes.get("/", (req, res, next) => {
  todoModel
    .find({})
    .then((todos) => {
      res.status(200).json(todos);
    })
    .catch((err) => {
      res.status(400).send("erro no data");
    });
});
routes.post("/add", (req, res, next) => {
  todoModel
    .create(req.body)
    .then((todo) => {
      res.status(200).json({ todo: "todo added successfully" });
    })
    .catch((err) => {
      res.status(400).send("adding new todo failed");
    });
});

routes.get("/:id",(req, res) => {
  console.log("req.params.id",req.params.id);
  let id = req.params.id;
  todoModel.findById({_id:id}).then((todo) => {
    res.json(todo);
  });
});
routes.put("/update/:id",(req, res) => {
    let id=req.params.id
  todoModel.findByIdAndUpdate({_id:id},req.body )
    .then((todo) => {
      res.status(200).json("Todo updated!");
    })
    .catch((err) => {
      res.status(400).send("Update not possible");
    });
});

module.exports = routes;
