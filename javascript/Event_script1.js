var h = window.innerHeight;
var w = window.innerWidth;
if (window.innerWidth <= 850) {
    document.location = "/m/competitions";
    window.location.replace("/m/competitions");
}
window.addEventListener('resize', function(){
    if (window.innerWidth <= 850) {
        document.location = "/m/competitions";
        window.location.replace("/m/competitions");
    }
});
var counted = 0;
$(window).scroll(function() {

    var oTop = $('.count').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.animated-circle').css({
            animation: "anime "+ 1.3+"s linear forwards",
        });
        $('.count').each(function() {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 1500,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        counted = 1;
    }

});
$(window).scroll(function() {
    var scroll = $(window).scrollTop() || 0;
    // console.log('scrolled', "scale("+ scroll +")")
    var zoom = 1+scroll/200;

    if(zoom>=1){
      $(".img").css({
          transform: "scale("+ zoom +")",

      })
    }

    console.log(scroll)

    if(scroll>500){
      $(".col-3").css({"z-index": 5});
      $(".col-4").css({"z-index": 5})
    }else{
      $(".col-3").css({"z-index": -10})
      $(".col-4").css({"z-index": -10})
    }

    $(".compi").css({
      width: 360+scroll*1.2,
      opacity:  (1-scroll/400),
        // blur: scroll*100,
    })

    $(".compi-scroll").css({
      opacity:  (1-scroll/400),
    })

    $("#overlayer").css({
      opacity:  (1-scroll/100),
    })

  });
  $(document).ready(function()
        {
            $(".post-modules").css("transition", "transform 200ms ease-in-out");
            // $(".post-content").css("transition", "transform 100ms ease-in-out");
    
            $(".post-modules").hover(
                // Handler for mouseenter
                function()
                {
                    $(this).css("transform", "scale(1.08,1.25)");
                    $(this).children( ".post-content" ).css("transform", "scale(1,0.8)");
                    $(this).children( ".post-content" ).css("margin-bottom", "-20px");
                },
                // Handler for mouseleave
                function()
                {
                    $(this).css("transform", "scale(1)");
                    $(this).children( ".post-content" ).css("transform", "scale(1)");
                    $(this).children( ".post-content" ).css("margin-bottom", "0px");
                }
            );
        });
        $(document).ready(function () {
            $('.dropdown').hover(function () {
                $(this).find('.dropdown-menu').first().stop().slideDown(250);
            }, function () {
                $(this).find('.dropdown-menu').first().stop().slideUp(205)
            });
        });
    
        $(function() {
            $('a[href*=#]').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000);
            });
        });
        var prevScrollpos = window.pageYOffset;
    
            
            window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    document.getElementById("navbar").style.top = "0";
                    document.getElementById("bottom-bar").style.bottom = "0";
    
                } else {
                    document.getElementById("navbar").style.top = "-100px";
                    document.getElementById("bottom-bar").style.bottom = "-100px";
                }
                prevScrollpos = currentScrollPos;
            }
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', 'UA-81222017-1');
AOS.init();