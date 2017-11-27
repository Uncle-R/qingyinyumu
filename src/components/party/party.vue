<template>
	<div>
	<!-- <router-view /> -->
		<div class="search">
			<router-link to="/" tag="i"><img src="../../assets/icon/arrow.png" alt=""></router-link>
			<div class="searchinput">
				<input type="text" placeholder="请输入歌曲名/歌手名">
			</div>
			
		</div>
		<div class="kbanner">
			<swiper :options="swiperOption" class="swiper-box">
			    <swiper-slide class="swiper-item"><img src="../../assets/images/banner1.png" alt=""></swiper-slide>
			    <swiper-slide class="swiper-item"><img src="../../assets/images/banner2.png" alt=""></swiper-slide>
			    <swiper-slide class="swiper-item"><img src="../../assets/images/banner3.png" alt=""></swiper-slide>
			    <div class="swiper-pagination" slot="pagination"></div>
			  </swiper>
		</div>
		<div class="kbar">
			<div>
				<img src="../../assets/icon/singer.png" alt="">
				<span>歌手</span>
			</div>
			<div>
				<img src="../../assets/icon/type.png" alt="">
				<span>分类</span>
			</div>
			<div>
				<img src="../../assets/icon/choosed.png" alt="">
				<span>已点</span>
			</div>
		</div>
		<div class="changetype">
			<el-tabs v-model="activeName" class="el-head">
			    <el-tab-pane label="热歌推荐" name="first">
			    	<router-link :to="{name:'Player',params:{id:item.id}}" tag="div" v-for="(item,index) in hottotal" key="key" class="ksong">
			    		<img src="../../assets/images/singer2.png" alt="">
			    		<div class="songsname">
			    			<p>{{item.name}}</p>
			    			<p>{{item.singer}}</p>
			    			<p>大家都爱唱</p>
			    		</div>
			    		<i></i>
			    	</router-link>
			    </el-tab-pane>
			    <el-tab-pane label="猜你喜欢" name="second">
			    	<router-link :to="{name:'Player',params:{id:item.id}}" tag="div" v-for="(item,index) in hotweek" key="key" class="ksong">
			    		<img src="../../assets/images/singer3.png" alt="">
			    		<div class="songsname">
			    			<p>{{item.name}}</p>
			    			<p>{{item.singer}}</p>
			    			<p>大家都爱唱</p>
			    		</div>
			    		<i></i>
			    	</router-link>
			    </el-tab-pane>
			    <el-tab-pane label="新歌首发" name="third">
			    	<router-link :to="{name:'Player',params:{id:item.id}}" tag="div" v-for="(item,index) in hottoday" key="key" class="ksong">
			    		<img src="../../assets/images/singer1.png" alt="">
			    		<div class="songsname">
			    			<p>{{item.name}}</p>
			    			<p>{{item.singer}}</p>
			    			<p>大家都爱唱</p>
			    		</div>
			    		<i></i>
			    	</router-link>
			    </el-tab-pane>
		    </el-tabs>
		</div>
	</div>
