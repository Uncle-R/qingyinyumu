<template>
	<div>
		<transition name="slide-fade">
			<div class="diyi" @click="showimg" v-if="show">
			</div>
		</transition>
		<HeaderMusic/>
		<router-view></router-view>
		<FooterMusic/>

	</div>
</template>

<script>
	import HeaderMusic from "./HeaderMusic"
	import FooterMusic from "./FooterMusic"
	export default {
		name: "index",
		data() {
			return {
				show:''
			}
		},
		components: {
			HeaderMusic,
			FooterMusic
		},
		methods:{
			showimg : function(){
				this.show = !this.show
			}
		},
		created:function(){
			if(!localStorage.getItem('showimg')){
				this.show = true;
				localStorage.setItem('showimg',true);
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
	.diyi {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
		background: url(../assets/images/welcome.png) no-repeat;
		background-size:  100% auto;
	}
</style>