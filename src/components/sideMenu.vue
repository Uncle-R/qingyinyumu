<template>
	<div class="content">
		<div class="zheZhao">
			<div class="menu-content" @click="show">
				<div class="sideBox" @click="show">
					<div class="userlogo">
						<router-link to="/myZone"><img src="../../build/logo.png" alt="" /></router-link>
						<span class="dengji">LV.10</span>
						<span class="name">音沐音乐</span>
					</div>
					<div class="more">
						<router-link to="/myinfo">我的消息</router-link>
						<router-link to="/huiyuanzhongxin">会员中心</router-link>
						<router-link to="/yunpan">音乐云盘</router-link>
						<router-link to="/myfirends">我的好友</router-link>
						<router-link to="/fujinderen">附近的人</router-link>
						<router-link to="/zhuti">个性换肤</router-link>
						<router-link to="/songfind">听歌识曲</router-link>
						<router-link to="/dingshi">定时播放</router-link>
						<router-link to="/myZone">个人中心</router-link>
						<router-link to="/shezhi">设置</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'sideMenu',
		data() {
			return {
			}
		},
		methods:{
			show:function(){
				this.$emit("close","false")
			}
		},
//		props:["move"]
	}
</script>

<style scoped lang="less">
	.zheZhao{
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.5);
	}
	.menu-content {
		/*width: 260/100rem;
		height: 1334/100rem;*/
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.5);
		
		position: absolute;
		top: 0;
		z-index: 1000;
		overflow: hidden;
		.sideBox {
			background: #fff;
			height: 1334/100rem;
			float: left;
			.userlogo {
				width: 100%;
				height: 280/100rem;
				text-align: center;
				padding: 68/100rem 72/100rem;
				box-sizing: border-box;
				background: linear-gradient(to top, #6d2ada, #af24a5, #e51f7e);
				img {
					width: 110/100rem;
					height: 110/100rem;
					border-radius: 50%;
				}
				.dengji {
					margin: 0 auto;
					display: block;
					width: 90/100rem;
					font-size: 12/100rem;
					box-sizing: border-box;
					border-radius: 24/100rem;
					font-weight: 100;
					color: #FFFFFF;
					border: 1px solid grey;
				}
				.name {
					padding-top: 0.2rem;
					display: block;
					font-size: 24/100rem;
					color: #FFFFFF;
				}
			}
			.more {
				width: 100%;
				/*background-color: #EEEEEE;*/
				a {
					font-size: 24/100rem;
					display: block;
					line-height: 1.05rem;
					padding-left: 0.9rem;
					position: relative;
					&:before {
						content: "";
						display: block;
						width: 35/100rem;
						height: 35/100rem;
						background: url(../assets/images/wodexiaoxi.png);
						background-size: 0.35rem 0.35rem;
						position: absolute;
						left: 0.45rem;
						top: 0.275rem;
					}
					&:nth-child(2):before {
						background: url(../assets/images/huiyuanzhongxin.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(3):before {
						background: url(../assets/images/yunpan.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(4):before {
						background: url(../assets/images/wodehaoyou.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(5):before {
						background: url(../assets/images/fujinderen.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(6):before {
						background: url(../assets/images/pifu.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(7):before {
						background: url(../assets/images/tinggeshiqu.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(8):before {
						background: url(../assets/images/dingshibofang.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(9):before {
						background: url(../assets/images/gerenzhongxin.png);
						background-size: 0.35rem 0.35rem;
					}
					&:nth-child(10):before {
						background: url(../assets/images/shezhi.png);
						background-size: 0.35rem 0.35rem;
					}
				}
			}
		}
	}
</style>