const express = require("express");
const controllers = require("../controllers/getCoursesByCategory");

// express router
const router = express.Router();
router.get("/c/:id", controllers.getCoursesByCategory);
module.exports = router;
