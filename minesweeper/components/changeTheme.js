const switcher = document.querySelector('.themes');
document.addEventListener('DOMContentLoaded', () => {
    switcher.addEventListener('change', (event) => {
        if (event.target.nodeName === 'INPUT') {
            // console.log('assa');
            document.documentElement.classList.remove('light', 'dark')
            document.documentElement.classList.add(event.target.value)

            window.localStorage.setItem('theme', event.target.value)
        }

    })
    if (localStorage.theme) {
        let userTheme = window.localStorage.getItem('theme')
        document.documentElement.classList.add(userTheme)
    }
})