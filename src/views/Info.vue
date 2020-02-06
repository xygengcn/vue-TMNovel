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
            <van-image fit="cover" :src="data.image|validateImage" />
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
      isloading: true
    };
  },
  computed: {
    data() {
      return this.$store.state.nowInfo;
    }
  },
  watch: {},
  filters: {
    validateImage: function(pathImg) {
      var ImgObj = new Image();
      ImgObj.src = pathImg;
      if (ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
        return pathImg;
      } else {
        return require("@/assets/default.jpg");
      }
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    },
    onClickRight() {
      this.$router.push({ name: "chapters", query: { url: this.data.url } });
    },
    load() {
      var _this = this;
      this.http
        .get(this.http.config.infoUrl, {
          params: { url: this.$route.query.url }
        })
        .then(
          res => {
            // _this.data = res;
            _this.$store.commit("setNowInfo", res);
            _this.$store.commit("setHisInfo", res);
            _this.isloading = false;
          },
          err => {
            console.log(err);
          }
        );
    },
    getHistory(url) {
      var history = this.$store.state.hisInfo;
      let info = history.filter(function(item) {
        return item.url == url;
      });
      return info;
    }
  },
  created() {
    if (this.$route.query.url == null) {
      this.isloading = false;
    } else {
      let info = this.getHistory(this.$route.query.url);
      console.log(info);
      if (info.length > 0) {
        this.$store.commit("setNowInfo", info[0]);
        this.isloading = false;
      } else {
        this.load();
      }
    }
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