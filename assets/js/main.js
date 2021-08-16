const menu = document.getElementById("menu__list")
const menuBtn = document.getElementById("menu__btn");

menuBtn.addEventListener('click',()=>{
    menu.classList.toggle('menu-active');
});
