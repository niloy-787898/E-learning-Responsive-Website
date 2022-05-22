burger = document.querySelector('.burger')
navber = document.querySelector('.navber')
rightnav = document.querySelector('.rightnav')
navlist = document.querySelector('.navlist')

burger.addEventListener('click', ()=>{
    rightnav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navber.classList.toggle('h-nav');

})