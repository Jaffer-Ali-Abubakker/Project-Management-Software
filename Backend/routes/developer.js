const express = require("express");
const router = express.Router();
const ProjectData = require('../models/project-model')


router.post("/updateProjectStatus", async(req, res, next)=>{
  let name = req.body.projectTitle
  ProjectData.updateOne({projectTitle:name},{
    $set:{
        Status: req.body.ProjectStatus
    }
  }).then((result)=>{
    console.log(result);
    res.status(200).json(result)
  })
})


module.exports = router;