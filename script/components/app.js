Vue.createApp({
    methods: { 
        typeWritter() {
            const contentValue = document.querySelectorAll('.content__animation');

            contentValue.forEach(e => {
                const textAll = e.dataset.value;
    
                var typewriter = new Typewriter(e, {
                    delay: 75,
                });
    
                typewriter
                .start()
                .pauseFor(1000)
                .typeString(textAll)
                .pauseFor(800)
                .callFunction(() => {
                    const cursor = document.querySelectorAll('.Typewriter__cursor');
                    cursor.forEach( e => e.classList.add('d-none'));
                }) 
            })
        },

        scrollAnimation() {
            let $scrollContainer = $(".content.scroll-container");

            if ($scrollContainer.length) {
                const controller = new ScrollMagic.Controller();
                const scene = [];
                
                for (let i = 0; i < $scrollContainer.length; i++) {
                $(".content.scroll-container:eq(" + i + ")").attr("id", "scrollMagic" + i);
                scene[i] = new ScrollMagic.Scene({
                triggerElement: "#scrollMagic" + i , 
                duration: $("#scrollMagic" + i).height(), 
                triggerHook: 0.5})
                .on("enter", function () {
                $(".content#scrollMagic" + i).addClass('animation');
                let $this = this;
                let currentId = $this.triggerElement().getAttribute('id');

                const navAll = document.querySelectorAll('.nav--slidebar .nav__item');
                const remove = navAll.forEach(t => t.classList.remove('active'));

                // check nav link same id and add active
                const checkDiv = document.querySelector(`.nav--slidebar .nav__item#${currentId}`);
                checkDiv ? checkDiv.classList.add('active') : '' ;
                
            })
                .on("leave", function () {
                $(".content#scrollMagic" + i).removeClass('animation');
                })
                // .addIndicators({name: i})
                .addTo(controller);
                }
            }
        },
    },

    mounted() {
        this.typeWritter();
        this.scrollAnimation();
    }

}).mount('#app')
