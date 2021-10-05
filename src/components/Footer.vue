<template>
  <div class="footer">
    <ul class="left_side">
      <li>此站為切版範本，非潤隆官網</li>
      <li>營業時間：週一至週五 09:00~18:00</li>
      <li>聯絡電話：0910-868-737</li>
      <li>© 聖煒國際有限公司</li>
      <li>Saintway International Co., Ltd</li>
      <li>All rights reserved | <router-link class="privacy_policy" to="/privacy">隱私權條款</router-link></li>
    </ul>
    <div class="right_side">
      <div class="list">
        <router-link to="/">關於潤隆</router-link>
        <router-link to="/news">企業訊息</router-link>
      </div>
      <div class="list">
        <router-link to="/contact">聯絡我們</router-link>
        <router-link to="/case">工程實績</router-link>
      </div>
      <div class="list">
        <router-link to="/users">員工專區</router-link>
        <a href="https://www.104.com.tw/company/5nid4d4" target="_blank">人才招募</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.footer{
  display: flex;
  justify-content: space-around;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  background: #30405A;
  color: white;
  ul{
    margin: 10px;
    font-size: 14px;
    li{
      list-style: none;
    }
  }
}
.list{
  display: flex;
  flex-direction: column;
  justify-content: center;
  a{
    font-weight: 900;
    color: white;
    text-decoration: none;
    margin: 10px;
    &:hover{
      transition: 0.5s;
      color: #E87C19;
    }
  }
}
.privacy_policy{
  text-decoration: none;
  color: white;
  &:hover{
    color: #E87C19;
  }
}
@media (min-width:320px) and (max-width:499px) {
  .footer{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
