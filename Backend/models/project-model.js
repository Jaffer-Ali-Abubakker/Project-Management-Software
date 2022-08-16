const mongoose = require("mongoose");

const projectData = mongoose.Schema({
  projectTitle: { type: String, required: true },
  projectName: { type: String, required: true },
  projectType: { type: String, required: true },
  created: { type: String, required: true },
  deadLine: { type: String, required: true },
  features: { type: String, required: true },
  Developer: { type: String, required: true },
  submitter: { type: String, required: true },
  Status: { type: String},
  comments: {type: String},
  GitRep: {type: String}
});

module.exports = mongoose.model("Created-projects", projectData);
