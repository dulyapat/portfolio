class scrollMagic { 
    constructor() {
        this.init()
    }

    init() {
        var controller = new ScrollMagic.Controller();
        const sectionAll = document.querySelectorAll('.section--full-height');

        for (let i = 0; i < sectionAll.length; i++) {
            const getDiv = sectionAll[i].getAttribute('id');
            
            new ScrollMagic.Scene({ 
                triggerElement: "#" + getDiv, 
                // duration: $("#" + getDiv).height(), 
                duration: $("#" + getDiv).height(), 
                triggerHook: 0.5, 
            }).on("enter", function () {
                    let $this = this;
                    let currentId = $this.triggerElement().getAttribute('id');

                    console.log(currentId);
                    // $historyItem.forEach(e => e.classList.remove('active'));
                    sectionAll.forEach(s => s.classList.remove('active'));

                    // add class active to current viewpoint
                    const currentEl = $this.triggerElement().classList.add('active');

                    // check nav link same id and add active
                    const checkDiv = document.querySelector(`.section--full-height#${currentId}`);
                    
                    checkDiv ? checkNav.classList.add('active') : '' ;

                    // console.log($this.triggerElement().getAttribute('id'));
                })
                .addIndicators() 
                .addTo(controller);
        }
    }
}

export default scrollMagic
