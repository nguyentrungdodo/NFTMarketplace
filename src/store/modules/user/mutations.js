const mutations = {
  "user/MUTATE_SET_SIGNIN": (state, user) => {
    state.user = user;
  },
  "user/MUTATE_SET_ME": (state, profileUser) => {
    state.profileUser = profileUser;
  },
};

export default mutations;
