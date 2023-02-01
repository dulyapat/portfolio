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
            let $scrollContainer = $(".scroll-container");

            if ($scrollContainer.length) {
                const controller = new ScrollMagic.Controller();
                const scene = [];
                
                for (let i = 0; i < $scrollContainer.length; i++) {
                $(".scroll-container:eq(" + i + ")").attr("id", "scrollMagic" + i);
                scene[i] = new ScrollMagic.Scene({triggerElement: "#scrollMagic" + i , duration: "0", offset: 0, triggerHook: 0.75})
                .on("enter", function () {
                $("#scrollMagic" + i).addClass('animation');
                })
                .on("leave", function () {
                $("#scrollMagic" + i).removeClass('animation');
                })
                // .addIndicators({name: i})
                .addTo(controller);
                }
            }
        }
    },

    mounted() {
        this.typeWritter();
        this.scrollAnimation();
    }

}).mount('#app')
