<template>
  <div class="OrganizationField">
    <h2>組織架構 Organization</h2>
    <img class="screenSize" src="https://www.highwealth.com.tw/img/about/about-people.png" alt="">
    <img class="mobileSize" src="https://www.highwealth.com.tw/img/about/about-people-m.png" alt="">
  </div>
</template>
<style lang="scss">
.OrganizationField{
  margin: 70px 0;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(245, 240, 240);
  h2{
    line-height: 2;
    font-weight: 900;
  }
}
.screenSize{
  max-width: 100%;
  display: black;
}
.mobileSize{
  display: none;
}
@media (min-width:320px) and (max-width:767px) {
  .screenSize{
    display: none;
  }
  .mobileSize{
    max-width: 100%;
    display: block;
  }
}
</style>
