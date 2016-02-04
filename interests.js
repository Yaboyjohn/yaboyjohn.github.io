$(document).ready(function() {
  var click = 0
    $("#menu-icon").rotate({bind:{
      click: function(){
        click += 1
          if (click === 1){
              $(this).rotate({
                  duration:400,
                  angle: 0,
                  animateTo:90
              })
          }
          else {
              click = 0
                  $(this).rotate({
                    duration:400,
                    angle: 90,
                    animateTo:180
                  })
          }
      }
    }
  });
  var click = 0
  $(document).keypress(function(event){
    if (event.which === 109){
      click += 1
      if (click === 1){
        $('#menu-icon').rotate({
          duration: 400,
          angle: 0,
          animateTo: 90
      })
      }
      else
      click = 0
          $('#menu-icon').rotate({
            duration:400,
            angle: 90,
            animateTo:180
          })
    }
  });

  var menuopen = 0
    $(document).keypress(function(event){
      if(event.which === 109){
        menuopen += 1
        if (menuopen === 1){
        $('#menu-container').animate({
          left: "-215px"
        }, 200);
        $('.transparent').addClass('menu-open');
        $('.slideout-container').animate({
          right: "0px"
        }, 200);
        }
        else {
          menuopen = 0
          $('#menu-container').animate({
            left: "0px"
          }, 200);
          $('.transparent').removeClass('menu-open')
          $('.slideout-container').animate({
            right: "-300px"
          }, 200);
          }
      }
    });
      var menuopen = 0
      $("#menu-container").click(function() {
        menuopen += 1
        if (menuopen === 1){
        $('#menu-container').animate({
          left: "-215px"
        }, 200);
        $('.transparent').addClass('menu-open');
        $('.slideout-container').animate({
          right: "0px"
        }, 200);
        }
        else {
          menuopen = 0
          $('#menu-container').animate({
            left: "0px"
          }, 200);
          $('.transparent').removeClass('menu-open')
          $('.slideout-container').animate({
            right: "-300px"
          }, 200);
          }
      });
      $('#homeicon').mouseenter(function(){
        $(this).css('opacity', '1');
      });

      $('#homeicon').mouseleave(function() {
        $(this).css('opacity', '0.7');
      });
});
