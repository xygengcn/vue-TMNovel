<template>
  <div class="main">
    <div class="title" v-cloak>
      <h1>{{data.title}}</h1>
    </div>
    <div class="content" v-html="data.content"></div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {};
    },
    props: ["data"],
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    beforeMount() {}
  };
</script>
<style scoped>
  .main {
    padding: 20px 10px;
    height: 100%;
    font-size: 16pt;
    letter-spacing: 0.2em;
    line-height: 150%;
    font-weight: 400;
    font-family: "Microsoft YaHei", PingFang SC, Heiti SC, 黑体-简;
  }

  h1 {
    font-size: 24px;
    text-align: center;
  }

  .main br {
    height: 12px;
  }
</style>