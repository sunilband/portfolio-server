const {Router}=require("express")
const router = Router()
const {getData,getAbout,getHero,getCert,getSkills,getProjects,getHeader}=require("../controllers/TaskControllers")
router.get("/",getData)
router.get("/certifications",getCert)
router.get("/about",getAbout)
router.get("/hero",getHero)
router.get("/skills",getSkills)
router.get("/projects",getProjects)
router.get("/header",getHeader)
// router.post("/about",saveAbout)
// router.put("/update/:id",updateTask)
// router.delete("/delete/:id",deleteTask)


module.exports=router