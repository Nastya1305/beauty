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

window.addEventListener('resize', addPaddingForHeader);
window.addEventListener('load', addPaddingForHeader);

function addPaddingForHeader() {
   if (document.documentElement.clientWidth <= 767.98)
      document.body.style.paddingTop = header.offsetHeight + "px";
   else
      document.body.style.paddingTop = 0;
}
