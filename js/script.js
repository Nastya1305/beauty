const menuBurger = document.querySelector(".burger");
const header = document.querySelector(".header");

if (menuBurger) {
   menuBurger.addEventListener('click', function (e) {
      menuBurger.classList.toggle("_close");
      header.classList.toggle("_dropdown");
      document.body.classList.toggle("_lock");
   });
}

// работа с ссылками меню 
const menuLinks = document.querySelectorAll(".menu__link");
if (menuLinks.length > 0) {
   menuLinks.forEach(menuLink => {
      menuLink.addEventListener('click', onMenuLinkClick);
   });
}

function onMenuLinkClick(e) {

   // переход по ссылкам

   if (menuBurger.classList.contains("_close")) {
      menuBurger.classList.remove("_close");
      header.classList.remove("_dropdown");
      document.body.classList.remove("_lock");
   }
   e.preventDefault();
}