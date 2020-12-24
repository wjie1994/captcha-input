import CaptchaInputVue3 from './components/CaptchaInputVue3'

function install (Vue) {
    if (install.installed) return
    install.installed = true
    Vue.component(CaptchaInputVue3.name, CaptchaInputVue3)
}


export {
    CaptchaInputVue3
}

export default {
    install
}
