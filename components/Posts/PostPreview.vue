<template>
    <nuxt-link :to="'/posts' + id" class="max-w-sm rounded overflow-hidden shadow-lg">
        <img class="w-full" :src="thumbnail" alt="Sunset in the mountains">
        <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ title }}</div>
        <p class="text-gray-700 text-base">

            {{ previewText }}
        </p>
        </div>
        <div class="px-6 py-4">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Dutch</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#abstract art</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#tableau</span>
        </div>
    </nuxt-link>    
</template>

<script>
export default {
    /*
title: Piet Mondrian
previewText: Know for being one of the pioneers of 20th-century abstract art, as he changed his artistic direction from figurative painting to an increasingly abstract style...
    */
    name: 'PostPreview',
    props: {
        id: {
            type: String,
            required: true
        },
        title : {
            type: String,
            required: true
        },
        previewText: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
        tags: {
            type: Array,
            required: false
        }
    }
}
</script>

<style scoped>

</style>
