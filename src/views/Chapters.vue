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
      isloading: true,
      finished: false,
      data: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
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
  created() {
    var _this = this;
    this.http
      .get(this.http.config.chaptersUrl, {
        params: { url: this.$route.query.url }
      })
      .then(
        res => {
          _this.data = res;
          _this.isloading = false;
          _this.finished = true;
        },
        err => {
          console.log(err);
        }
      );
  }
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