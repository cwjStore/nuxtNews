<template>
  <div class="header">
    <div>
      <div class="title">新闻头条</div>
      <div class="subtitle">https://nuxt.cwjbjy.online</div>
    </div>
    <div class="search">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input2"
      >
        <el-button slot="append">搜索</el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input2: "",
    };
  },
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  background: #fff;
  max-width: 1200px;
  margin: 20px auto;
  .title {
    font-size: 32px;
    font-weight: bolder;
    font-style: italic;
    text-align: center;
  }
  .subtitle {
    color: #fe8900;
    font-weight: bold;
  }
  .search {
    display: flex;
    align-items: center;
    width: 380px;
  }
}
</style>
<style>
.el-input__inner {
  border-radius: 0;
  border: 1px solid #fe8900;
}
.el-input-group__append,
.el-input-group__prepend {
  background: #fe8900;
  color: #fff;
  border: 0;
}
</style>