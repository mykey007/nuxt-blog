<template>
  <main>
    <PostList :posts="loadedPosts"/>
    <div class="container mx-auto">
      <div class="md:flex">
        <div class="md:flex-shrink-0">
          <img class="" src="https://generative-placeholders.glitch.me/image?width=600&height=300&style=joy-division" alt="joy division">
          
        </div>
        <div class="fader mt-4 md:mt-0 md:ml-6">
          <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">Post-Punk</div>
          <nuxt-link to="/users" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Users</nuxt-link>
          <p class="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  }
}
</script>