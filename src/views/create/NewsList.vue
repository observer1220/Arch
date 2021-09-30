<template>
  <div class="newsList_container">
    <el-form :inline="true">
      <el-form-item style="margin:0">
        <h2 class="tableTitle">【企業訊息列表】<span>共有{{ setData.length }}篇新聞</span></h2>
      </el-form-item>
      <el-form-item class="btnRight">
        <el-button type="primary" size ="small" @click='addUser()'>新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data='setData' border :default-sort = "{prop: 'create_time', order: 'ascending'}" stripe>
      <el-table-column type="index" label="序號" align='center' width="70"></el-table-column>
      <CreateTime/>
      <el-table-column prop="title" label="訊息標題" align='left' width="550"></el-table-column>

      <el-table-column prop="operation" label="功能" align='center' width="180">
        <template slot-scope='scope'>
          <el-button type="warning"  size="small" @click='editUser(scope.row)'>編輯</el-button>
          <el-button type="danger" size="small" @click='deleteUser(scope.row)'>刪除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分頁功能 -->
    <Pagination v-if="!isFetching" :paginatedData="paginatedData" @update="updatePagination" class="newsListPagination"></Pagination>
    <NewsDialog :dialogUser='dialogUser' :caseForm="caseForm"/>
  </div>
</template>

<script>
import { db } from '../../firebase'
import Swal from 'sweetalert2'
import NewsDialog from '../../dialog/NewsDialog'
import Pagination from '../../components/Pagination'
import CreateTime from '../../components/CreateTime'
const moment = require('moment')
export default {
  components: {
    NewsDialog,
    Pagination,
    CreateTime
  },
  data () {
    return {
      setData: [],
      paginatedData: [],
      isFetching: true,
      dialogUser: {
        show: false,
        title: '',
        option: ''
      },
      caseForm: {
        title: '',
        cover_photo: '',
        article: ''
      }
    }
  },
  methods: {
    // 取得所有【員工資料】
    getUser (filteredData) {
      this.paginatedData = []
      db.database().ref('news').once('value', (snapshot) => {
        snapshot.forEach(element => {
          this.paginatedData.push(element.val())
          this.isFetching = false
        })
      })
      if (filteredData !== undefined) {
        this.setData = filteredData
      } else {
        this.setData = this.paginatedData
      }
    },
    // 第3步驟: 更新資料(擷取回傳資料)
    updatePagination (filteredData) {
      this.setData = filteredData
    },
    // 新增人員資料
    addUser () {
      const date = new Date()
      this.dialogUser = {
        show: true,
        title: '新增企業訊息',
        option: 'add'
      }
      this.caseForm = {
        id: moment(date).valueOf(),
        create_time: moment(date).format('YYYY-MM-DD HH:mm:ss'),
        create_user: localStorage.getItem('uid'),
        title: '',
        cover_photo: '',
        article: ''
      }
    },
    // 編輯人員資料
    editUser (row) {
      this.dialogUser = {
        show: true,
        title: '編輯企業訊息',
        option: 'edit'
      }
      this.caseForm = {
        title: row.title,
        article: row.article,
        cover_photo: row.cover_photo,
        id: row.id
      }
    },
    deleteUser (row) {
      Swal.fire({
        title: `確定刪除 ${row.title}?`,
        showCancelButton: true,
        confirmButtonText: '確定',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          const dbRef = db.database().ref('bulletin')
          dbRef.once('value', (snapshot) => {
            snapshot.forEach(childSnapshot => {
              const key = Number(childSnapshot.key)
              const comparedKey = Number(row.id)
              console.log(key, comparedKey)
              if (key === row.id) {
                dbRef.child(comparedKey).remove()
                this.$message({
                  message: '删除成功',
                  type: 'error'
                })
                this.getUser()
              }
            })
          })
        }
      })
    }
  },
  created () {
    this.getUser()
  }
}
</script>
<style>
.newsList_container{
  position: relative;
  top: 90px;
  padding: 0 16px;
}
.newsListPagination{
  text-align: right;
  margin-top: 10px;
}
</style>
