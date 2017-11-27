<template>
	<div class="Yunpan">
		<div class="zhuti">
			<div class="zuoj"><img src="../../assets/ceimg/zuoj.png" alt="" onclick="window.history.go(-1)">
			<span >音乐云盘</span>
			<span class="G">0.1G/60G</span>
			<img src="../../assets/ceimg/search.png" >
			</div>	
		</div>

		<div class="zhuti1">
			<div class="zuoj"><img src="../../assets/ceimg/hotplay.png" alt="" >
			<span >播放全部(共8首)</span>
			<img src="../../assets/ceimg/hotmore.png" >
			</div>	
		</div>
		
		<div class="musiclist" v-for="(itemlist, index) in items" >
			<div class="id" align="center">{{itemlist.id}}</div>
			<div class="biaoti">
				<p>{{itemlist.title}}</p>
				<img src="../../assets/ceimg/hotsq.png" class="imgsrc">
				<p class="uuname">{{itemlist.uname}}</p>
				<img src="../../assets/ceimg/hotplay.png" class="imgsrclast">
			</div>
			<!-- <img src="../../assets/ceimg/hotsettings.png" alt=""> -->
			<!-- <div class="pic"></div> -->
		</div>
		


	
		

	</div>

</template>

<script>
export default{
	name:"Yunpan",
	data(){
		return{
			items:[{
				"id":"01",
				
				"title":"童年",
				"uname":"罗大佑-罗大佑自选辑"
			},
			{
				"id":"02",
				
				"title":"暖人",
				"uname":"张磊-暖人"
			},
			{
				"id":"03",
			
				"title":"安河桥",
				"uname":"宋冬野-安河桥北"
			},
			{
				"id":"04",
			
				"title":"终于明白",
				"uname":"动力火车-Listen TO HIM"
			},
			{
				"id":"05",
			
				"title":"差三岁",
				"uname":"Jam-差三岁"
			},
			{
				"id":"06",
			
				"title":"房东的猫",
				"uname":"房东的猫-不知归期的故人"
			},
			{
				"id":"07",
			
				"title":"董小姐",
				"uname":"宋冬野-安河桥北"
			},
			{
				"id":"08",
			
				"title":"Blue",
				"uname":"bigbang-BIGBANG迷你5辑"
			},
			{
				"id":"09",
			
				"title":"RHYTHM",
				"uname":"iKON-Listen WELCOME BACK"
			},
			{
				"id":"09",
			
				"title":"像我这样的人",
				"uname":"毛不易-明日之子"
			}

			]
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
		font-size: 24*2/100rem;
		display: inline-block;
	    margin-top: 0.2rem;
	    margin-left: 0.7rem; 
	}
	img:last-child{
		  margin-left: 6.5rem;
    	  margin-top: 0.35rem;
	}
	.G{
		margin-top: 0.7rem;
	    font-size: 0.3rem;
	}
}


.bofangquanbu{
	width: 7.5rem;
	height: 1.2rem;
	// background: yellow;
}


.zhuti1{
	width: 7.5rem;
	height: 1.2rem;
	// background: linear-gradient(to right, #6d2ada;
	// 	#af24a5, #e51f7e); 
	position: relative;
	img{
		position: absolute;
		margin-top: 0.25rem;
		width: 0.6rem;
	}
	span{
		position: absolute;
       
		font-size: 38/100rem;
		display: inline-block;
	    margin-top: 0.4rem;
	    margin-left: 0.8rem; 
	}
	img:last-child{
		height: 0.4rem;
    	width: 0.4rem;
		margin-left: 6.5rem;
		margin-top: 0.35rem;
	}
	.G{
		margin-top: 0.7rem;
	    font-size: 0.3rem;
	}
}

.musiclist{
	width: 7.5rem;
	height: 1.2rem;
	// background: yellow;
	overflow: hidden;

	.id{
	width: 50*2/100rem;
	height: 50*2/100rem;
	line-height: 1rem;
	margin: 0 auto;
	float: left;
	}
	.imgsrc{
		width: 0.5rem;
	}
	.imgsrclast{
		float: right;
		width: 0.4rem;
		margin-right: 0.2rem;
	}
	.p{

	line-height: 1rem;
	margin: 0 auto;
	float: left;}
	.uuname{
		font-size: 0.28rem;
		display: inline-block;
	
	}
	.pic{
		
		width: 50*2/100rem;
		height: 50*2/100rem;
		background: red;
		line-height: 1rem;
	    margin: 0 auto;
		float: right;
	}
}

	
</style>