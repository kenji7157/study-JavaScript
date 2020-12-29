<template>
  <div>
    <h1>Index page</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  async asyncData({ store }) {
    if (store.getters['items'].length) {
      return
    }
    await store.dispatch('fetchItems')
  },
  computed: {
    ...mapGetters(['items'])
  }
}
</script>

<style>
.container {
  min-height: 16px 0;
  padding: 8px 0;
  border-bottom: solid 1px #e5e5e5;
}

li + li {
  margin: 16px 0;
}

p {
  margin: 8px 0;
}
</style>