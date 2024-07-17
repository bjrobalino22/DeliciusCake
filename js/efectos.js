$(document).ready(function(){

  //Efecto menú

  $('.menu a').each(function(index,elemento){
      $(this).css({
          'top':'-200px'
      });
      $(this).animate({
          top:'0'
      }, 2000 + (index * 500));
  });

  if($(window).width()>800){
      $('header .texto').css({
          opacity:0,
          marginTop:0
      });
      $('header .texto').animate({
          opacity:1,
          marginTop:'-52px'
      }, 1500);

  }
  //Scroll Elementos de menú
  var acercaDe =$('#acerca-de').offset().top,
      menu = $('#platillos').offset().top,
      galeria = $('#galeria').offset().top,
      ubicacion =$('#ubicacion').offset().top;
  $('#btn-acerca-de').on('click', function(e){
      e.preventDefault();
      $('html , body').animate({
          scrollTop: acercaDe - 100
      } , 500);
  });

  $('#btn-menu').on('click', function(e){
      e.preventDefault();
      $('html , body').animate({
          scrollTop: menu - 100
      } , 500);
  });

  $('#btn-galeria').on('click', function(e){
      e.preventDefault();
      $('html , body').animate({
          scrollTop: galeria - 100
      } , 500);
  });
  $('#btn-ubicacion').on('click', function(e){
      e.preventDefault();
      $('html , body').animate({
          scrollTop: ubicacion - 100
      } , 500);
  });
  let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    if (index < 0) {
        currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    
    const offset = -currentIndex * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`; // Corregido
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});

})
let currentIndex = 0;
    const slides = document.querySelectorAll('.carousel-item');

    function showSlide(index) {
        // Oculta todas las imágenes
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        
        // Asegura que el índice esté dentro de los límites
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        
        // Muestra la imagen actual
        slides[currentIndex].style.display = 'flex';
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Mostrar la primera imagen al cargar la página
    document.addEventListener('DOMContentLoaded', () => {
        showSlide(currentIndex);
    });