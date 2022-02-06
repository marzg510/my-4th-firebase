<!-- eslint-disable -->
<template>
  <div class="container">
    <h1>Hello</h1>
    <div class="inputs">
      <label for="name">お名前は？</label>
      <input v-model="name" name="name" class="i-name" type="text">
      <div class="send-box">
        <input @click="helloworld" type="button" value="送信">
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from '@/plugins/firebase'
import axios from 'axios'
export default {
  name: 'HelloPage',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    helloworld () {
      const baseUrl = 'https://asia-northeast1-my-4th-firebase.cloudfunctions.net/'
      axios.post(baseUrl + 'helloWorld', { name: this.name })
        .then((result) => {
          console.log(result)
          alert(result.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>
