let btnMenuClose = document.getElementById("btn_menu_close");
let btnMenuOpen = document.getElementById("btn_menu_open");
btnMenuClose.addEventListener("click", () => {
  let menu = document.getElementById("menu");
  menu.classList.add("menu--close");
  menu.classList.remove("menu--open");
});
btnMenuOpen.addEventListener("click", () => {
  let menu = document.getElementById("menu");
  menu.classList.add("menu--open");
  menu.classList.remove("menu--close");
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