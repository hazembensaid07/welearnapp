const express = require("express");
const controllers = require("../controllers/course");

// express router
const router = express.Router();

router.post("/course", controllers.addCourse);

router.get("/course/:id", controllers.getCourseById);
module.exports = router;
