<template>
<div >
	<!--<div class="Header_tabs">

			<ul class="gdul">
			<router-link exact to="/">
					<li>推荐</li>
				</router-link>
				<router-link to="DianTai">
					<li>电台</li>
				</router-link>
				<router-link to="/gedan">
					<li>歌单</li>
				</router-link>
				<router-link to="/Bang_Dan" class="Header_tabs_last">
					<li>榜单</li>
				</router-link>
			</ul>
		</div>-->

 
	

<div class="swiper-container">

  <swiper :options="swiperOption" class="swiperdiantai">
    <!-- slides -->
	    <swiper-slide><img src="../../assets/1.png"></swiper-slide>
	    <swiper-slide><img src="../../assets/2.png"></swiper-slide>
	    <swiper-slide><img src="../../assets/6.png"></swiper-slide>
	    <swiper-slide><img src="../../assets/7.png"></swiper-slide>
	    <swiper-slide><img src="../../assets/1.png"></swiper-slide>
	    <swiper-slide><img src="../../assets/6.png"></swiper-slide>
	    <swiper-slide><img src="../../assets/7.png"></swiper-slide>
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>  
  </swiper>


  <div class="diantai1">
 	<div class="tblist">
		<img src="../../assets/3.png"><p>电台分类</p>
	</div>
		
	<div class="tblist1">
		<img src="../../assets/4.png"><p>电台排行</p>
	</div>
  </div>


	


<div class="content">
	<div class="diantailist">
		<ul>
			<li><a href=""><img src="../../assets/5.png" alt=""><span>感情信箱   微微一笑  奈何倾城</span></a></li>

			<li><a href=""><img src="../../assets/8.png" alt=""><span>每期一讲个轻松小故 事</span></a></li>

			<li><a href=""><img src="../../assets/9.png" alt=""><span>愿有故事的人被温柔 对待</span></a></li>		
		</ul>

		<ul>
			<li><a href=""><img src="../../assets/10.png" alt=""><span>音乐是心灵的力量  奈何倾城</span></a></li>

			<li><a href=""><img src="../../assets/11.png" alt=""><span>流行音乐是无尽的碰 撞</span></a></li>

			<li><a href=""><img src="../../assets/12.png" alt=""><span>爱情的滋润 感恩的力 量</span></a></li>		
		</ul>
	</div>
</div>



</div>	

</div>
</template>

<script>

export default{
	name:"diantai",
	data(){
		return{
			swiperOption: {
	        autoplay: 3000,

	        grabCursor: true,
	        setWrapperSize: true,
	        autoHeight: true,
	        pagination: '.swiper-pagination',
	        paginationClickable: true,

	          mousewheelControl: true,
	          observeParents: true,
	        }


	    // imgList:[
	    //   	{
	    //   		imgUrl:"../assets/5.png",
	    //   		title:"每期-讲个小故事"
	    //   	},
	    //   	{
	    //   		imgUrl:"../assets/5.png",
	    //   		title:"每期-讲个小故事"
	    //   	},
	    //   	{
	    //   		imgUrl:"../assets/5.png",
	    //   		title:"每期-讲个小故事"
	    //   	}


	    //   ]




		}
	
     },
    components:{
      
    }
}
</script>

<style scoped lang="less">


.swiperdiantai img {
   
    height:3rem;
    width:7.5rem;    
}
 
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px;
    background: #fff;
}
.diantai1{
	width: 6rem;
    height: 1.3rem;
    margin: 0 auto;
    padding-top: 0.4rem;
    box-sizing: border-box;
    
}

.tblist{
	width: 2rem;
    float: left;
    p{
    	font-size: 29/100rem;
    }	
}
.tblist1{
	width: 2rem;
    float: right;	
     p{
    	font-size: 29/100rem;
    }
}

.diantai1 img{
	width: 0.66rem;
	height: 0.66rem;
	margin: 0 auto;
}
.diantai1 p{
	display: inline-block;
	position: absolute;
    margin: 0.2rem;
	
}
.dtph{
	width: 0.62rem;
	height: 0.62rem;
	
}

.content{
	width:7rem;
	height:6.1rem;
	margin: 0 auto;		
}





.diantailist{
	width: 7.05rem;
	height: 2.80rem;
	margin:0 auto;	
}
.diantailist ul{
	width: 7.05rem;
	height: 2.80rem;
	margin-top: 0.4rem;
	/*padding-top: 0.15rem;*/	
}
.diantailist li {
	float: left;
	width:2.16rem ;
	height:2.16rem ;
	margin-right: 0.19rem;
	
}
.diantailist img{
	width:2.28rem ;
	height:2.28rem ;
}
.diantailist span{
	display: block;
	padding: 0.1rem 0;
	line-height:0.3rem;
	font-size: 26/100rem;
}

	.Header_tabs .gdul {
		overflow: hidden;
		margin-left: 70/100rem;
		li {
			font-size: 33/100rem;
			float: left;
			margin-right: 100/100rem;
			line-height: 77/100rem;
		}
	}
	
	
</style>