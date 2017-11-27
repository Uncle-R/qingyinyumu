<template>
<div id="appindex">
<!-- <router-view /> -->
	<div class="index">
		<div class="banner">
			<swiper :options="swiperOption" class="swiper-box">
			    <swiper-slide class="swiper-item"><img src="../../assets/images/banner1.png" alt=""></swiper-slide>
			    <swiper-slide class="swiper-item"><img src="../../assets/images/banner2.png" alt=""></swiper-slide>
			    <swiper-slide class="swiper-item"><img src="../../assets/images/banner3.png" alt=""></swiper-slide>
			    <swiper-slide class="swiper-item"><img src="../../assets/images/banner4.png" alt=""></swiper-slide>
			    <swiper-slide class="swiper-item"><img src="../../assets/images/banner5.png" alt=""></swiper-slide>
			    <swiper-slide class="swiper-item"><img src="../../assets/images/banner6.png" alt=""></swiper-slide>
			    <swiper-slide class="swiper-item"><img src="../../assets/images/banner7.png" alt=""></swiper-slide>
			    <div class="swiper-pagination" slot="pagination"></div>
			  </swiper>
		</div>
		<div class="nav">
			<router-link to="/everyday" tag="div" class="everyday">
				<img src="../../assets/icon/everyday.png" alt="">
				<p>每日推荐</p>
			</router-link>
			<router-link to="/hotsongs" tag="div" class="hotsongs">
			<img src="../../assets/icon/hotsongs.png" alt="">
				<p>音沐热歌榜</p>
			</router-link>
			<router-link to="/party" tag="div" class="party">
			<img src="../../assets/icon/party.png" alt="">
				<p>音乐Party</p>
			</router-link>
		</div>
		<div class="songlist">
			<h3>推荐</h3>
			<router-link :to="{name:'Musiclist',params:{id:0}}" tag="div" class="song">
				<img src="../../assets/images/push1.png" alt="">
				<p>重温昔日熟悉旋律能 否感动如初</p>
			</router-link>
			<router-link :to="{name:'Musiclist',params:{id:1}}" tag="div" class="song">
				<img src="../../assets/images/push2.png" alt="">
				<p>电影《心理罪》猜心 推广曲</p>
			</router-link>
			<router-link :to="{name:'Musiclist',params:{id:2}}" tag="div" class="song">
				<img src="../../assets/images/push3.png" alt="">
				<p>用声音，治愈每一个 孤独患者</p>
			</router-link>
			<router-link :to="{name:'Musiclist',params:{id:3}}" tag="div" class="song">
				<img src="../../assets/images/push4.png" alt="">
				<p>重温昔日熟悉旋律能 否感动如初</p>
			</router-link>
			<router-link :to="{name:'Musiclist',params:{id:4}}" tag="div" class="song">
				<img src="../../assets/images/push5.png" alt="">
				<p>电影《心理罪》猜心 推广曲</p>
			</router-link>
			<router-link :to="{name:'Musiclist',params:{id:5}}" tag="div" class="song">
				<img src="../../assets/images/push6.png" alt="">
				<p>用声音，治愈每一个 孤独患者</p>
			</router-link>
		</div>
	</div>
</div>
</template>

<script>

	export default{

		name:"Index",

		data(){

			return{
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
			      }
			    }

		},

		components:{

			
		}
	}

</script>
<style lang="less">
	.banner{
	z-index: -1;
}
	#appindex {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
  /*margin-top: 60px;*/
}
	//轮播图样式
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
	  .swiper-slide{
	  	// margin:0 !important;
	  }
	  .swiper-item {
	  	width:750/100rem;
	    height: 300/100rem;
	    text-align: center;
	    font-size: 18px ;
	    background: #fff;
	    margin:0;
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
	    	width:100%;
	    }
	  }

	  //导航页面

	  .nav{
	  	width:100%;
	  	height:170/100rem;
	  	padding: 20/100rem  0  30/100rem;
	  	box-sizing: border-box;
	  	overflow: hidden;
		  	&>div{
	  		  	width:33.33%;
	  			height:120/100rem;
	  			float: left;
	  			p{
	  				font-size:32/100rem;
	  				padding-top: 15/100rem;
	  			}
		  	}
		    .everyday{	  	
				img{
					width:67/100rem;
					height:75/100rem;
				}
		    }
		    .hotsongs{
				img{
					width:74/100rem;
					height:74/100rem;
				}
		    }
		    .party{
				img{
					width:60/100rem;
					height:76/100rem;
				}
		    }
	    }

	    //推荐歌曲样式

	    .songlist{
	    	padding: 20/100rem  20/100rem  30/100rem;
	    	overflow: hidden;
	    	h3{
	    		background:url("../../assets/icon/line.png") no-repeat;
	    		background-size: 5/100rem 23/50rem;
	    		text-align: left;
	    		padding-left: 5/100rem;
	    		font-size:32/100rem;
	    		font-weight: normal;
	    		margin:10/100rem 0;
	    	}
	    	.song{
	    		width:33.33%;
	    		padding: 10/100rem 0;
	    		box-sizing:border-box;
	    		float: left;
	    		img{
	    			width:226/100rem;
	    			height:226/100rem;
	    		}
	    		p{
	    			padding-left: 10/100rem;
	    			width:226/100rem;
	    			font-size:24/100rem;
	    			text-align: left;
	    			padding-top:20/100rem;
	    		}
	    	}
	    }

	  
</style>