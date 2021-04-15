const express = require("express");
const controllers = require("../controllers/course");

// express router
const router = express.Router();

router.post("/course", controllers.addCourse);

router.get("/course", controllers.getCoursesByCategory);

router.get("/coursee/:id", controllers.getCourseById);

router.delete("/coursee/:id", controllers.deleteCourse);
router.get("/courses", controllers.getAllCourses);
module.exports = router;
