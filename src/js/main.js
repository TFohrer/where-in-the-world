
export default class Main {
    constructor() {
        this.initThemeSwitch();
    }
    initThemeSwitch(){
        const toggleSwitch = document.querySelector('.js-switch-theme');

        function switchTheme(e) {
            let themeValue = e.target.checked ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', themeValue);
        }

        toggleSwitch.addEventListener('change', switchTheme, false);
    }

}

