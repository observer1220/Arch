<template>
  <el-row>
    <el-col>
      <el-pagination v-if='paginations.total > 0'
        @current-change='handleCurrentChange'
        @size-change='handleSizeChange'
        :current-page.sync='paginations.page_index'
        :page-sizes="paginations.page_sizes"
        :page-size="paginations.page_size"
        :layout="paginations.layout"
        :total="paginations.total">
      </el-pagination>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    paginatedData: Array
  },
  data () {
    return {
      // 分頁組件相關資料
      paginations: {
        // 總項目數、每頁顯示數、上一頁、分頁、下一頁、跳頁元素
        layout: 'sizes, prev, pager, next, jumper',
        // 當前頁面(起始頁)
        page_index: 1,
        // 當前數據的總數
        total: 0,
        // 預設單頁顯示數
        page_size: 5,
        // 每頁顯示數
        page_sizes: [5, 10, 20, 50, 100]
      },
      filteredData: []
    }
  },
  methods: {
    // 第2步驟: 分頁功能：設置分頁數據
    setPaginations () {
      // 當前總頁數
      this.paginations.total = this.paginatedData.length
      // 當前頁數索引為第1頁
      this.paginations.page_index = 1
      // 當前頁數項目為5項
      this.paginations.page_size = 5
      // 設置默認分頁數據：filter參數中必須有item，否則將無法顯示項目
      this.filteredData = this.paginatedData.filter((item, index) => {
        // 返還index且其值需小於單頁顯示數(page_size)
        return index < this.paginations.page_size
      })
      this.$emit('update', this.filteredData)
    },
    // 分頁功能：處理分頁問題(包含上一頁與下一頁)
    handleCurrentChange (page) {
      const table = this.paginatedData.filter((item, index) => {
        return index >= this.paginations.page_size * (page - 1)
      })
      // 設置默認分頁數據：filter參數中必須有item，否則將無法顯示項目
      this.filteredData = table.filter((item, index) => {
        // 返還index且其值需小於page_size預設單頁顯示數
        return index < this.paginations.page_size
      })
      this.$emit('update', this.filteredData)
    },
    // 分頁功能：處理每頁顯示數(page_size)
    handleSizeChange (pageSize) {
      // 當前頁數索引為第1頁
      this.paginations.page_index = 1
      // 當前頁數項目為參數值page_size，若page_size為20，則一次顯示20個項目
      this.paginations.page_size = pageSize
      // 設置默認分頁數據：filter參數中必須有item，否則將無法顯示項目
      this.filteredData = this.paginatedData.filter((item, index) => {
        // 返還index且其值需小於page_size預設單頁顯示數
        return index < pageSize
      })
      this.$emit('update', this.filteredData)
    }
  },
  created () {
    this.setPaginations()
  }
}
</script>
