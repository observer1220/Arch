<template>
  <div>
    <el-dialog :title="dialogUser.title" :visible.sync="dialogUser.show" :close-on-click-modal='false'
    :close-on-press-escape='false' :modal-append-to-body="false">
      <div class="form">
        <el-form :model="registerUser" ref="registerUser" :rules="rules" label-width="120px" style="margin:10px;width:auto;">
          <el-form-item label="員工編號" prop="id" style="display:none">
            <el-input v-model="registerUser.id" disabled></el-input>
          </el-form-item>

          <el-form-item label="建立人員" prop="create_user" style="display:none">
            <el-input v-model="registerUser.create_user" disabled></el-input>
          </el-form-item>

          <el-form-item label="建立時間" prop="create_time" style="display:none">
            <el-input v-model="registerUser.create_time" disabled></el-input>
          </el-form-item>

          <el-form-item label="帳號狀態" prop="enabled" style="display:none">
            <template slot-scope="scope">
              <el-switch v-model="registerUser.enabled"  @change="editEnabled(scope.row)"
              :active-value="false" :inactive-value="true" active-color="#f56c6c" inactive-color="#409EFF"></el-switch>
            </template>
          </el-form-item>

            <el-form-item label="員工名稱" prop="emp_name">
              <el-input v-model="registerUser.emp_name" type="name" placeholder="員工名稱"></el-input>
            </el-form-item>
            <el-form-item label="電子郵件" prop="email">
              <el-input v-model="registerUser.email" type="name" placeholder="電子郵件"></el-input>
            </el-form-item>

          <el-form-item v-if="this.dialogUser.option == 'add'" label="密碼" prop="password">
            <el-input v-model="registerUser.password" placeholder="密碼" type="password" show-password></el-input>
          </el-form-item>
          <el-form-item v-if="this.dialogUser.option == 'add'" label="再次確認密碼" prop="password2">
            <el-input v-model="registerUser.password2" placeholder="再次輸入密碼" type="password" show-password></el-input>
          </el-form-item>

            <el-form-item label="部門名稱" prop="dept">
              <el-select v-model="registerUser.dept" placeholder="部門名稱">
                <el-option v-for="item in departmentList" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="班別" prop="shift">
              <el-select v-model="registerUser.shift" placeholder="班別">
                <el-option v-for="item in shiftList" :key="item" :label="item" :value="item"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="選擇身份" prop="identity">
              <el-select v-model="registerUser.identity" placeholder="請選擇身份">
                <el-option v-for="item in roleList" :key="item.id" :label="item.role_name" :value="item.role_name"></el-option>
              </el-select>
            </el-form-item>
          <el-form-item>
              <el-button @click="dialogUser.show = false">取消</el-button>
              <el-button type="primary" @click='onSubmit("registerUser")'>送出</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { db } from '../firebase'
export default {
  inject: ['reload'],
  props: {
    dialogUser: Object,
    registerUser: Object
  },
  data () {
    var validatePass2 = (rule, value, callback) => {
      if (value !== this.registerUser.password) {
        callback(new Error('密碼不一致'))
      } else {
        callback()
      }
    }
    return {
      departmentList: ['機電整合部', '軟體開發部', '倉儲管理部', '行政辦公室'],
      shiftList: ['早班', '中班', '晚班'],
      roleList: [],
      rules: {
        emp_name: [
          { required: true, message: '請輸入名稱', trigger: 'blur' },
          { min: 2, max: 30, message: '名稱錯誤', trigger: 'blur' }
        ],
        email: [
          { type: 'email', required: true, message: 'Email格式錯誤', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '請輸入密碼', trigger: 'blur' },
          { min: 6, max: 30, message: '密碼需介於6~30個字元', trigger: 'blur' }
        ],
        password2: [
          { required: true, message: '請再次輸入密碼', trigger: 'blur' },
          { min: 6, max: 30, message: '密碼需介於6~30個字元', trigger: 'blur' },
          { validator: validatePass2, trigger: 'blur' }
        ],
        dept: [
          { required: true, message: '請選擇部門', trigger: ['blur', 'change'] }
        ],
        shift: [
          { required: true, message: '請選擇班別', trigger: ['blur', 'change'] }
        ],
        identity: [
          { required: true, message: '請選擇身份', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    getRole () {
      db.database().ref('role').once('value', (snapshot) => {
        snapshot.forEach(element => {
          this.roleList.push(element.val())
        })
      })
    },
    onSubmit (registerUser) {
      // this.$refs[form.validate]為驗證用語法
      this.$refs[registerUser].validate(valid => {
        // valid為布林值，當表單有資料時為true，無資料時為false，當表單有資料時提交數據
        if (valid) {
          if (this.dialogUser.option === 'add') {
            db.database().ref('user').child(this.registerUser.id).set({
              id: this.registerUser.id,
              create_time: this.registerUser.create_time,
              create_user: this.registerUser.create_user,
              emp_name: this.registerUser.emp_name,
              enabled: this.registerUser.enabled,
              email: this.registerUser.email,
              password: this.registerUser.password,
              password2: this.registerUser.password2,
              dept: this.registerUser.dept,
              shift: this.registerUser.shift,
              identity: this.registerUser.identity
            })
          } else if (this.dialogUser.option === 'edit') {
            db.database().ref('user').child(this.registerUser.id).update({
              emp_name: this.registerUser.emp_name,
              email: this.registerUser.email,
              dept: this.registerUser.dept,
              shift: this.registerUser.shift,
              identity: this.registerUser.identity
            })
          }
          this.$message({
            message: '保存成功！',
            type: 'success'
          })
          this.dialogUser.show = false
          // 重整頁面
          this.reload()
        }
      })
    }
  },
  created () {
    this.getRole()
  }
}
</script>
