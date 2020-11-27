<template>
  <div class="menu">
    <!-- <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item
        v-for="(item, index) in menus"
        :key="index"
        :index="item.path"
        >{{ item.name }}</el-menu-item
      >
    </el-menu> -->
    <ul style="list-style-type: none">
      <nuxt-link
        v-for="(item, index) in menus"
        :key="index"
        :to="item.path"
        exact
        tag="li"
        active-class="router_focus"
      >
        <span>{{ item.name }}</span>
      </nuxt-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          name: "首页",
          path: "/",
        },
        {
          name: "社会",
          path: "/society",
        },
        {
          name: "国内",
          path: "/inland",
        },
        {
          name: "国际",
          path: "/international",
        },
        {
          name: "娱乐",
          path: "/recreation",
        },
        {
          name: "体育",
          path: "/sports",
        },
        {
          name: "军事",
          path: "/military",
        },
      ],
      activeIndex: "/",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      //   console.log(key, keyPath);
    },
  },
};
</script>

<style scoped lang="scss">
.menu {
  max-width: 1200px;
  margin: 0 auto;
}
ul {
  display: flex;
  margin: 0;
  padding: 0;
  height: 60px;
  font-size: 18px;
  color: #fff;
  li {
    height: 60px;
    line-height: 60px;
    margin: 0;
    padding: 0 20px;
    cursor: pointer;
  }
}
.router_focus {
  color: #ffd04b;
  border-bottom: 3px solid;
  box-sizing: border-box;
}
</style>