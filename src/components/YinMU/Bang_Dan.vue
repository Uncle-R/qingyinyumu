<template>
	<div>
		
	
		<div class="Music_List">
		
				<div class="banner">
				<swiper :options="swiperOption" class="swiper-box">
					<swiper-slide class="swiper-item"><img src="../../assets/images/banner1.png" alt=""></swiper-slide>
					<swiper-slide class="swiper-item"><img src="../../assets/images/banner2.png" alt=""></swiper-slide>
					<swiper-slide class="swiper-item"><img src="../../assets/images/banner3.png" alt=""></swiper-slide>
					<swiper-slide class="swiper-item"><img src="../../assets/images/banner4.png" alt=""></swiper-slide>
					<swiper-slide class="swiper-item"><img src="../../assets/images/banner5.png" alt=""></swiper-slide>
					<swiper-slide class="swiper-item"><img src="../../assets/images/banner6.png" alt=""></swiper-slide>
					<swiper-slide class="swiper-item"><img src="../../assets/images/banner7.png" alt=""></swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</div>
			<!--</div>-->
			<div class="Music_Content">
				<div class="content" v-for="news  in Music_List" >
					<router-link  to=""><img :src="news.img_url" alt="" /></router-link>
					<p>{{news.music_title1}}</p>
					<p>{{news.music_title2}}</p>
				</div>

			</div>

		</div>

	</div>
</template>

<script>
		import  HeaderMusic from  "../HeaderMusic" 
	import  FooterMusic from  "../FooterMusic"
	export default {
		name: 'Bang_Dan',
		data() {
			return {
//				swiperOption: {
//					// swiper options 所有的配置同swiper官方api配置
//					pagination: '.swiper-pagination',
//					slidesPerView: 1,
//					spaceBetween: 30,
//					 autoplay: 3000,
//					grabCursor: true,
//					setWrapperSize: true,
//					autoHeight: true,
//					paginationClickable: true,
//					observeParents: true,
//
//				},
				swiperOption: {
					pagination: '.swiper-pagination',
					slidesPerView: 1,
					spaceBetween: 30,
					 autoplay: 3000,
					grabCursor: true,
					setWrapperSize: true,
					autoHeight: true,
					paginationClickable: true,
					observeParents: true,
					// loop:true
				},
				Music_List: [{
						music_title1: "1.BOOM歌-Tiesto/Sevenn",
						music_title2: "2.不能怕-红花会/BrAnTB",
						img_url: require("../../assets/榜单1.png")
					},
					{
						music_title1: "1.非酋-薛明媛/朱贺",
						music_title2: "2.如果我爱你-周冬雨/张一山",
						img_url: require("../../assets/榜单2.png")
					},
					{
						music_title1: "1.SPRA/崔开潮",
						music_title2: "2.水库-上海彩虹工作室",
						img_url: require("../../assets/榜单3.png")
					},
					{
						music_title1: "1.追光者-Sevenn",
						music_title2: "2.再也没/BrAnTB",
						img_url: require("../../assets/榜单4.png")
					}
				
					
					
				]
			}

		}
	

	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
 
   
	.swiper-wrapper {
		width: 100%;
	}
	
	.swiper-wrapper .swiper-slide img {
		width: 100%;
		height: 293/100rem;
	}
	
	.content p {
		font-size: 14/100rem;
	}
	/*歌单*/
	
	.Music_Content {
		overflow: hidden;
	}
	
	.Music_Content .content {
		padding-left: 7/50rem;
		float: left;
		box-sizing: border-box;
		z-index: 10000;
	}
	
	.Music_Content .content img {
		width: 350/100rem;
		height: 240/100rem;
		margin-right: 10/100rem;
		margin-bottom: 10/100rem;
	}
	
	.Music_Content .content  p {
		color: #1fle1f;
		font-size: 28/100rem;
		margin-bottom: 28/100rem;
	}
		.swiper-item {
		height: 300/100rem;
		text-align: center;
		font-size: 18px;
		background: #fff;
		/* Center slide text vertically */
		display: -webkit-box;
		display: -ms-flexbox;
		display: -webkit-flex;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		-webkit-justify-content: center;
		justify-content: center;
		-webkit-box-align: center;
		-ms-flex-align: center;
		-webkit-align-items: center;
		align-items: center;
		img {
			height: 300/100rem;
			width: 750/100rem;
		}
	}
	
	
</style>