const express = require("express");
const controllers = require("../controllers/coursenroll");
const { requireSignin } = require("../controllers/auth");
// express router
const router = express.Router();

// require coursenroll model
const Coursenroll = require("../models/coursenroll");

router.post("/coursenroll", requireSignin, controllers.addCourse);

router.get("/coursenroll", requireSignin, controllers.getCourses);
module.exports = router;
