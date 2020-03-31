<template>
    <div class="admin-post-page">
        <section class="update-form">
            <AdminPostForm :post="loadedPost" />
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
    data() {
        return {
            loadedPost: {
                author: 'Mac and Cheese',
                title: 'Mac\'s Famous Mac &amp; Cheese',
                content: 'Super delicious',
                thumbnailLink: 'https://i.ytimg.com/vi/JxzIF3cW3GU/maxresdefault.jpg'
            }
        }
    }
}
</script>