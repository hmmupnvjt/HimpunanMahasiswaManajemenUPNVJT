$(document).ready(function(){
   
    $("#slider-hero").owlCarousel({
        nav: true,
        items: 1,
        navText: [
            "<i class='fas fa-arrow-left'><i>",
            "<i class='fas fa-arrow-right'><i>"
        ],
        navContainer: "#slider-hero-nav",
    });

   
        $("#struktur-organisasi-slider").owlCarousel({
            loop: true,
            nav: true,
            // mouseDrag: false,
            items: 3,
            dots: true,
            margin: 30,
            navText: [
                '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
            ],
            navContainer: "#slider-tools-1",
        });



        $("#program-kerja-slider").owlCarousel({
            loop: true,
            nav: true,
            // mouseDrag: true,
            items: 2,
            dots: true,
            margin: 20,
            navText: [
                '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
            ],
            navContainer: "#slider-tools-2",
        });
        

        $("#kelas-slider").owlCarousel({
            loop: true,
            nav: true,
            // mouseDrag: true,
            items: 3,
            dots: true,
            margin: 20,
            navText: [
                '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
                '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
            ],
            navContainer: "#slider-tools-3",
        });
        
        
    
});


ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.header, .brand, .searchbox', { origin: 'left' });
ScrollReveal().reveal('.section-tittle, .section-tittle h2', { origin: 'top' });
ScrollReveal().reveal('.hero-area, .profil, .about, .divisi, .agenda, .section-content, .section-thumbnail, .thumbnail, .section-item-caption, .section-tittle p, .profil p', { origin: 'bottom' });
ScrollReveal().reveal('.topbar, .sosmed, .top-contact', { origin: 'right' });



const typed = new Typed('.multiple-text', {
    strings: ['MBKM 2024 TELAH DIBUKA!', 'DAFTARKAN DIRIMU SEKARANG', 'KLIK DISINI UNTUK INFO SELENGKAPNYA'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});


let items = document.querySelectorAll('.slider .item. list');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thumbnails = document.querySelectorAll('.thumbnail .item');

let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive + itemActive + 1;
    if(itemActive >= countItem){
        itemActive = 0;
    }
    showSlider();
}

function showSlider(){
    let itemActiveOld = document.querySelector('.slider .item.active');
    let thumbnailActiveOld = document.querySelector ('thumbnail .item.active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
}

// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
      margin:10,
      nav:true,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      center: true,
      navText: [
          "<i class='fa fa-angle-left'></i>",
          "<i class='fa fa-angle-right'></i>"
      ],
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
    });
  });


