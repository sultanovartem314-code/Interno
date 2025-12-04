let burger = document.getElementById('navBurger'); 
let burgerMenu = document.getElementById('burgerMenu');
let clouseBurger = document.getElementById('burgerEaxt');

burger.onclick = function(){
    burgerMenu.style.display = 'block';
    burger.style.display = 'none'
};
clouseBurger.onclick = function(){
    burgerMenu.style.display = 'none';
    burger.style.display = 'block'
};