# captcha-input-box

### 插件简介
    验证码输入框，暂时只支持vue3


### 安装依赖
```
npm i captcha-input-box
```

### 项目使用
全局使用
```javascript
import CaptchaInputBox from 'captcha-input-box'
app.use(CaptchaInputBox)
```

局部使用
```javascript
import { CaptchaInputBox } from 'captcha-input-box'
components: [CaptchaInputBox]
```
template
```html
<captcha-input-box v-model:captcha="loginInfo.captcha" :number="6"></captcha-input-box>
```

### 参数说明
| 参数 | 类型 | 必填 | 说明 | 默认值 |  
| ------ | ------ | ------ | ----- | ----- |
| captcha | String | 是| 验证码 | |
| number | Number | 否 | 验证按长度 | 6 |