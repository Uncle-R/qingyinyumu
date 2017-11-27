<template>
	<div>
		<mt-navbar v-model="selected">
  <mt-tab-item id="1">我喜欢</mt-tab-item>
  <mt-tab-item id="2">全部</mt-tab-item>
  <mt-tab-item id="3">下载</mt-tab-item>
  <mt-tab-item id="4">最近播放</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
   <My_Love/>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
 <RecentPlay/>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <DownLoad/>
  </mt-tab-container-item>
   <mt-tab-container-item id="4">
    <RecentPlay/>
  </mt-tab-container-item>
</mt-tab-container>
	</div>
</template>

<script>
	import  My_Love  from  './Min_List/My_Love';
	import  DownLoad  from  './Min_List/downLoad';
	import  RecentPlay  from  './Min_List/recentPlay';
	
	export  default{
		name:"Mine_Music",
		data(){
			return{
				"selected":"1"
			}
		},
		components:{
			My_Love,
			DownLoad,
			RecentPlay
		
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