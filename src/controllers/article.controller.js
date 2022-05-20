const articleService = require('../services/article.service');
const { validationResult } = require('express-validator');

class ArticeController {
  async create(req, res, next) {
    try {
      const { title, body } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw Error('Validation error', 400);
      }
      const articleData = await articleService.create(title, body);
      return res.json(articleData);
    } catch(e) {
      next(e);
    }
  }

  async get(req, res, next) {
    try {
      const articles = await articleService.get();
      return res.json(articles);
    } catch(e) {
      next(e);
    }
  }

  async getById(req, res, next) {
    try {
      const { params } = req;
      const article = await articleService.getById(params.id);
      return res.json(article);
    } catch(e) {
      next(e);
    }
  }
}

module.exports = new ArticeController();