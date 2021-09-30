<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="main" v-if="isRouterAlive"></router-view>
    <router-view name="footer"></router-view>
    <router-view name="scrollTop"></router-view>
  </div>
</template>
<script>
export default {
  provide () {
    return {
      reload: this.reload
    }
  },
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  }
}
</script>
<style lang="scss">
/* #E87C19 夕陽橘 */
/* #F4C18C 皮膚色 */
/* #30405A 藏青色 */
/* #7C8494 老鼠灰 */
/* #DFDAD4 白灰色 */
html, body {
  height: 100%;
}
ul{
  list-style: none;
}
#app {
  min-height: 100%;
  user-select: none;
  position: relative;
  font-family: 'Marcellus', 'Noto Sans TC', "Microsoft JhengHei";
  color: black;
  padding-bottom: 144px;
  #nav {
    a {
      font-size: 20px;
      font-weight: bold;
      text-decoration: none;
      color: black;
      &.router-link-exact-active {
        color: #E87C19;
      }
    }
  }
}

</style>
