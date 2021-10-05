<template>
  <div class="users">
    <h2>員工專區</h2>
    <el-form :model="user" :rules="rules" ref="loginForm" class="loginForm">
      <el-form-item prop="email">
        <el-input name="email" auto-complete="on" v-model="user.email" placeholder="請輸入Email"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="user.password" placeholder="請輸入密碼" show-password></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登入</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { db } from '../firebase'
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { type: 'email', required: true, message: '請輸入正確的Email', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密碼不得為空', trigger: 'blur' },
          { min: 6, max: 30, message: '密碼錯誤', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm () {
      // Firebase身份驗證
      db.auth().signInWithEmailAndPassword(this.user.email, this.user.password).then((userCredential) => {
        // 設定localStorage
        localStorage.setItem('operationType', userCredential.operationType)
        localStorage.setItem('uid', userCredential.user.uid)
        // 設定Vuex
        this.$store.state.isLogin = true
        // 跳轉頁面
        this.$router.push('/backstage')
      }).catch((error) => {
        console.log(error.message)
      })
    }
  }
}
</script>
<style  lang="scss">
.users{
  max-width: 450px;
  margin: 90px auto;
  padding-left: 20px;
  padding-right: 20px;
}
</style>
