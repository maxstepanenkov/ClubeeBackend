const { Schema, model } = require('mongoose');

const ArticleSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String, required: true }
});

module.exports = model('Articles', ArticleSchema);