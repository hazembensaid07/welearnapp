const express = require("express");
const controllers = require("../controllers/blog");

// express router
const router = express.Router();

// require article model
const Contact = require("../models/article");

/**
 * @description : add an article
 * @path : http://localhost:8000/api/blog
 * @method : POST
 * @data : req.body
 * @access : public/private
 */

router.post("/blog", controllers.addArticle);

/**
 * @description : Get all  articles
 * @path : http://localhost:8000/api/blog
 * @method : GET
 * @data : no data
 * @access : public/private
 */

router.get("/blog", controllers.getAllArticles);

/**
 * @description : Get article by id
 * @path : http://localhost:8000/api/blog/:id
 * @method : GET
 * @data : no data
 * @access : public/private
 */

router.get("/blog:id", controllers.getArticleByID);

/**
 * @description : Delete an article
 * @path : http://localhost:8000/api/blog/:id
 * @method : DELETE
 * @data : no data
 * @access : public/private
 */

router.delete("/blog:id", controllers.deleteArticle);

/**
 * @description : Update an article by id
 * @path : http://localhost:8000/api/blog/:id
 * @method : PUT
 * @data : no data
 * @access : public/private
 */

router.put("/:id", controllers.updateArticle);

module.exports = router;
