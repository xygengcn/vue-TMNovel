<!--  -->
<template>
  <div id="bookDetail">
    <van-loading type="spinner" v-show="isloading">加载中...</van-loading>
    <div class="info" v-if="!isloading">
      <van-row>
        <van-col span="7">
          <img id="logoImg" :src="data.image" @error="imgError(data)" />
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
</template>
<script>
export default {
  components: {},
  props: ["isloading", "data"],
  data() {
    return {};
  },
  filters: {},
  methods: {
    imgError(item) {
      item.image = require("@/assets/default.jpg");
    }
  },
  computed: {},
  watch: {}
};
</script>
<style scoped>
#bookDetail {
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

#logoImg {
  width: 100%;
  max-width: 300px;
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