</template>
<script>

	export default{
		name:"party",
		data(){
			return{
				activeName: 'first',
				swiperOption: {
			        pagination: '.swiper-pagination',
			        slidesPerView: 1,
			        spaceBetween: 30,
			        // autoplay: 3000,
			        grabCursor: true,
			        setWrapperSize: true,
			        autoHeight: true,
			        paginationClickable: true,
			        observeParents: true,
			        loop:true
			      },
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

	//轮播图

	html,body {
	    position: relative;	    
	  }
	  body {
	    background: #eee;
	  }
	  .swiper-box {
	    width: 100%;
	    height: 100%;
	    margin: 0 auto;
	  }
	  .swiper-item {
	  	width:100%;
	    height: 300/100rem;
	    text-align: center;
	    font-size: 18px ;
	    // background: #fff;
	    /* Center slide text vertically */
	    display: -webkit-box;
	    display: -ms-flexbox;
	    display: -webkit-flex;
	    display: flex;
	    -webkit-box-pack: center;
	    -ms-flex-pack: center;
	    -webkit-justify-content: center;
	    justify-content: center;
	    -webkit-box-align: center;
	    -ms-flex-align: center;
	    -webkit-align-items: center;
	    align-items: center;
	    img{
	    	height:300/100rem;
	    	width:750/100rem;
	    }
	  }

	  //搜索框

	  .search{
	  	height:100/100rem;
	  	padding:22/100rem 0;
	  	box-sizing:border-box;
	  	background:url("../../assets/icon/Kbackgound.png");
	  	background-size:750/100rem 128/100rem;
	  	overflow: hidden;
	  	i{
	  		width:90/100rem;
	  		float: left;
	  		img{
	  			width:25/100rem;
	  			height:47/100rem;
	  			padding-top:5/100rem;
	  		}
	  	}
	  	.searchinput{
	  		width:637/100rem;
	  		height:56/100rem;
	  		float: left;
	  		position: relative;
	  		&::before{
	  			content:"";
	  			width:26/100rem;
	  			height:26/100rem;
	  			position: absolute;
	  			left:10/100rem;
	  			top:15/100rem;
	  			background:url("../../assets/icon/search.png");
				background-size: 26/100rem 26/100rem;
	  		}
	  		&::after{
	  			content:"";
	  			width:13/100rem;
				height:24/100rem;
				position: absolute;
				right:20/100rem;
				top:16/100rem;
				background:url("../../assets/icon/microphone.png");
				background-size: 13/100rem 24/100rem;
	  		}	  
  		  	input{
  		  		width:637/100rem;
  		  		height:56/100rem;
  		  		border:none;
  		  		padding: 0 26/100rem 0 54/100rem;
  		  		border-radius: 5px;
  		  		box-sizing:border-box;
  		  		opacity: 0.3;
  		  		line-height:normal;	
  		  		font-size:30/100rem; 
  		  		outline: none;				
  		  		&::-webkit-input-placeholder{
  		  			opacity:1;
  		  			font-size:30/100rem;
  		  		}
  		  	}
	  	}	  	
	  }

	  //导航

	  .kbar{
	  	height:84/100rem;
	  	padding:20/100rem 0;
	  	box-sizing:border-box;
	  	border-bottom:5px solid #eee;
	  	&>div{
	  		width:33.33%;
	  		float: left;
	  		img{
	  			height:44/100rem;
	  		}	  		
	  		span{
	  			font-size:30/100rem;
	  			padding-left:16/100rem;
				line-height:38/100rem;
				// box-sizing:border-box;
				// border-right:1px solid #DDDDDD;
	  		}
	  	}
	  }

	  //选项卡
	
	  .el-tabs__header{
	  	margin-bottom:0;
	  	.el-tabs__nav{
	  		width:100%;
	  		height:80/100rem;
	  		line-height:80/100rem;	  		
	  		.el-tabs__item{
	  			padding:0;
	  			width:33.33%;
				font-size:30/100rem;
				&:hover{
					color:#E41F6E;
				}
				&.is-active{
					color:#E41F6E;
				}
	  		}
	  		.el-tabs__active-bar{
				background-color: #E41F6E;
				height:4px;
				// width:170/100rem !important;
				// left:-20px;
				// transform:translateX(0) !important;
	  		}
	  	}
	  }

	  .el-tabs__item is-active{
					color:#E41F6E;
				}

	  .el-tabs--bottom .el-tabs__item:nth-child(2), .el-tabs--top .el-tabs__item:nth-child(2){

	  			}

	  //歌曲

	  .ksong{
	  	// height:162/100rem;
	  	box-sizing:border-box;
	  	padding:20/100rem 0;
	  	border-bottom:1px solid #E4E4E5;
	  	overflow: hidden;
	  	img{
	  		width:118/100rem;
	  		height:118/100rem;
	  		padding:0 20/100rem;
	  		float: left;
	  	}
	  	.songsname{
	  		float: left;
	  		height:118/100rem;
	  		box-sizing:border-box;
	  		p{
	  			font-size:22/100rem;
	  			text-align: left;
	  		}
	  		p:nth-child(1){
	  			font-size:32/100rem;
	  			position: relative;
	  			&::after{
	  				content:"";
	  				position: absolute;
	  				right: -60/100rem;
	  				top: 8/100rem;
	  				width:54/100rem;
	  				height:31/100rem;
	  				background: url("../../assets/icon/score.png");
	  				background-size:54/100rem 31/100rem;
	  			}
	  		}
	  		p:nth-child(2){
	  			padding:8/100rem 0;
	  		}
	  	}
	  	i{
	  		float: right;
	  		width:110/100rem;
	  		height:34/100rem;
	  		margin:42/100rem 20/100rem 0 0;
	  		background: url("../../assets/icon/Ksongs.png");
	  		background-size:110/100rem 34/100rem;
	  	}
	  }


</style>