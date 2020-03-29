<template>
  <div>
      <Header />
    <nuxt class="fader" />
  </div>
</template>

<style scoped>
.fader {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

<script>
import Header from '~/components/Header.vue'
export default {
  components: {
    Header
  }
}
</script>