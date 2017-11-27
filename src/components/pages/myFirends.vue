<template>
	<div class="myFirends">
		<div class="vipBack">
			<router-link to="/">
				<img src="../../assets/images/fahui1.png" class="fanhui" />
				<span>我的好友</span>  
			</router-link>
		</div>
		<div class="myFirendsTabs">
			<mt-navbar v-model="selected">
				<mt-tab-item id="1">关注</mt-tab-item>
				<mt-tab-item id="2">粉丝</mt-tab-item>
			</mt-navbar>
			<mt-tab-container v-model="selected">
				<mt-tab-container-item id="1">
					<div class="guanzhuContent">
						<p class="addFirends">添加好友</p>
						<div class="addFirendsItem">
							<div class="item">
								<div class="myFirendsImg">
									<img src="../../assets/images/Singer.png" alt="" />
								</div>
								<div class="myFirendsText">
									<p>认识的人</p>
								</div>
							</div>
							<div class="item">
								<div class="myFirendsImg">
									<img src="../../assets/images/huiyuanzhongxin.png" alt="" />
								</div>
								<div class="myFirendsText">
									<p>明星用户</p>
								</div>
							</div>
							<div class="item">
								<div class="myFirendsImg">
									<img src="../../assets/images/tinggeshiqu.png" alt="" />
								</div>
								<div class="myFirendsText">
									<p>音乐人</p>
								</div>
							</div>
							<div class="item">
								<div class="myFirendsImg">
									<img src="../../assets/images/DianZan.png" alt="" />
								</div>
								<div class="myFirendsText">
									<p>音乐达人</p>
								</div>
							</div>
						</div>
						<p class="wodeguanzhu">我的关注</p>
						<div class="wodeguanzhuItem">
							<div class="item">
								<div class="myFirendsImg">
									<img src="../../assets/images/Bang11png.png" alt="" />
								</div>
								<div class="myFirendsText">
									<p>葬爱家族<img src="../../assets/images/男.png" /></p>
								</div>
							</div>
							<div class="item">
								<div class="myFirendsImg">
									<img src="../../assets/images/DongTai.png" alt="" />
								</div>
								<div class="myFirendsText">
									<p>青憶<img src="../../assets/images/男.png" /></p>
								</div>
							</div>
							<div class="item">
								<div class="myFirendsImg">
									<img src="../../assets/images/push1.png" alt="" />
								</div>
								<div class="myFirendsText">
									<p>网易UFO丁磊<img src="../../assets/images/男.png" /></p>
								</div>
							</div>
							<div class="item">
								<div class="myFirendsImg">
									<img src="../../assets/images/push3.png" alt="" />
								</div>
								<div class="myFirendsText">
									<p>三无<img src="../../assets/images/女.png" /></p>
									223
								</div>
							</div>
						</div>
					</div>
				</mt-tab-container-item>
				<mt-tab-container-item id="2">
					<div class="wodeguanzhuItem">
						<div class="item">
							<div class="myFirendsImg">
								<img src="../../assets/images/Bang11png.png" alt="" />
							</div>
							<div class="myFirendsText">
								<p>葬爱家族<img src="../../assets/images/男.png" /></p>
							</div>
						</div>
						<div class="item">
							<div class="myFirendsImg">
								<img src="../../assets/images/DongTai.png" alt="" />
							</div>
							<div class="myFirendsText">
								<p>青憶<img src="../../assets/images/男.png" /></p>
							</div>
						</div>
						<div class="item">
							<div class="myFirendsImg">
								<img src="../../assets/images/push1.png" alt="" />
							</div>
							<div class="myFirendsText">
								<p>网易UFO丁磊<img src="../../assets/images/男.png" /></p>
							</div>
						</div>
						<div class="item">
							<div class="myFirendsImg">
								<img src="../../assets/images/push3.png" alt="" />
							</div>
							<div class="myFirendsText">
								<p>三无<img src="../../assets/images/女.png" /></p>
							</div>
						</div>
					</div>
				</mt-tab-container-item>
			</mt-tab-container>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'myFirends',
		data() {
			return {
				selected: '1'
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
	
	.myFirends {
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
			span{
				margin-left: 0.3rem;
				font-size: 0.34rem;
			}
		}
		.myFirendsTabs {
			.guanzhuContent {
				.addFirends {
					background-color: #f7f7f7;
					font-size: 13/50rem;
					line-height: 32/50rem;
				}
				.addFirendsItem {
					.item {
						overflow: hidden;
						height: 1rem;
						.myFirendsImg {
							width: 10%;
							height: 1rem;
							float: left;
							text-align: center;
							img {
								width: 0.5rem;
								margin-left: 0.2rem;
							}
						}
						.myFirendsText {
							float: right;
							vertical-align: bottom;
							width: 86.5%;
							height: 1rem;
							line-height: 1rem;
							font-size: 15/50rem;
							border-bottom: 1/1000rem solid #DDDDDD;
						}
					}
				}
				.wodeguanzhu {
					background-color: #f7f7f7;
					font-size: 13/50rem;
					line-height: 32/50rem;
				}
			}
			.wodeguanzhuItem {
				.item {
					overflow: hidden;
					height: 1rem;
					.myFirendsImg {
						width: 10%;
						height: 1rem;
						float: left;
						text-align: center;
						img {
							width: 0.6rem;
							margin-left: 0.2rem;
							border-radius: 50%;
						}
					}
					.myFirendsText {
						float: right;
						width: 86.5%;
						height: 1rem;
						line-height: 1rem;
						font-size: 15/50rem;
						border-bottom: 1/1000rem solid #DDDDDD;
						img {
							width: 0.3rem;
							margin-left: 0.1rem;
						}
					}
				}
			}
		}
	}
</style>