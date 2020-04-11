<template>
    <form class="w-full max-w-xl" @submit.prevent="onSave">
        <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full px-3">
                <AppControlInput class="bg-gray-200 block uppercase tracking-wide text-gray-700 text-xs font-bold py-4 px-4" for="grid-password" v-model="editedPost.author">Author Name</AppControlInput>
                <AppControlInput class="bg-gray-200 block uppercase tracking-wide text-gray-700 text-xs font-bold py-4 px-4" v-model="editedPost.title">Title</AppControlInput>
                <AppControlInput class="bg-gray-200 block uppercase tracking-wide text-gray-700 text-xs font-bold py-4 px-4" v-model="editedPost.thumbnail">Thumbnail Link</AppControlInput>
                <AppControlInput
                    class="bg-gray-200 block uppercase tracking-wide text-gray-700 text-xs font-bold py-4 px-4" 
                    control-type="textarea"
                    v-model="editedPost.content">Content</AppControlInput>
                    <AppControlInput
                    class="bg-gray-200 block uppercase tracking-wide text-gray-700 text-xs font-bold py-4 px-4" 
                    control-type="textarea"
                    v-model="editedPost.previewText">Preview Text</AppControlInput>
                <AppButton type="submit">Save</AppButton>
                <AppButton
                    type="button"
                    style="margin-left: 10px"
                    btn-style="cancel"
                    @click="onCancel">Cancel</AppButton>
            </div>
        </div>
    </form>
</template>

<script>
import AppControlInput from '@/components/UI/AppControlInput'
import AppButton from '@/components/UI/AppButton'
export default {
    components: {
        AppControlInput,
        AppButton
    },
    props: {
        post: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            editedPost: this.post
                ? { ...this.post }
                :{
                    author: '',
                    title: '',
                    thumbnail: '',
                    content: '',
                    previewText: '',
                }
        }
    },
    methods: {
        onSave() {
            //Save the post
            console.log(this.editedPost);
            //emit a custom event
            this.$emit('submit', this.editedPost)
        },
        onCancel() {
            //go back
            this.$router.push('/admin');
        }
    }    
}
</script>

<style scoped>
    .new-post-form label,
    .new-post-form input {
        display: block !important;
    }
</style>