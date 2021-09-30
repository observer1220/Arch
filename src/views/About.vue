<template>
  <div class="about_container">
    <!-- 頁首Banner OK -->
    <div class="parallax_scroll">
      <div class="textbox">
        <h2>關於潤隆</h2>
        <p>在地五十年 深耕都會 建設偏鄉</p>
      </div>
    </div>
    <!-- 公司背景故事 -->
    <div class="main_box" id="company">
      <div class="main_text">
        <h2>公司背景</h2>
        <p>聖煒國際成立於2015年，專精於客製化軟體開發與異質系統平台整合。主要從事Windows桌面應用程式、網站應用平台、資料庫應用程式、手機APP開發、電子簽核與各類ERP系統整合。</p>
        <p>我們團隊囊括各領域人才，包含電子簽核開發、資深ERP系統人員與資料庫管理師。憑藉優質的服務與經年累月的開發經驗，我們能即時瞭解客戶需求，並提供相關解決方案，讓客戶端盡情享受系統帶來的便利性。</p>
      </div>
      <img src="../assets/about_banner2.jpg" alt="">
    </div>
    <!-- 視差圖2 -->
    <div class="parallax_scroll2"></div>
    <!-- 服務項目 -->
    <div class="main_box2" id="service">
      <div class="main_text2">
        <h2>服務項目</h2>
        <p>聖煒國際為 U-Office Force 一等一科技加值經銷商，也是客製化軟體之開發商。我們所提供的服務如下：</p>
        <ul>
          <li>UOF 電子表單開發與ERP系統、差勤系統、資安系統之整合</li>
          <li>客製化系統平台開發</li>
          <li>NFC、RFID 軟硬體整合開發</li>
          <li>WMS 倉儲管理系統開發</li>
          <li>條碼應用系統開發</li>
        </ul>
      </div>
      <img src="../assets/about_banner3.jpg" alt="">
    </div>
    <!-- 視差圖3 -->
    <div class="parallax_scroll3"></div>
    <AccessField/>
  </div>
</template>
<script>
import AccessField from '../components/AccessField'
export default {
  components: {
    AccessField
  }
}
</script>
<style lang="scss">
.about_container{
  margin-top: 70px;
  .parallax_scroll{
    height: 600px;
    background-attachment: fixed;
    background-image: url('https://images.unsplash.com/photo-1470004914212-05527e49370b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80');
    background-size: cover;
    animation: animation 5s linear;
    @keyframes animation {
      from {
        background-position: 0% 100%;
        opacity: 0%;
      }
      to {
        background-position: 0% 0%;
        opacity: 100%;
      }
    }
    .textbox{
      width: 50%;
      height: 400px;
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
  .parallax_scroll2{
    height: 600px;
    background-attachment: fixed;
    background-image: url('https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
    background-size: cover;
  }
  .parallax_scroll3{
    height: 600px;
    background-attachment: fixed;
    background-image: url('https://images.unsplash.com/photo-1496564203457-11bb12075d90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2019&q=80');
    background-size: cover;
  }
  .main_box{
    display: flex;
    max-width: 940px;
    height: 600px;
    margin: 0 auto;
    img{
      max-width: 500px;
      object-fit: contain;
    }
    .main_text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      P{
        text-indent: 32px;
      }
    }
  }
  .main_box2{
    display: flex;
    max-width: 940px;
    height: 600px;
    margin:0 auto;
    img{
      max-width: 500px;
      object-fit: contain;
    }
    .main_text2{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 20px;
      p{
        text-indent: 32px;
      }
    }
  }
}
/* 響應式設計 */
@media (min-width:500px) and (max-width:767px) {
  .about{
    .fade_in_title{
      font-size: 36px;
    }
  }
  .main_box{
    display: flex;
    flex-direction: column;
  }
  .main_box2{
    display: flex;
    flex-direction: column;
  }
}
@media (min-width:320px) and (max-width:499px) {
  .about{
    .fade_in_title{
      font-size: 24px;
    }
    .btn_cluster{
      button{
        font-size: 14px;
      }
    }
  }
  .main_box{
    display: flex;
    flex-direction: column;
    height: auto;
  }
  .main_box2{
    display: flex;
    flex-direction: column;
    height: auto;
  }
}
</style>
