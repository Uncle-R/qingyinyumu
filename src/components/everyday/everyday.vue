<template>
	<div>
		<div class="hotbanner">
			<router-link to="/" tag="i"><img src="../../assets/icon/arrow.png" alt=""></router-link>
			<img src="../../assets/images/recmd_daily.jpg" alt="">
		</div>
		<div class="hotbar">
			<p class="playall"><span>播放全部</span></p>
			<p class="choosemore"><span>多选</span></p>
		</div>
		<router-link :to="{name:'Player',params:{id:item.id}}" tag="div" class="hotsong" v-for="(item,index) in musicpush"  key="key">
			<span class="songid">{{index+1}}</span>
			<div class="songname">
				<p><span>{{item.name}}</span><img src="../../assets/icon/hotmv.png" alt=""></p>
				<p><img src="../../assets/icon/hotsq.png" alt="">{{item.singer}}</p>
			</div>
			<i></i>			
		</router-link>
	</div>
</template>
<script>
	export default{
		name:"everyday",
		data(){
			return{
				musicpush:[]
			}
		},
		created(){
			var bangdanurl=this.bangdan
			this.$axios.get(bangdanurl)
			.then(res=>{
				console.log(res)
				this.musicpush=res.data.result[2].music
			})
		}
	}
</script>
<style scoped lang="less">
	.hotbanner{
		position: relative;
		i{
			width:90/100rem;
			position: absolute;
			left:0;
			top:30/100rem;
			img{
				width:25/100rem;
				height:47/100rem;
			}
		}
		img{
			width:750/100rem;
			height:210/100rem;
		}	
	}
	.hotbar{
		width:100%;
		height:100/100rem;
		padding:25/100rem 20/100rem;
		box-sizing:border-box;
		border-bottom: 2px solid #D0D0D0;
		&>p{
			display:inline-block;
			height:50/100rem;
			span{
				font-size:30/100rem;
				
			}
		}
		.playall{
			float: left;
			
			background: url("../../assets/icon/hotplay.png") no-repeat;
			background-size:50/100rem 50/100rem;
			span{
				padding-left:30/50rem;
				line-height: 50/100rem;
			}
		}
		.choosemore{
			float: right;
			height:30/100rem;
			margin-top:10/100rem;
			background: url("../../assets/icon/hotmore.png") no-repeat;
			background-size:30/100rem 30/100rem;
			span{
				padding-left:20/50rem;
				line-height: 30/100rem;
			}
		}
	}
	.hotsong{
		width:100%;
		height:90/100rem;
		border-bottom: 1px solid #F3F3F3;
		box-sizing:border-box;
		overflow: hidden;
		.songid{
			// display:inline-block;
			float: left;
			width:82/100rem;
			height:90/100rem;
			line-height:90/100rem;
			text-align: center;
			font-size:34/100rem;
		}
		.songname{
			float: left;
			padding:8/100rem 0;
			p{
				text-align: left;
				img{
					vertical-align: middle;
					margin-right: 10/100rem;
					width:33/100rem;
					height:20/100rem;
				}
			}
			&>p:nth-child(1){
				font-size:30/100rem;
				span{
					margin-right: 10/100rem;
				}
				
			}
			&>p:nth-child(2){
				font-size:24/100rem;
			}
		}
		&>i{
			display:inline-block;
			float: right;
			margin:37/100rem 30/100rem 0 0;
			width:35/100rem;
			height:7/100rem;
			background: url("../../assets/icon/hotsettings.png") no-repeat;
			background-size:35/100rem 7/100rem;
		}
	}
</style>