<!--
  功能: About
  作者: gyh
  版本: v0.1
-->
<template>
  <div class="app-container">
    <div>count:{{ count }}</div>
    <div>name:{{ name }}sex:{{ sex }}</div>
    <button @click="handlePlusOne">Add</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'About',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {
    // count() {
    //   return this.$store.state.about.count
    // },
    // name() {
    //   return this.$store.state.about.person.name
    // },
    // sex() {
    //   return this.$store.state.about.person.sex
    // },
    ...mapState({
      name: state => state.about.person.name,
      sex: state => state.about.person.sex
    }),
    ...mapGetters({
      count: 'count'
    })
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handlePlusOne() {
      this.$store.commit({
        type: 'about/plusOne',
        count: 10
      })
      this.$store.commit('about/setPerson', {
        name: 'flj',
        sex: '0'
      })
    }
  }
}
</script>

<style scoped lang="scss" type="text/css"></style>
