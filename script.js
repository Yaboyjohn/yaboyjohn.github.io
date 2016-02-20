$(document).ready(function() {
      var counter = 0;
      var display = function() {
        $('#sunset-caption-container4').fadeIn(600);
      }
      setTimeout(display, 1000);
      $('.next-arrow').click(function() {
          counter += 1;
          var currentslide = $('.active');
          var nextslide = currentslide.next();

          var currentdot = $('.active-dot');
          var nextdot = currentdot.next();

          if ((counter * -1) % 4 === 0){
            nextslide = $('#starting-slide');
            nextdot = $('.dot').first();

            currentslide.fadeOut(600).addClass('not-active');
            nextslide.fadeIn(600).removeClass('not-active');

            currentdot.removeClass('active-dot');
            nextdot.addClass('active-dot');
          }

          currentslide.fadeOut(600).removeClass('active');
          nextslide.fadeIn(600).addClass('active');

          currentdot.removeClass('active-dot');
          nextdot.addClass('active-dot');
      });
      $(document).keydown(function(event){
        if(event.which === 39){
          counter += 1;
          var currentslide = $('.active');
          var nextslide = currentslide.next();

          var currentdot = $('.active-dot');
          var nextdot = currentdot.next();

          if ((counter * -1) % 4 === 0){
            nextslide = $('#starting-slide');
            nextdot = $('.dot').first();
          }

          currentslide.fadeOut(600).removeClass('active');
          nextslide.fadeIn(600).addClass('active');

          currentdot.removeClass('active-dot');
          nextdot.addClass('active-dot');
          }

          else if (event.which === 37){
            counter -= 1
            var currentslide = $('.active');
            var prevslide = currentslide.prev();

            var currentdot = $('.active-dot');
            var prevdot = currentdot.prev();

            if ((counter * -1) % 4 === 1){
              prevslide = $('#last-slide');
              prevdot = $('.dot').last();
            }
            else if (counter % 4 === 3){
              prevslide = $('#last-slide');
              prevdot = $('.dot').last();
            }

            currentslide.fadeOut(600).removeClass('active');
            prevslide.fadeIn(600).addClass('active');

            currentdot.removeClass('active-dot');
            prevdot.addClass('active-dot');
          }
      });
      $('.prev-arrow').click(function(){
        counter -= 1
        var currentslide = $('.active');
        var prevslide = currentslide.prev();

        var currentdot = $('.active-dot');
        var prevdot = currentdot.prev();

        if ((counter * -1) % 4 === 1){
          prevslide = $('#last-slide');
          prevdot = $('.dot').last();
        }
        else if (counter % 4 === 3){
          prevslide = $('#last-slide');
          prevdot = $('.dot').last();
        }

        currentslide.fadeOut(600).removeClass('active');
        prevslide.fadeIn(600).addClass('active');

        currentdot.removeClass('active-dot');
        prevdot.addClass('active-dot');
      });

    $('#dot1').click(function() {
      counter = 0
      var currentslide = $('.active');
      var currentdot = $('.active-dot');

      currentslide.fadeOut(600).removeClass('active');
      $('#starting-slide').fadeIn(600).addClass('active');

      currentdot.removeClass('active-dot');
      $('#dot1').addClass('active-dot');
    });
    $('#dot2').click(function() {
      counter = 1
      var currentslide = $('.active');
      var currentdot = $('.active-dot');

      currentslide.fadeOut(600).removeClass('active');
      $('#bro-slide').fadeIn(600).addClass('active');

      currentdot.removeClass('active-dot');
      $('#dot2').addClass('active-dot');
    });
    $('#dot3').click(function() {
      counter = 2
      var currentslide = $('.active');
      var currentdot = $('.active-dot');

      currentslide.fadeOut(600).removeClass('active');
      $('#squad-slide').fadeIn(600).addClass('active');

      currentdot.removeClass('active-dot');
      $('#dot3').addClass('active-dot');
    });
    $('#dot4').click(function() {
      counter = 3
      var currentslide = $('.active');
      var currentdot = $('.active-dot');

      currentslide.fadeOut(600).removeClass('active');
      $('#last-slide').fadeIn(600).addClass('active');

      currentdot.removeClass('active-dot');
      $('#dot4').addClass('active-dot');
    });
/* menu icon */
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

    /* contact icons */
    $('#gmail-container').mouseenter(function(){
      $('#gmail').removeClass('logo');
    });
    $('#gmail-container').mouseleave(function() {
      $('#gmail').addClass('logo');
    });

    $('#linkedin-container').mouseenter(function(){
      $('#graylinkedincontainer').css("background-color", "#00ABF1");
    });
    $('#linkedin-container').mouseleave(function(){
      $('#graylinkedincontainer').css("background-color", "white");
    });
    $('#twitter-container').mouseenter(function() {
      $('#graytwittercontainer').css("background-color", "#00ABF1");
    });
    $('#twitter-container').mouseleave(function() {
      $('#graytwittercontainer').css("background-color", "white");
    });

    /* about-page */
    $('.pic').mouseenter(function() {
      $(this).addClass('opacity');
    });
    $('.pic').mouseleave(function() {
      $(this).removeClass('opacity');
    });

    $('#swim').mouseenter(function() {
      $('#swimcaption').css("display", "block");
    });
    $('#swim').mouseleave(function() {
      $('#swimcaption').css("display", "none");
    });

    $('#johnpic').mouseenter(function() {
      $('#johncaption').css("display", "block");
    });
    $('#johnpic').mouseleave(function() {
      $('#johncaption').css("display", "none");
    });

    $('#music').mouseenter(function() {
      $('#musiccaption').css("display", "block");
    });
    $('#music').mouseleave(function() {
      $('#musiccaption').css("display", "none");
    });

    $('#project').mouseenter(function() {
      $('#projectcaption').css("display", "block");
    });
    $('#project').mouseleave(function() {
      $('#projectcaption').css("display", "none");
    });

    /* music-page */
    var x = function() {
      $('.x').css("z-index", "900");
    }

    var y = function() {
      $('#hunnid').css("z-index", "850");
    }

    $('#music').click(function() {
      $('.about-page').slideUp(600);
      setTimeout(y, 1000);
      setTimeout(x, 1000);
    });

    /* x showing and hiding */
    $('.x').click(function() {
      $('.about-page').slideDown(600);
      $('.x').css("z-index", "200");
      $('#hunnid').css('z-index', "200");
    });

    $(document).keydown(function(event){
      if (event.which === 27){
        $('.about-page').slideDown(600);
        $('.x').css("z-index", "200");
        $('#hunnid').css('z-index', "200");
      }
    });

    /* odesza songs play arrow */
    $('#memories').mouseenter(function() {
      $('#memories-pic').addClass('song-opacity');
      $('#memories-arrow').css("display", "block");
    });
    $('#memories').mouseleave(function() {
      $('#memories-pic').removeClass('song-opacity');
      $('#memories-arrow').css("display", "none");
    });

    $('#allweneed').mouseenter(function() {
      $('#allweneed-pic').addClass('song-opacity');
      $('#allweneed-arrow').css("display", "block");
    });
    $('#allweneed').mouseleave(function() {
      $('#allweneed-pic').removeClass('song-opacity');
      $('#allweneed-arrow').css("display", "none");
    });

    $('#waited').mouseenter(function() {
      $('#waited-pic').addClass('song-opacity');
      $('#waited-arrow').css("display", "block");
    });
    $('#waited').mouseleave(function() {
      $('#waited-pic').removeClass('song-opacity');
      $('#waited-arrow').css("display", "none");
    });

    /* drake songs play arrow */
    $('#hunnid').mouseenter(function() {
      $('#1hunnid-pic').addClass('song-opacity');
      $('#1hunnid-arrow').css("display", "block");
    });
    $('#hunnid').mouseleave(function() {
      $('#1hunnid-pic').removeClass('song-opacity');
      $('#1hunnid-arrow').css("display", "none");
    });

    $('#believe').mouseenter(function() {
      $('#believe-pic').addClass('song-opacity');
      $('#believe-arrow').css("display", "block");
    });
    $('#believe').mouseleave(function() {
      $('#believe-pic').removeClass('song-opacity');
      $('#believe-arrow').css("display", "none");
    });

    $('#energy').mouseenter(function() {
      $('#energy-pic').addClass('song-opacity');
      $('#energy-arrow').css("display", "block");
    });
    $('#energy').mouseleave(function() {
      $('#energy-pic').removeClass('song-opacity');
      $('#energy-arrow').css("display", "none");
    });

    /* Tobu Songs play arrow */
  $('#life').mouseenter(function() {
     $('#life-pic').addClass('song-opacity');
     $('#life-arrow').css("display", "block");
  });
  $('#life').mouseleave(function() {
     $('#life-pic').removeClass('song-opacity');
     $('#life-arrow').css("display", "none");
  });

  $('#hope').mouseenter(function() {
     $('#hope-pic').addClass('song-opacity');
     $('#hope-arrow').css("display", "block");
  });
  $('#hope').mouseleave(function() {
     $('#hope-pic').removeClass('song-opacity');
     $('#hope-arrow').css("display", "none");
  });

  $('#summer').mouseenter(function() {
     $('#summer-pic').addClass('song-opacity');
     $('#summer-arrow').css("display", "block");
  });
  $('#summer').mouseleave(function() {
     $('#summer-pic').removeClass('song-opacity');
     $('#summer-arrow').css("display", "none");
  });

    $(document).mousemove(function(event) {
      if (event.pageX < 400) {
        $('#left-arrow').removeClass('music-arrow-show');
      }
      else {
        $('#left-arrow').addClass('music-arrow-show');
      }
    });

    $(document).mousemove(function(event) {
      if (event.pageX > 1000) {
        $('#right-arrow').removeClass('music-arrow-show');
      }
      else {
        $('#right-arrow').addClass('music-arrow-show');
      }
    });

    var absolute = function(musiccounter) {
          if (musiccounter < 0) {
                return musiccounter * -1;
          }
          else {
                return musiccounter;
          }
   };

    var musiccounter = 0
    $('#right-arrow').click(function() {
      musiccounter += 1;
      if (absolute(musiccounter) % 3 === 1) {
            $('.drake-page').fadeIn(600).addClass('music-active');
            $('.odesza-page').fadeOut(600).removeClass('music-active');
      }
      else if (absolute(musiccounter) % 3 === 2) {
            $('.tobu-page').fadeIn(600).addClass('music-active');
            $('.drake-page').fadeOut(600).removeClass('music-active');
      }
      else {
            $('.odesza-page').fadeIn(600).addClass('music-active');
            $('.tobu-page').fadeOut(600).removeClass('music-active');
      }
      });

    $('#left-arrow').click(function() {
      musiccounter -= 1;
      if (absolute(musiccounter) % 3 === 1) {
            $('.drake-page').fadeIn(600).addClass('music-active');
            $('.odesza-page').fadeOut(600).removeClass('music-active');
      }
      else if (absolute(musiccounter) % 3 === 2) {
            $('.tobu-page').fadeIn(600).addClass('music-active');
            $('.drake-page').fadeOut(600).removeClass('music-active');
      }
      else {
            $('.odesza-page').fadeIn(600).addClass('music-active');
            $('.tobu-page').fadeOut(600).removeClass('music-active');
      }
    });



      /* menu click scrolling */
      $('#homeicon').click(function() {
        $('body').scrollTo(0, {duration:'1000', offsetTop: '0'});
      });

      $('#about').click(function() {
        $('body').scrollTo('.about-page', {duration:'1000', offsetTop: '0'});
      });

      $('#project').click(function() {
        $('body').scrollTo('.project-page', {duration:'1500', offsetTop: '0'});
      });

      $('#contact').click(function() {
        $('body').scrollTo('.contact-page', {duration:'1500', offsetTop: '0'});
      });



      /* projects page */
      var fade1 = function() {
        $('#python-slide2').fadeIn(600);
      }

      var fade2 = function() {
        $('#python-slide3').fadeIn(600);
      }

      var fade3 = function() {
        $('#python-slide4').fadeIn(600);
      }

      var fade4 = function() {
        $('#python-slide1').fadeIn(600);
      }

      var pythonabsolute = function(pythoncounter) {
            if (pythoncounter < 0) {
                  return pythoncounter * -1;
            }
            else {
                  return pythoncounter;
            }
     };

     var reset = function() {
           $('#python-slide4').fadeOut(600);
           setTimeout(fade4, 600);
           pythoncounter = 0;
     }

      var pythoncounter = 0
      $('.python-next-arrow').click(function() {
            var currentdot = $('.python-active-dot');
            var nextdot = currentdot.next();
            pythoncounter += 1;

            if (pythonabsolute(pythoncounter) % 4 === 1) {
                  $('#python-slide1').fadeOut(600);
                  setTimeout(fade1, 600);
            }

            else if (pythonabsolute(pythoncounter) % 4 === 2) {
                  $('#python-slide2').fadeOut(600);
                  setTimeout(fade2, 600);
            }

            else if (pythonabsolute(pythoncounter) % 4 === 3) {
                  $('#python-slide3').fadeOut(600);
                  setTimeout(fade3, 600);
            }

            else if (pythonabsolute(pythoncounter) % 4 === 0) {
                  reset();
            }

            if ((pythoncounter * -1) % 4 === 0){
             nextdot = $('.python-dot').first();
             currentdot.removeClass('active-dot');
             nextdot.addClass('active-dot');
           }

            currentdot.removeClass('python-active-dot');
            nextdot.addClass('python-active-dot');
      });

      var reversefade1 = function() {
        $('#python-slide4').fadeIn(600);
      }

      var reversefade2 = function() {
        $('#python-slide3').fadeIn(600);
      }

      var reversefade3 = function() {
        $('#python-slide2').fadeIn(600);
      }

      var reversefade3 = function() {
        $('#python-slide1').fadeIn(600);
        pythoncounter = 0;
      }

      $('.python-prev-arrow').click(function() {
            var currentdot = $('.python-active-dot');
            var prevdot = currentdot.prev();
            pythoncounter -= 1;

            if (pythonabsolute(pythoncounter) % 4 === 1) {
                  $('#python-slide1').fadeOut(600);
                  setTimeout(reversefade1, 600);
            }

            else if (pythonabsolute(pythoncounter) % 4 === 2) {
                  $('#python-slide4').fadeOut(600);
                  setTimeout(reversefade2, 600);
            }

            else if (pythonabsolute(pythoncounter) % 4 === 3) {
                  $('#python-slide3').fadeOut(600);
                  setTimeout(reversefade3, 600);
            }

            else if (pythonabsolute(pythoncounter) % 4 === 0) {
                  $('#python-slide3').fadeOut(600);
                  setTimeout(reversefade4, 600);
            }



            if ((pythoncounter * -1) % 4 === 1){
              prevdot = $('.python-dot').last();
            }
            else if (pythoncounter % 4 === 3){
              prevdot = $('.python-dot').last();
            }
            currentdot.removeClass('python-active-dot');
            prevdot.addClass('python-active-dot');
      });
});
