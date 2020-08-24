<!--
  功能: Home
  作者: gyh
  版本: v0.1
-->
<template>
  <div class="home-container">
    <div class="m-bg-img">
      <img :src="bgImg" alt="" />
    </div>
    <div class="m-word-mask center flex-column">
      <div class="flex-wrap center m-item-word" @click="focusHandler()">
        <div
          v-for="(item, index) in originWord"
          :key="index"
          class="u-item-word center"
        >
          {{ inputWord.split('')[index] }}
        </div>
      </div>
      <div class="m-input-world">
        <input
          class="u-input-world"
          ref="inputWordRef"
          v-model="inputWord"
          :maxlength="originWord.length"
          style="opacity:0"
        />
      </div>
      <div class="m-tip" @click="hanldeTip">
        <u>提示</u>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      bgImg:
        'https://image.binfenyingyu.com/web/app/class/start/test_bg_image.png',
      originWord: 'hello world',
      inputWord: ''
    }
  },
  computed: {},
  watch: {
    inputWord(n) {
      if (n.length === this.originWord.length) {
        console.log('finish', n)
        if (n === this.originWord) {
          this.$toast({
            message: '拼写正确',
            icon: 'checked'
          })
        } else {
          this.$toast({
            message: '拼写错误',
            icon: 'clear'
          })
        }
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    focusHandler() {
      this.$refs.inputWordRef.focus()
    },
    hanldeTip() {
      this.$toast({
        message: this.originWord,
        icon: 'info'
      })
    }
  }
}
</script>

<style scoped lang="scss" type="text/css">
@import '../styles/variables.scss';

.home-container {
  .m-bg-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      display: block;
    }
  }
  .m-word-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
    .m-item-word {
      width: 100%;

      margin-top: 50px;
      .u-item-word {
        margin: 10px 10px;
        border: 1px solid $border-color-base;

        width: 80px;
        height: 80px;
        font-size: 64px;
      }
    }
    .m-input-world {
      .u-input-world {
      }
    }
    .m-tip {
      position: absolute;
      bottom: 200px;

      color: $primary-color;
    }
  }
}
</style>
