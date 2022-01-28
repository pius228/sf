//modal
$('.communication__phone').on('click', function(){
    $('.form-phone_modal').addClass('d-block');
    $('.overlay').addClass('d-block');
  })
  $('.overlay').on('click', function(){
    $('.overlay').removeClass('d-block');
    $('.form-phone_modal').removeClass('d-block');
  });
  $('.form-phone__close').on('click', function(){
    $('.overlay').removeClass('d-block');
    $('.form-phone_modal').removeClass('d-block');
  });
  const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 40,
    grabCursor: true,
    loop: true,
    stopOnLastSlide:true,
    autoplay:{
        delay:5000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
    //hamburger
$('.burger').on('click', function(){
  $('.nav-mobile-modal').toggle();
})
$('.close').on('click', function(){
  $('.nav-mobile-modal').hide();
})
//modal
$('.communication__phone').on('click', function(){
  $('.form-phone_modal').addClass('d-block');
  $('.overlay').addClass('d-block');
})
$('.overlay').on('click', function(){
  $('.overlay').removeClass('d-block');
  $('.form-phone_modal').removeClass('d-block');
});
$('.form-phone__close').on('click', function(){
  $('.container').removeClass('d-block');
  $('.form-phone_modal').removeClass('d-block');
});