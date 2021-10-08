<template>
  <div class="about_container">
    <div class="parallax_scroll">
      <img src="../assets/about/banner_2.jpg" alt="">
    </div>
    <!-- 公司背景故事 -->
    <div class="main_box" id="company">
      <div class="main_text">
        <h2>在最好的地點、蓋最好的房子、最好的家</h2>
        <p>30多年前，我們在高雄創業，奠定基礎後，一路往北發展，擴大到台南、台中、新竹、台北、新北、基隆等地，一步一腳印，紮實經營， 目前集團員工超過千人，興富發建設和潤隆建設兩家上市公司的資產，合計已超過3,200億元，維持在台灣前百大企業的排名，未來將進入前50大。</p>
        <p>2019年公司在新竹、台中、高雄的二房新案都創下熱銷成績，包括竹科潤隆開賣2個月熱銷500戶，台中烏日高鐵特區夢幻誠、八期市中心文心愛悦未開案預約突破1,000戶，市場上許多同業對於這樣的銷售成績都感到不可思議。</p>
        <p>但是，對我們來說，一切都在銷售策略的預期之中，這並不是我們有什麼特別的招數，只是很單純的，從客戶的角度出發，去思考使用者的需求，從基地位置的選擇、目標客戶的輪廓、建築外觀的設計、公設項目與風格、坪數的規劃，到客戶的自備款、每月貸款負擔…等，有了這些條件的齊備，才是一個建案銷售的完整思考。這就是我常分享的：在什麼時機、在哪裡、蓋什麼房子、賣給誰、賣多少錢? 有創新，才能創造需求、刺激消費、創造產品價值。</p>
      </div>
      <img src="https://www.highwealth.com.tw/img/about/about-2.jpg" alt="">
    </div>
    <!-- 視差圖2 -->
    <div class="parallax_scroll2"></div>
    <!-- 服務項目 -->
    <div class="main_box2" id="service">
      <div class="main_text2">
        <h2>建築know-how無法隨意取代，要挑戰同業不會的</h2>
        <p>興富發的使命感，是長期在建築營造本業精進，珍貴之處在於我們幾十年的know-how與經驗值，包括工程技術、市場判斷、設計規劃這三項，是無法被隨意取代的，我們追求的是規模、工程技術的提升、以及售後服務，提供客戶完美的家與居住經驗。</p>
        <p>30多年前我們就有自己的營造廠，齊裕是全國地下室挖最多的公司，B5、B6一年挖20個以上；20多年前我們就從日本聘請三井住友生產技術部長岩田吉弘擔任工程顧問，現在已經80多歲要退休了。發展過程中我們與國際團隊建立信任感，不斷地學習技術、流程與方法，直至今日才能累積無法被取代的know-how。</p>
        <p>多年前我們看到日本營造廠採用BIM建築資訊系統，以東京晴空樹為例，電腦與實際完成度達99%，於是我們也引進這樣的技術環節，提升溝通效率、減少施工過程中不必要的成本花費。齊裕營造有700多個員工，BIM建築資訊中心有100人的規模，與規劃部彼此互相搭配，從管線、配置、機電、裝修，在電腦中跑過一遍，提供各角度圖檔，透過手機截圖與施工工班溝通，快速又直接。 我們擁有土木工程背景，要做同業不會的，地下挖深、樓蓋高，會的人少，尤其困難做的更具挑戰，這就是我們的機會所在。</p>
      </div>
      <div class="main_text2">
        <h2>一年交屋4,000戶，最關心的是「客戶要什麼?」</h2>
        <p>房地產的區域不是絕對，時機才是最重要的。在什麼時機、在哪裡、蓋什麼房子、賣給誰、賣多少錢? 有創新，才能創造需求、刺激消費、創造產品價值。而客戶要什麼?這是最重要的。我們在日本參訪時看到，把房間、廚房、客廳打通，媽媽與孩子可以共享空間，是不是也能夠引進給台灣的客戶呢?目前我們一年交屋4,000戶，最關心也最瞭解客戶要什麼，能夠持續創新、提供客戶與時俱進的好房，才是經營的永久之道。</p>
      </div>
      <div class="main_text2">
        <h2>要有使命感，在行業中做到頂尖</h2>
        <p>公司知名度、客戶信任度，可以幫助我們找到好人才，找到合適的夥伴、放在對的工作崗位，讓團隊能夠發揮最優秀的戰力。人生有許多目標，生小孩、買車、買房、旅行，若目標清楚，工作會更開心，期許秉持「做到頂尖」的使命感，以強大的意志力面對各種困難、持續創造新記錄。</p>
      </div>
    </div>
    <OrganizationField/>
    <AccessField/>
  </div>
</template>
<script>
import OrganizationField from '../components/OrganizationField'
import AccessField from '../components/AccessField'
export default {
  components: {
    OrganizationField,
    AccessField
  }
}
</script>
<style lang="scss">
.about_container{
  position: relative;
  margin: 70px auto;
  .parallax_scroll{
    img{
      width: 100%;
      height: auto;
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
  .parallax_scroll2{
    width: 100%;
    height: 500px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-image: url('https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
    background-size: cover;
  }
  .main_box{
    max-width: 1280px;
    display: flex;
    margin: 0 auto;
    .main_text{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      h2{
        font-weight: 900;
        line-height: 2;
      }
      P{
        text-indent: 32px;
      }
    }
    img{
      max-width: 300px;
      object-fit: contain;
    }
  }
  .main_box2{
    max-width: 1280px;
    margin: 0 auto;
    .main_text2{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px;
      h2{
        font-weight: 900;
        line-height: 2;
      }
      P{
        text-indent: 32px;
      }
    }
    img{
      max-width: 500px;
      object-fit: contain;
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
@media (min-width:320px) and (max-width:667px) {
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
    align-items: center;
  }
  .main_box2{
    display: flex;
    flex-direction: column;
  }
}
</style>
