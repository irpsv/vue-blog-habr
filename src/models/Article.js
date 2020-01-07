export default class Article
{
  constructor(id, title, content) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.comments = [];
  }

  addComment(item) {
    this.comments.push(item);
  }

  static createFrom(data) {
    const {id, title, content} = data;
    return new this(id, title, content);
  }
}