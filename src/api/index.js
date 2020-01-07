import Article from '@/models/Article';
import Comment from '@/models/Comment';
import Category from '@/models/Category';

export default {
  getArticles() {
    const comments = this.getComments();
    const items = [
      {
        id: 1, title: 'Статья 1', content: 'Содержание статьи 1',
      },
      {
        id: 2, title: 'Статья 2', content: 'Содержание статьи 2',
      },
      {
        id: 3, title: 'Статья 3', content: 'Содержание статьи 3',
      },
      {
        id: 4, title: 'Статья 4', content: 'Содержание статьи 4',
      },
      {
        id: 5, title: 'Статья 5', content: 'Содержание статьи 5',
      },
      {
        id: 6, title: 'Статья 6', content: 'Содержание статьи 6',
      },
    ];
    return items.map((item) => {
      const article = Article.createFrom(item);
      article.comments = comments.filter((comment) => comment.article_id == article.id);

      return article;
    });
  },
  getComments() {
    const items = [
      {
        id: 1, article_id: 1, content: 'Комментарий к статье 1',
      },
    ];
    return items.map((item) => Comment.createFrom(item))
  },
  getCategories() {
    const items = [
      {
        id: 1, title: 'Новости', articles: [1,3,5],
      },
      {
        id: 2, title: 'Спорт', articles: [2,3,4],
      },
      {
        id: 3, title: 'Красота', articles: [],
      },
    ];
    return items.map((item) => Category.createFrom(item))
  },
  addComment(comment) {
    if (comment) {
      // отправка запроса на бэк
    }
  },
};