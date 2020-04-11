import Vuex from 'vuex';
import axios from 'axios'

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
            },
            editPost(state, editedPost) {
                const postIndex = state.loadedPosts.findIndex(
                    post => post.id === editedPost.id
                );
                state.loadedPosts[postIndex] = editedPost
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return  axios.get('https://cms-vue-c85dd.firebaseio.com/posts.json')
                .then(res => {
                    const postsArray = []
                    for (const key in res.data) {
                        postsArray.push({ ...res.data[key], id: key})
                    }
                    vuexContext.commit('setPosts', postsArray)
                })
                .catch(e => context.error(e));
                // return new Promise((resolve, reject) => {
                //     setTimeout(() => {
                //         vuexContext.commit('setPosts', [
                //             {
                //               id: '1',
                //               title: "Piet Mondrian",
                //               previewText: "Know for being one of the pioneers of 20th-century abstract art, as he changed his artistic direction from figurative painting to an increasingly abstract style...",
                //               thumbnail: "https://generative-placeholders.glitch.me/image?width=200&height=200&style=mondrian&colors=95",
                //               tags: ['#Dutch', '#Abstract', '#tableau']
                //             },
                //             {
                //               id: '2',
                //               title: "Bauhaus",
                //               previewText: "The legendary design school is synonymous with creativity and innovativeness, and over the years there have been many lavish and scholarly books published about its history and influence.",
                //               thumbnail: "https://3.bp.blogspot.com/_5AO-vZRiTM4/TQph-NDOoVI/AAAAAAAADv0/_inK3HiA1jE/s400/Gray%2Bsquare%2Bbauhaus.jpg",
                //               tags: ['#Bauhaus', '#form follows function', '#Modernism101']
                //             },
                //             {
                //               id: '3',
                //               title: "Max Ernst",
                //               previewText: "Pioneer of the Dada movement and surrealism. He had no formal artistic training, but his experimental attitude toward the making of art resulted in his invention of frottage—a technique that uses pencil rubbings of objects as a source of images",
                //               thumbnail: "https://upload.wikimedia.org/wikipedia/en/d/db/L%27Ange_du_Foyeur.jpg",
                //               tags: ['#L\'Ange du Foyer', '#Dada']
                //             }
                //           ])
                //       resolve()
                //   }, 1000)
                //   })
                //   .then(data => {
                //     context.store.commit('setPosts', data.loadedPosts)
                //   })
                //   .catch(e => {
                //     context.error(new Error());
                //   })
            },
            addPost(vuexContext, post) {
                const createdPost = {...post, updatedDate: new Date()}
                axios.post('https://cms-vue-c85dd.firebaseio.com/posts.json', createdPost)
                    .then(result => {
                        vuexContext.commit('addPost', {...createdPost, id: result.data.name})
                        this.$router.push('/admin')
                        console.log(res)
                        console.log(result)
                    })
                    .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost) {
                return axios.put('https://cms-vue-c85dd.firebaseio.com/posts/' + editedPost.id + '.json', editedPost)
                    .then(res => {
                        vuexContext.commit('editPost', editedPost)
                        console.log(res)
                    })
                    .catch(e => console.log(e))
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts)
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts
            }
        }
    })
}

export default createStore