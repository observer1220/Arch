<template>
  <div class="bulletin_layout_container">
    <h3>企業資訊</h3>
    <el-divider></el-divider>
    <div class="bulletin" v-for="(item, index) in setData" :key="index" @mouseover="showByIndex = index" @mouseout="showByIndex = 0">
      <!-- 新聞標題 -->
      <router-link :to="{ path: '/news/' + item.id }">
        <p>{{ item.title }}</p>
      </router-link>
      <!-- 新聞照片 -->
      <div class="bulletin_photo" v-show="showByIndex === index">
        <div class="lid"></div>
        <div class="textbox">
          <div class="top">集團資訊</div>
          <div class="center">{{ item.title }}</div>
          <div class="readmore">Read More</div>
        </div>
        <img :src="item.cover_photo" alt="">
      </div>
    </div>
    <!-- 分頁功能 -->
    <Pagination v-if="!isFetching" :paginatedData="paginatedData" @update="updatePagination" class="newsPagination"></Pagination>
  </div>
</template>

<script>
import { db } from '../../firebase'
import Pagination from '../../components/Pagination'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      setData: [],
      paginatedData: [],
      isFetching: true,
      showByIndex: 0
    }
  },
  methods: {
    getCase () {
      db.database().ref('news').once('value', (snapshot) => {
        snapshot.forEach(element => {
          this.paginatedData.push(element.val())
          this.isFetching = false
        })
      })
    },
    // 第3步驟: 更新資料(擷取回傳資料)
    updatePagination (filteredData) {
      this.setData = filteredData
    }
  },
  created () {
    this.getCase()
  }
}
</script>
<style lang="scss">
.bulletin_layout_container{
  max-width: 1080px;
  margin: 90px auto;
  padding: 0 16px;
  position: relative;
  h3{
    padding: 10px;
  }
  .bulletin{
    /* 在此加入高度是因為a連結的圖片預設值為第1則新聞 */
    /* 若中間有空隙，移動鼠標時，側邊的圖片會一直跳掉 */
    max-width: 320px;
    height: 45px;
    font-size: 20px;
    font-weight: 900;
    padding: 10px;
    a{
      color: black;
      text-decoration: none;
      p{
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .bulletin_photo{
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 80px;
      img{
        max-width: 400px;
        height: 250px;
        object-fit: contain;
      }
      .lid{
        position: absolute;
        z-index: 1;
        bottom: 0;
        max-width: 400px;
        height: 110px;
        background: black;
        opacity: 0.7;
      }
      .textbox{
        position: absolute;
        bottom: 0;
        max-width: 320px;
        height: 110px;
        z-index: 10;
        color: white;
        .top{
          background: green;
          width: 100px;
          padding: 5px 10px;
        }
        .center{
          padding: 5px 10px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .readmore{
          display: flex;
          justify-content: flex-end;
          font-size: 12px;
          padding: 5px 10px;
        }
      }
    }
  }
}
.newsPagination{
  margin-top: 20px;
}
@media (min-width:320px) and (max-width:767px) {
  .bulletin_photo{
    display: none;
  }
}
</style>
