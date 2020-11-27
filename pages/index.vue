<template>
  <article>
    <card :url="'/toutiao.png'" :source="List">今日头条</card>
  </article>
</template>

<script>
import card from "@/components/card/index.vue";
import { mapState } from "vuex";
// import list from "../assets/mock/homePage"
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
      type: "top",
      key: store.state.key,
    };
    let { data } = await app.$axios.get("/toutiao/index", { params: params });
    return {
      List: data.result.data,
    };
  },
  head() {
    return {
      title: "今日头条",
      meta: [
        {
          name: "description",
          hid: "description",
          content: "今日头条，时时获取新闻",
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
