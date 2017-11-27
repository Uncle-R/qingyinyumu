<template>
	<div>
		
		<div class="Song_nav">

			<router-link to="/"> <i class="iconfont icon-fanhui myicon"></i></router-link>
                   <p>我的信息</p>

		</div>
		<mt-navbar v-model="selected">
			<mt-tab-item id="1">私信</mt-tab-item>
			<mt-tab-item id="2">评论</mt-tab-item>
			<mt-tab-item id="3">@我</mt-tab-item>
			<mt-tab-item id="4">通知</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
			<mt-tab-container-item id="1">
            <div  class="sixin_box">
            	<div class="sixin">
            		<img src="../../assets/images/author.png" alt="" />
            		<div class="sixin_author">
            			<p>Bailuc</p>
            			<p>单曲:啦啦啦</p>
            		</div>
            	</div>
            	<div class="sixin">
            		<img src="../../assets/images/author.png" alt="" />
            		<div class="sixin_author">
            			<p>Bailuc</p>
            			<p>单曲:啦啦啦</p>
            		</div>
            	</div>
            </div>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
                   <div class="msg">
                   	     暂时还没有收到消息
                   </div>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
                       <div class="msg">
                   	     暂时还没有收到消息
                   </div>
			</mt-tab-container-item>
			<mt-tab-container-item id="4">
				   <div class="msg">
                   	     暂时还没有收到消息
                   </div>
			</mt-tab-container-item>
		</mt-tab-container>

	</div>
</template>

<script>
	export default {
		name: 'MyInfo',
		data() {
			return {
				selected: "1"
			}
		}
	}
</script>

<style lang="less">
.Song_nav {
		height: 127/100rem;
		background: linear-gradient(to right, #6d2ada;
		#af24a5, #e51f7e);
		overflow: hidden;
		p{
			font-size: 50/100rem;
			line-height:127/100rem ;
			margin-top: 10/100rem;
		}
	}
	
	.icon-fanhui {
		font-size: 50/100rem;
		margin-top: 50/100rem;
		margin-left: 20/100rem;
		float: left;
	}
		.is-selected div {
		color: #E41F6E;
	}
	.mint-tab-item-label{
		font-size: 60/100rem;
	}
	.mint-navbar .mint-tab-item.is-selected {
		border-bottom: 2px solid #6532B5;
	}
	
	.mint-tab-item-label {
		font-size: 34/100rem;
	}
	.sixin{
		overflow: hidden;
		margin-bottom: 20/100rem;
		img{
			width: 50px;
			height: 50px;
			border-radius: 50%;
			float: left;
			
			
		}
		.sixin_author{
			margin-top: 20/100rem;
			margin-left: 20/100rem;
			display: inline-block;
		
		p{
			
			font-size: 35/100rem;
			margin-bottom: 10/100rem;
			
			
		}
		}
	
	}
	.mint-tab-container{
		margin-top: 10px;
	}
	.msg{
		margin: 100px  auto;
		font-size: 24/100rem;
		text-align: center;
	}
</style>