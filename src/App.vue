<template>
    <captcha-input v-model:captcha="captcha" :number="4"></captcha-input>
</template>

<script>
import { ref, watch } from 'vue'
import { CaptchaInput } from './index'

export default {
    name: 'App',
    components: {
        CaptchaInput
    },
    setup() {
        const captcha = ref('')
        watch(captcha, val => {
            console.log(val)
        })
        return {
            captcha
        }
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
