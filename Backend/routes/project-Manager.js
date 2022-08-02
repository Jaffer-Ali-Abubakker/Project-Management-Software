const express = require("express");
const router = express.Router();
const projectData = require("../models/project-model");

router.post("/create-project", async (req, res, next) => {
  console.log(req.body);
  const project = new projectData(req.body);
  await project.save().then((createProject) => {
    res.status(201).json({
      message: "post successfully",
      Project: {
        ...createProject,
        id: createProject._id,
      },
    });
  });
});

router.get("/home", (req, res, next) => {
  project.find().then((documents) => {
    console.log(documents);
    res.status(200).json({
      message: "project featch Successfully",
      home: documents,
    });
  });
});

module.exports = router;
