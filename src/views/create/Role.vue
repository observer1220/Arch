<template>
  <div class="role_container">
    <el-form :inline="true">
      <el-form-item style="margin:0">
        <h2 class="tableTitle">【權限管理】<span>共有{{ setData.length }}種角色</span></h2>
      </el-form-item>
      <el-form-item class="btnRight">
        <el-button type="primary" size ="small" @click='addRole()'>新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data='setData' border :default-sort = "{prop: '', order: 'ascending'}" stripe>
      <el-table-column type="index" label="序號" align='center' width="70"></el-table-column>
      <CreateTime/>
      <el-table-column prop="role_name" label="角色名稱" align='center' width="80"></el-table-column>
      <el-table-column prop="enabled" label="是否有效(Y/N)" align='center' width="95">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.enabled"  @change="editEnabled(scope.row)"
          :active-value="false" :inactive-value="true" active-color="#f56c6c" inactive-color="#409EFF"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="系統功能" align='center' width="200">
        <template slot-scope='scope'>
          <span v-for="item in scope.row.function" :key="item.name" >
            <el-tag v-if="item.checked == true" type="info" style="font-size:14px; margin:2px;" >{{ item.name }}</el-tag>
          </span>
        </template>
      </el-table-column>
      <el-table-column label="角色權限" align='center' width="200">
        <template slot-scope='scope'>
          <span v-for="item in scope.row.role_privilege" :key="item.name" >
            <el-tag v-if="item.checked == true" type="info" style="font-size:14px; margin:2px;" >{{ item.name }}</el-tag>
          </span>
        </template>
      </el-table-column>

      <el-table-column prop="operation" align='center' label="功能" fixed="right" width="190">
        <template slot-scope='scope'>
          <el-button type="warning"  size="small" @click='editRole(scope.row, scope)'>編輯</el-button>
          <el-button type="danger" size="small" @click='deleteRole(scope.row, scope.$index)'>刪除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <Pagination v-if="!isFetching" :paginatedData="paginatedData" @update="updatePagination" class="empPagination"></Pagination>
    <RoleDialog :dialog='dialog' :form="form"/>
  </div>
</template>
<script>
import Swal from 'sweetalert2'
import { db } from '../../firebase'
import RoleDialog from '../../dialog/RoleDialog'
import CreateTime from '../../components/CreateTime'
import Pagination from '../../components/Pagination'
const moment = require('moment')
export default {
  inject: ['reload'],
  components: {
    RoleDialog,
    Pagination,
    CreateTime
  },
  data () {
    return {
      setData: [],
      paginatedData: [],
      isFetching: true,
      dialog: {
        show: false,
        title: '',
        option: ''
      },
      form: {
        role_name: '',
        role_desc: '',
        role_privilege: [],
        create_user: '',
        enabled: true,
        id: ''
      }
    }
  },
  methods: {
    // 取得所有【員工資料】
    getRole (filteredData) {
      this.paginatedData = []
      db.database().ref('role').on('value', (snapshot) => {
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
    // 第3步驟: 更新資料(擷取從Pagination傳來的資料)
    updatePagination (filteredData) {
      this.setData = filteredData
    },
    // 新增人員資料
    addRole () {
      const date = new Date()
      this.dialog = {
        show: true,
        title: '新增角色',
        option: 'add'
      }
      this.form = {
        id: moment(date).valueOf(),
        create_time: moment(date).format('YYYY-MM-DD HH:mm:ss'),
        create_user: localStorage.getItem('uid'),
        role_name: '',
        role_desc: '',
        function: [
          { id: 1, name: '系統資料建檔', checked: false, value: 1 },
          { id: 3, name: '設定', checked: false, value: 32 }
        ],
        role_privilege: [
          { id: 1, name: '查詢', checked: false, value: 1 },
          { id: 2, name: '新增', checked: false, value: 2 },
          { id: 3, name: '編輯', checked: false, value: 4 },
          { id: 4, name: '匯出', checked: false, value: 8 },
          { id: 5, name: '審核', checked: false, value: 16 },
          { id: 6, name: '刪除', checked: false, value: 32 }
        ]
      }
    },
    // 編輯【權限管理】帳號狀態
    editEnabled (row) {
      db.database().ref('role').child(row.id).update({
        enabled: row.enabled
      })
    },
    // 編輯人員資料
    editRole (row) {
      this.dialog = {
        show: true,
        title: '編輯角色',
        option: 'edit'
      }
      this.form = {
        role_name: row.role_name,
        role_desc: row.role_desc,
        function: row.function,
        role_privilege: row.role_privilege,
        id: row.id
      }
    },
    deleteRole (row) {
      Swal.fire({
        title: `確定刪除 ${row.role_name} 資料?`,
        showCancelButton: true,
        confirmButtonText: '確定',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          const dbRef = db.database().ref('role')
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
                this.reload()
              }
            })
          })
        }
      })
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  created () {
    this.getRole()
  }
}
</script>
<style>
.role_container{
  position: relative;
  top: 90px;
  padding: 0 16px;
}
</style>
