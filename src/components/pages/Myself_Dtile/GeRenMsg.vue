<template>
	<div>
		<div class="Song_nav">

			<router-link to="/"> <i class="iconfont icon-fanhui myicon"></i></router-link>


		</div>
		<div class="count">
			<div  class="count_img">
				<div  class="count_Left">
					<p>头像</p>

				</div>
				<div class="count_right">
					<img src="../../../assets/images/BaoFang_Name.png" alt="" />
					
			    </div>
			</div>
			<div  class="count_img">
				<div  class="count_Left">
					<p>个人主页北京</p>

				</div>
				<div class="count_right">
					<img src="../../../assets/images/BaoFang_Name.png" alt="" />
					
				</div>
			</div>
		
			<div  class="count_img">
				<div  class="count_Left">
					<p>昵称</p>

				</div>
				<div class="count_right">
					
					<p>95-10-12</p>
				</div>
			</div>
			<div  class="count_img">
				<div  class="count_Left">
					<p>性别</p>

				</div>
				<div class="count_right">
					
					<p>男</p>
				</div>
			</div>
		</div>
		
		
	   <div  class="count1">
	   	<div  class="count_img">
				<div  class="count_Left">
					<p>生日</p>

				</div>
				<div class="count_right">
					
					<p>95-10-12</p>
				</div>
			</div>
			
			<div  class="count_img">
				<div  class="count_Left">
					<p>地区</p>

				</div>
				<div class="count_right">
					
					<p>河北石家庄</p>
				</div>
			</div>
			
				<div  class="count_img">
				<div  class="count_Left">
					<p>大学</p>

				</div>
				<div class="count_right">
					
					<p>蓝翔妓院</p>
				</div>
			</div>
	   </div>
		<div  class="jieshao">
			<p>介绍</p>
			<div class="jieshao1">
			个人介绍....
			</div>
		</div>
	</div>
</template>

<script>
	export  default {
		name:"GeRenMsg",
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="less">

.Song_nav {
		height: 127/100rem;
		background: linear-gradient(to right, #6d2ada;
		#af24a5, #e51f7e);
		overflow: hidden;
	}
	
	.iconfont {
		font-size: 50/100rem;
		margin-top: 50/100rem;
		margin-left: 20/100rem;
		float: left;
	}
	.count_img {
		border: 1px solid #DDDDDD;
		overflow: hidden;
		height: 90/100rem;
		background: white;
		.count_Left {
			float: left;
				p{
					display: block;
					font-size: 35/100rem;
					font-weight: lighter;
					line-height: 90/100rem;
				}
		}
		.count_right{
			float: right;
			img{
				width: 80/100rem;
				height: 80/100rem;
				border-radius: 50%;
			}
			p{
					display: block;
					font-size: 35/100rem;
					font-weight: lighter;
					line-height: 90/100rem;
			}
		}
		
	}
	.count1{
		
		margin-top: 20/100rem;
	}
	.jieshao{
		background: white;
		margin-top: 30/100rem;
		p{
			font-size: 40/100rem;
			margin-bottom: 10/100rem;
		}
		.jieshao1{
			height: 300/100rem;
			width: 100%;
			border-top: 1px solid #D0D0D0;
			font-size: 40/100rem;
			color: darkgrey;
		}
	}
</style>