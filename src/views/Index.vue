<template>
  <div class="index_container">
    <div class="parallax_scroll">
      <img src="../assets/index/banner_2.jpg" alt="">
    </div>
    <PictureField/>
    <ProjectField/>
    <PartnerField/>
  </div>
</template>
<script>
import PictureField from '../components/PictureField'
import PartnerField from '../components/PartnerField'
import ProjectField from '../components/ProjectField'
export default {
  components: {
    PictureField,
    PartnerField,
    ProjectField
  }
}
</script>
<style lang="scss" scoped>
.index_container{
  position: relative;
  margin: 70px auto;
  .parallax_scroll{
    img{
      width: 100%;
      object-fit: cover;
    }
    animation: animation 1s linear;
    @keyframes animation {
      from {
        background-position: 0% 100%;
        opacity: 0;
      }
      to {
        background-position: 0% 0%;
        opacity: 1;
      }
    }
  }
}
</style>
