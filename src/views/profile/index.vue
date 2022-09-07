<template>
  <div>
    <div>
      <img src="~@/assets/imgs/bg.png" alt="" class="bgi" />
    </div>
    <div class="box">
      <div class="touxiang">
        <img src="@/assets/imgs/avatar.png" alt="" />
      </div>
      <p class="username">游客</p>
      <van-button type="primary" to="/layout/login" class="btn"
        >去登录</van-button
      >
    </div>
    <!-- 宫格 -->
    <van-grid :column-num="3" :border="false" icon-size="20" :clickable="true">
      <van-grid-item icon="star-o" text="我的收藏" to="/favorate" />
      <van-grid-item icon="wap-home-o" text="我的出租" to="/rent" />
      <van-grid-item icon="clock-o" text="看房记录" to="/kanfang" />
      <van-grid-item icon="send-gift-o" text="成为房主" to="fangzhu" />
      <van-grid-item icon="contact" text="个人资料" to="mydata" />
      <van-grid-item icon="service-o" text="联系我们" to="contactus" />
    </van-grid>
    <div class="banner">
      <img src="@/assets/imgs/join.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.bgi {
  width: 100%;
}

.box {
  position: absolute;
  background: #fff;
  width: 85%;
  height: 27%;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 10px 3px #ddd;
  z-index: 9999;
  .btn {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%);
    height: 35px;
    border-radius: 5px;
  }

  .touxiang {
    position: absolute;
    top: -15%;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    background-color: #fff;
    border-radius: 40px;
    box-shadow: 0 0 10px 3px #ddd;
    img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 85%;
      height: 85%;
    }
  }

  .username {
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
  }
}
.van-grid {
  transform: translate(0, 75%);
}
.banner {
  margin: auto;
  transform: translate(0, 150%);
  width: 345px;
  img {
    width: 100%;
  }
}
</style>
