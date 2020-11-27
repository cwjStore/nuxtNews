<template>
  <div>
    <header>
      <newsHeader />
    </header>
    <nav>
      <newsTabs />
    </nav>
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import newsHeader from "@/components/header/index.vue";
import newsTabs from "@/components/tabs/index.vue";
export default {
  components: {
    newsHeader,
    newsTabs,
  },
};
</script>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
nav {
  background: #545c64;
  height: 60px;
}
main {
  background: #f5f5f5;
  overflow-y: auto;
}
</style>
