<template>
  <section class="container">
    <el-row v-if="user">
      <el-col :span="6">
        <el-card class="text-center" style="margin-right: 16px">
          <div>
            <img
              src="https://placehold.it/150x150"
              style="width: 100%; margin-bottom: 16px; border-radius: 2px"
              alt=""
            />
          </div>
          <h2>
            <b>{{ user.id }}</b>
          </h2>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-card>
          <div slot="header" class="clearfix">
            <span>{{ user.id }}さんの投稿</span>
          </div>
          <el-table :data="userPosts" style="width: 100%" class="table">
            <el-table-column prop="title" label="タイトル"> </el-table-column>
            <el-table-column prop="created_at" label="投稿日時" width="200">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
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
    try {
      await store.dispatch('users/fetchUser', { id })
      if (!store.getters['posts/posts'].find((p) => p.id === id)) {
      }
    } catch (e) {
      error({ statusCode: 404 })
    }
  },
  computed: {
    ...mapGetters('users', ['users']),
    user() {
      const user = this.users.find((u) => u.id === this.$route.params.id)
      if (!user) {
        return null
      }
      return Object.assign({ posts: [] }, user)
    },
    userPosts() {
      return Object.entries(this.user.posts).map(([id, post]) => {
        post.created_at = moment(post.created_at).format('YYYY/MM/DD HH:mm:ss')
        return { id, ...post }
      })
    },
  },
}
</script>
