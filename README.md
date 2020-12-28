# captcha-input

### 插件简介
    验证码输入框，暂时只支持vue3


### 安装依赖
```
npm i captcha-input
```

### 项目使用
全局使用
```javascript
import CaptchaInput from 'captcha-input'
app.use(CaptchaInput)
```

局部使用
```javascript
import { CaptchaInput } from 'captcha-input'
components: { CaptchaInput }
```
** 注: ** 需要引入样式
```javascript
import 'captcha-input/dist/CaptchaInput.css'
```
template
```html
<captcha-input v-model:captcha="loginInfo.captcha" :number="6"></captcha-input>
```

### 参数说明
| 参数 | 类型 | 必填 | 说明 | 默认值 |  
| ------ | ------ | ------ | ----- | ----- |
| captcha | String | 是| 验证码 | |
| number | Number | 否 | 验证按长度 | 6 |
