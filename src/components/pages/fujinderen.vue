<template>
	<div class="fujinderen">
		<div class="vipBack">
			<router-link to="/">
				<img src="../../assets/images/fahui1.png" class="fanhui" />
				<span>附近的人</span>
			</router-link>
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
	</div>
</template>

<script>
	export default {
		name: 'fujinderen',
		data() {
			return {

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
</style>