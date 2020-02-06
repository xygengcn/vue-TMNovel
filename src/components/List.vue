<template>
  <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
    <li v-for="(item,index) in list()" :key="index">
      <div href="javascript:;" @click="linkTo(item.url)">{{item.title}}</div>
    </li>
  </van-list>
</template>

<script>
export default {
  props: ["searchkey"],
  data() {
    return {
      loading: false,
      finished: false
    };
  },
  computed: {
    data() {
      return this.$store.state.hisList;
    }
  },
  methods: {
    list() {
      let _this = this;
      return this.data.filter(function(item, index, array) {
        if (item.title.includes(_this.searchkey)) return item;
      });
    },
    linkTo(url) {
      console.log(url);
      this.$router.push({ name: "info", query: { url: url } });
    },
    onLoad() {
      if (this.data.length > 0) {
        this.loading = false;
        this.finished = true;
      }
    }
  },
  created() {
    var data = sessionStorage.getItem("list");
    data
      ? this.$store.commit("setHisList", JSON.parse(data))
      : this.$store.dispatch("getList");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  padding: 10px 30px;
  text-align: left;
  border: 1px solid #fafafa;
}
</style>
