<template>
  <div class="PictureField">
    <div class="banner_1">
      <div class="img_div">
        <img class="pic1" src="https://images.unsplash.com/photo-1609147110688-83b5fd1288e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="">
        <router-link to="/about">
          <div class="mask1">
            <h3>關於潤隆</h3>
            <p>About</p>
          </div>
        </router-link>
      </div>
      <div class="img_div">
        <img class="pic2" src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" alt="">
        <router-link to="/news">
          <div class="mask2">
            <h3>企業訊息</h3>
            <p>News</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="banner_2">
      <div class="img_div">
        <img class="pic3" src="https://images.unsplash.com/photo-1613858749733-3a3e456e3d9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="">
        <router-link to="/case">
          <div class="mask3">
            <h3>工程實績</h3>
            <p>Properties</p>
          </div>
        </router-link>
      </div>
      <div class="img_div">
        <img class="pic3" src="https://images.unsplash.com/photo-1462206092226-f46025ffe607?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=874&q=80" alt="">
        <router-link to="/contact">
          <div class="mask3">
            <h3>聯絡我們</h3>
            <p>Contact</p>
          </div>
        </router-link>
      </div>
      <div class="img_div">
        <img class="pic3" src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="">
        <router-link to="/users">
          <div class="mask3">
            <h3>員工專區</h3>
            <p>Staff</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.PictureField{
  max-width: 1080px;
  margin: 60px auto;
  .banner_1{
    display: flex;
    justify-content: center;
    .img_div{
      position: relative;
      margin: 5px;
      .pic1{
        max-width: 100%;
        max-height: 270px;
        object-fit: cover;
      }
      .pic2{
        max-width: 100%;
        max-height: 270px;
        object-fit: cover;
      }
      .mask1{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(70deg, black, rgb(97, 95, 95));
        opacity: 0.5;
        color: white;
        h3{
          font-size: 24px;
          font-weight: 900;
        }
        &:hover{
          opacity: 0.8;
          transition-duration: 0.5s;
        }
      }
      .mask2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(70deg, black, rgb(97, 95, 95));
        opacity: 0.5;
        color: white;
        h3{
          font-size: 24px;
          font-weight: 900;
        }
        &:hover{
          opacity: 0.8;
          transition-duration: 1s;
        }
      }
    }
  }
  .banner_2{
    display: flex;
    justify-content: center;
    .img_div{
      position: relative;
      margin: 5px;
      .pic3{
        max-width: 100%;
        max-height: 270px;
        object-fit: cover;
      }
      .mask3{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(70deg, black, rgb(97, 95, 95));
        opacity: 0.5;
        color: white;
        h3{
          font-size: 24px;
          font-weight: 900;
        }
        &:hover{
          opacity: 0.8;
          transition-duration: 1s;
        }
      }
    }
  }
}
</style>
