<template>
  <el-table-column prop="create_time" label="建立時間" align='center' width="180" sortable>
    <template slot-scope="scope">
      <el-icon name="time"></el-icon>
      <span style="margin-left:5px" :formatter="dateFormat(scope)">{{ dateFormat(scope) }}</span>
    </template>
  </el-table-column>
</template>
<script>
export default {
  methods: {
    // 日期格式化
    dateFormat (scope) {
      const moment = require('moment')
      const date = scope.row.create_time
      if (date === undefined) {
        return ''
      }
      return moment(date).format('YYYY-MM-DD HH:mm:ss')
    }
  }
}
</script>
