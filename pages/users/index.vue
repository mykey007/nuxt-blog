<template>
    <div class="container mx-auto">
        <input type="text" v-model="userId" class="transition-colors duration-100 ease-in-out focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input">
        <hr>
        <button @click="onLoadUser" class="flex items-center justify-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-gray-900 bg-white hover:text-gray-800 focus:outline-none focus:underline">Let's see 'em</button>
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
    }
}
</script>