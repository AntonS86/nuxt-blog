const posts = [
  {
    title: 'Post1',
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: '1'
  },
  {
    title: 'Post2',
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: '2'
  }
];

export const state = () => ({
  posts: []
});

export const actions = {
  async fetchAdmin() {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts);
      }, 1000);
    });
  },

  async fetchAdminById({}, id) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id));
      }, 1000);
    });
  },

  async update({}, { id, text }) {
    console.log('Пост обнолвен');
  },

  async create({ commit }, { title, text, image }) {
    try {
      const fd = new FormData();
      fd.append('title', title);
      fd.append('text', text);
      fd.append('image', image, image.name);
      return;
    } catch (e) {
      commit('setError', e, { root: true });
      throw e;
    }
  },

  async remove({}, id) {}
};
