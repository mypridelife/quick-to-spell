<template>
  <div id="app">
    <router-view />
    <van-tabbar
      v-model="active"
      :placeholder="isPlaceholder"
      :active-color="'$error-color'"
    >
      <van-tabbar-item name="Home" icon="home-o" replace :to="{ name: 'Home' }">
        主页
      </van-tabbar-item>
      <van-tabbar-item
        name="Setting"
        icon="setting-o"
        replace
        :to="{ name: 'Setting' }"
      >
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      active: 'home',
      isPlaceholder: true
    }
  },
  created() {
    this.active = this.$route.name
  }
}
</script>
