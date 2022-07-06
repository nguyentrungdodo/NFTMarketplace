import { save,getOne, fetchMedia, updateMediaByFormId,createMedia } from '@/api/media';
import router from '@/router';

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
    console.log('11111');
    const res = await fetchMedia();
    console.log('res',res.data);
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

  'media/ACT_FETCH_MEDIA': async ({ commit }) => {
    console.log('11111');
    const res = await fetchMedia();
    console.log('res',res.data);
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
    console.log('11111');
    const res = await getOne(id);
    console.log('res',res.data);
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
  
  'media/ACT_CREATE_MEDIA': async (_, payload) => {
   const res =  await createMedia(payload);
   if (res.status === 200) {
    router.replace({name:'home'})
    alert('create successfully')
  } else {
  
      console.log('errrrrrrrr');
  }
  },
  
};

export default actions;
