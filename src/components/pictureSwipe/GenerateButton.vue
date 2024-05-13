<template>
    <div>
      <button
        class="btn btn-wide bg-indigo-600 text-white text-lg m-2 content-center"
        @click="getBookBySubjectAndMore('horror', 'fiction', 'france')"
      >
        Reveal book
      </button>
    </div>
  </template>
  
  <script>
  export default {
    props: ['genre', 'topic', 'place'],
    data() {
      return {
        newNumb: Math.floor(Math.random() * 10)
      }
    },
    methods: {
      async getBookBySubjectAndMore(genre, topic, place) {
        let resp = await fetch(
          `https://openlibrary.org/search.json?subject=${genre}+${topic}+${place}&fields=key,title,author_name&limit=10`
        )
        let json = await resp.json()
        let check = json.docs[this.newNumb].title
        console.log(check)
      }
    }
  }
  </script>