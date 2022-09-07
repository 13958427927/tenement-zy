<template>
  <div>
    <!-- 搜索栏 -->
    <Serach class="btn-search"></Serach>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in picture" :key="item.id">
        <a href="#">
          <img :src="url + item.imgSrc" class="img-picture" />
        </a>
      </van-swipe-item>
    </van-swipe>
    <!-- 模块 -->
    <!-- 宫格 -->
    <van-grid :column-num="4" :border="false">
      <van-grid-item
        v-for="item in av_imgs"
        :key="item.id"
        @click="getzf(item.path)"
      >
        <img :src="item.src" alt="" width="60" height="60" />
        <p>{{ item.title }}</p>
      </van-grid-item>
    </van-grid>
    <div class="zf">
      <van-cell title="租房小组" value="更多" />
      <van-grid :column-num="2" :gutter="10" :border="false" class="zfxz">
        <van-grid-item v-for="item in renting" :key="item.id">
          <template #default>
            <ul class="itemimg">
              <li>
                <img
                  :src="`http://liufusong.top:8080${item.imgSrc}`"
                  alt=""
                  width="50px"
                  height="50px"
                />
                <div>
                  <span>{{ item.title }}</span> <br />
                  <span>{{ item.desc }}</span>
                </div>
              </li>
            </ul>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script>
import { slideshowApi, RentingHouseApi } from '@/API'
import Serach from '@/components/Serch.vue'
export default {
  components: { Serach },
  data() {
    return {
      picture: [],
      url: 'http://liufusong.top:8080',
      av_imgs: [
        {
          id: '001',
          src: require('@/assets/imgs/1.png'),
          title: '整租',
          path: '/layout/list'
        },
        {
          id: '002',
          src: require('@/assets/imgs/2.png'),
          title: '合租',
          path: '/layout/list'
        },
        {
          id: '003',
          src: require('@/assets/imgs/3.png'),
          title: '地图找房',
          path: '/layout/map'
        },
        {
          id: '004',
          src: require('@/assets/imgs/4.png'),
          title: '去出租',
          path: '/layout/rent/add'
        }
      ],
      renting: []
    }
  },
  created() {
    this.slideshow()
    this.rentingHouse()
  },
  methods: {
    async slideshow() {
      try {
        const { data } = await slideshowApi()
        this.picture = data.body
      } catch (error) {
        alert(error.message)
      }
    },
    getzf(path) {
      this.$router.push(path)
    },
    async rentingHouse() {
      try {
        const { data } = await RentingHouseApi()
        this.renting = data.body
      } catch (error) {
        this.$toast.fail('请刷新')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  height: 212px;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}

.img-picture {
  width: 100%;
  height: 100%;
}

.imgs {
  position: fixed;
  width: 100%;
  height: 122px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-around;
  text-align: center;

  /deep/img {
    width: 60px;
    height: 60px;
  }
}
.zf {
  background-color: #f6f5f6;
  margin-bottom: 50px;
  height: 217px;
  .van-cell {
    background-color: #f6f5f6;
  }
  .zfxz {
    height: 60px;
    .itemimg {
      display: flex;
      li {
        display: flex;
        justify-content: space-around;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
}
</style>
