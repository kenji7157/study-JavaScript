<template>
  <div>
    <span>default layout</span>
    <AppNavigation></AppNavigation>
    <hr>
    <nuxt/>
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