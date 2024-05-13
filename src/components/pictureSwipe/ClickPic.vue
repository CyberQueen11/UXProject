<template>
    <div>
      <img
        src="https://placeholder.pics/svg/160x200"
        alt="pic"
        @click="getBookBySubject(subject), toggleTitle()"
      />
      <p v-if="showTitle">{{ title }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['subject'],
    data() {
      return {
        title: '',
        randNum: Math.floor(Math.random() * 100),
        showTitle: false
      }
    },
    methods: {
      async getBookBySubject(subject) {
        let resp = await fetch(`https://openlibrary.org/subjects/${subject}.json?limit=100`)
        let json = await resp.json()
        this.title = json.works[this.randNum].title
      },
      toggleTitle() {
        this.showTitle = !this.showTitle
      }
    }
  }
  </script>
  