let btnMenuClose = document.getElementById("btn_menu_close");
let btnMenuOpen = document.getElementById("btn_menu_open");
btnMenuClose.addEventListener("click",() => {
    let menu = document.getElementById("menu");
    menu.classList.add("menud--close");
    menu.classList.remove("menu--open");
});
btnMenuOpen.addEventListener("click",() => {
    let menu = document.getElementById("menu");
    menu.classList.add("menu--open");
    menu.classList.remove("menu--close");
});
