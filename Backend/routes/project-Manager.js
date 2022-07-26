const express = require("express");
const router = express.Router();
const projectData = require("../models/project-model");
const userData = require("../models/user");

router.post("/create-project", async (req, res, next) => {
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

router.get("/home", async (req, res, next) => {
  const AllProject = projectData.find().then((documents) => {
    res.status(200).json(documents);
  });
});

router.get("/alluser", async (req, res, next) => {
  const Alluser = userData.find().then((user) => {
    res.status(200).json(user);
  });
});
router.put("/updateProject/:id", async (req, res) => {
  let proId = req.params.id;
  let data = req.body;
  await projectData
    .updateOne(
      { _id: proId },
      {
        $set: {
          projectTitle: data.projectTitle,
          projectName: data.projectName,
          projectType: data.projectType,
          created: data.created,
          deadLine: data.deadLine,
          features: data.features,
          Developer: data.Developer,
          submitter: data.submitter,
        },
      }
    )
    .then((result) => {
      res.status(200).json(result);
    });
});
router.get("/getDevelopers", (req,res)=>{
  const AllDevelopers = userData.find({position:"Developer"})
  .then((result)=>{
    res.status(200).json(result);
  })

})
router.get("/getSubmitters", (req,res)=>{
  const AllSubmitters = userData.find({position:"Submitter"})
  .then((result)=>{
    res.status(200).json(result);
  })
})


module.exports = router;
