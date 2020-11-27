<template>
  <article>
    <card :url="'/yule.png'" :source="List">最新娱乐</card>
  </article>
</template>

<script>
import card from "@/components/card/index.vue";
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
      type: "yule",
      key: store.state.key,
    };
    let { data } = await app.$axios("/toutiao/index", { params: params });
    return {
      List: data.result.data,
    };
  },
  head() {
    return {
      title: "最新娱乐",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "最新娱乐，获取国内娱乐",
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