function typeText(elementId, text) {
    let i = 0
    const element = document.getElementById(elementId)

    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i)
            i++;
            setTimeout(typeWriter, 100)
        } else {
            setTimeout(() => {
                element.innerHTML = ''
                i = 0
                typeWriter();
            }, 2000)
        }
    }

    typeWriter()
}

document.addEventListener("DOMContentLoaded", function () {
    typeText('header-text', 'ШАПКА САЙТА')
    typeText('main-text', 'КОНТЕНТ')
})
