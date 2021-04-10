const express = require("express");
const controllers = require("../controllers/course");

// express router
const router = express.Router();
router.get("/coursesbycategory/:category", controllers.getCoursesByCategory);
module.exports = router;
