<template>
  <el-button type="danger" size="small" @click='deleteCompanyDoc(row)'>
    {{ $t('Button.delete') }}
  </el-button>
</template>
<script>
import Swal from 'sweetalert2'
export default {
  inject: ['reload'],
  props: {
    row: Object
  },
  methods: {
    // 功能: 刪除單筆資料
    deleteCompanyDoc (row) {
      Swal.fire({
        title: '確定刪除此項目？',
        showCancelButton: true,
        confirmButtonText: '確定',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          const pathname = window.document.location.pathname.split('/')[1]
          this.$axios.delete(`/api/t_${pathname}/delete/${row._id}`).then(res => {
            console.log(res)
            this.$message({
              message: '删除成功',
              type: 'error'
            })
            this.reload()
          })
        }
      })
    }
  }
}
</script>
