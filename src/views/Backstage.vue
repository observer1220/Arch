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
<style>
.backstage_container {
  display: flex;
}
</style>
