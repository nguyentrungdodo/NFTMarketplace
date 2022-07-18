 import { save,getOne, fetchMedia, updateMediaByFormId,createMedia } from '@/api/media';

const actions = {
  'media/ACT_SAVE_MEDIA': async (_, payload) => {
    try {
      const res = await save(payload);
      if (res.status === 200) {
        alert('Uploaded resources successfully');
      }
    } catch (err) {
      alert('Something went wrong');
    }
  },

  'media/ACT_FETCH_ALL_MEDIA': async ({ commit }) => {
    const res = await fetchMedia();
    if (res.status === 200) {
      const data = res.data;
      // const media = JSON.parse(data);
      commit('media/MUTATE_SET_MEDIA',data);
    } else {
      if (res.status === 204) {
        commit('media/MUTATE_SET_MEDIA', []) ;
      }
    }
  },

  'media/ACT_FETCH_MEDIA': async ({ commit }) => {
    const res = await fetchMedia();
    if (res.status === 200) {
      const data = res.data;
      // const media = JSON.parse(data);
      commit('media/MUTATE_SET_MEDIA',data);
    } else {
      if (res.status === 204) {
        commit('media/MUTATE_SET_MEDIA', []);
      }
    }
  },
  'media/ACT_FETCH_MEDIA_BY_ID': async ({ commit },id) => {
    const res = await getOne(id);
    if (res.status === 200) {
      const data = res.data;
      // const media = JSON.parse(data);
      commit('media/MUTATE_SET_MEDIA_BY_ID',data);
    } else {
      if (res.status === 204) {
        commit('media/MUTATE_SET_MEDIA', null);
      }
    }
  },
  'media/ACT_UPDATE_MEDIA': async (_, payload) => {
    const { formId, data } = payload;
    await updateMediaByFormId(formId, data);
  },
  
  'media/ACT_CREATE_MEDIA': async ({commit}, payload) => {
   const res =  await createMedia(payload);
   if (res.status === 200) {
    commit('SET_SNACKBAR', {
      type: 'success',
      visible: true,
      text: 'Create success',
    });
    return res.data;
  } else {
      console.log('errrrrrrrr');
  }
  },
  
};

export default actions;
