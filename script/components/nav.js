Vue.createApp({

    template: `
        <nav class="nav nav--slidebar">
            <ul>
                <li v-for="item in items" 
                :key="item">
                    <a class="nav__item" v-bind:id="item.id" v-bind:href="item.href">
                      <span class="nav__icon" v-html="item.icon"></span>
                    </a>
                </li>
            </ul>
        </nav>
    `,

    data: () => ({
        items : [
          {
            id:'home',
            text: 'Home',
            icon:'<i class="fas fa-home"></i>',
            href: 'javascript();',
          },
          {
            id:'aboutus',
            text: 'About',
            icon:'<i class="far fa-user-circle"></i>',
            href: 'javascript();',
          },
          {
            id:'portfolio',
            text: 'Portfolio',
            icon:'<i class="fal fa-suitcase"></i>',
            href: 'javascript();',
          },
          {
            id:'call',
            text:'call',
            icon:'<i class="fas fa-mobile-alt"></i>',
            href:'javascript();',
          }
        ],
      }),

}).mount('#nav-vue')

