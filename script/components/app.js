Vue.createApp({
    methods: { 
        typeWritter() {
            const contentValue = document.querySelectorAll('.content__animation');
            console.log(contentValue);

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
        }
    },

    mounted() {
        this.typeWritter();
    }

}).mount('#app')
