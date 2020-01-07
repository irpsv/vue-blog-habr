export default class Comment
{
  constructor(id, content, article_id) {
    this.id = id;
    this.content = content;
    this.article_id = article_id;
  }

  static createFrom(data) {
    const {id, content, article_id} = data;
    return new this(id, content, article_id);
  }
}