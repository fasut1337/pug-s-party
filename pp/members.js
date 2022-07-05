const slides = document.querySelectorAll('.slide')
const nick = document.querySelectorAll('#text')
const descriptions = document.querySelectorAll('.description')
console.log(nick, descriptions);


for (const slide of slides) {
    slide.addEventListener('click', () => {
        classActiveClear()

        for (i = 0; i < descriptions.length; i++) {
            if (i != Array.prototype.indexOf.call(slides, slide)) {
                descriptions[i].style.opacity = "0.0";
            }
        }
        slide.classList.add('active')
    })
}

function classActiveClear() {
    for (const slide of slides) {
        slide.classList.remove('active')
    }

}


for (const p2 of nick) {
    p2.addEventListener('click', () => {
        for (i = 0; i < descriptions.length; i++) {
            if (Array.prototype.indexOf.call(nick, p2) == i) {
                descriptions[i].style.opacity = "1.0";
                descriptions[i].style.transition = "0.7s";
            }
        }
    })
}

