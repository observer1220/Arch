<template>
  <el-collapse-item name="1">
    <template slot="title">
      <div class="tableTitle">【查詢功能】</div>
    </template>
    <el-form :inline="true">
      <!-- 篩選功能：關鍵字搜尋 -->
      <el-input v-model="searchValue" placeholder="請輸入搜尋內容"></el-input>
    </el-form>
  </el-collapse-item>
</template>
<script>
export default {
  props: {
    paginatedData: Array
  },
  data () {
    return {
      searchValue: '',
      filteredData: []
    }
  },
  methods: {
    // 篩選功能：關鍵字搜尋
    filterResults () {
      // 當searchValue為空值時，顯示所有資料
      if (this.searchValue == 0) {
        this.$emit('updateSearch')
      } else {
        // 當searchValue有值時，將paginatedData進行過濾並放到filteredData當中
        this.filteredData = this.paginatedData.filter((item) => {
          // 將未分類的物件(item)全部攤開
          return Object.keys(item).some((key) => {
            // 將型別轉換成String，並用indexOf比對搜尋結果
            // 不符合關鍵字返還-1，符合關鍵字則返還其它數字，只顯示符合關鍵字的項目
            return String(item[key]).indexOf(this.searchValue) > -1
          })
        })
        this.$emit('updateSearch', this.filteredData)
      }
    }
  },
  watch: {
    searchValue () {
      this.filterResults()
    }
  },
  created () {
    this.filterResults()
  }
}
</script>
<style scoped>
.tableTitle{
  color:#409EFF;
  font-weight:900;
  font-size:18px;
}
.tableTitle span{
  color: black;
  font-size: 12px;
}
</style>
