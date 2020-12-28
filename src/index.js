import CaptchaInput from './components/CaptchaInput'

function install (Vue) {
    if (install.installed) return
    install.installed = true
    Vue.component(CaptchaInput.name, CaptchaInput)
}


export {
    CaptchaInput
}

export default {
    install
}
