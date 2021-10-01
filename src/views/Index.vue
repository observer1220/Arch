<template>
  <div class="index_container">
    <div class="parallax_scroll">
      <div class="textbox">
        <h2>潤隆建設</h2>
        <p>創新穩健 台灣營造業領導品牌</p>
      </div>
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
    background-attachment: fixed;
    background-image: url('https://www.highwealth.com.tw/img/about/about-1.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    animation: animation 5s linear;
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
    .textbox{
      width: 50%;
      height: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
      h2{
        font-weight: 900;
      }
      p{
        font-weight: 900;
      }
    }
  }
}
</style>
