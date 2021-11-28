let btnMenuClose = document.getElementById("btn_menu_close");
let btnMenuOpen = document.getElementById("btn_menu_open");
let overlay = document.getElementById("overlay");

function closeMenu() {
  let menu = document.getElementById("menu");
  let overlay = document.getElementById("overlay");
  menu.classList.add("menu--close");
  menu.classList.remove("menu--open");
  overlay.classList.remove("active");
  $('body').css('overflow', 'auto');
}
btnMenuClose.addEventListener("click", () => {
  closeMenu();
});
btnMenuOpen.addEventListener("click", () => {
  let menu = document.getElementById("menu");
  let overlay = document.getElementById("overlay");
  menu.classList.add("menu--open");
  menu.classList.remove("menu--close");
  overlay.classList.add("active");
  $('body').css('overflow', 'hidden');
});
overlay.addEventListener("click",() => {
  closeMenu();
});

$(document).scroll(function () {
  if ($('#alberelli').offset().top + $('#alberelli').height()
    >= $('footer').offset().top) {
    $('#alberelli').css('position', 'absolute');
  }
  if ($(document).scrollTop() + window.innerHeight < $('footer').offset().top) {
    $('#alberelli').css('position', 'fixed'); // restore when you scroll up
  }
});