<template>
    <div class="container mx-auto">
        <form class="w-full max-w-sm">
        <img class="fade-in-top mb-6" src="https://generative-placeholders.glitch.me/image?width=600&height=300&style=triangles&gap=100">
        <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3">
            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                ID #
            </label>
            </div>
            <div class="md:w-2/3">
            <input type="text" v-model="userId" class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
            </div>
        </div>
        <!-- <div class="md:flex md:items-center mb-6">
            <div class="md:w-1/3"></div>
            <label class="md:w-2/3 block text-gray-500 font-bold">
            <input class="mr-2 leading-tight" type="checkbox">
            <span class="text-sm">
                Send me your newsletter!
            </span>
            </label>
        </div> -->
        <div class="md:flex md:items-center">
            <div class="md:w-1/3"></div>
            <div class="md:w-2/3">
            <button @click="onLoadUser" class="shadow bg-yellow-300 hover:bg-yellow-200 focus:shadow-outline focus:outline-none text-purple-700 font-bold py-2 px-4 rounded" type="button">
                Into The Cavern 
            </button>
            </div>
        </div>
        </form>
    </div>
</template>

<style scoped>
.fade-in-top {
  position: relative;
  animation: top-slide 1s;
  animation-direction: normal;
}


@keyframes top-slide {
  0%  {top: -100px; opacity: 0.4;}
  100% {top: 0px; opacity: 1;}
}
</style>

<script>
export default {
    data() {
        return {
            userId: ''
        }
    },
    methods: {
        onLoadUser() {
            this.$router.push('/users/' + this.userId)
        }
    },
    layout: 'users'
}
</script>