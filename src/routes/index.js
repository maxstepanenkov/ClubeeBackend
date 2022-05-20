const Router = require('express').Router;
const articleController = require('../controllers/article.controller');
const { body } = require('express-validator');

const router = new Router();

router.post(
  '/article',
  body('title').isLength({ min: 3, max: 32 }),
  body('body').isLength({ min: 8, max: 128 }),
  articleController.create
);
router.get(
  '/article',
  articleController.get
);
router.get(
  '/article/:id',
  articleController.getById
);

module.exports = router;