<template>
  <div class="body">
    <van-nav-bar title="TM小说" class="nav" />
    <van-search placeholder="请输入搜索关键词" v-model="searchkey" id="searchbar" />
    <List :searchkey="searchkey"></List>
  </div>
</template>

<script>
// @ is an alias to /src
import List from "@/components/List.vue";

export default {
  name: "home",
  data() {
    return {
      searchkey: ""
    };
  },
  components: {
    List
  },
  created() {}
};
</script>
<style scoped>
.nav {
  font-weight: 700;
}
#searchbar {
  border-radius: 4px;
}
</style>
