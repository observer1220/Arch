<template>
  <div class="topbar">
    <a href="/" class="logo">
      <h1>潤隆建設有限公司</h1>
    </a>
    <div id="nav">
      <router-link to="/about">
        <span class="cName">關於潤隆</span>
        <span class="eName">About</span>
      </router-link>
      <router-link to="/news">
        <span class="cName">企業訊息</span>
        <span class="eName">News</span>
      </router-link>
      <router-link to="/case">
        <span class="cName">工程實績</span>
        <span class="eName">Properties</span>
      </router-link>
      <router-link to="/contact">
        <span class="cName">聯絡我們</span>
        <span class="eName">Contact</span>
      </router-link>
      <router-link v-show="isLogin === false" to="/users">
        <span class="cName">員工專區</span>
        <span class="eName">Staff</span>
      </router-link>
      <el-button type="danger" v-show="isLogin === true" class="logouts" @click="logouts">
        <span class="cName">系統登出</span>
        <span class="eName">Logout</span>
      </el-button>
    </div>
    <el-row class="rwdMenu">
      <el-col>
        <el-dropdown trigger="click">
          <span class="cName">開啟選單</span>
          <span class="eName">Menu</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link to="/about" class="rwdMenuLink">
                <span class="cName">關於潤隆</span>
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/news" class="rwdMenuLink">
                <span class="cName">企業訊息</span>
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/case" class="rwdMenuLink">
                <span class="cName">工程實績</span>
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/contact" class="rwdMenuLink">
                <span class="cName">聯絡我們</span>
              </router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link v-show="isLogin === false" to="/users" class="rwdMenuLink">
                <span class="cName">員工專區</span>
              </router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    logouts () {
      // 設定localStorage
      localStorage.removeItem('operationType')
      localStorage.removeItem('uid')
      // 設定Vuex
      this.$store.state.isLogin = false
      // 跳轉頁面
      this.$router.push('/')
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  }
}
</script>

<style lang="scss">
.topbar{
  display: flex;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 0;
  right:0;
  z-index: 99;
  background: white;
  height: 70px;
  opacity: 0.8;
  border-bottom: 3px solid olivedrab;
  #nav{
    display: flex;
    align-items: center;
    a{
      margin-right: 15px;
      .cName{
        display: block;
      }
      .eName{
        display: flex;
        justify-content: center;
        font-size: 12px;
      }
    }
  }
  .logo{
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    h1{
      font-weight: 900;
    }
    img{
      width: 50px;
      height: 50px;
    }
  }
  .logouts{
    padding: 5px;
    font-size: 20px;
    font-weight: 900;
    color: black;
    border: none;
    background: none;
    line-height: 1.45;
    .cName{
      display: block;
    }
    .eName{
      display: flex;
      justify-content: center;
      font-size: 12px;
    }
  }
  .rwdMenu{
    display: none;
    align-items: center;
    border: none;
    font-weight: 900;
    .cName{
      display: block;
      font-size: 18px;
    }
    .eName{
      display: flex;
      justify-content: center;
      font-size: 12px;
    }
  }
}

@media (min-width:320px) and (max-width:767px) {
  .topbar{
    #nav{
      display: none;
    }
    .rwdMenu{
      display: flex;
      .cName{
        color: black;
      }
      .eName{
        color: black;
      }
    }
  }
  .rwdMenuLink{
    text-decoration: none;
    color: black;
  }
}
</style>
