<template>
  <div>
      <Header />
      <header>
          User's Area
      </header>
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>