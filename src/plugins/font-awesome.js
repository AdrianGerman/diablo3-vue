import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faSkull, faCrown, faDungeon, faHatWizard, faHammer, faGem } from '@fortawesome/free-solid-svg-icons'
import { faVuejs, faBootstrap, faFontAwesome, faGithub, faBattleNet } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Le añadimos los iconos que acabamos de importar (todos, los de tipo solid y de tipo brand)
library.add(
    faSkull,
    faCrown,
    faDungeon,
    faHatWizard,
    faHammer,
    faGem,
    faVuejs,
    faBootstrap,
    faFontAwesome,
    faGithub,
    faBattleNet
)


Vue.component('font-awesome-icon', FontAwesomeIcon)
