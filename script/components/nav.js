Vue.createApp({

    template: `
        <nav class="nav nav--slidebar">
            <ul>
                <li v-for="item in items" 
                :key="item">
                    <div class="nav__item" :class="{ 'active': index === 0 }" v-bind:id="'scrollMagic' + item.id" @click="navActive($event)">
                      <span class="nav__icon" v-html="item.icon"></span>
                      <span class="nav__text">{{item.text}}</span>
                    </div>
                </li>
            </ul>
        </nav>
    `,

    data: () => ({
        items : [
          {
            id:'0',
            text: 'Home',
            icon:'<i class="fas fa-home"></i>',
            href: 'javascript();',
          },
          {
            id:'1',
            text: 'About',
            icon:'<i class="far fa-user-circle"></i>',
            href: 'javascript();',
          },
          {
            id:'2',
            text: 'Portfolio',
            icon:'<i class="fal fa-suitcase"></i>',
            href: 'javascript();',
          },
          {
            id:'3',
            text:'Milestone',
            icon:'<i class="fal fa-building"></i>',
            href:'javascript();',
          }
        ],
      }),

    methods: { 
      navActive(event) {
        event.preventDefault();
        targetId = '#' + event.currentTarget.id;
        console.log(targetId);
        document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
        console.log('work');
      }
    },

    mounted() {
      // this.navActive();
  }

}).mount('#nav-vue')

