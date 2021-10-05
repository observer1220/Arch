<template>
  <div class="AccessField">
    <h3>交通索引 Access</h3>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1840.7145602083262!2d120.35402413101932!3d22.675064012003567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e1ab0a83c2001%3A0xb4b48b13ced60dee!2zODE06auY6ZuE5biC5LuB5q2m5Y2A5LuB5YuH6KW_5be3OeiZnw!5e0!3m2!1szh-TW!2stw!4v1632971978240!5m2!1szh-TW!2stw" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    <ul class="AccessInfo">
      <li>營業時間：週一至週五 09:00~18:00</li>
      <li>公司地址：高雄市仁武區仁勇西巷9號</li>
      <li>聯絡電話：0910-868-737</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.AccessField{
  max-width: 940px;
  height: 550px;
  margin: 0 auto;
  position: relative;
  h3{
    text-align: center;
    line-height: 60px;
  }
  .AccessInfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: black;
    opacity: 0.8;
    color: white;
    font-weight: 900;
    font-size: 16px;
    padding: 20px;
    position: absolute;
    bottom: 10px;
    right: 0;
  }
}
</style>
