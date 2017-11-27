<template>

	<div class="singer-detail">

		<div class="Song_nav">

			<router-link to="/"> <i class="iconfont icon-fanhui myicon"></i></router-link>
			<input type="text" v-model="haha" id="shousu" @keyup="getMusic" placeholder="歌手/歌名/专辑" />
			<router-link class="myicon1" to=""> <i class="iconfont icon-sousuo " @click="getInfo"></i></router-link>
		</div>

		<div class="Hot_Singer" v-if="show1">
			<img src="../../assets/images/Singer.png" alt="" />
			<p>歌手分类</p>
		</div>
		<div class="Hot_Sousu" v-if="show1">

			<p>热门搜索</p>
			<div>正义联盟</div>
			<div>骆驼</div>
			<div>最美情侣</div>
			<div>短发</div>
			<div>我的一个道姑朋友</div>
			<div>孙燕姿</div>
			<div>8000</div>

		</div>
		<div  v-if="show1">
			<div class="YiDian" >
			<img src="../../assets/images/YiDian.png" alt="" />
			<p>校长</p>

		</div>
		<div class="YiDian">
			<img src="../../assets/images/YiDian.png" alt="" />
			<p>校长</p>

		</div>
		<div class="YiDian">
			<img src="../../assets/images/YiDian.png" alt="" />
			<p>校长</p>

		</div>
		<div class="YiDian">
			<img src="../../assets/images/YiDian.png" alt="" />
			<p>校长</p>

		</div>
		<div class="YiDian">
			<img src="../../assets/images/YiDian.png" alt="" />
			<p>校长</p>

		</div>
		</div>
		
        <div class="xiazai" v-if="show2">
			<div class="xiazaiCon">
				<div class="playAll">
					<div class="menuLeft">
						<span class="playBtn"></span>
						<span class="playAllText">播放全部</span>
					</div>
					<span class="playAllMain"></span>
				</div>
				<a class="m-sgitem" href="#"  @click="changeNum(index)" v-for="(list,index) in music_news" key='index'>
					<div class="sgfl sgfl-cred">{{index+1}}</div>
					<div class="sgfr f-bd f-bd-btm">
						<div class="sgchfl">
							<div class="f-thide sgtl">{{list.fsong}}</div>
							<div class="f-thide sginfo">
								<i class="u-hmsprt sghot"></i>{{list.fsinger}}
							</div>
						</div>
						<div class="sgchfr">
									<span class="u-hmsprt sgchply"></span>
							<!--<mt-spinner type="fading-circle"></mt-spinner>-->
						</div>
					</div>
				</a>
			</div>
		</div>
		
	     <FooterMusic/>
	</div>
</template>

<script>
	import "../../assets/css/font/iconfont.css"
	import  FooterMusic from  "../FooterMusic"
	import qs from "qs"
	export default {
		name: "Myself_Music",
		data() {
			return {
				show1: true,
				something: "",
				haha: "",
				show2:false,
				music_news:[],
				counts:"10",
				music_ID:"",
				num:""
              
			}
		},
	components:{
		
			FooterMusic
	},

		methods: {
			getMusic: function(event) {

				this.show1 = false

				if(this.haha == "") {
					this.show1 = true
					this.show2=false
				} else {
					this.show1 = false
//					this.show2=true
				}

			},

			getInfo: function(event) {
				console.log("333")
				if(this.haha==""){
					return;
				}
				var names = this.haha
				var  counts=this.counts
				this.show2 = true
				var url1 = this.HOST + "/fcgi-bin/music_search_new_platform?t=0&n="+counts+"&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w="+names+""
				this.$axios.get(url1)
					.then(res => {
						console.log(res.data.data.song.list)
//					    this.music_news = res.data.song_list
						this.music_news=res.data.data.song.list	
					
					})
					
			},
			changeNum:function(index){
//				var  arr1=this.music_news[index].f.split("|");
//				
//            console.log(arr1)
//            var  num=arr1[0]
//            
//           
//            
//            var  Music_ID="http://ws.stream.qqmusic.qq.com/"+num+".m4a?fromtag=46"
//            console.log(Music_ID)
//            var  Music_Name=arr1[1];
//            var  Music_author=arr1[3];
////            "http://imgcache.qq.com/music/photo/album_{$width}/".($image_id%100)."/{$width}_albumpic_{$image_id}_0.jpg";
////            var  Muscic_Img=(arr1[4]-0)%100
////            var  Muscic_Img1=arr1[4]-0
////            console.log( typeof Muscic_Img1)
//            var obj = {"id":Music_ID,"uname":Music_Name,"author":Music_author};
//            var  userName=[]
//            userName.push(obj);
//            localStorage.setItem("userName",JSON.stringify(userName));
//            console.log(obj)
              //store
              this.Music_List=this.music_news[index];
//            this.Music_List1=this.this.music_news[index]
              this.$store.dispatch("changeNum",this.Music_List)
              this.$store.dispatch("getInfo_title",this.Music_List.fsong)
              this.$store.dispatch("getInfo_author",this.Music_List.fsinger)
              this.$store.dispatch("getInfo_Images",this.Music_List)
             

			}
			
		}
	}
