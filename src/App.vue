<template>
  <captcha-input-vue3></captcha-input-vue3>
</template>

<script>
import { CaptchaInputVue3 } from './index'

export default {
  name: 'App',
  components: {
    CaptchaInputVue3
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
