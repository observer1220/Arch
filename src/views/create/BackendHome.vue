<template>
  <div class="backendHome_container">
    <h3>最新消息</h3>
    <el-divider></el-divider>
    <div class="backendHome" v-for="(item, index) in paginatedData" :key="index" @mouseover="showByIndex = index" @mouseout="showByIndex = 0">
      <router-link :to="{ path: '/bulletin/' + item.id }">
        <p>{{ item.title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { db } from '../../firebase'
export default {
  data () {
    return {
      paginatedData: [],
      showByIndex: 0
    }
  },
  methods: {
    getUser () {
      this.paginatedData = []
      db.database().ref('bulletin').once('value', (snapshot) => {
        snapshot.forEach(element => {
          this.paginatedData.push(element.val())
        })
      })
    }
  },
  created () {
    this.getUser()
  }
}
</script>

<style lang="scss">
.backendHome_container{
  position: relative;
  top: 90px;
  padding: 0 16px;
  .backendHome{
    a{
      color: black;
      text-decoration: none;
    }
  }
}
</style>
