<template>
	<div>
		<!--<mt-header title="最近播放">
			<router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			
		</mt-header>-->
		<div class="xiazai">
			<div class="xiazaiCon">
				<div class="playAll">
					<div class="menuLeft">
						<span class="playBtn"></span>
						<span class="playAllText">播放全部</span>
					</div>
					<span class="playAllMain"></span>
				</div>
				<a class="m-sgitem" href="#" v-for="(list,index) in listData" key='index'>
					<div class="sgfl sgfl-cred">{{list.musicNum}}</div>
					<div class="sgfr f-bd f-bd-btm">
						<div class="sgchfl">
							<div class="f-thide sgtl">{{list.musicTitle}}</div>
							<div class="f-thide sginfo">
								<i class="u-hmsprt sghot"></i> {{list.authorName}}-{{list.musicTag}}
							</div>
						</div>
						<div class="sgchfr">
									<span class="u-hmsprt sgchply"></span>
							<!--<mt-spinner type="fading-circle"></mt-spinner>-->
						</div>
					</div>
				</a>
			</div>
		</div>
				


	</div>
	
</template>

<script>
	export default {
		name:'recentPlay',
		data() {
			return {
				selected: "1",
				listData: [{
						"listid": 0,
						"musicNum": "01",
						"authorName": "宋冬野",
						"musicTitle": "安河桥",
						"musicTag": "安河桥北",
						"authortouxiang": "http://musicdata.baidu.com/data2/pic/af739e0109798366b9419230be5253ce/541222074/541222074.jpg@s_0,w_120"
					},
					{
						"listid": 1,
						"musicNum": "02",
						"authorName": "房东的猫",
						"musicTitle": "斑马斑马",
						"musicTag": "斑马斑马",
						"authortouxiang": "http://img1.cache.netease.com/catchpic/4/4B/4B54134661F818186743D3CB959145AA.jpg"
					},
					{
						"listid": 2,
						"musicNum": "03",
						"authorName": "房东的猫",
						"musicTitle": "不知归期的故人",
						"musicTag": "房东的猫",
						"authortouxiang": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=151991489,1693380038&fm=11&gp=0.jpg"
					},
					{
						"listid": 3,
						"musicNum": "04",
						"authorName": "Jam",
						"musicTitle": "差三岁",
						"musicTag": "差三岁",
						"authortouxiang": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3459548440,1277118836&fm=27&gp=0.jpg"
					},
					{
						"listid": 4,
						"musicNum": "05",
						"authorName": "薛之谦",
						"musicTitle": "丑八怪",
						"musicTag": "意外",
						"authortouxiang": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1341348846,941944801&fm=11&gp=0.jpg"
					},
					{
						"listid": 5,
						"musicNum": "06",
						"authorName": "从前车马邮件很慢,一生只够爱一个人",
						"musicTitle": "文爱",
						"musicTag": "文爱",
						"authortouxiang": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1436168172,2808323291&fm=11&gp=0.jpg"
					},
					{
						"listid": 6,
						"musicNum": "07",
						"authorName": "宋冬野",
						"musicTitle": "董小姐",
						"musicTag": "安河桥北",
						"authortouxiang": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1677859052,1711352332&fm=11&gp=0.jpg"
					},
					{
						"listid": 7,
						"musicNum": "08",
						"authorName": "bigbang",
						"musicTitle": "Blue",
						"musicTag": "'ALIVE'(BIGBANG迷你5辑 'ALIVE')",
						"authortouxiang": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1882918769,114446680&fm=27&gp=0.jpg"
					},
					{
						"listid": 8,
						"musicNum": "09",
						"authorName": "BIGBANG",
						"musicTitle": "IF YOU",
						"musicTag": "MADE SERIES 《D》",
						"authortouxiang": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2407350009,4155050311&fm=27&gp=0.jpg"
					},
					{
						"listid": 9,
						"musicNum": "10",
						"authorName": "iKON",
						"musicTitle": "RHYTHM TA",
						"musicTag": "WELCOME BACK",
						"authortouxiang": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1775361696,4173535094&fm=27&gp=0.jpg"
					},
					{
						"listid": 10,
						"musicNum": "11",
						"authorName": "左颜",
						"musicTitle": "搞笑",
						"musicTag": "搞笑",
						"authortouxiang": "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1683345350,3915893934&fm=27&gp=0.jpg"
					},
					{
						"listid": 11,
						"musicNum": "12",
						"authorName": "毛不易",
						"musicTitle": "像我这样的人",
						"musicTag": "明日之子 第8期",
						"authortouxiang": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=103621707,4242682116&fm=27&gp=0.jpg"
					},
					{
						"listid": 12,
						"musicNum": "13",
						"authorName": "红花会PG ONE",
						"musicTitle": "FRE$H ONE (Live)",
						"musicTag": "中国有嘻哈 第8期",
						"authortouxiang": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2412744735,839888081&fm=200&gp=0.jpg"
					},
					{
						"listid": 13,
						"musicNum": "14",
						"authorName": "VAVA",
						"musicTitle": "我的新衣 (Live)",
						"musicTag": "中国有嘻哈 第10期",
						"authortouxiang": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1867841905,2347349628&fm=200&gp=0.jpg"
					},
					{
						"listid": 14,
						"musicNum": "15",
						"authorName": "GAI",
						"musicTitle": "苦行僧 (Live)",
						"musicTag": "中国有嘻哈 第10期",
						"authortouxiang": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1823045900,2004100785&fm=27&gp=0.jpg"
					},
					{
						"listid": 15,
						"musicNum": "16",
						"authorName": "MINO",
						"musicTitle": "FEAR (KR Ver.)",
						"musicTag": "THE MOBB",
						"authortouxiang": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3981485745,48367493&fm=27&gp=0.jpg"
					},
					{
						"listid": 16,
						"musicNum": "17",
						"authorName": "MINO",
						"musicTitle": "Okey Dokey",
						"musicTag": "????? 4 Episode 6",
						"authortouxiang": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=324587218,393360137&fm=27&gp=0.jpg"
					},
					{
						"listid": 17,
						"musicNum": "18",
						"authorName": "周杰伦",
						"musicTitle": "给我一首歌的时间",
						"musicTag": "魔杰座",
						"authortouxiang": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=573152265,2686461279&fm=27&gp=0.jpg"
					},
					{
						"listid": 18,
						"musicNum": "19",
						"authorName": "iKON",
						"musicTitle": "BLING BLING",
						"musicTag": "NEW KIDS : BEGIN",
						"authortouxiang": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3208865977,3266007538&fm=27&gp=0.jpg"
					},
					{
						"listid": 19,
						"musicNum": "20",
						"authorName": "GALA",
						"musicTitle": "追梦赤子心",
						"musicTag": "追梦痴子心",
						"authortouxiang": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1291081202,3016553128&fm=200&gp=0.jpg"
					}
				],
				dianTaiList: [{
						"listid": 11,
						"musicNum": "12",
						"authorName": "毛不易",
						"musicTitle": "像我这样的人",
						"musicTag": "明日之子 第8期",
						"authortouxiang": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=103621707,4242682116&fm=27&gp=0.jpg"
					},
					{
						"listid": 12,
						"musicNum": "13",
						"authorName": "红花会PG ONE",
						"musicTitle": "FRE$H ONE (Live)",
						"musicTag": "中国有嘻哈 第8期",
						"authortouxiang": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2412744735,839888081&fm=200&gp=0.jpg"
					},
					{
						"listid": 13,
						"musicNum": "14",
						"authorName": "VAVA",
						"musicTitle": "我的新衣 (Live)",
						"musicTag": "中国有嘻哈 第10期",
						"authortouxiang": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1867841905,2347349628&fm=200&gp=0.jpg"
					},
					{
						"listid": 14,
						"musicNum": "15",
						"authorName": "GAI",
						"musicTitle": "苦行僧 (Live)",
						"musicTag": "中国有嘻哈 第10期",
						"authortouxiang": "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1823045900,2004100785&fm=27&gp=0.jpg"
					},
					{
						"listid": 15,
						"musicNum": "16",
						"authorName": "MINO",
						"musicTitle": "FEAR (KR Ver.)",
						"musicTag": "THE MOBB",
						"authortouxiang": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3981485745,48367493&fm=27&gp=0.jpg"
					},
					{
						"listid": 16,
						"musicNum": "17",
						"authorName": "MINO",
						"musicTitle": "Okey Dokey",
						"musicTag": "????? 4 Episode 6",
						"authortouxiang": "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=324587218,393360137&fm=27&gp=0.jpg"
					},
					{
						"listid": 17,
						"musicNum": "18",
						"authorName": "周杰伦",
						"musicTitle": "给我一首歌的时间",
						"musicTag": "魔杰座",
						"authortouxiang": "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=573152265,2686461279&fm=27&gp=0.jpg"
					},
					{
						"listid": 18,
						"musicNum": "19",
						"authorName": "iKON",
						"musicTitle": "BLING BLING",
						"musicTag": "NEW KIDS : BEGIN",
						"authortouxiang": "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3208865977,3266007538&fm=27&gp=0.jpg"
					},
					{
						"listid": 19,
						"musicNum": "20",
						"authorName": "GALA",
						"musicTitle": "追梦赤子心",
						"musicTag": "追梦痴子心",
						"authortouxiang": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1291081202,3016553128&fm=200&gp=0.jpg"
					}
				]

			};
		},
		methods: {

		}
	};
