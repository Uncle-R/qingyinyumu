<template>
		<div class="zone">
			<div class="zoneHead">
				<div class="zonebtns">
					<router-link to="/"><img src="../../assets/images/fahui1.png" class="fanhui"/></router-link>
					<a href="##"><img src="../../assets/images/fenxiang1.png" class="fenxiang"/></a>
				</div>
				<div class="zonehead-content">
					<img src="../../assets/gedan4.png" class="hdimg">
					<p class="username">音沐音乐</p>
					<p class="guanzhu">关注 100&nbsp;|&nbsp;粉丝 10万</p>
					<router-link to="/"><span class="bianJi">编辑</span></router-link>
				</div>
			</div>
			<div class="tabs">
				<mt-navbar v-model="selected">
				  <mt-tab-item id="1">音乐</mt-tab-item>
				  <mt-tab-item id="2">动态</mt-tab-item>
				  <mt-tab-item id="3">关于我</mt-tab-item>
				</mt-navbar>

				<mt-tab-container v-model="selected">
				  <mt-tab-container-item id="1">
				  	<p class="zoneGedan">&nbsp;&nbsp;歌单</p>
				  	<div class="zoneGedan-list">
				  		<div class="zonePaihang">
				  			<img src="../../assets/images/tinggepaihang.png"/>
				  			<div class="zoneGedan-right">
				  				<p class="zonePBottom">听歌排行</p>
				  				<p>累计听歌200首</p>
				  			</div>
				  		</div>
				  		<div class="zoneXihuanyinyue">
				  			<img src="../../assets/images/xihuanyinyue.png"/>
				  			<div class="zoneGedan-right">
				  				<p class="zonePBottom">听歌排行</p>
				  				<p>累计听歌200首</p>
				  			</div>
				  		</div>
				  	</div>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="2">
				    <DongTai/>
				  </mt-tab-container-item>
				  <mt-tab-container-item id="3">
				    <div class="zoneMineInfo">
				    	<div class="zoneAboutTitle">个人信息</div>
				    	<p>等级：<span class="zoneLv">Lv.6</span> </p>
				    	<p>年龄：95后 摩羯座</p>
				    	<p>性别：男</p>
				    	<p>地区：重庆市</p>
				    </div>
				    <div class="zoneTips">
				    	<div class="zoneAboutTitle">个人介绍</div>
				    	<p>爱看剧，爱追剧~</p>
				    </div>
				  </mt-tab-container-item>
				</mt-tab-container>
			</div>
		</div>
</template>

<script>
	import DongTai from "../DongTai/DongTai"
	export default{
		name:"myZone",
		data(){
			return{
				selected:"1"
			}
		},
		components:{
			DongTai
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
.zoneHead{
	width: 100%;
	height: 582/100rem;
	background: url(../../assets/images/bgImgCommen.png);
	background-size: 100% auto;
	.zonebtns{
		padding: 20/50rem;
		.fanhui{
			float: left;
			width: 20/100rem;
			height: 38/100rem;
		}
		.fenxiang{
			float: right;
			width: 44/100rem;
			height: 38/100rem;
		}
	}
	.zonehead-content{
		text-align: center;
		color: #F9F9F9;
		font-size: 30/100rem;
		.hdimg{
			width: 175/100rem;
			height: 175/100rem;
			border-radius: 50%;
			margin: 30/50rem 0 20/50rem 0;
		}
		.username{
			margin-bottom: 20/100rem;
			font-weight: bold;
		}
		.guanzhu{
			font-size: 25/100rem;
			margin-bottom: 20/50rem;
		}
		.bianJi{
			border: 1/100rem solid #F9F9F9;
			padding: 5/100rem 20/100rem;
			border-radius: 5/100rem;
		}
	}
}
.tabs{
	.zoneGedan{
		background-color: #f7f7f7;
		font-size: 15/50rem;
		line-height: 32/50rem;
	}
	.zoneGedan-list{
		margin: 15/100rem;
		img{
			width: 108/100rem;
			height: 108/100rem;
		}
		.zonePaihang{
			border-bottom: 1px solid #DDDDDD;
		}
		.zoneGedan-right{
			display: inline-block;
			font-size: 30/100rem;
			vertical-align: super;
			.zonePBottom{
				margin-bottom: 15/100rem;
			}
		}
		.zoneXihuanyinyue{
			margin-top: 15/100rem;
		}
	}
	.zoneMineInfo,.zoneTips{
		p{
			font-size: 14/50rem;
			line-height: 25/50rem;
		}
	}
	.zoneAboutTitle{
		border-left: 2px solid #E41F6E;
		font-size: 15/50rem;
		margin: 15/50rem 0;
		color: #1F1E1F;
		font-weight: bold;
	}
	.zoneLv{
		border: 1/100rem solid #1F1E1F;
		padding: 1/100rem 6/50rem;
		border-radius: 10/50rem;
	}
}
</style>