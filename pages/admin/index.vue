<template>
    <div id="content-wrapper" class="admin-page container mx-auto min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible">
        <div id="content">
            <div id="app" class="flex">
                <div class="pt-24 pb-16 lg:pt-28 w-full">
                    <div class="markdown mb-6 px-6 max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4">
                        <h1>Admin Area</h1> 
                        <div class="mt-0 mb-4 text-gray-600">
                            Say nice things about Admin.
                        </div> 
                        <AppButton @click="$router.push('/admin/new-post')" class="bg-yellow-400 hover:bg-yellow-300 text-grey-600 font-bold py-2 px-4 border-b-4 border-yellow-500 hover:border-yellow-400 rounded">
                          Create Post
                        </AppButton>
                        <hr class="my-8 border-b-2 border-gray-200">
                    </div> 
                    <div class="flex">
                        <div class="px-6 xl:px-12 w-full max-w-3xl mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:w-3/4 text-gray-600">
                            <p class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">Existing Posts</p>
                            <PostList isAdmin />
                            <p>Tom Nook was Here 💰💰💰</p> 
                            
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
import AppButton from '@/components/UI/AppButton'

export default {
    components: {
        PostList,
        AppButton
    }
}
</script>