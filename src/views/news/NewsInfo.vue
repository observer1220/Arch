<template>
  <div class="bulletinInfo_container">
    <div v-for="(item, index) in personnelDatabase" :key="index">
      <h2>{{ item.title }}</h2>
      <el-divider></el-divider>
      <div class="article" v-html="item.article"></div>
    </div>
    <el-button @click="goBack" type="primary">上一頁</el-button>
  </div>
</template>

<script>
import { db } from '../../firebase'
export default {
  data () {
    return {
      personnelDatabase: []
    }
  },
  methods: {
    goBack () {
      this.$router.back(-1)
    }
  },
  created () {
    const page = Number(this.$route.params.id)
    db.database().ref('news').once('value', (snapshot) => {
      snapshot.forEach(element => {
        if (element.val().id === page) {
          this.personnelDatabase.push(element.val())
        }
      })
      console.log(this.personnelDatabase)
    })
  }
}
</script>

<style lang="scss">
.bulletinInfo_container {
  max-width: 940px;
  margin: 90px auto;
  padding:  16px;
}
img{
  max-width: 100%;
  object-fit: contain;
}
</style>
