import Api from '@/api';
import Comment from '@/models/Comment';

export default {
  state: {
    articles: [],
    comments: [],
    categories: [],
    // 
    activeArticle: null,
    activeCategory: null,
  },
  getters: {
    lastArticles(state) {
      return state.articles.slice(0, 10);
    },
    lastComments(state) {
      return state.comments.slice(0, 10);
    },
    popularCategories(state) {
      return state.categories.slice(0, 10);
    },
    activeCategoryArticles(state) {
      if (!state.activeCategory) {
        return [];
      }
      return state.articles.filter((item) => state.activeCategory.articles.indexOf(item.id) >= 0);
    },
    activeArticleComments(state) {
      if (!state.activeArticle) {
        return [];
      }
      return state.comments.filter((item) => state.activeArticle.id == item.article_id);
    },
    prevArticle(state) {
      let prevItem = null;
      if (state.activeArticle) {
        state.articles.forEach((item, index) => {
          if (item.id == state.activeArticle.id) {
            prevItem = state.articles[index-1] || null;
          }
        });
      }
      return prevItem;
    },
    nextArticle(state) {
      let nextItem = null;
      if (state.activeArticle) {
        state.articles.forEach((item, index) => {
          if (item.id == state.activeArticle.id) {
            nextItem = state.articles[index+1] || null;
          }
        });
      }
      return nextItem;
    },
  },
  mutations: {
    setArticles(state, payload) {
      state.articles = payload.items;
    },
    setComments(state, payload) {
      state.comments = payload.items;
    },
    setCategories(state, payload) {
      state.categories = payload.items;
    },
    setActiveCategory(state, payload) {
      state.activeCategory = payload;
    },
    setActiveArticle(state, payload) {
      state.activeArticle = payload;
    },
    addComment(state, payload) {
      state.comments.push(payload);
      state.activeArticle.addComment(Comment.createFrom(payload));
    },
  },
  actions: {
    async loadArticles({ commit, state }) {
      if (state.articles.length > 0) {
        return;
      }

      const items = await Api.getArticles();
      commit('setArticles', {
        items
      });
    },
    async loadComments({ commit, state }) {
      if (state.comments.length > 0) {
        return;
      }

      const items = await Api.getComments();
      commit('setComments', {
        items
      });
    },
    async loadCategories({ commit, state }) {
      if (state.categories.length > 0) {
        return;
      }

      const items = await Api.getCategories();
      commit('setCategories', {
        items
      });
    },
    async loadActiveCategory(context, id) {
      await context.dispatch('loadArticles');
      await context.dispatch('loadCategories');
      
      let category = context.state.categories.find((item) => {
        return item.id == id;
      });
      context.commit('setActiveCategory', category);
    },
    async loadActiveArticle(context, id) {
      await context.dispatch('loadArticles');
      
      let model = context.state.articles.find((item) => {
        return item.id == id;
      });
      context.commit('setActiveArticle', model);
    },
    async addComment({ commit }, payload) {
      await Api.addComment(payload);
      commit('addComment', payload);
    },
  },
}