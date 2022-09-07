<template>
  <van-search
    class="btn-search"
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    background="transparent"
  >
    <template #label>
      <span @click="onCity">北京<van-icon name="play"></van-icon> | </span>
    </template>
    <template #action>
      <van-icon @click="onThemap" class="iconColor" name="location-o" />
    </template>
  </van-search>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    onThemap() {
      this.$router.push('/layout/map')
    },
    onCity() {
      this.$router.push('/layout/city')
    }
  }
}
</script>

<style lang="less" scoped>
.btn-search {
  position: absolute;
  top: 25px;
  width: 100%;
  z-index: 2;
  padding: 0 0 0 25px;
  /deep/ .van-icon-play:before {
    transform: rotate(90deg);
    color: #7f7f80;
  }
}
.iconColor {
  line-height: 34px;
  color: #fff;
  font-size: 25px;
}
</style>
