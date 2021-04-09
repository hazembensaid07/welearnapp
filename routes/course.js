const express = require("express");
const controllers = require("../controllers/course");
const Course = require("../models/course");

// express router
const router = express.Router();

/**
 * @description :post course
 * @path : http://localhost:8000/api/course
 * @method : POST
 * @data : req.body
 * @access : public/private
 */

router.post("/course", controllers.addCourse);
module.exports = router;
