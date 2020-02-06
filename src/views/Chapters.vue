<!--  -->
<template>
  <div class="container">
    <van-nav-bar title="目录" left-text="返回" left-arrow @click-left="onClickLeft" :fixed="true" />
    <van-list v-model="isloading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell
        v-for="(item,index) in data"
        :key="index"
        :title="item.title"
        @click="linkTo(item.url)"
        offset="1"
      />
    </van-list>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {
      isloading: false,
      finished: true
    };
  },
  //监听属性 类似于data概念
  computed: {
    data() {
      return this.$store.state.nowInfo.chapters;
    }
  },
  methods: {
    onLoad() {},
    linkTo(url) {
      this.$router.push({ name: "content", query: { url: url } });
    },
    onClickLeft() {
      this.$router.push({
        name: "info",
        query: { url: this.$route.query.url }
      });
    }
  },
  created() {}
};
</script>
<style scoped>
.container {
  overflow: hidden;
}
.van-list {
  margin-top: 46px;
}
</style>