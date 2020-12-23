<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <CaptchaInputBox></CaptchaInputBox>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import CaptchaInputBox from '../dist/CaptchaInputBox.umd.min.js'
import { CaptchaInputBox } from './index'

export default {
  name: 'App',
  components: {
    HelloWorld,
    CaptchaInputBox
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
