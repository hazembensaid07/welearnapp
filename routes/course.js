const express = require("express");
const controllers = require("../controllers/course");

// express router
const router = express.Router();
const { requireSignin } = require("../controllers/auth");
router.post("/course", requireSignin, controllers.addCourse);

router.get("/course", controllers.getCoursesByCategory);

router.get("/coursee/:id", controllers.getCourseById);

router.delete("/coursee/:id", requireSignin, controllers.deleteCourse);
router.get("/courses", controllers.getAllCourses);
module.exports = router;
