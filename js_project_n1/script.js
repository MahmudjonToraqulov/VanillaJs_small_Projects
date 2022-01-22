const btnHead = document.querySelector('.helpDiv'),
      form1 = document.querySelector('.form-group'),
      form2 = document.querySelector('.form-group-2'),
      loginBtn = document.querySelector('.loginBtn'),
      regBtn = document.querySelector('.regBtn');
 
    
      
    
regBtn.addEventListener('click',()=>{
    btnHead.style.left = '100px';
    form1.style.left = '-290px';
    form2.style.right = '16px';
})    
loginBtn.addEventListener('click',()=>{
    btnHead.style.left = '0px';
    form1.style.left = '16px';
    form2.style.right = '-270px';
})