import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [
      {
        id: 1,
        title: 'post1',
        description: 'post description',
        categories:  [ 'cat1', 'cat2' ]
      },
      {
        id: 2,
        title: 'post2',
        description: 'post2 description',
        categories: [ 'cat1', 'cat2' ,'cat3' ]
      }
    ],
    categories: [
      { id: 1, name: 'cat1' },
      { id: 2, name: 'cat2' },
      { id: 3, name: 'cat3' },
    ]
  },
  getters: {
    getPosts(state) {
      return state.posts
    },
    getCategories(state){
      return state.categories
    }
  },
  mutations: {
    deletePost(state, id) {
      const index = state.posts.findIndex(item => item.id == id)
      state.posts.splice(index, 1)
    },
    addPost(state,post){
      post.id = Date.now(); 
      state.posts.push(post)
    },
    editPost(state,post){
      const index = state.posts.findIndex(item => item.id == post.id)
      state.posts.splice(index, 1, post)
    },
    addCategory(state,category){
      category.id = Date.now(); 
      state.categories.push(category)
    },
    editCategory(state,category){
      const index = state.categories.findIndex(item => item.id == category.id)
      state.categories.splice(index, 1, category)
    },
    deleteCategory(state, id){
      const index = state.categories.findIndex(item => item.id == id)
      state.categories.splice(index, 1)
    }
  },
  actions: {
    deletePost(context, id) {
      context.commit('deletePost', id)
    },
    addPost(context, item) {
      context.commit('addPost', item)
    },
    editPost(context, item) {
      context.commit('editPost', item)
    },
    addCategory(context, item) {
      context.commit('addCategory', item)
    },
    editCategory(context, item) {
      context.commit('editCategory', item)
    },
    deleteCategory(context,id){
      context.commit('deleteCategory', id)
    }
  },
  modules: {
  }
})
