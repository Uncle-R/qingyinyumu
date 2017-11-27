<template>
	<div class="dingshi">
		<div class="zhuti">
			<div class="zuoj"><img src="../../assets/ceimg/zuoj.png" alt="" onclick="window.history.go(-1)">
			<span >设置</span>
			<span >管理</span>
			</div>	
		</div>
	<div class="wangluo">
		<p>网络</p>
		<ul>
			<li>仅Wi-Fi下联网
				<el-switch
				  v-model="value2"
				  active-color="#9227BC"
				  inactive-color="#DA2085"
				  class="el-switch11" >
				</el-switch>
			</li>
			
			<li>使用2G/3G/4G网络播放
				<el-switch
				  v-model="value1"
				  active-color="#9227BC"
				  inactive-color="#DA2085"
				  class="el-switch22"  >
				</el-switch>


			</li>
			<li>使用2G/3G/4G网络下载</li>
		</ul>
	</div>

	<div class="wangluo">
		<p>播放和下载</p>
		<ul>
			<li>在线播放音质</li>
			<li>下载音质</li>
			<li>设置下载目录</li>
			<li>缓存设置</li>
		</ul>
	</div>	
	<div class="wangluo">
		<p>账号和隐私</p>
		<ul>
			<li>账号和绑定设置</li>
			<li>消息和隐私设置</li>
			
		</ul>
	</div>
	<div class="wangluo">
		<p>工具</p>
		<ul>
			<li>桌面歌词
			<el-switch
				  v-model="value2"
				  active-color="#9227BC"
				  inactive-color="#DA2085"
				  class="el-switch33" >
				</el-switch>

			</li>
			<li>显示歌词翻译</li>
			<li>连接DLNA设备</li>
			<li>自动下载最新安装包</li>
			<li>线控开关</li>
			<li>车载蓝牙播放器</li>
		</ul>
	</div>
	<div class="wangluo">
		<p>关于</p>
		<ul>
			<li>帮助与反馈</li>
			<li>关于音沐</li>
			
		</ul>
	</div>				
		

	</div>

</template>

<script>
export default{
	name:"shezhi",
	data(){
		return{
				value1: true,
		        value2: false
		}
	
     }
};
</script>

<style scoped lang="less">
*{
	font-size: 0.36rem; 
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

.wangluo {
	p{
		margin: 0.2rem 0.2rem;
		font-size: 0.4rem;
		color: #797979;
}
	ul{
		margin-bottom: 0.2rem;
		border-bottom: 0.03rem solid #DADADA;
	}
	li{
		margin: 0.2rem 0.2rem;
	}
	
	// li:nth-of-type(1){
	// 	margin: 0.2rem 0rem 0rem 0.2rem;
	// }
	// li:nth-of-type(2){
	// 	font-size: 0.2rem;
	// 	margin: 0rem 0.2rem;
	// }
	li .el-switch11{
	margin-left: 3.3rem;
	margin-bottom: 0.1rem;}
	 .el-switch22{
	margin-left: 1.8rem;
	margin-bottom: 0.1rem;}
	.el-switch33{
		margin-left: 4rem;
	}
   

   



	
}


</style>