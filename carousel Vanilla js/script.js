const left_btn = document.querySelector('.left-btn'),
      right_btn = document.querySelector('.right-btn'),
      slider = document.querySelectorAll('.slider-wrapper'),
      home = document.querySelector('.home')



    let back = [
        "./img/magni.jpg",
        "./img/maldives1.jpg",
        "./img/maldives2.jpg" 
    ]
    let i = 0
function left() {
    if(i >= slider.length - 1){
        i = 0
    }
    else{
        i++
    }
    slider.forEach(a => {
        a.style.right = '-100%'
        a.classList.remove('left1-0')
    })
    slider[i].classList.add('left1-0') = '0'
    home.style.background = 'red'
}
function right() {
    if(i <= 0){
        i = 2
    }
    else{
        i--
    }
    console.log(i);
    slider.forEach(a => {
        a.style.right = '-100%'
        a.classList.remove('left1-0')
    })
    slider[i].classList.add('left1-0') = '0'
    home.style.background = 'red'
}

left_btn.addEventListener('click',left)
right_btn.addEventListener('click',right)

setInterval(() => {
        if(i >= slider.length - 1){
        i = 0
    }
    else{
        i++
    }
    slider.forEach(a => {
        a.style.right = '-100%'
        a.classList.remove('left1-0')
    })
    slider[i].classList.add('left1-0') = '0'
}, 3000);

 


