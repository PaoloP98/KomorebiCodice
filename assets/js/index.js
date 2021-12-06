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
function isHidden(selector) {
  return ($(selector).css('display') == 'none' || $(selector).css("visibility") == "hidden");
    
  
}
$(".card_1_wrapper").click(function () {
  if (!isHidden('.card_1_txt')) {
    return;
  }

  let name = $(this).attr('data-name');
  if (name == "felce") {
    $("#modal_detail_body").html(
      `
      <p>La <b>Felce Verde</b> è una pianta molto antica, che produce particolari foglie, dette
      fronde,
      lunghi piccioli portano un'unica foglia allungata, a margine frastagliato.
      Sull’isola coesistono numerosissime specie di questa pianta che possono trovare
      tranquillamente posto nei luoghi più umidi, freddi e bui dei giardini o terrazzi, senza
      temere il gelo o le intemperie. Ecco perché l’isola ne viene ricoperta soprattutto nella
      stagione invernale.<p>
      `
    );
  }

  else if (name == "baobab")

    $("#modal_detail_body").html(
      `
      <p>
      Il <b> Baobab</b> è un albero con grandi tronchi il cui diametro può raggiungere i 7 m.
      È famoso per la sua capacità d'immagazzinamento d'acqua all'interno del tronco
      rigonfio, che riesce a contenere fino a 120.000 litri d'acqua per resistere alle dure
      condizioni di siccità. Con gli anni, gli abitanti dell’isola hanno imparato a costruirci
      case robuste, protette dalla chioma fogliforme e sfruttarne le importanti risorse
      idriche.
      
      <p>
      `
    );
  else if (name == "fioresambuco")
    $("#modal_detail_body").html(
      `
    <p>
    Il <b>fiore di Sambuco</b> è una delle particolarità dell’isola. A Komorebi esiste una
    vera e
    propria coltivazione di questi fiori, ampiamente utilizzati per le loro numerose
    proprietà. Vengono infatti essicati e usati come infuso curativo, trasformati in lozioni
    oppure ancora in sciroppi rinfrescanti e dissetanti.
    Famosa è la frittata di fiori, uno dei piatti tipici dell’isola che non può mancare nel
    menù.
    </p>
    `
    );
  else if (name == "tucano")
    $("#modal_detail_body").html(
      `
    <p>
    Il <b>tucano</b> è un uccello originario del Sud America. Il suo nome scientifico è
    Ramphastos
    toco anche detto tucano toco, ma viene semplicemente chiamato tucano. Questa specie è la
    più grande della sua famiglia con il becco che può raggiungere i 20cm di lunghezza. E’
    principalmente frugivoro, tuttavia, capita di vederlo nutrirsi di piccoli insetti. Vive
    in piccole comunità e si può trovare nelle foreste pluviali oppure in zone alberate
    della savana.
    </p>
    `
    );
  else if (name == "lepre")
    $("#modal_detail_body").html(
      `
    <p>
    La <b>lepre selvatica</b>, detta anche lepre comune, è una specie delle leproidi
    originaria
    dell’Europa e dell’Asia. Questa specie ha una forma molto sinuosa e la sua lunghezza
    varia dai 50 ai 65cm. Le zampe posteriori sono molto sviluppate così come l’udito.
    La lepre ha una dieta principalmente erbivora. Le sue abitudini sono crepuscolari e
    notturne ma non è raro riuscire a vederla anche durante il giorno ma solo in luoghi
    tranquilli.
    </p>
    `
    );
  else if (name == "scimmiaRagno")
    $("#modal_detail_body").html(
      `
    <p>
    La <b>scimmia ragno</b> chiamata Ateles paniscus è la scimmia più agile del mondo. I
    suoi
    lunghi arti l’aiutano a spostarsi da albero ad albero. Si nutre quasi esclusivamente di
    frutta, ma, nel caso non sia disponibile, può mangiare anche foglie. Ha una dieta molto
    variegata quindi il suo habitat si trova nelle vicinanze degli alberi da frutto. Vive
    infatti nelle foreste pluviali del Sud America. Il suo nome è dovuto appunto ai suoi
    arti sproporzionati.
    </p>
    `
    );
  $("#modal_detail").modal('show');
});


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
overlay.addEventListener("click", () => {
  closeMenu();
});

$(document).scroll(function () {
  if ($('#alberelli').offset().top + $('#alberelli').height()
    >= $('footer').offset().top) {
    $('#alberelli').css({"position": "absolute", "bottom": "-1px"});
  }
  if ($(document).scrollTop() + window.innerHeight < $('footer').offset().top) {
    $('#alberelli').css('position', 'fixed'); // restore when you scroll up
  }
});

// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//     dynamicBullets: true,
//   },
// });
$('#galleryEsploraIsola').carousel
({
    interval: 0
})
