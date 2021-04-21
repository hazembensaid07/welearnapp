const express = require("express");
const controllers = require("../controllers/comments");

// express router
const router = express.Router();
const { requireSignin } = require("../controllers/auth");

/**
 * @description : comment a blog post
 * @path : http://localhost:8000/api/comments
 * @method : POST
 * @data : req.body
 * @access : public/private
 */

router.post("/comments", requireSignin, controllers.sendComment);

/**
 * @description : display all comments
 * @path : http://localhost:8000/api/comments
 * @method : GET
 * @data :
 * @access : public/private
 */

router.get("/comments", controllers.getAllComments);
module.exports = router;
