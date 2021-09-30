<template>
  <div class="PartnerField" id="partner">
    <h3><span>您的信賴</span> 是對我們最大的肯定</h3>
    <p>我們所提供的不只是一次性的服務。</p>
    <p>而是能陪伴客戶持續成長，突破在公司發展上的每一個瓶頸。</p>
    <div class="logo_area">
      <img src="https://upload.wikimedia.org/wikipedia/zh/thumb/3/36/Highwealth_Construction_logo.svg/440px-Highwealth_Construction_logo.svg.png" alt="">
      <img src="https://www.highwealth.com.tw/img/index/index-company-2-2.png" alt="">
      <img src="https://www.highwealth.com.tw/img/index/index-company-5-2.png" alt="">
      <img src="https://upload.wikimedia.org/wikipedia/zh/thumb/f/f3/JOY_PLAZA_logo.svg/480px-JOY_PLAZA_logo.svg.png" alt="">
    </div>
    <div class="logo_area">
      <img src="https://www.highwealth.com.tw/img/index/index-company-9-1.png" alt="">
      <img src="https://www.highwealth.com.tw/img/index/index-company-7-1.png" alt="">
      <img src="https://www.highwealth.com.tw/img/index/index-company-8-1.png" alt="">
      <img src="https://www.highwealth.com.tw/img/index/index-company-3-2.png" alt="">
    </div>
  </div>
</template>
<style lang="scss">
  .PartnerField{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 600px;
    h3{
      font-weight: 900;
      line-height: 2;
      span{
        color:#E87C19;
      }
    }
    .logo_area{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: wrap;
      img{
        filter: grayscale(1);
        margin: 20px;
        width: 180px;
        height: 70px;
        object-fit: contain;
        cursor: pointer;
        &:hover{
          transition-duration: .5s;
          filter: grayscale(0);
        }
      }
    }
  }
@media (min-width:320px) and (max-width:499px) {
  .logo_area{
    img{
      max-width: 70px;
    }
  }
}
</style>
