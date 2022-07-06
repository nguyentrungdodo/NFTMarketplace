const mutations = {
  'media/MUTATE_SET_MEDIA': (state, medias) => {
    state.medias = medias;
  },
  'media/MUTATE_SET_MEDIA_BY_ID': (state, media) => {
    state.media = media;
  },
};

export default mutations;
