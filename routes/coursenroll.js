const express = require("express");
const controllers = require("../controllers/course");

// express router
const router = express.Router();

router.post("/coursenroll", controllers.addCourse);

router.get("/coursenroll", controllers.getCourses);
module.exports = router;
