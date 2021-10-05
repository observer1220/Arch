<template>
  <div class="caseInfo_container">
    <div v-for="(item, index) in paginatedData" :key="index">
      <h2>{{ item.title }}</h2>
      <p v-html=" item.article"></p>
    </div>
    <el-button @click="goBack" type="primary">上一頁</el-button>
  </div>
</template>

<script>
import { db } from '../../firebase'
export default {
  data () {
    return {
      paginatedData: []
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    }
  },
  created () {
    const page = this.$route.params.id
    db.database().ref('article').once('value', (snapshot) => {
      snapshot.forEach(element => {
        if (element.val().title === page) {
          this.paginatedData.push(element.val())
        }
      })
      console.log(this.paginatedData)
    })
  }
}
</script>

<style>
.caseInfo_container {
  max-width: 940px;
  margin: 90px auto;
  padding:  16px;
}
img{
    max-width: 100%;
    object-fit: contain;
}
</style>
