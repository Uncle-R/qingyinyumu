<template>
	<div class="dingshi">
		<div class="zhuti">
			<div class="zuoj"><img src="../../assets/ceimg/zuoj.png" alt="" onclick="window.history.go(-1)">
			<span >定时播放</span>
			<span >管理</span>
			</div>	
		</div>
	<div class="ds">
	<ul>
		<li>不开启 
			<label>
				<input type="checkbox"/>
			</label>
		</li>		
		<li>10分钟后
		<label>
				<input type="checkbox"/>
			</label>
		</li>
		<li>20分钟后
			<label>
				<input type="checkbox"/>
			</label>
		</li>
		<li>30分钟后
			<label>
				<input type="checkbox"/>
			</label>
		</li>
		<li>40分钟后
			<label>
				<input type="checkbox"/>
			</label>
		</li>
		<li>自定义
			<label>
				<input type="checkbox"/>
			</label>
		</li>
	</ul>
	</div>
		
		

	</div>

</template>

<script>
export default{
	name:"dingshi",
	data(){
		return{

		}
	
     }
}
</script>

<style scoped lang="less">
*{
	font-size: 0.4rem; 
}
.zhuti{
	width: 7.5rem;
	height: 1.2rem;
	background: linear-gradient(to right, #6d2ada;
		#af24a5, #e51f7e); 
	position: relative;
	img{
		position: absolute;
		margin-top: 0.25rem;
	}
	span{
		position: absolute;
        color: #fff;
		font-size: 0.4rem;
		display: inline-block;
	    margin-top: 0.36rem;
	    margin-left: 0.6rem; 
	}
	span:last-child{
		left: 5.8rem;
	}
	
}

.ds{
	width: 7.5rem;
	height: 1.2rem;
	
	ul{
		width: 7.5rem;
	
	height: 1.2rem;
    
		display: inline-block;
		
	}
	li{
		margin: 0.7rem 0.5rem;
	}
	label{
		float: right;
	}
	
}

	
</style>