<template>
  <section class="container posts-page">
    <div style="flex: 1">
      <el-card v-if="post">
        <div slot="header" class="clearfix">
          <h2>{{ post.title }}</h2>
          <small>by {{ post.user.id }}</small>
        </div>
        <p>{{ post.body }}</p>
        <p class="text-right">{{ post.created_at | time }}</p>
      </el-card>
      <p>
        <nuxt-link to="/posts">&lt; 投稿一覧へ戻る</nuxt-link>
      </p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import moment from '~/plugins/moment'

export default {
  filters: {
    time(val) {
      return moment(val).format('YYYY/MM/DD HH:mm:ss')
    },
  },
  async asyncData({ store, route, error }) {
    const id = route.params.id
    if (store.getters['posts/posts'].find((p) => p.id === id)) {
      return
    }
    try {
      await store.dispatch('posts/fetchPost', { id })
      if (!store.getters['posts/posts'].find((p) => p.id === id)) {
        throw new Error('post not found')
      }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  computed: {
    ...mapGetters('posts', ['posts']),
    post() {
      return this.posts.find((p) => p.id === this.$route.params.id)
    },
  },
}
</script>

<style>
.posts-page .el-table__row {
  cursor: pointer;
}
</style>