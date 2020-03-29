<template>
    <div class="container mx-auto">
        <input type="text" v-model="userId" class="transition-colors duration-100 ease-in-out focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input">
        <hr>
        <button @click="onLoadUser" class="border-dotted border-4 border-gray-600">Let's see 'em</button>
        <nuxt-child />
    </div>
</template>

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