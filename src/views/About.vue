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
    <input type="text" v-model="debounceText" @keyup="handleInputChange" />
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
const { debounce } = require('lodash')

export default {
  name: 'About',
  components: {},
  props: {},
  data() {
    return {
      debounceText: ''
    }
  },
  computed: {
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
    handlePlusOne: debounce(
      function() {
        this.$store.commit({
          type: 'about/plusOne',
          count: 10
        })
        this.$store.commit('about/setPerson', {
          name: 'flj',
          sex: '0'
        })
      },
      1000,
      { leading: true, trailing: false }
    ),
    handleInputChange: debounce(function() {
      console.log('you typed :', this.debounceText)
    }, 300)
  }
}
</script>

<style scoped lang="scss" type="text/css"></style>
