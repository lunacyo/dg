$(document).ready(function(){
    $(".navbar a").mouseover(function(){
        if($(this).html()==="women"){
            $(".women_Sub").show();
            $(this).css("text-decoration","underline");
        }else{
            $(".women_Sub").hide();
            $(this).css("text-decoration","underline");
        }
        if($(this).html()==="men"){
            $(".men_Sub").show();
            $(this).css("text-decoration","underline");
        }else{
            $(".men_Sub").hide();
            $(this).css("text-decoration","underline");
        }
        if($(this).html()==="children"){
            $(".child_Sub").show();
            $(this).css("text-decoration","underline");
        }else{
            $(".child_Sub").hide();
            $(this).css("text-decoration","underline");
        }
    });
    $(".dg_Logo").mouseover(function(){
        $(this).css("cursor","pointer");
    });
    $(".dg_Logo").click(function(){
        location.href="#";
    })
    $(".navbar a").mouseout(function(){
        $(this).css("text-decoration","none");
        });
    $("main").mouseover(function(){
         $(".women_Sub").hide();
        $(".men_Sub").hide();
        $(".child_Sub").hide();
    });
    $(".main_Img").mouseover(function(){
        $(this).css("opacity","0.9");
    });
    $(".main_Img").mouseout(function(){
        $(this).css("opacity","1");
    })
    $(".small_Wrap img,h2,.small_Blackbox,.smallbg_Wrap img").mouseover(function(){
        $(this).css("opacity","0.8");
    });
    $(".small_Wrap img,h2,.small_Blackbox,.smallbg_Wrap img").mouseout(function(){
        $(this).css("opacity","1");
    });
    $(".bigImgleft_Wrap img,h1,.bigImgright_Wrap img,.big_Blackbox").mouseover(function(){
        $(this).css("opacity","0.8");
    });
    $(".bigImgleft_Wrap img,h1,.bigImgright_Wrap img,.big_Blackbox").mouseout(function(){
        $(this).css("opacity","1");
    })
    $(".back").mouseover(function(){
        $(this).css("text-decoration","none");
    });
    $(".back").mouseout(function(){
        $(this).css("text-decoration","underline");
    });
   $(".bottom_Nav li").mouseover(function(){
    $(this).css("text-decoration","underline");
   }); 
    $(".bottom_Nav li").mouseout(function(){
    $(this).css("text-decoration","none");
    });
    $(".nav_Sub li").mouseover(function(){
        $(this).css("text-decoration","underline");
    });
    $(".nav_Sub li").mouseout(function(){
        $(this).css("text-decoration","none");
    });
    $(".sub_Store").mouseover(function(){
        $(this).css("text-decoration","underline");
        $(this).css("color","gray");
        $(this).css("border-color","gray");
    });
    $(".sub_Store").mouseout(function(){
        $(this).css("text-decoration","none");
        $(this).css("color","black");
        $(this).css("border-color","black");
    });
    $(".back a").click(function(){
         $('html, body').animate({scrollTop: $("main").offset().top},1000);
    });
    $(".mb_Nav div").click(function(){
        if($(this).html()==="="){
            $(this).html("&times");
           $(".mb_Nav>ul").show().animate({left:"-20px"});
            $(".modal").show();
        }else{
            $(this).html("&#61");
            $(".mb_Nav>ul").show().animate({left:"-500px"});
            $(".modal").hide();
        }
    });
    $(".mb_Women").click(function(){
        $(".mbSub_Women").slideToggle();
        $(".mbSub_Men").slideUp();
        $(".mbSub_Child").slideUp();
    });
    $(".mb_Men").click(function(){
        $(".mbSub_Men").slideToggle();
        $(".mbSub_Women").slideUp();
        $(".mbSub_Child").slideUp();
    });
    $(".mb_Child").click(function(){
        $(".mbSub_Child").slideToggle();
        $(".mbSub_Women").slideUp();
        $(".mbSub_Men").slideUp();
    });
});
$(document).ready(function(){
        var jbOffset = $('#header').offset();
        $(window).scroll(function() {
          if ($(document).scrollTop() > jbOffset.top ) {
            $('#header').addClass('fix');
          }
          else {
            $('#header').removeClass('fix');
          }
        });
      });
