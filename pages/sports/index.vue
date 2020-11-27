<template>
  <article>
    <card :url="'/tiyu.png'" :source="List">最新体育</card>
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
      type: "tiyu",
      key: store.state.key,
    };
    let { data } = await app.$axios("/toutiao/index", { params: params });
    return {
      List: data.result.data,
    };
  },
  head() {
    return {
      title: "最新体育",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "最新体育，获取最新体育",
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