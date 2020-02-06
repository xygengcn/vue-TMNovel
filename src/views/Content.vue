<template>
  <div class="body">
    <div class="bg"></div>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-list
        v-model="isUpLoading"
        :finished="finished"
        @load="onLoad"
        :offset="100"
        finished-text="没有更多了"
      >
        <chapter v-for="(item,index) in data" :data="item" :key="index"></chapter>
        <div class="btn" @click="show=true"></div>
      </van-list>
    </van-pull-refresh>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
import chapter from "../components/content";
export default {
  components: { chapter },
  data() {
    return {
      data: [],
      nowRead: {},
      isLoading: false,
      isUpLoading: false,
      finished: false,
      show: false,
      actions: [{ name: "章节目录" }]
    };
  },

  watch: {},
  methods: {
    onLoad() {
      setTimeout(() => {
        console.log(1);
        if (this.nowRead.nextUrl) this.load(this.nowRead.nextUrl);
        this.isUpLoading = false;
      }, 1000);
    },
    onRefresh() {
      this.linkTo("content", this.data.previousUrl);
    },

    linkTo(name, url) {
      this.$router.push({ name: name, query: { url: url } });
    },
    onSelect(item) {
      this.show = false;
      this.linkTo("chapters");
    },
    load(url) {
      var _this = this;
      this.http
        .get(this.http.config.ContentUrl, {
          params: { url: url }
        })
        .then(
          res => {
            _this.data.push(res);
            _this.nowRead = res;
            console.log(res.title);
            if (this.nowRead.nextUrl == this.nowRead.catalogue)
              this.finished = true;
          },
          err => {
            console.log(err);
          }
        );
    }
  },
  created() {
    this.load(this.$route.query.url);
  }
};
</script>
<style scoped>
.van-list {
  background-color: rgba(255, 255, 255, 0);
}
.btn {
  top: 100px;
  left: 80px;
  right: 80px;
  bottom: 100px;
  position: fixed;
}
.bg {
  width: 100vh;
  height: 100vh;
  position: fixed;
  background-size: cover;
  background-image: url(../assets/bg2.jpg);
}
</style>