const option = document.querySelector('.optionDiv'),
      optionText = document.querySelector('.optionText'),
      list = document.querySelector('.listDiv'),
      toggler = document.querySelector('.toggler'),
      listItems = document.querySelectorAll('.listDivItems');

function toggle() {
    list.classList.toggle('openClose');
    toggler.classList.toggle('rotate')
}

option.addEventListener('click',toggle)

listItems.forEach(a =>{
    a.addEventListener('click',(e)=>{
        optionText.textContent = e.target.textContent;
        list.classList.remove('openClose');
        toggler.classList.remove('rotate')
    })
})


