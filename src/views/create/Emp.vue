<template>
  <div class="emp_container">
    <el-form :inline="true">
      <el-form-item style="margin:0">
        <h2 class="tableTitle">【員工列表】<span>共有{{ setData.length }}名員工</span></h2>
      </el-form-item>
      <el-form-item class="btnRight">
        <el-button type="primary" size ="small" @click='addUser()'>新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data='setData' border :default-sort = "{prop: 'create_time', order: 'ascending'}" stripe>
      <el-table-column type="index" label="序號" align='center' width="70"></el-table-column>
      <CreateTime/>
      <el-table-column prop="emp_name" label="員工名稱" align='center' width="100"></el-table-column>

      <el-table-column prop="enabled" label="帳號狀態(啟動/關閉)" align='center' width="95">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.enabled"  @change="editEnabled(scope.row)"
          :active-value="false" :inactive-value="true" active-color="#f56c6c" inactive-color="#409EFF"></el-switch>
        </template>
      </el-table-column>

      <el-table-column prop="email" label="電子郵件" align='center' width="250"></el-table-column>
      <el-table-column prop="identity" label="角色" align='center' width="100"></el-table-column>

      <el-table-column prop="operation" label="功能" align='center' width="200">
        <template slot-scope='scope'>
          <el-button type="warning"  size="small" @click='editUser(scope.row)'>編輯</el-button>
          <el-button type="danger" size="small" @click='deleteUser(scope.row)'>刪除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination v-if="!isFetching" :paginatedData="paginatedData" @update="updatePagination" class="empPagination"></Pagination>
    <EmpDialog :dialogUser='dialogUser' :registerUser="registerUser"/>
  </div>
</template>

<script>
import { db } from '../../firebase'
import Swal from 'sweetalert2'
import EmpDialog from '../../dialog/EmpDialog'
import Pagination from '../../components/Pagination'
import CreateTime from '../../components/CreateTime'
const moment = require('moment')
export default {
  components: {
    EmpDialog,
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
      registerUser: {
        company: '',
        create_user: '',
        enabled: true,
        emp_name: '',
        email: '',
        password: '',
        password2: '',
        shift: '',
        factory: '',
        dept: '',
        identity: '',
        id: ''
      }
    }
  },
  methods: {
    // 第1步驟: 從遠端取得所有【員工資料】
    getUser (filteredData) {
      this.paginatedData = []
      db.database().ref('user').once('value', (snapshot) => {
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
        title: '新增人員資料',
        option: 'add'
      }
      this.registerUser = {
        id: moment(date).valueOf(),
        create_time: moment(date).format('YYYY-MM-DD HH:mm:ss'),
        create_user: localStorage.getItem('uid'),
        emp_name: '',
        enabled: true,
        email: '',
        password: '',
        password2: '',
        shift: '',
        dept: '',
        identity: ''
      }
    },
    // 編輯【權限管理】帳號狀態
    editEnabled (row) {
      db.database().ref('user').child(row.id).update({
        enabled: row.enabled
      })
    },
    // 編輯人員資料
    editUser (row) {
      this.dialogUser = {
        show: true,
        title: '編輯人員資料',
        option: 'edit'
      }
      this.registerUser = {
        id: row.id,
        emp_name: row.emp_name,
        email: row.email,
        dept: row.dept,
        shift: row.shift,
        identity: row.identity
      }
    },
    deleteUser (row) {
      Swal.fire({
        title: `確定刪除 ${row.emp_name} 資料?`,
        showCancelButton: true,
        confirmButtonText: '確定',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          const dbRef = db.database().ref('user')
          dbRef.once('value', (snapshot) => {
            snapshot.forEach(childSnapshot => {
              const key = Number(childSnapshot.key)
              const comparedKey = Number(row.id)
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
.emp_container {
  position: relative;
  top: 90px;
  padding: 0 16px;
}
.tableTitle{
  color:#409EFF;
  font-weight:900;
  font-size:22px;
  padding:10px;
}
.tableTitle span{
  color: black;
  font-size: 12px;
}
.btnRight {
  display: flex;
  float: right;
}
.empPagination {
  text-align: right;
  margin-top: 10px;
}
</style>
