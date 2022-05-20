module.exports = class ArticleDto {
  id;
  title;
  body;

  constructor(model) {
    this.id = model._id;
    this.title = model.title;
    this.body = model.body;
  }
};