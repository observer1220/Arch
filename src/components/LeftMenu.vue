<template>
  <el-row class="menu_page">
    <el-col>
      <el-menu mode="vertical" active-text-color="#409eff" class="el-menu-vertical-demo" unique-opened :collapse="isCollapse">
          <router-link to="/backstage">
            <el-menu-item index="0">
              <i class="fa fa-margin fa-home"></i>
              <span slot="title">首頁</span>
            </el-menu-item>
          </router-link>
          <template v-for="item in items">
            <el-submenu v-if="item.children" :index="item.path" :key="item.path">
              <template slot="title">
                <i :class="'fa fa-margin '+item.icon"></i>
                <span slot="title">{{ item.name }}</span>
              </template>
              <router-link v-for="(citem, cindex) in item.children" :to="citem.path" :key="cindex">
                <el-menu-item :index='citem.path'>
                  <span slot="title">{{ citem.name }}</span>
                </el-menu-item>
              </router-link>
            </el-submenu>
          </template>
        </el-menu>
      </el-col>
  </el-row>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          icon: 'fa-id-card',
          name: '系統資料建檔',
          path: 'create',
          children: [
            {
              name: '權限管理',
              path: 'role'
            },
            {
              name: '員工列表',
              path: 'emp'
            },
            {
              name: '企業新聞',
              path: 'newsList'
            },
            {
              name: '工程實績',
              path: 'caseList'
            },
            {
              name: '內部公告',
              path: 'bulletinList'
            }
          ]
        },
        {
          name: '設定',
          path: 'setting',
          children: [
            {
              name: '語言',
              path: 'language'
            }
          ]
        }
      ],
      arr: [],
      orderByName: []
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    isCollapse () {
      return this.$store.state.isCollapse
    }
  }
}
</script>
<style lang="scss">
.menu_page {
  position: fixed;
  top: 70px;
  left: 0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
.el-menu-vertical-demo {
  font-weight: 900;
  a {
    text-decoration: none;
  }
}
</style>
