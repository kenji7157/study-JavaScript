<template>
  <div>
    <span>default layout</span>
    <AppNavigation></AppNavigation>
    <hr>
    <nuxt/>
    <nuxt-link to="/">トップへ戻る</nuxt-link>
    <hr>
    <footer>
      footer
    </footer>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation';

export default {
  components: {
    AppNavigation
  }
}
</script>