<template>
  <div class="case_layout_container">
    <h3>工程實績</h3>
    <el-divider></el-divider>
    <div class="case_layout">
      <!-- 分類表 -->
      <div class="case_left">
        <h4><strong>依地區分類</strong></h4>
        <el-select v-model="selectedCounty" placeholder="請選擇區域" @change="getCase(selectedCounty)" style="margin-bottom:10px">
          <el-option v-for="item in CountyList" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </div>
      <!-- 工程實績縮圖 -->
      <ul class="case_right" >
        <li v-for="item in paginatedData" :key="item.id">
          <router-link :to="{ path: '/case/' + item.title }">
            <img class="thumbnail" :src="item.thumbnail" alt="">
          </router-link>
          <h2 class="article_title">{{ item.title }}</h2>
          <p>{{ item.county }} {{ item.district }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { db } from '../../firebase'
export default {
  data () {
    return {
      CountyList: ['顯示全部', '高雄市', '基隆市', '新北市'],
      selectedCounty: '',
      typeList: ['透天別墅', '精品豪宅', '商辦空間'],
      pingList: ['21~30坪', '31~40坪', '41~50坪', '51坪以上'],
      paginatedData: []
    }
  },
  methods: {
    getCase (item) {
      this.paginatedData = []
      db.database().ref('article').once('value', (snapshot) => {
        snapshot.forEach(element => {
          if (element.val().county === item) {
            this.paginatedData.push(element.val())
          } else if (item === undefined || item === '顯示全部') {
            this.paginatedData.push(element.val())
          }
        })
      })
    }
  },
  created () {
    this.getCase()
  }
}
</script>
<style lang="scss">
.case_layout_container{
  max-width: 940px;
  margin: 90px auto;
  position: relative;
  .case_layout{
    display: flex;
    .case_left{
      max-width: 15%;
      display: flex;
      flex-direction: column;
      li{
        margin: 5px;
      }
    }
    .case_right{
      max-width: 85%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      li{
        margin: 5px;
        .thumbnail{
          max-width: 320px;
          height: 320px;
          object-fit: cover;
        }
        .article_title{
          font-size: 24px;
          font-weight: 900;
        }
      }
    }
  }
}
@media (min-width:320px) and (max-width:767px) {
  .case_layout_container{
    h3{
      text-align: center;
      font-weight: 900;
    }
    .case_layout{
      display: flex;
      align-items: center;
      flex-direction: column;
      /* justify-content: center; */
      .case_left{
        max-width: 100%;
      }
    }
  }
}
</style>
