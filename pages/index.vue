<template>
  <main>
    <section class="intro">
      <h1>Get ye olde art news!</h1>
    </section>
     <PostList :posts="loadedPosts" />
    
  </main>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
}
</script>
<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.fade-in-left {
  position: relative;
  animation: left-slide 1s;
  animation-direction: normal;
}


@keyframes left-slide {
  0%  {left: -100px; opacity: 0.4;}
  100% {left: 0px; opacity: 1;}
}

:root {
    --color-code-green: #b5f4a5;
    --color-code-yellow: #ffe484;
    --color-code-purple: #d9a9ff;
    --color-code-red: #ff8383;
    --color-code-blue: #93ddfd;
    --color-code-white: #fff;
}
</style>
