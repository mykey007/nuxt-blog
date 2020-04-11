<template>
    <div class="admin-new-post-page container page-content">
        <section class="new-post-form">
            <AdminPostForm @submit="onSubmitted" />
        </section>
    </div>
</template>

<script>
import axios from 'axios'
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    layout: 'admin', 
    components: {
        AdminPostForm
    },
    methods: {
        onSubmitted(postData) {
            this.$store.dispatch("addPost", postData).then(() => {
                this.$router.push("/admin");
            })
        }
    } 
}
</script>

<style>
    .admin-new-post-page {
        margin: 0 auto;
        max-width: 1200px;
        min-width: 1200px;
    }
</style>