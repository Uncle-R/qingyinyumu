<template>
  <div  class="Song">
  	  <div class="Song_nav">
  	  	  <img src="" alt="" />
  	  	 <router-link to="/"> <i class="iconfont icon-fanhui myicon"></i></router-link>
  	  </div>
  	  <div class="Song_content">
  	  	  <h2>正在识别</h2>
  	  	  <p>小沐正在识别中,请稍后哦</p>
  	  	  <img src="../assets/Song0.png" alt="" />
  	  </div>
  	  <div  class="Song_Foot">
  	  	
  	   <div  class="foot_left">
  	   	<img src="../assets/Song1.png" alt="" />
  	   	<p>听歌识曲</p>
  	   </div>
  	    <div  class="foot_right">
  	   	<img src="../assets/Song2.png" alt="" />
  	   	<p>识别历史</p>
  	   	
  	   </div>
  	  </div>
  </div>
</template>

<script>
	import "../assets/css/font/iconfont.css"
	export default {
	name: 'SongFind',
	data() {
		return {
			
		}
		
	}
}
</script>

<style scoped  lang="less">
   
	.Song_nav{
		height: 130/100rem;
		background: linear-gradient(to right ,#6d2ada;#af24a5,#e51f7e);
		
	}
	.iconfont{
		 font-size: 60/100rem;
		 line-height: 130/100rem;
		 margin-left: 20/100rem;
	}
	.Song_content{
		margin-top: 80/50rem;
		text-align: center;
	}
	.Song_content  h2{
		font-size: 32/50rem;
	}
	.Song_content  p{
		font-size: 20/50rem;
		color: #DDDDDD;
		font-weight: lighter;
		margin-top: 20/50rem;
	}
	.Song_content  img{
		width: 570/100rem;
		height: 590/100rem;
		margin-top: 80/50rem;
	}
	.Song_Foot{
		overflow: hidden;
		margin-bottom: 106/100rem;
		img{
			width: 52/50rem;
		      height: 52/50rem;
		}
		p{
			font-size: 20/50rem;
		}
		
	}

	 .foot_left{
		text-align: center;
		float: left;
		margin-left: 10/50rem;
	}
	.foot_right {
		text-align: center;
			float: right;
			margin-right: 10/50rem;
		}
</style>
