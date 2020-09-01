<!--
  功能: About
  作者: gyh
  版本: v0.1
-->
<template>
  <div class="app-container">
    <input type="text" v-model="debounceText" @keyup="handleInputChange" />
  </div>
</template>

<script>
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
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleInputChange: debounce(
      function() {
        console.log('you typed :', this.debounceText)
      },
      300,
      { leading: false, trailing: true }
    )
  }
}
</script>

<style scoped lang="scss" type="text/css"></style>