</script>

<style lang="less">
	.mint-header {
		background: linear-gradient(to right, #6532B5, #B4226D);
		height: 70/50rem;
		font-size: 38/100rem;
	}
	
	.is-selected div {
		color: #E41F6E;
	}
	
	.mint-navbar .mint-tab-item.is-selected {
		border-bottom: 5px solid #E41F6E;
	}
	
	.mint-tab-item-label {
		font-size: 34/100rem;
	}
	
	.xiazai {
		width: 100%;
		.xiazaiCon {
			a {
				color: #333333;
				.touxiang {
					img {
						width: 1rem;
						height: 1rem;
					}
				}
			}
			.m-sgitem,
			.m-sgitem .sgfl {
				display: -webkit-box;
				display: flex;
			}
			.m-sgitem {
				padding-left: 10/50rem;
			}
			.m-sgitem .sgfl-cred {
				color: #df3436;
			}
			.m-sgitem .sgfl {
				-webkit-box-align: center;
				align-items: center;
				width: 28/50rem;
				font-size: 17/50rem;
				color: #999;
			}
			.m-sgitem .sgfr {
				-webkit-box-flex: 1;
				flex: 1 1 auto;
				display: -webkit-box;
				display: flex;
				position: relative;
				padding-left: 0.5rem;
			}
			.m-sgitem .sgchfl {
				-webkit-box-flex: 1;
				flex: 1 1 auto;
				padding: 6/50rem 0;
				width: 0;
			}
			.m-sgitem .sgtl {
				font-size: 17/50rem;
			}
			.f-thide {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				word-break: normal;
			}
			.m-sgitem .sginfo {
				font-size: 12/50rem;
				color: #888;
				margin-top: 5/50rem;
			}
			.f-thide {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				word-break: normal;
			}
			.m-sgitem .sghot {
				display: inline-block;
				width: 12/50rem;
				height: 8/50rem;
				margin-right: 4/50rem;
			}
			.m-sgitem .sgchfr {
				display: -webkit-box;
				display: flex;
				-webkit-box-align: center;
				align-items: center;
				padding: 0 10/50rem;
				margin-right: 10/50rem;
			}
			.m-sgitem .sgchply {
				display: inline-block;
				width: 22/50rem;
				height: 22/50rem;
				background-position: -24/50rem 0;
			}
			.u-hmsprt {
				background: url(http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28%E2%80%A6) no-repeat;
				background-size: 166/50rem 97/50rem;
			}
		}
	}
	
	.playAll{
			padding: 5/50rem 10/50rem;
			overflow: hidden;
			.menuLeft{
				margin-top: 0.2rem;
				.playBtn{
					float: left;
					display: inline-block;
	    			width: 0.44rem;
	    			height: 0.44rem;
			    	background: url(http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28%E2%80%A6) no-repeat;
	    			background-size: 3.32rem 1.94rem;
	    			background-position: -0.48rem 0;
	    			margin-right: 10/50rem;
				}
				.playAllText{
					float: left;
					display: inline-block;
			    	/*width: 0.44rem;*/
			    	height: 0.44rem;
					font-size: 0.42rem;
					margin: 0;
				}
			}
			
			.playAllMain{
				float: right;
				display: inline-block;
		    	width: 0.44rem;
		    	height: 0.44rem;
		    	background: url(../../../assets/listMenu.png) no-repeat;
		    	background-size: 0.44rem 0.44rem;
		    	/*margin-top: 0.2rem;*/
			}
	}  
</style>