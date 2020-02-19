<!--  -->
<template>
  <div class="container">
    <van-list v-model="isloading" :finished="finished" finished-text="没有更多了" @load="onLoad">
      <van-cell v-for="(item,index) in data.chapters" :key="index" :title="item.title" @click="linkTo(item.url)"
        offset="1" />
    </van-list>
  </div>
</template>

<script>
  export default {
    props: ['data'],
    data() {
      //这里存放数据
      return {
        isloading: false,
        finished: true
      };
    },
    //监听属性 类似于data概念
    computed: {},
    methods: {
      onLoad() {},
      linkTo(url) {
        this.$router.push({
          name: "content",
          query: {
            url: url
          }
        });
      },
    },
    created() {}
  };
</script>
<style scoped>
  .container {
    overflow: hidden;
    margin-top: 46px;
  }
</style>