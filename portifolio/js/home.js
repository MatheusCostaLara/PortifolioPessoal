// menu-toggle abrir e fechar

$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active');
    })

})
function fechar(){   
     $('nav').toggleClass('active');
}

//efeito scfroll roll no site
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
 
    var target = $(this.hash);

    if (target.length) {
      $('html, body').animate({ scrollTop: target.offset().top }, 800);
      return false;
    }

  });
});

//botão voltar ao topo

//$(document).ready(function() {
  //$('#subir').click(function(){
    //$('html, body').animate({scrollTop:0}, 900);
  //  return false;
  //});
//});

$(document).ready(function(){

 var containerBtn = $('#voltarTopo');
  var btLink = $('#subir');

  $(window).scroll(function(){

    if($(this).scrollTop()>70){
      containerBtn.fadeIn(350);
    }else{
      containerBtn.fadeOut(350);
    }
    
  });

  containerBtn.click(function(){
  $('html, body').animate({scrollTop:0}, 900);
    return false;
    });
 
})

AOS.init({
  duration: 1200,
})