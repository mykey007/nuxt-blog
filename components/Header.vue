<template>
    <!-- <header class="grid grid-cols-1 sm:grid-cols-2">
        <img class="w-2 rounded-lg md:w-56" src="https://generative-placeholders.glitch.me/image?width=600&height=300&style=cubic-disarray">
        <ul>
            <li>
                <nuxt-link to="/">Home</nuxt-link>
                <nuxt-link to="/users">Users</nuxt-link>
            </li>
        </ul>
    </header> -->

    <div class="font-sans antialiased" id="app">
        
        <nav class="flex items-center justify-between flex-wrap bg-indigo-600 p-6">
            <div class="flex items-center flex-no-shrink text-white mr-6">
            <nuxt-link to="/" class="head-logo" />
            <!-- <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> -->
            <span class="font-semibold text-xl tracking-tight m-5">Big Blog</span>
            </div>
            <div class="block sm:hidden">
            <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
            </div>
            <div :class="open ? 'block': 'hidden'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto">
            <div class="text-lg sm:flex-grow items-end flex flex-row justify-end">
                <!-- <nuxt-link to="/" class="m-5 text-white hover:underline">Home</nuxt-link> -->
                <nuxt-link to="/posts" class="m-5 text-white hover:underline">Posts</nuxt-link>
                <nuxt-link to="/users" class="m-5 text-white hover:underline">Users</nuxt-link>
            </div>
            <div>
                <a href="#" class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-600 hover:bg-white mt-4 sm:mt-0">Lunch!</a>
            </div>
            </div>
        </nav>
        <!-- <div class="intro"></div> -->
    </div>
    
</template>
<style scoped>
.nuxt-link-active {
    text-decoration: underline;
}
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url('~assets/img/mondrian-5.png');
  background-position: center;
  background-size: cover;
  flex-grow: 3;
}
.head-logo {
box-sizing: border-box;
  background-image: url('~assets/img/header/head-1.png');
  background-position: center;
  width: 56px;
  height: 56px;
}
</style>
<script>
export default {
     data: function() {
         return  {
           open: false,
         }
    },
    methods: {
        toggle() {
            this.open = !this.open
        }
    }
}


</script>