<!--  -->
<template>
  <div id="info">
    <van-nav-bar :title="isloading?'加载中...':data.title" left-text="返回" :right-text="component=='bookChapters'?'':'目录'"
      left-arrow @click-left="onClickLeft" @click-right="onChange" :fixed="true" />
    <div class="body">
      <component :is="component" :data="data" :isloading="isloading"></component>
    </div>
  </div>
</template>

<script>
  import bookChapters from "../components/BookChapters";
  import bookDetail from "../components/BookDetail";
  export default {
    components: {
      bookChapters,
      bookDetail
    },
    data() {
      return {
        isloading: true,
        component: "bookDetail"
      };
    },
    computed: {
      data() {
        return this.$store.state.nowInfo;
      }
    },
    watch: {},
    methods: {
      onClickLeft() {
        this.component == "bookChapters" ?
          (this.component = "bookDetail") :
          this.$router.push("/");
      },
      //切换目录
      onChange() {
        this.component == "bookChapters" ?
          (this.component = "bookDetail") :
          (this.component = "bookChapters");
      },
      load() {
        var _this = this;
        this.http
          .get(this.http.config.infoUrl, {
            params: {
              url: this.$route.query.url
            }
          })
          .then(
            res => {
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
        let info = history.filter(function (item) {
          return item.url == url;
        });
        return info;
      }
    },
    created() {
      if (!this.$route.query.url) {
        this.$router.push('/');
      }
    },
    mounted() {
      let info = this.getHistory(this.$route.query.url);
      if (info.length > 0) {
        this.$store.commit("setNowInfo", info[0]);
        this.isloading = false;
      } else {
        this.load();
      }
    }
  };
</script>
<style scoped>
  #info {
    overflow: hidden;
  }
</style>