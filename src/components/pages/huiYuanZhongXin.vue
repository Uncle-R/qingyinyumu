<template>
	<div class="huiyuanzhongxin">
		<div class="vipBack">
			<router-link to="/">
				<img src="../../assets/images/fahui1.png" class="fanhui" />
				<span>会员中心</span>
			</router-link>
		</div>
		<div class="huiyuanHeader">
			<p class="vipOutdate"><img src="../../assets/images/VIP.png" alt="" class="vipImg" />会员已过期</p>
			<div class="vipSongs">
				<div class="vipSongsLeft">
					<p class="vipSongsNum"><span class="songBloder">0</span>首</p>
					<p class="vipSongsText">累计播放付费歌曲</p>
				</div>
				<div class="vipSongsRight">
					<p class="vipSongsNum"><span class="songBloder">28</span>首</p>
					<p class="vipSongsText">累计下载付费歌曲</p>
				</div>
			</div>
			<div class="vipBtn">
				<router-link to="/"><span>立即激活</span></router-link>
			</div>
		</div>
		<div class="vipTabs">
			<mt-navbar v-model="selected">
				<mt-tab-item id="1"><span class="vipjian">荐</span>&nbsp;豪华会员</mt-tab-item>
				<mt-tab-item id="2">普通会员</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div class="svip">
						<div class="vipPower">
							<div>
								<i class="iconfont icon-sq"></i>
								<p>畅享无损音质</p>
							</div>
							<div>
								<i class="iconfont icon-icon-quku"></i>
								<p>会员专享曲库</p>
							</div>
							<div>
								<i class="iconfont icon-diantai"></i>
								<p>会员专属电台</p>
							</div>
							<div>
								<i class="iconfont icon-ttpodicon"></i>
								<p>精品电台折扣</p>
							</div>
							<div>
								<i class="iconfont icon-pifu"></i>
								<p>专属个性皮肤</p>
							</div>
							<div>
								<i class="iconfont icon-sale"></i>
								<p>会员特价商品</p>
							</div>
							<div>
								<i class="iconfont icon-huiyuan"></i>
								<p>豪华会员标识</p>
							</div>
							<div>
								<i class="iconfont icon-yinleliebiao"></i>
								<p>专属歌词图片</p>
							</div>
							<div></div>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<div class="vip0">
						<div class="vipPower">
							<div>
								<i class="iconfont icon-sq active"></i>
								<p>畅享无损音质</p>
							</div>
							<div>
								<i class="iconfont icon-icon-quku active"></i>
								<p>会员专享曲库</p>
							</div>
							<div>
								<i class="iconfont icon-diantai"></i>
								<p>会员专属电台</p>
							</div>
							<div>
								<i class="iconfont icon-ttpodicon"></i>
								<p>精品电台折扣</p>
							</div>
							<div>
								<i class="iconfont icon-pifu"></i>
								<p>专属个性皮肤</p>
							</div>
							<div>
								<i class="iconfont icon-sale"></i>
								<p>会员特价商品</p>
							</div>
							<div>
								<i class="iconfont icon-huiyuan"></i>
								<p>豪华会员标识</p>
							</div>
							<div>
								<i class="iconfont icon-yinleliebiao"></i>
								<p>专属歌词图片</p>
							</div>
							<div></div>
						</div>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	export default {
		name: "huiYuanZhongXin",
		data() {
			return {
				selected: "1"
			}
		}
	}
</script>

<style lang="less">
	.is-selected div {
		color: #E41F6E;
	}
	
	.mint-navbar .mint-tab-item.is-selected {
		border-bottom: 2px solid #6532B5;
		/*border-bottom: none;*/
	}
	
	.mint-tab-item-label {
		font-size: 34/100rem;
	}
	
	.huiyuanzhongxin {
		color: #808080;
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
		.unactive {
			color: #808080;
		}
		.active {
			color: #E41F6E;
		}
		.huiyuanHeader {
			border-bottom: 1/100rem solid #D0D0D0;
			padding-bottom: 30/100rem;
			text-align: center;
			.vipOutdate {
				margin: 25/100rem auto;
			}
			.vipImg {
				width: 20/50rem;
				height: 20/50rem;
			}
			p {
				font-size: 15/50rem;
			}
			.vipSongs {
				text-align: center;
				.songBloder {
					font-weight: bold;
					color: #1F1E1F;
				}
				.vipSongsLeft,
				.vipSongsRight {
					display: inline-block;
					padding: 0 10/50rem;
					p {
						margin: 10/100rem;
					}
				}
				.vipSongsLeft {
					border-right: 1/100rem solid #D0D0D0;
				}
			}
			.vipBtn {
				span {
					padding: 15/100rem 2rem;
					background-color: #E41F6E;
					border-radius: 15/50rem;
					color: #F9F9F9;
					font-size: 15/50rem;
				}
			}
		}
		.vipTabs {
			/*background-color:#EEEEEE ;*/
			.vipjian {
				border: 1/100rem solid #B4226D;
				color: #B4226D;
				font-size: 14/50rem;
			}
			.svip {
				.vipPower {
					i {
						color: #E41F6E;
					}
				}
			}
			.vip0 {
				.vipPower {
					color: #A9A9A9;
				}
			}
			.vipPower {
				text-align: center;
				div {
					display: inline-block;
					width: 30%;
					margin-top: 15/50rem;
					i {
						font-size: 1rem;
					}
					p {
						margin: 15/50rem auto;
						font-size: 25/100rem;
						color: #444444;
					}
				}
			}
		}
	}
</style>