<template>
  <captcha-input></captcha-input>
</template>

<script>
import { CaptchaInput } from './index'

export default {
  name: 'App',
  components: {
    CaptchaInput
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
