if(document.querySelector('.slick--image')) {
    $('.slick--image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite:true,
        loop:true,
        dots: false,
        autoplay:true,
        draggable:true,
    }); 
}

if(document.querySelector('.slick--portfolio')) { 
    $('.slick--portfolio').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        infinite:true,
        loop:true,
        dots: true,
        customPaging : function(slider, i) {
            return "<div class='slick__dots'></div>";
           },
        autoplay:false,
        draggable:true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });  
}

if(document.querySelector('.slick--milestone')) { 
    $('.slick--milestone').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        infinite:false,
        loop:false,
        dots: false,
        autoplay:false,
        draggable:true,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });  
}
