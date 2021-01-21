<template>
    <div class="localCaptcha-input">
        <div v-for="item in number"
             :key="item"
             class="input-item-box">
            <p class="show-input"
               @click="handleShowInput(item - 1)"
               v-text="localCaptcha[item - 1]"></p>
            <input v-if="item - 1 === activeIndex"
                   ref="captchaItem"
                   v-model.trim="localCaptcha[item - 1]"
                   class="input-item"
                   maxlength="1"
                   @keydown.prevent="handleKeyDown($event, item - 1)" />
        </div>
    </div>
</template>

<script>

import { onMounted, ref, reactive, toRefs, nextTick } from 'vue'

export default {
    name: 'CaptchaInput',
    props: {
        // 验证码长度
        number: {
            type: Number,
            default: 6
        },
        captcha: {
            type: String,
            default: ''
        }
    },
    setup(props, context) {
        const data = reactive({
            localCaptcha: [],
            activeIndex: 0,
            // 当前 光标移动的方向是正向还是逆向的   0-正向 1-逆向
            captchaDirection: 0
        })

        const captchaItem = ref(null)

        onMounted(() => {
            setTimeout(() => {
                captchaItem.value.focus()
            }, 100)
        })

        /**
         * 输入框的值改变  改变当前激活的input框
         * @param index
         */
        const handleChangeCaptchaItem = async index => {
            // 如果当前 方向是正向的
            if (!data.captchaDirection && data.activeIndex < props.number - 1) {
                data.activeIndex = index + 1
                await nextTick()
                captchaItem.value.focus()
            }
        }

        /**
         * 点击盒子  聚焦
         * @param index
         * @return {Promise<void>}
         */
        const handleShowInput = async index => {
            data.captchaDirection = 0
            data.activeIndex = index
            await nextTick()
            captchaItem.value.focus()
        }

        /**
         * 键盘事件
         * @param e
         * @param index
         */
        const handleKeyDown = (e, index) => {
            if (e.key === 'Backspace') {
                data.captchaDirection = 1
                if (!data.localCaptcha[index] && data.activeIndex > 0) {
                    handleShowInput(index - 1)
                } else {
                    data.localCaptcha[index] = ''
                }
                data.captchaDirection = 0
            } else if (e.key === 'ArrowRight') {
                handleChangeCaptchaItem(index)
            } else if (e.key === 'ArrowLeft') {
                index === props.number - 1 && (data.activeIndex = props.number - 2)
                index > 0 && index <= props.number - 1 && handleChangeCaptchaItem(index - 2)
            } else {
                if (/^[0-9a-zA-Z]$/.test(e.key)) {
                    data.localCaptcha[index] = e.key
                    handleChangeCaptchaItem(index)
                }
            }
            context.emit('update:captcha', data.localCaptcha.join(''))
        }

        return {
            ...toRefs(data),
            captchaItem,
            handleShowInput,
            handleKeyDown
        }
    }
}
</script>

<style lang="less"
       scoped>
.localCaptcha-input {
    display: flex;
    justify-content: center;

    .input-item-box {
        position: relative;

        .show-input {
            box-sizing: border-box;
            margin: 0;
            border: 1px solid #dcdfe6;
            width: 50px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            cursor: text;
        }

        .input-item {
            position: absolute;
            top: 0;
            left: 0;
            box-sizing: border-box;
            border: 1px solid #dcdfe6;
            border-radius: 0;
            padding: 0;
            width: 50px;
            height: 50px;
            font-size: 14px;
            line-height: 50px;
            text-align: center;
            color: #222222;
            outline: 0;

            &:focus {
                border-color: #409eff;
            }
        }

        &:first-of-type {
            .show-input, .input-item {
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
            }
        }

        &:last-of-type {
            .show-input, .input-item {
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }
    }
}
</style>
