<template>
  <main>
     <PostList :posts="loadedPosts" />
    
  </main>
</template>

<script>
import PostList from '@/components/Posts/PostList'

export default {
  components: {
    PostList
  },
  data() {
    return {
      loadedPosts: [
        {
          id: '1',
          title: "Piet Mondrian",
          previewText: "Know for being one of the pioneers of 20th-century abstract art, as he changed his artistic direction from figurative painting to an increasingly abstract style...",
          thumbnail: "https://generative-placeholders.glitch.me/image?width=200&height=200&style=mondrian&colors=95",
          tags: ['#Dutch', '#Abstract', '#tableau']
        },
        {
          id: '2',
          title: "Bauhaus",
          previewText: "The legendary design school is synonymous with creativity and innovativeness, and over the years there have been many lavish and scholarly books published about its history and influence.",
          thumbnail: "https://3.bp.blogspot.com/_5AO-vZRiTM4/TQph-NDOoVI/AAAAAAAADv0/_inK3HiA1jE/s400/Gray%2Bsquare%2Bbauhaus.jpg",
          tags: ['#Bauhaus', '#form follows function', '#Modernism101']
        },
        {
          id: '3',
          title: "Max Ernst",
          previewText: "Pioneer of the Dada movement and surrealism. He had no formal artistic training, but his experimental attitude toward the making of art resulted in his invention of frottage—a technique that uses pencil rubbings of objects as a source of images",
          thumbnail: "https://upload.wikimedia.org/wikipedia/en/d/db/L%27Ange_du_Foyeur.jpg",
          tags: ['#L\'Ange du Foyer', '#Dada']
        }
      ]
    }
  }
}
</script>
<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.fade-in-left {
  position: relative;
  animation: left-slide 1s;
  animation-direction: normal;
}


@keyframes left-slide {
  0%  {left: -100px; opacity: 0.4;}
  100% {left: 0px; opacity: 1;}
}

:root {
    --color-code-green: #b5f4a5;
    --color-code-yellow: #ffe484;
    --color-code-purple: #d9a9ff;
    --color-code-red: #ff8383;
    --color-code-blue: #93ddfd;
    --color-code-white: #fff;
}
</style>
