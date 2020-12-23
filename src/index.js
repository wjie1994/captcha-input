import CaptchaInputBox from './components/CaptchaInputBox'

function install (Vue) {
    if (install.installed) return
    install.installed = true
    Vue.component('CaptchaInputBox', CaptchaInputBox)
}


export {
    CaptchaInputBox
}

export default {
    install
}
