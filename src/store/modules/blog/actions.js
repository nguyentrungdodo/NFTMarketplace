import { createBlog, fetchAllBLog ,deleteOne,fetchBlog,updateOne} from "@/api/blog";
import router from "@/router";

const actions = {
  // 'blog/ACT_SAVE_BLOG': async (_, payload) => {
  //   try {
  //     const res = await save(payload);
  //     if (res.status === 200) {
  //       alert('Uploaded resources successfully');
  //     }
  //   } catch (err) {
  //     alert('Something went wrong');
  //   }
  // },
  "blog/ACT_EDIT_BLOG": async ({ commit },payload) => {
    const res = await updateOne(payload.id,payload.blog);
    if (res.status === 200) {
      // const blog = JSON.parse(data);
      router.push({name:'blogsection'})
      commit("SET_SNACKBAR", {
        type: "success",
        visible: true,
        text: "Create success",
      });
    } else {
      commit("SET_SNACKBAR", {
        type: "error",
        visible: true,
        text: "Something when wrong",
      });
    }
  },
  "blog/ACT_FETCH_ALL_BLOG": async ({ commit }) => {
    const res = await fetchAllBLog();
    if (res.status === 200) {
      const data = res.data;
      // const blog = JSON.parse(data);
      commit("blog/MUTATE_SET_BLOG", data);
    } else {
      if (res.status === 204) {
        commit("blog/MUTATE_SET_BLOG", []);
      }
    }
  },

  'blog/ACT_FETCH_BLOG': async ({ commit },id) => {
    const res = await fetchBlog(id);
    if (res.status === 200) {
      const data = res.data;
      // const blog = JSON.parse(data);
      commit('blog/MUTATE_SET_BLOG',data);
      return data;

    } else {
      if (res.status === 204) {
        commit('blog/MUTATE_SET_BLOG', []);
      }
    }
  },
  'blog/ACT_DELETE_BY_ID': async ({ commit },id) => {
    const res = await deleteOne(id);
    if (res.status === 200) {
      commit("SET_SNACKBAR", {
        type: "success",
        visible: true,
        text: "Delete success",
      });
      return true;
      // const blog = JSON.parse(data);
    } else {
      commit("SET_SNACKBAR", {
        type: "error",
        visible: true,
        text: "Something when wrong",
      });
      if (res.status === 204) {
        commit('blog/MUTATE_SET_BLOG', null);
      }
    }
  },

  "blog/ACT_CREATE_BLOG": async ({ commit }, payload) => {
    const res = await createBlog(payload);
    if (res.status === 200) {
      commit("SET_SNACKBAR", {
        type: "success",
        visible: true,
        text: "Create success",
      });
      router.replace({ name: "blogsection" });
    } else {
      console.log("err");
    }
  },
};

export default actions;
