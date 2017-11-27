import Vue from 'vue'
import Router from 'vue-router'


import Index from '../components/index'
import Song_Find from '@/components/Song_Find'
//音木开始
import YiMu from '../components/indexPage/indexPage'
import DianTai from '../components/YinMU/diantai'
import GeDan from '@/components/YinMU/GeDan'
import GedanXiangqing from '@/components/pages/gedanXiangqing'
import Bang_Dan from '@/components/YinMU/Bang_Dan'
//音木结束

//我的 开始
import Mine_Music from '@/components/Min_Music/Mine_Music'

//我的结束

//动态
import DongTai from '../components/DongTai/DongTai'
//搜索
import Myself_Music from '@/components/Search/Myself_Music'

//侧边导航
import MyZone from '@/components/pages/myZone'
import HuiYuanZhongXin from '@/components/pages/huiYuanZhongXin'
import MyFirends from '@/components/pages/myFirends'
import Fujinderen from '@/components/pages/fujinderen'
import Myinfo from '@/components/pages/MyInfo'
import Zhuti from '@/components/pages/Zhuti'
import Dingshi from '@/components/pages/Dingshi'
import Shezhi from '@/components/pages/Shezhi'
import Yunpan from '@/components/pages/Yunpan'
import SongFind from '@/components/Song_Find'

//import My_Lovelist from '../components/pages/My_Lovelist'
Vue.use(Router)

import IndexPage from '@/components/indexPage/indexPage'

//轮播图
require('swiper/dist/css/swiper.css')

//首页
import Everyday from '@/components/everyday/everyday'
import Hotsongs from '@/components/hotsongs/hotsongs'
import Party from '@/components/party/party'
import Ksongs from '@/components/party/Ksongs'
import Player from '@/components/player'
import Musiclist from '@/components/musiclist'
//import Data from '@/components/data'

//个人信息
import GeRenMsg from '@/components/pages/Myself_Dtile/GeRenMsg'
export default new Router({
	linkActiveClass: "active",
	routes: [{
			path: '/',
			name: 'index',
			component: Index,
			redirect: "/yinmu",
			children: [{
					path: 'yinmu',
					name: 'indexPage',
					component: YiMu
				},
				{
					path: 'Mine_Music',
					name: 'Mine_Music',
					component: Mine_Music
				},
				{
					path: 'DongTai',
					name: 'DongTai',
					component: DongTai
				}

			]
		},
		{
			path: '/Myself_Music',
			name: 'Myself_Music',
			component: Myself_Music
		},
		{
			path: '/GeRenMsg',
			name: 'GeRenMsg',
			component: GeRenMsg
		},
		{
			path: '/myzone',
			name: 'myZone',
			component: MyZone
		},
		{
			path: '/huiyuanzhongxin',
			name: 'huiYuanZhongXin',
			component: HuiYuanZhongXin
		},
		{
			path: '/myfirends',
			name: 'myFirends',
			component: MyFirends
		},
		{
			path: '/fujinderen',
			name: 'fujinderen',
			component: Fujinderen
		},
		{
			path: '/myinfo',
			name: 'MyInfo',
			component: Myinfo
		},
		{
			path: '/zhuti',
			name: 'zhuti',
			component: Zhuti
		},
		{
			path: '/dingshi',
			name: 'dingshi',
			component: Dingshi
		},
		{
			path: '/shezhi',
			name: 'shezhi',
			component: Shezhi
		},
		{
			path: '/yunpan',
			name: 'yunpan',
			component: Yunpan
		},
		{
			path: "gedan/gedanXiangqing",
			name: 'gedanXiangqing',
			component: GedanXiangqing
		},
		{
			path: '/everyday',
			name: 'Everyday',
			component: Everyday
		},
		{
			path: '/hotsongs',
			name: 'Hotsongs',
			component: Hotsongs
		},
		
		{
			path: '/player',
			name: 'Player',
			component: Player,
		},
		{
			path: '/musiclist',
			name: 'Musiclist',
			component: Musiclist,
		},
	    {
	      path:'/party',
	      name: 'Party',
	      component:Party
	    },
	    {
	    	path: "/songfind",
	    	name: 'SongFind',
	    	component:SongFind
	    }
		
//		{
//			path: '/data',
//			name: 'Data',
//			component: Data,
//		}

	]
})