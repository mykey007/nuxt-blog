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
        return axios.get('https://cms-vue-c85dd.firebaseio.com/posts/' + context.params.id + '.json')
        .then(res => {
          return {
            loadedPost: res.data
          }
        })
        .catch(e => {
          return context.error(e)
        })
    },
    methods: {
        onSubmitted(editedPost) {
            axios.put('https://cms-vue-c85dd.firebaseio.com/posts/' + this.$route.params.id + '.json', editedPost)
            .then(res => {
                this.$router.push('/admin')
                console.log(res)
            })
            .catch(e => console.log(e))
        }
    }
}
</script>