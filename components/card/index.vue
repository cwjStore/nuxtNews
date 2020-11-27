<template>
  <div class="card">
    <div class="card-header">
      <div class="title" :style="{ backgroundImage: `url(${url})` }">
        <slot></slot>
      </div>
    </div>
    <div class="card-body">
      <div v-for="(item, index) in source" :key="index" class="card-item" @click="handlerClick(item.url)">
        <el-image :src="item.thumbnail_pic_s" lazy/>
        <div class="describe">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: "",
    },
    source: {
      type: Array,
      default: [],
    },
  },
  methods:{
      handlerClick(value){
          window.open(value)
      }
  }
};
</script>

<style scoped lang="scss">
.card {
  // border-radius:5px;box-shadow: 0 0 80px rgba(0, 0, 0, 0.3);
  .card-header {
    border-bottom: 1px solid #e4e4e4;
    padding: 10px 20px;
    .title {
      line-height: 30px;
      padding-left: 38px;
      background-repeat: no-repeat;
      background-position: left center;
      font-size: 16px;
      font-weight: bold;
      color: #fe8900;
    }
  }
  .card-body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 5px;
    overflow: hidden;
    .card-item {
      flex: 0 0 228px;
      padding: 14px 4px;
      cursor: pointer;
      img {
        width: 100%;
      }
      .describe {
        width: 228px;
        font-size: 18px;
        color: #203d80;
        font-weight: bold;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>