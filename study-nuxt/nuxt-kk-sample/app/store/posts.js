import moment from '~/plugins/moment'

export const state = () => ({
  posts: [],
})

export const getters = {
  posts: (state) => state.posts,
}

export const mutations = {
  addPost(state, { post }) {
    state.posts.push(post)
  },
  updatePost(state, { post }) {
    // idが一致するものは引数postに更新。そうでない場合は元の値のまま
    state.posts = state.posts.map((p) => (p.id === post.id ? post : p))
  },
  clearPost(state) {
    state.posts = []
  },
}

export const actions = {
  async fetchPost({ commit }, { id }) {
    const posts = await this.$axios.$get(`/posts/${id}.json`)
    commit('addPost', { posts: { ...posts, id } })
  },
  async fetchPosts({ commit }) {
    const posts = await this.$axios.$get(`/posts.json`)
    commit('clearPost')
    Object.entries(posts || [])
      .reverse()
      .forEach(([id, content]) => {
        commit('addPost', {
          post: { id, ...content },
        })
      })
  },
  async publishPost({ commit }, { payload }) {
    const user = await this.$axios.$get(`/users/${payload.user.id}.json`)
    // eslint-disable-next-line camelcase
    const post_id = (await this.$axios.$post(`/posts.json`, payload)).name
    // eslint-disable-next-line camelcase
    const created_at = moment().format()
    const post = { id: post_id, ...payload, created_at }
    const putData = { id: post_id, ...payload, created_at }
    delete putData.user
    await this.$axios.$put(`/users/${user.id}/posts.json`, [
      ...(user.posts || []),
      putData,
    ])
    commit('addPost', { post })
  },
}
