export default class Category
{
  constructor(id, title, articles) {
    this.id = id;
    this.title = title;
    this.articles = articles;
  }

  static createFrom(data) {
    const {id, title, articles} = data;
    return new this(id, title, articles);
  }
}