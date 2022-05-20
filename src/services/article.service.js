const ArticleModel = require('../models/article.model');
const ArticleDto = require('../dto/article.dto');

class ArticleService {
  async create(title, body) {
    const article = await ArticleModel.create({ title, body });
    return article;
  }

  async get() {
    const articles = await ArticleModel.find().sort({ $natural: -1 }).limit(5);
    return articles;
  }

  async getById(id) {
    const article = await ArticleModel.findById(id);
    return article;
  }
}

module.exports = new ArticleService();