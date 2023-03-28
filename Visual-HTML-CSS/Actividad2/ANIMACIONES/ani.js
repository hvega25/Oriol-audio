
//animación con el scroll 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop < 50  || document.documentElement.scrollTop < 50) {
    document.getElementsById("texto_en_imagen").style.fontSize = "30px";
  } else {
    document.getElementsById("texto_en_imagen").style.fontSize = "90px";
  }
}