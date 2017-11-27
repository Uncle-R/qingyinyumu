<template>
	<div class="rege">
		<div class="hotbanner">
			<router-link to="/" tag="i"><img src="../../assets/icon/arrow.png" alt=""></router-link>
			<img src="../../assets/images/hotbanner.png" alt="">
		</div>
		<div class="hotnavbar">
			<el-tabs v-model="activeName2" type="card">
			    <el-tab-pane label="今日排行" name="first">
			    	<router-link :to="{name:'Player',params:{id:item.id}}" tag="div" v-for="(item,index) in hottoday" key="key" class="regebang">
			    		<img src="../../assets/images/singer4.png" alt="">
			    		<div class="hotsongname">
			    			<p>{{item.name}}</p>
			    			<p>{{item.singer}}</p>
			    			<p></p>
			    		</div>
			    		<div class="hotnumber">
			    			<p>{{index+1}}</p>
			    			<span>打榜</span>
			    		</div>
			    	</router-link>
			    </el-tab-pane>
			    <el-tab-pane label="本周排行" name="second">
					<router-link :to="{name:'Player',params:{id:item.id}}" tag="div" v-for="(item,index) in hotweek" key="key" class="regebang">
			    		<img src="../../assets/images/singer2.png" alt="">
			    		<div class="hotsongname">
			    			<p>{{item.name}}</p>
			    			<p>{{item.singer}}</p>
			    			<p></p>
			    		</div>
			    		<div class="hotnumber">
			    			<p>{{index+1}}</p>
			    			<span>打榜</span>
			    		</div>
			    	</router-link>
			    </el-tab-pane>
			    <el-tab-pane label="累计排行" name="third">
			    	<router-link :to="{name:'Player',params:{id:item.id}}" tag="div" v-for="(item,index) in hottotal" key="key" class="regebang">
			    		<img src="../../assets/images/singer3.png" alt="">
			    		<div class="hotsongname">
			    			<p>{{item.name}}</p>
			    			<p>{{item.singer}}</p>
			    			<p></p>
			    		</div>
			    		<div class="hotnumber">
			    			<p>{{index+1}}</p>
			    			<span>打榜</span>
			    		</div>
			    	</router-link>
			    </el-tab-pane>
			  </el-tabs>
		</div>
	</div>
</template>
<script>


	export default{

		name:"hotsongs",
		data(){
			return{
				activeName2:"first",
				hottoday:[],
				hotweek:[],
				hottotal:[]
			}
		},
		created(){

			var bangdanurl=this.bangdan
			this.$axios.get(bangdanurl)
			.then(res=>{
				console.log(res.data)
				this.hottoday=res.data.result[0].music
				this.hotweek=res.data.result[1].music
				this.hottotal=res.data.result[3].music
			})
			
		}
	}
</script>
<style lang="less">
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
			height:438/100rem;
		}	
	}

	//选项卡

	.hotnavbar{
		.el-tabs--card>.el-tabs__header{
			width:100%;
			margin-bottom:0;
			.el-tabs__nav-wrap{
					margin-bottom:0;
					padding:0;
				.el-tabs__nav-prev,.el-tabs__nav-next{
					display:none;
				}
				.el-tabs__nav{
					width:750/100rem;
					height:80/100rem;
					box-sizing:border-box;
					border-radius:0;
					.el-tabs__item{
						width:33.33%;
						height:80/100rem;
						line-height:80/100rem;
						font-size:30/100rem;
						&:hover{
							color:#E41F6E;
						}						
					}
				}
			}		
		}
	}

	.el-tabs--card>.el-tabs__header .el-tabs__item.is-active{
		border-bottom:0;
	}

	.el-tabs__item.is-active{
		color:#E41F6E;
	}

	//歌曲列表

	.regebang{
		padding:20/100rem 0;
		overflow: hidden;
		border-bottom:1px solid #eee;
		position: relative;
		&>img{
			width:118/75rem;
			height:118/75rem;
			float: left;
			padding:0 20/100rem;
		}
		.hotsongname{
			// float: left;
			height:118/75rem;
			// padding:20/100rem 0;
			box-sizing:border-box;
		 	display:table-cell;  
		    text-align:center;  
		    vertical-align:middle;
			p{
				text-align: left;
				font-size:20/100rem;
			}
			p:nth-child(1){
				font-size:30/100rem;
				margin-bottom: 30/100rem;
			}
		}
		.hotnumber{
			width:110/100rem;
			height:118/75rem;
			position: absolute;
			top:50%;
			right:20/100rem;
			margin-top:-59/75rem;
			text-align: center;
			p{
				line-height: 118/75-34/100rem;
				font-size:40/100rem;
				color:#ED6A9E;
			}
			span{
				position: absolute;
				left:0;
				bottom:0;
				width:110/100rem;
				height:34/100rem;
				border:1px solid #ED6A9E;
				border-radius:4px;
				font-size:24/100rem;
				color:#ED6A9E;
			}
		}
	}
</style>