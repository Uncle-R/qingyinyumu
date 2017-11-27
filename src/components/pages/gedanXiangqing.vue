<template>
	<div>
		<div class="vipBack">
			<router-link to="/">
				<img src="../../assets/images/fahui1.png" class="fanhui" />
				<span>{{musicList[$route.params.id].listTitle}}</span>
			</router-link>
		</div>
		<div class="themCover">
			<img :src="musicList[$route.params.id].imgSrc" class="back-icon" />
		</div>

		<div class="playAll">
			<div class="menuLeft">
				<span class="playBtn"></span>
				<span class="playAllText">播放全部</span>
			</div>
			<span class="playAllMain"></span>
		</div>

		<router-link :to="{name:'Player',params:{id:item.id}}" class="m-sgitem" v-for="(item,index) in musiclist" key="key">
			<div class="sgfl sgfl-cred">{{index+1}}</div>
			<div class="sgfr f-bd f-bd-btm">
				<div class="sgchfl">
					<div class="f-thide sgtl">{{item.name.substring(0,35)}}</div>
					<div class="f-thide sginfo">
						<i class="u-hmsprt sghot"></i> {{item.singer}}
					</div>
				</div>
				<div class="sgchfr">
					<span class="u-hmsprt sgchply"></span>
					<!--<mt-spinner type="fading-circle"></mt-spinner>-->
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
	export default {
		name: 'gedanXiangqing',
		data() {
			return {
				musiclist: [],
				imgurl: "",
				pageid: '',
				id: this.$route.params.id,
				musicList: [{
						listTitle: "《跨界也疯狂》原创cos直播音乐秀",
						imgSrc: "http://imge.kugou.com/soft/collection/400/20171115/20171115185132848631.jpg",
						list: {}
					}, {
						listTitle: "民谣，孤独的灵魂在作祟",
						imgSrc: "http://imge.kugou.com/soft/collection/400/20171113/20171113160257787760.jpg",
						list: {}
					},
					{
						listTitle: "有没有那么一首歌，一听见就崩溃了",
						imgSrc: "http://imge.kugou.com/soft/collection/400/20170527/20170527180146229856.jpg",
						list: {}
					}
				]
			}
		},
		created() {
			var musiclistid = this.$route.params.id
			var songlist = this.songlist;
			console.log(musiclistid)
			console.log(songlist)
			this.$axios.get(songlist)
				.then(res => {
					console.log(res)
					this.musiclist = res.data.result[musiclistid].music
					this.imgurl = res.data.result[musiclistid].url
				})
		},
		methods: {
			checkId: function() {
				var show = '';

				for(var i in musicList) {
					if(musicList[i].id == id) {
						show = musicList[i];
					}
				}
				return show;

			}
		}
	}
</script>

<style scoped lang="less">
	.vipBack {
		overflow: hidden;
		background: linear-gradient(to right, #6532B5, #B4226D);
		height: 70/100rem;
		line-height: 70/100rem;
		font-size: 38/100rem;
		color: #EEEEEE;
		.fanhui {
			margin-left: 10/50rem;
			width: 20/100rem;
			height: 35/100rem;
		}
		span {
			margin-left: 0.3rem;
			font-size: 0.34rem;
		}
	}
	
	.themCover {
		height: 200/50rem;
		width: 750/50rem;
		overflow: hidden;
		.coverTitle{
			
			font-size: 20/50rem;
			font-weight: bold;
		}
	}
	
	.playAll {
		padding: 5/50rem 10/50rem;
		overflow: hidden;
		.menuLeft {
			margin-top: 0.2rem;
			.playBtn {
				float: left;
				display: inline-block;
				width: 0.44rem;
				height: 0.44rem;
				background: url(http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28%E2%80%A6) no-repeat;
				background-size: 3.32rem 1.94rem;
				background-position: -0.48rem 0;
				margin-right: 10/50rem;
			}
			.playAllText {
				float: left;
				display: inline-block;
				/*width: 0.44rem;*/
				height: 0.44rem;
				font-size: 0.42rem;
				margin: 0;
			}
		}
		.playAllMain {
			float: right;
			display: inline-block;
			width: 0.44rem;
			height: 0.44rem;
			background: url(../../assets/listMenu.png) no-repeat;
			background-size: 0.44rem 0.44rem;
			/*margin-top: 0.2rem;*/
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
</style>