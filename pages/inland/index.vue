<template>
  <article>
    <card :url="'/guonei.png'" :source="List">最新国内</card>
  </article>
</template>

<script>
import card from "@/components/card/index.vue";
import API from "@/service/axios/api.js";
export default {
  components: {
    card,
  },
  data() {
    return {
      List: [],
    };
  },
  async asyncData({ store, app }) {
    let params = {
      type: "guonei",
      key: store.state.key,
    };
    let { data } = await app.$axios("/toutiao/index", { params: params });
    return {
      List: data.result.data,
    };
  },
  head() {
    return {
      title: "最新国内",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "最新国内，获取国内新闻",
        },
      ],
    };
  },
};
</script>

<style>
article {
  max-width: 1200px;
  margin: 15px auto;
  background: #fff;
}
</style>