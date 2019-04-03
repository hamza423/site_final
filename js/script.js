// ouvrir la carte
$('.open-button').click(function(){
  $(this).siblings('.').toggleClass('open');
});

// fermer la carte
$('.close-button').click(function(){
  $(this).parent().parent('.card-reveal').toggleClass('open');
});

