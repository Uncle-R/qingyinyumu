<template>
	<div>
		<transition name="slide-fade" >
			<SideMenu v-if="showM" v-on:close="closeMenu"  />
		</transition>
		<div class="Header_nav" >

		 <i class="iconfont icon-yinpingedan myicon" @click="showM = !showM"></i>
              
			<ul>
				<router-link to="/yinmu"><li >音沐</li></router-link >
				<router-link to="/Mine_Music" ><li>我的</li></router-link >
				<router-link to="/DongTai"><li>动态</li></router-link >

			</ul>

			<router-link class="myicon1" to="/Myself_Music"> <i class="iconfont icon-sousuo "></i></router-link>

		</div>
		
	</div>
</template>

<script>
	import "../assets/css/font/iconfont.css"
	import  SideMenu from './sideMenu'
	export default {

		name: 'HeaderMusic',
		data() {
			return {
               haha:true,
               showM:false
			}
		},
		components:{
		  SideMenu
		},
		methods: {
	        changeColor:function(event){
	        	this.haha=false
	        },
	        closeMenu:function(){
	        	this.showM = false
	        }
		}

	}
</script>

<style scoped lang="less">
	.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}
	.Header_nav {
		height: 130/100rem;
		background: linear-gradient(to right, #6d2ada;
		#af24a5, #e51f7e);
		ul {
			overflow: hidden;
			display: inline-block;
			li {
				float: left;
				font-size: 35/100rem;
				color: white;
				margin-left: 70/100rem;
				height: 50/100rem;
				line-height: 50/100rem;
				
			}
			.MY_center{
				float: left;
			}
			
		}
	}
	
	.myicon {
		font-size: 50/100rem;
		line-height: 120/100rem;
		margin-left: 20/100rem;
	}
	
	.myicon1 {
		float: right;
	}
	
	.myicon1 .icon-sousuo {
		font-size: 45/50rem;
		line-height: 110/100rem;
	}
	

	
	/*.Header_nav ul  li:hover{
		color:red;
	}*/
	
</style>