<template>
	<div>
		 
		<mt-navbar v-model="selected">
		  <mt-tab-item id="1">推荐</mt-tab-item>
		  <mt-tab-item id="2">电台</mt-tab-item>
		  <mt-tab-item id="3">歌单</mt-tab-item>
		  <mt-tab-item id="4">榜单</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  <mt-tab-container-item id="1">
		   <FirstIndex/>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="2">
		 	<DianTai/>
		  </mt-tab-container-item>
		  <mt-tab-container-item id="3">
		    <GeDan/>
		  </mt-tab-container-item>
		   <mt-tab-container-item id="4">
		    <BangDan/>
		  </mt-tab-container-item>
		</mt-tab-container>
		
	</div>
</template>

<script>
	import  FirstIndex  from  '../YinMU/index';
	import  DianTai  from  '../YinMU/diantai';
	import  GeDan  from  '../YinMU/GeDan';
	import  BangDan  from  '../YinMU/Bang_Dan';
	
	export  default{
		name:"indexPage",
		data(){
			return{
				"selected":"1"
			}
		},
		components:{
			FirstIndex,
			DianTai,
			GeDan,
			BangDan
		
		}
	}
</script>

<style lang="less">
	.mint-tab-container{
		margin-top: 10/100rem;
	}
	.is-selected div {
		color: #E41F6E;
	}
	
	.mint-navbar .mint-tab-item.is-selected {
		border-bottom: 2px solid #6532B5;
	}
	
	.mint-tab-item-label {
		font-size: 34/100rem;
	}
</style>