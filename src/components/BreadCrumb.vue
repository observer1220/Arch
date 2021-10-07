<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }" @click="routeTo">{{ breadcrumbList }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  data () {
    return {
      breadcrumbList: []
    }
  },
  watch: {
    '$route' () {
      this.updateList()
    }
  },
  methods: {
    routeTo (routeTo) {
      console.log(routeTo)
      if (this.breadcrumbList[routeTo].link) {
        this.$router.push(this.breadcrumbList[routeTo].link)
      }
    },
    updateList () {
      this.breadcrumbList = this.$route.meta.title
      console.log(this.breadcrumbList)
    }
  },
  mounted () {
    this.updateList()
  }
}
</script>
