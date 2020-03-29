<template>
  <main>
    <div class="container mx-auto fader text-left">
      <div class="md:flex max-w-3xl">
        <div class="md:flex-shrink-0 mt-4 md:mt-0 md:ml-6">
          <img class="fade-in-left" src="https://generative-placeholders.glitch.me/image?width=200&height=200&style=mondrian&colors=95" alt="joy division">
          
        </div>
        <div class="mt-4 md:mt-0 md:ml-6">
          <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">Post Punk</div>
          <nuxt-link to="/users" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Users</nuxt-link>
          <p class="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  components: {
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
</style>
