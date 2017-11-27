<template>
	<div>
	       <!--<div>
        <img src="http://musicdata.baidu.com/data2/music/D3057B5D63F3C39073A6A4F8A9CACA3D/252696511/252696511.jpg@s_0,w_150" style="width: 100px;height: 100px">
            <audio controls="controls" autoplay="autoplay">
            <source src="http://zhangmenshiting.baidu.com/data2/music/47230483/47230483.mp3?xcode=817b7b64ab9df05923407a79428c3f0f" />
            Your browser does not support the audio element.
            </audio>
        </div>-->
		<div class="DongTai_head" v-for="news in DongTai">
			<div class="DongTai_nav">
				<img :src="news.autor_Img" alt="" />
				<div class="DongTai_author">
					<p>{{news.autor_Name}}</p>
					<p class="DongTai_time">昨天12:30</p>
				</div>
				<span class="gunanzhu">＋关注</span>
			</div>
			<div class="DongTai_content">
				<div class="DongTai_text">
					<p>{{news.autor_Text}}</p>

				</div>
				<div class="DongTai_img" v-for="news  in news.DongTai_img ">
					
					<img :src="news" alt="" />

				</div>
				
			</div>
			<div class="DongTai_Foot">
								<img src="../../assets/images/DianZan.png" alt="" />
								<span>{{news.DianZan}}</span>
								<img src="../../assets/images/PingLun.png" alt="" />
								<span>{{news.PingLun}}</span>
								<img src="../../assets/images/FenXiang.png" alt="" />
								<span>{{news.FenXaing}}</span>
			</div>
		</div>
	</div>
</template>

<script>
		import  HeaderMusic from  "../HeaderMusic" 
	import  FooterMusic from  "../FooterMusic"
	export default {
		data() {
			return {
				"DongTai": [{
						"autor_Img": "http://localhost:8080/src/assets/images/author.png",
						"autor_Name": "浅蓝色的猕猴桃",
						"autor_Time": "昨天12:30",
						"autor_Text": "网易云上面好多都是95后，我一个87年的大叔情何以堪，我和我太太从大一开始走到现在，平淡幸福，一双儿女，不羡慕你们小年轻的精彩，我们有我们的浪漫",
						"DongTai_img": [
							"http://localhost:8080/src/assets/images/push3.png",
							"http://localhost:8080/src/assets/images/push2.png",
							"http://localhost:8080/src/assets/images/push1.png",
							"http://localhost:8080/src/assets/images/push4.png"
						],

						"DianZan": "521",
						"PingLun": "648",
						"FenXaing": "789"
					},
					{
						"autor_Img": "http://localhost:8080/src/assets/images/author.png",
						"autor_Name": "睿哥说不要慌",
						"autor_Time": "昨天12:30",
						"autor_Text": "应了那句 一吻便杀一个人",
						"DongTai_img": [
							"http://localhost:8080/src/assets/images/push4.png",
							"http://localhost:8080/src/assets/images/push3.png"

						],
						"DianZan": "782",
						"PingLun": "798",
						"FenXaing": "295"
					},
					{
						"autor_Img": "http://localhost:8080/src/assets/images/author.png",
						"autor_Name": "网易云音乐",
						"autor_Time": "昨天12:30",
						"autor_Text": "网易云上面好多都是95后，我一个87年的大叔情何以堪，我和我太太从大一开始走到现在，平淡幸福，一双儿女，不羡慕你们小年轻的精彩，我们有我们的浪漫",
						"DongTai_img": [
							"http://localhost:8080/src/assets/images/push3.png",
							"http://localhost:8080/src/assets/images/push1.png",
							"http://localhost:8080/src/assets/images/singer5.png",
							"http://localhost:8080/src/assets/images/singer3.png"
						],
						"DianZan": "952",
						"PingLun": "356",
						"FenXaing": "893"
					}
				]
			}
		}
	

	}
</script>

<style scoped lang="less">
	.DongTai_head {
		padding: 25/100rem 25/100rem 0rem 25/100rem;
		border-bottom: 1px solid red;
		overflow: hidden;
	}
	
	.DongTai_nav {
		width: 100%;
		height: 87/100rem;
		img {
			height: 85/100rem;
			width: 85/100rem;
			border-radius: 50%;
			float: left;
		}
		.DongTai_author {
			float: left;
			margin-left: 60/100rem;
			p {
				font-size: 30/100rem;
				color: #1F1E1F;
				font-weight: bold;
			}
			.DongTai_time {
				font-size: 20/100rem;
				margin-top: 12/100rem;
				color: #D0D0D0;
			}
		}
	}
	
	.gunanzhu {
		font-size: 32/100rem;
		float: right;
		color: #E73E32;
	}
	
	.DongTai_content {
		margin-top: 20/100rem;
		overflow: hidden;
		.DongTai_text {
			p {
				font-size: 28/100rem;
			}
		}
		.DongTai_img {
			
		 float: left;
			img {
				width: 225/100rem;
				height: 225/100rem;
				margin-right: 8/100rem;
				margin-top: 10/100rem;
			    margin-bottom: 10/100rem;
			    
			}
		}
	
	}
		.DongTai_Foot {
			
			float: right;
			img {
				height: 30/100rem;
				width: 30/100rem;
				
			}
			span {
				display: inline-block;
				font-size: 18/100rem;
			}
		}
	
</style>