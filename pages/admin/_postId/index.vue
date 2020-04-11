<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" @submit="onSubmitted" />
        </section>
    </div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
    layout: 'admin', 
    components: {
        AdminPostForm
    },
    asyncData(context) {
        return axios.get(process.env.baseUrl + '/posts/' + context.params.id + '.json')
        .then(res => {
          return {
            loadedPost: {...res.data, id: context.params.postId}
          }
        })
        .catch(e => {
          return context.error(e)
        })
    },
    methods: {
        onSubmitted(editedPost) {
            this.$store.dispatch("editPost", editedPost).then(() => {
                this.$router.push("/admin");
            })
        }
    }
}
</script>