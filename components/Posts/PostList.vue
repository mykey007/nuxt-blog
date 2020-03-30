<template>
    <section>
        <PostPreview 
        id="1"
        title="Piet Mondrian"
        previewText="Know for being one of the pioneers of 20th-century abstract art, as he changed his artistic direction from figurative painting to an increasingly abstract style..."
        thumbnail="https://generative-placeholders.glitch.me/image?width=200&height=200&style=mondrian&colors=95"
        v-bind:tags="['#Dutch', '#Abstract', '#tableau']"/>

        <PostPreview 
        id="2"
        title="Bauhaus"
        previewText="The legendary design school is synonymous with creativity and innovativeness, and over the years there have been many lavish and scholarly books published about its history and influence."
        thumbnail="https://3.bp.blogspot.com/_5AO-vZRiTM4/TQph-NDOoVI/AAAAAAAADv0/_inK3HiA1jE/s400/Gray%2Bsquare%2Bbauhaus.jpg"
        v-bind:tags="['#Bauhaus', '#form follows function', '#Modernism101']"/>

        <PostPreview 
        id="3"
        title="Max Ernst"
        previewText="Pioneer of the Dada movement and surrealism. He had no formal artistic training, but his experimental attitude toward the making of art resulted in his invention of frottage—a technique that uses pencil rubbings of objects as a source of images"
        thumbnail="https://upload.wikimedia.org/wikipedia/en/d/db/L%27Ange_du_Foyeur.jpg"
        v-bind:tags="['#L\'Ange du Foyer', '#Dada']"/>

    </section>
</template>

<style scoped>

</style>

<script>
import PostPreview from '@/components/Posts/PostPreview'

export default {
  components: {
    PostPreview
  }
}
</script>