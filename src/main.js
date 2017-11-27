// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('swiper/dist/css/swiper.css')
import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./store"
import VueAwesomeSwiper from 'vue-awesome-swiper'


import   Axios  from  "axios"

import { Header } from 'mint-ui'

import 'mint-ui/lib/style.css'

Vue.component(Header.name , Header);

import { Button } from 'mint-ui';
import  './components/styles/layout.scss';
Vue.component(Button.name , Button);

import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name , Navbar);
Vue.component(TabItem.name , TabItem);

import { TabContainer, TabContainerItem } from 'mint-ui';
Vue.component(TabContainer.name , TabContainer);
Vue.component(TabContainerItem.name , TabContainerItem);

import { Cell } from 'mint-ui';
Vue.component(Cell.name , Cell);
import { Spinner } from 'mint-ui';
import { CellSwipe } from 'mint-ui';
Vue.component(CellSwipe.name , CellSwipe);
Vue.prototype.$axios=Axios

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

import { Tabs,TabPane } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import{ Switch} from 'element-ui'
Vue.use(Switch)

Vue.use(Tabs)
Vue.use(TabPane)
Vue.prototype.HOST = '/api'

Vue.prototype.bangdan="/bangdan"

Vue.prototype.songlist="/musiclist"



/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
