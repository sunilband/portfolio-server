const Model = require("../models/Model");

module.exports.getData = async (req, res) => {
  console.log("get / request was made")
  try{
    const data = await Model.find()
    res.json(data);
  }
  catch(err){
    res.send(err)
    console.log(err)
  } 
};

module.exports.getAbout = async (req, res) => {
  console.log("get /about request was made")
  try{
    const aboutData = await Model.find({section:{$eq:"about"}});
    res.json(aboutData);
  }
  catch(err){
    res.send(err)
    console.log(err)
  } 
  
};

module.exports.getHero = async (req, res) => {
  console.log("get /hero request was made")
  try{
    const heroData = await Model.find({section:{$eq:"hero"}});
    res.json(heroData);
  }
  catch(err){
    res.send(err)
    console.log(err)
  } 
  
};

module.exports.getCert = async (req, res) => {
  console.log("get /certifications request was made")
  try{
    const certData = await Model.find({section:{$eq:"certifications"}});
    res.json(certData);
  }
  catch(err){
    res.send(err)
    console.log(err)
  } 
  
};

module.exports.getSkills = async (req, res) => {
  console.log("get /skills request was made")
  try{
    const skillsData = await Model.find({section:{$eq:"skills"}});
    res.json(skillsData);
  }
  catch(err){
    res.send(err)
    console.log(err)
  } 
 
};

module.exports.getProjects = async (req, res) => {
  console.log("get /projects request was made")
  try{
    const projectsData = await Model.find({section:{$eq:"projects"}});
    res.json(projectsData);
  }
  catch(err){
    res.send(err)
    console.log(err)
  } 
  
};

module.exports.getHeader = async (req, res) => {
  console.log("get /header request was made")
  try{
    const headerData = await Model.find({section:{$eq:"header"}});
    res.json(headerData);
  }
  catch(err){
    res.send(err)
    console.log(err)
  } 
  
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
