const express = require("express");
const controllers = require("../controllers/contact");

// express router
const router = express.Router();
/**
 * @description : send message to support
 * @path : http://localhost:8000/api/contact
 * @method : POST
 * @data : req.body
 * @access : public/private
 */

router.post("/contact", controllers.sendMessage);
module.exports = router;
