<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <h2 class="post-title">{{ loadedPost.altTitle }}</h2>
      <div class="post-details">
        <div class="post-detail">Last updated on {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Written by {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.previewText }}</p>
    </section>
    <section class="post-feedback">
      <p class="lh-5">Let me know what you think about the post, send a mail to <a href="mailto:mike@marshmallowe.com">mike@marshmallowe.com</a>.</p>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
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
    head: {
      title: 'yyyy'
    }
}
</script>

<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>