</script>

<style scoped lang="less">
	/*.singer-detail {
		position: fixed;
		left: 0px;
		right: 0;
		top: 0;
		bottom: 0;
	}*/
	
	#shousu {
		width: 600/100rem;
		height: 54/100rem;
		line-height: 100/100rem;
		padding-left: 20/100rem;
		float: left;
		margin-top: 50/100rem;
		border: 0rem solid #000;
		border-radius: 10/100rem;
	}
	
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
	
	.Hot_Singer {
		height: 86/100rem;
		overflow: hidden;
		border-bottom: 0.5/100rem solid #DDDDDD;
		img {
			height: 46/100rem;
			width: 41/100rem;
			float: left;
			line-height: 86/100rem;
			margin-top: 20/100rem;
			margin-left: 250/100rem;
		}
		p {
			display: block;
			font-size: 30/100rem;
			float: left;
			line-height: 86/100rem;
			margin-left: 50/100rem;
		}
	}
	
	.Hot_Sousu {
		overflow: hidden;
		margin-top: 20/100rem;
		p {
			font-size: 35/100rem
		}
		div {
			float: left;
			font-size: 30/100rem;
			border: 1/100rem solid #DDDDDD;
			margin-left: 20/100rem;
			margin-top: 10/100rem;
			padding: 15/100rem 15/100rem;
			border-radius: 50/100rem;
		}
	}
	
	.YiDian {
		overflow: hidden;
		margin-top: 50/100rem;
		border-bottom: 0.5/100rem solid #DDDDDD;
		img {
			height: 40/100rem;
			width: 38/100rem;
			float: left;
			margin-left: 10/100rem;
		}
		p {
			margin-left: 20/100rem;
			font-size: 30/100rem;
			float: left;
			line-height: 46/100rem;
		}
	}
	
	.myicon1 .icon-sousuo {
		position: absolute;
		right: -7px;
		top: -17px;
		font-size: 80/100rem;
		line-height: 110/100rem;
	}
	.xiazai {
		width: 100%;
		.xiazaiCon {
			a {
				color: #333333;
				.touxiang {
					img {
						width: 1rem;
						height: 1rem;
					}
				}
			}
			.m-sgitem,
			.m-sgitem .sgfl {
				display: -webkit-box;
				display: flex;
			}
			.m-sgitem {
				padding-left: 10/50rem;
			}
			.m-sgitem .sgfl-cred {
				color: #df3436;
			}
			.m-sgitem .sgfl {
				-webkit-box-align: center;
				align-items: center;
				width: 28/50rem;
				font-size: 17/50rem;
				color: #999;
			}
			.m-sgitem .sgfr {
				-webkit-box-flex: 1;
				flex: 1 1 auto;
				display: -webkit-box;
				display: flex;
				position: relative;
				padding-left: 0.5rem;
			}
			.m-sgitem .sgchfl {
				-webkit-box-flex: 1;
				flex: 1 1 auto;
				padding: 6/50rem 0;
				width: 0;
			}
			.m-sgitem .sgtl {
				font-size: 17/50rem;
			}
			.f-thide {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				word-break: normal;
			}
			.m-sgitem .sginfo {
				font-size: 12/50rem;
				color: #888;
				margin-top: 5/50rem;
			}
			.f-thide {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				word-break: normal;
			}
			.m-sgitem .sghot {
				display: inline-block;
				width: 12/50rem;
				height: 8/50rem;
				margin-right: 4/50rem;
			}
			.m-sgitem .sgchfr {
				display: -webkit-box;
				display: flex;
				-webkit-box-align: center;
				align-items: center;
				padding: 0 10/50rem;
				margin-right: 10/50rem;
			}
			.m-sgitem .sgchply {
				display: inline-block;
				width: 22/50rem;
				height: 22/50rem;
				background-position: -24/50rem 0;
			}
			.u-hmsprt {
				background: url(http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28%E2%80%A6) no-repeat;
				background-size: 166/50rem 97/50rem;
			}
		}
	}
	
	.playAll{
			padding: 5/50rem 10/50rem;
			overflow: hidden;
			.menuLeft{
				margin-top: 0.2rem;
				.playBtn{
					float: left;
					display: inline-block;
	    			width: 0.44rem;
	    			height: 0.44rem;
			    	background: url(http://s3.music.126.net/m/s/img/index_icon_2x.png?5207a28%E2%80%A6) no-repeat;
	    			background-size: 3.32rem 1.94rem;
	    			background-position: -0.48rem 0;
	    			margin-right: 10/50rem;
				}
				.playAllText{
					float: left;
					display: inline-block;
			    	/*width: 0.44rem;*/
			    	height: 0.44rem;
					font-size: 0.42rem;
					margin: 0;
				}
			}
			
			.playAllMain{
				float: right;
				display: inline-block;
		    	width: 0.44rem;
		    	height: 0.44rem;
		    	background: url(../../assets/listMenu.png) no-repeat;
		    	background-size: 0.44rem 0.44rem;
		    	/*margin-top: 0.2rem;*/
			}
	}  
</style>