const Model = require("../models/Model");

module.exports.getData = async (req, res) => {
  const data = await Model.find();
  res.json(data);
};

module.exports.getAbout = async (req, res) => {
  const aboutData = await Model.find({section:{$eq:"about"}});
  res.json(aboutData);
};

module.exports.getHero = async (req, res) => {
  const heroData = await Model.find({section:{$eq:"hero"}});
  res.json(heroData);
};

module.exports.getCert = async (req, res) => {
  const certData = await Model.find({section:{$eq:"certifications"}});
  res.json(certData);
};

module.exports.getCert = async (req, res) => {
  const certData = await Model.find({section:{$eq:"certifications"}});
  res.json(certData);
};

module.exports.getSkills = async (req, res) => {
  const skillsData = await Model.find({section:{$eq:"skills"}});
  res.json(skillsData);
};

module.exports.getProjects = async (req, res) => {
  const projectsData = await Model.find({section:{$eq:"projects"}});
  res.json(projectsData);
};

module.exports.getHeader = async (req, res) => {
  const headerData = await Model.find({section:{$eq:"header"}});
  res.json(headerData);
};


// module.exports.saveAbout = (req, res) => {
//   const { about } = req.body;
//   aboutModel.create({ about })
//     .then((data) => {
//       console.log("Saved Successfully");
//       res.status(201).send(data);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ error: err, msg: "Something went wrong" });
//     });
// };

// module.exports.updateTask = (req, res) => {
//   const { id } = req.params;
//   const { task } = req.body;

//   TaskModel.findByIdAndUpdate(id, { task })
//     .then(() => {
//       res.send("updated successfully");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ error: err, msg: "Something went wrong" });
//     });
// };

// module.exports.deleteTask = (req, res) => {
//   const { id } = req.params;
//   const { task } = req.body;

//   TaskModel.findByIdAndDelete(id)
//     .then(() => {
//       console.log("deleted successfully");
//     })
//     .catch((err) => {
//       console.log(err);
//       res.send({ error: err, msg: "Something went wrong" });
//     });
// };
