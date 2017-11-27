<template>
	<div>
	

		<div>
			<ul class="gdul">
				<router-link tag="li" v-for="(musiclist,index) in musicList" :to="{name:'gedanXiangqing',params:{id:musiclist.id}}" key="index">
					<img class="music-cover" :src="musiclist.imgSrc" />
					<div class="center-part">
						<span class="list-title">{{ musiclist.listTitle }}</span>
						<p class="center-bottom">
							<img class="mc-icon" src="http://m.kugou.com/v3/static/images/index/icon_music.png" />
							<span>{{ musiclist.playedNum }}</span>
						</p>
					</div>
					<p class="right-part">
						<img src="http://m.kugou.com/v3/static/images/index/arrow_icon.png" />
					</p>
				</router-link>
			</ul>
		</div>

	</div>
</template>

<script>
	
	export default {
		name: 'GeDan',
		data() {
			return {
				musicList: [{
						listTitle: "《跨界也疯狂》原创cos直播音乐秀",
						imgSrc: "http://imge.kugou.com/soft/collection/400/20171115/20171115185132848631.jpg",
						playedNum: 128555,
						id: 0
					},
					{
						listTitle: "民谣，孤独的灵魂在作祟",
						imgSrc: "http://imge.kugou.com/soft/collection/400/20171113/20171113160257787760.jpg",
						playedNum: 485096,
						id: 1
					},
					{
						listTitle: "有没有那么一首歌，一听见就崩溃了",
						imgSrc: "http://imge.kugou.com/soft/collection/400/20170527/20170527180146229856.jpg",
						playedNum: 128555,
						id: 2
					},
					{
						listTitle: "《跨界也疯狂》原创cos直播音乐秀",
						imgSrc: "http://imge.kugou.com/soft/collection/400/20171115/20171115185132848631.jpg",
						playedNum: 77896058,
						id: 3
					},
					{
						listTitle: "民谣，孤独的灵魂在作祟",
						imgSrc: "http://imge.kugou.com/soft/collection/400/20171113/20171113160257787760.jpg",
						playedNum: 485096,
						id: 4
					},
					{
						listTitle: "有没有那么一首歌，一听见就崩溃了",
						imgSrc: "http://imge.kugou.com/soft/collection/400/20170527/20170527180146229856.jpg",
						playedNum: 128555,
						id: 5
					},
					{
						listTitle: "《跨界也疯狂》原创cos直播音乐秀",
						imgSrc: "http://imge.kugou.com/soft/collection/400/20171115/20171115185132848631.jpg",
						playedNum: 128555,
						id: 6
					}
				]
			}
		}


	}
</script>

<style scoped lang="less">
	.gdul li {
		overflow: hidden;
		margin: 10/50rem;
		border-bottom: 1/50rem solid darkgray;
		padding-bottom: 10/50rem;
		display: flex;
	}
	
	.gdul li .music-cover {
		width: 107.5/50rem;
		height: 107.5/50rem;
		-webkit-box-flex: 1;
	}
	
	.center-part {
		-webkit-box-flex: 1;
		margin-left: 10/50rem;
	}
	
	.center-part .list-title {
		font-size: 20/50rem;
		margin: 15/50rem;
		display: flex;
	}
	
	.mc-icon {
		width: 15/50rem;
		height: 15/50rem;
	}
	
	.gdul li .center-part span {
		font-size: 20/50rem;
	}
	
	.right-part {
		position: relative;
	}
	
	.right-part img {
		position: absolute;
		top: 50%;
		right: 0;
	}
	div .Header_tabs ul {
		overflow: hidden;
		margin-left: 70/100rem;
		li {
			font-size: 33/100rem;
			float: left;
			margin-right: 100/100rem;
			line-height: 77/100rem;
			
		}
	}
	
	
	.Header_tabs_last {
		margin-right: 0rem;
	}
</style>