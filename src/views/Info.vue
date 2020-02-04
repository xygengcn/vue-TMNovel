<!--  -->
<template>
  <div>
    <van-nav-bar
      :title="isloading?'加载中...':data.title"
      left-text="返回"
      right-text="目录"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      :fixed="true"
    />
    <div class="body">
      <van-loading type="spinner" v-show="isloading">加载中...</van-loading>
      <div class="info" v-if="!isloading">
        <van-row>
          <van-col span="7">
            <van-image fit="cover" :src="data.image" />
          </van-col>
          <van-col span="16" offset="1">
            <div class="more">
              <div id="title">
                <h1>{{data.title}}</h1>
              </div>
              <div id="author">作者：{{data.author}}</div>
              <div id="lastTime">最后更新：{{data.lastTime}}</div>
              <div id="lastSection">
                最新章节：
                <span>{{data.lastSection.title}}</span>
              </div>
            </div>
          </van-col>
        </van-row>
      </div>
      <div class="intro" v-if="!isloading" v-html="data.intro"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      data: {},
      isloading: true
    };
  },
  computed: {},
  watch: {},
  methods: {
    onClickLeft() {
      this.$router.push("/");
    },
    onClickRight() {
      this.$router.push({ name: "chapters", query: { url: this.data.url } });
    }
  },
  created() {
    var _this = this;
    this.http
      .get(this.http.config.infoUrl, { params: { url: this.$route.query.url } })
      .then(
        res => {
          _this.data = res;
          _this.isloading = false;
        },
        err => {
          console.log(err);
        }
      );
  }
};
</script>
<style scoped>
.body {
  margin-top: 46px;
  padding: 20px;
  min-height: 100%;
}
.info {
  min-height: 120px;
}
.info h1 {
  font-size: 18px;
  margin: 5px 0;
}
.info,
.intro {
  line-height: 22px;
  font-size: 14px;
  color: #888;
}
.intro {
  margin: 20px 0;
  text-indent: 2rem;
}
.van-loading {
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  margin-top: -15px;
  text-align: center;
}
</style>