<template>
  <div class="backstage_container">
    <LeftMenu></LeftMenu>
    <router-view />
  </div>
</template>

<script>
import LeftMenu from '../components/LeftMenu'
export default {
  components: {
    LeftMenu
  }
}
</script>
<style lang="scss">
.backstage_container {
  display: flex;
}
</style>
