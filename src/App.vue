<template>
  <div id="app" class="app-container">
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar
      v-model="active"
      :placeholder="isPlaceholder"
      :active-color="'$error-color'"
    >
      <van-tabbar-item
        :name="allTabNames.homeName"
        icon="home-o"
        replace
        :to="{ name: allTabNames.homeName }"
      >
        主页
      </van-tabbar-item>
      <van-tabbar-item
        :name="allTabNames.settingName"
        icon="setting-o"
        replace
        :to="{ name: allTabNames.settingName }"
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
      allTabNames: {
        homeName: 'Home',
        settingName: 'Setting'
      },
      isPlaceholder: true
    }
  },
  created() {
    this.active = this.$route.name
  }
}
</script>
<style scoped lang="scss" type="text/css">
@import './styles/variables.scss';

.app-container {
  .van-tabbar-item--active {
    color: $primary-color;
  }
}
</style>
