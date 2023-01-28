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
        dots: false,
        autoplay:false,
        draggable:true,
    });  
}
