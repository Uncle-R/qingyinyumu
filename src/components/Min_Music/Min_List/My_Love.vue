<template>
	<div>
		
		<div class="Love_List1">
			<i class="iconfont icon-jiantouxia myicon" @click="btn_show" v-if="willShow"></i>

			<i class="iconfont icon-jiantouyou myicon" @click="btn_show" v-if="willHidden"></i> 自建歌单

		</div>
		<div v-if="willShow" class="GeDan_Lists">
			<div class="GeDan_List" v-for="img_list  in  geDan">
			<img :src="img_list.imgs" alt="" />
			
			</div>
			
		</div>

		<div class="Love_List1">
			<i class="iconfont icon-jiantouxia myicon" @click="btn_show1" v-if="willShow1"></i>

			<i class="iconfont icon-jiantouyou myicon" @click="btn_show1" v-if="willHidden1"></i> 自建歌单

		</div>

		<div v-if="willShow1" class="GeDan_Lists">
			<div class="GeDan_List" v-for="img_list  in  geDan">
				
			<img :src="img_list.imgs" alt="" />
			</div>
			 
		</div>
   <router-view></router-view>
	</div>
	
	
</template>

<script>
	import "../../../assets/css/font/iconfont.css"
	
	export default {

		name: 'My_Love',
		data() {
			return {
				willShow: true,
				willHidden: false,
				willShow1: true,
				willHidden1: false,
				geDan: [{
						id: "1",
						imgs: require("../../../assets/gedan1.png")
					},
					{
						id: "2",
						imgs: require("../../../assets/gedan2.png")
					},
					{
						id: "3",
						imgs: require("../../../assets/gedan3.png")
					},
					{
						id: "4",
						imgs: require("../../../assets/gedan4.png")
					}
				]

			}

		},
		
		methods: {
			btn_show: function() {
				if(this.willShow == true) {
					this.willShow = false
					this.willHidden = true

				} else {
					this.willShow = true
					this.willHidden = false

				}

			},
			btn_show1: function() {
				if(this.willShow1 == true) {
					this.willShow1 = false
					this.willHidden1 = true
					
				} else {
					this.willShow1 = true
					this.willHidden1 = false
				}
			}
		}

	}
</script>

<style scoped lang="less">
	.Love_List1 {
		height: 48/100rem;
		width: 100%;
		font-size: 25/100rem;
		line-height: 48/100rem;
		background-color: #F9F9F9;
	}
	
	.GeDan_Lists {
		
		overflow: hidden;
		.GeDan_List img {
			width: 355/100rem;
			height: 355/100rem;
			float: left;
			margin: 10/100rem   10/100rem 20/100rem;
		}
	}
	
	.Header_tabs {
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