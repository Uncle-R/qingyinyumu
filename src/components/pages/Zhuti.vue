			
<template>
	<div class="zhutihuanfu">
		<div class="zhuti">
			<div class="zuoj"><img src="../../assets/ceimg/zuoj.png" alt="" onclick="window.history.go(-1)">
			<span >主题换肤</span>
			<span >管理</span>
			</div>	
		</div>
		<div class="content">
			<div class="chunse">
				<span class="sekuai"></span>
				<span>纯色主题</span>
			</div>
			<div class="tplist">
				<div class="t">
					<img src="../../assets/ceimg/jianbian.png" alt="">
					<p>自选颜色</p>
					<p class="shiyong">使用中</p>
			</div>
				<div class="t">
					<img src="../../assets/ceimg/t1.png" alt="">
					<p>摇钱兔</p>
				</div>
				<div class="t">
					<img src="../../assets/ceimg/t3.png" alt="">
					<p>大海海棠</p>
				</div>
				<div class="z">
					<span class="sekuai"></span>
					<span>个性主题</span>
				</div>
				<div class="t">
					<img src="../../assets/ceimg/t4.png" alt="">
					<p>大海海棠</p>
				</div>
				<div class="t">
					<img src="../../assets/ceimg/t5.png" alt="">
					<p>大海海棠</p>
				</div>
				<div class="t">
					<img src="../../assets/ceimg/t2.png" alt="">
					<p>大海海棠</p>
				</div>
				<div class="t">
					<img src="../../assets/ceimg/t3.png" alt="">
					<p>大海海棠</p>
				</div>
				<div class="t">
					<img src="../../assets/ceimg/t4.png" alt="">
					<p>大海海棠</p>
				</div>
				<div class="t">
					<img src="../../assets/ceimg/t5.png" alt="">
					<p>大海海棠</p>
				</div>

				

			</div>
			
		</div>


	</div>
</template>

<script>

export default{
	name:"zhuti",
	data(){
		return{

			
	}

     }
}
</script>

<style scoped lang="less">
*{
	font-size: 18*2/100rem; 
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
		// font-size: 24*2/100rem;
		display: inline-block;
	    margin-top: 0.36rem;
	    margin-left: 0.6rem; 
	}
	span:last-child{
		left: 5.8rem;
	}
	
}

.chunse{
	width: 7.5rem;
	height: 0.48*2rem;
	// background: yellow;
}
.sekuai{
	display: inline-block;
	width: 0.1rem;
	height: 0.5rem;
	background: linear-gradient(to right, #6d2ada;
		#af24a5, #e51f7e);
	margin-left: 0.2rem;
    margin-top: 0.2rem;
	border-radius: 0.1rem;
	}
.tplist{
	width: 7.5rem;
	height: 166*2/100rem;
	// background: red;	
	.shiyong{
		margin-top: 0.1rem;
		color: red;
	}
}
.t{
	float: left;
	margin-left: 0.12rem;
}
.z{
	width: 7.5rem;
	height: 0.96rem;
	// background: red;
	overflow: hidden;
	clear: both;
}

</style>