<template>
  <div>
    <router-view></router-view>

    <van-tabbar route>
      <van-tabbar-item to="/layout/home" icon="wap-home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item to="/layout/list" icon="search"
        >找房</van-tabbar-item
      >
      <van-tabbar-item to="/layout/news" icon="comment-o"
        >资讯</van-tabbar-item
      >
      <van-tabbar-item to="/layout/profile" icon="user-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {}
}
</script>

<style></style>
