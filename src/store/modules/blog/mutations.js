const mutations = {
  'blog/MUTATE_SET_BLOG': (state, blogs) => {
    state.blogs = blogs;
  },
  'blog/MUTATE_SET_MEDIA_BY_ID': (state, blog) => {
    state.blog = blog;
  },
};

export default mutations;
