<template>
	<div class="foot1">
		<div class="foot_Left">
			<img :src="imgurl"  alt="" />
		</div>
		<div  class="foot_ringt">
		<p>{{getInfo.substring(0,4)}}</p>
		<p>{{getInfo_author}}</p>
		</div>
		
		 
		<!--<a-player mutex theme="#e6d0b2" mode="random" class="aplayer" :music="[
         
            	{
                title: 'secret base~君がくれたもの~',
                author: '茅野愛衣',
                url: "http://ws.stream.qqmusic.qq.com/"+5177680+".m4a?fromtag=46",
                 pic: 'http://devtest.qiniudn.com/回レ！雪月花.jpg'
            }]"  ></a-player>-->
           <div class="Music_play">
         <audio id="Music1" :src="Musci_Url+Musci_Url2+Musci_Url1" controls="controls"  autoplay="autoplay">
		  <!--<source :src="this.Musci_Url+this.Musci_Url2+this.Musci_Url1"  type="audio/mp3" />
-->           {{getNum}}
  
              {{getInfo_Images}}
	  	   
		</audio>
		</div>
		
  
  
	
	
	</div>

</template>

<script>
//	import VueAplayer from './Play/vue-aplayer.vue'
	export default {

		name: 'FooterMusic',
		data() {
			return {
				H1:false,
               Musci_Url :"http://ws.stream.qqmusic.qq.com/",
               Musci_Url1:".m4a?fromtag=46",
               Musci_Url2:"",
               haha:"",
               Musci_Title:"",
               Musci_author:"",
               Musci_Image:"",
               imgsrc1:"http://imgcache.qq.com/music/photo/album_300/",
		      imgsrc2:"/300_albumpic_",
		      imgsrc3:"_0.jpg",
		      imgurl:""
		     
               
              
			}

		},
	

		 computed:{
		    getNum(){
		    

               this.Musci_Url2=this.$store.state.num            
//             console.log( typeof this.Musci_Url2)
               return this.Musci_Url2;

		    },
		    getInfo(){
		    	this.Musci_Title=this.$store.state.Music_Info;
		    	console.log(this.Musci_Title)
		    	return this.Musci_Title;
		    },
		     getInfo_author(){
		    	this.Musci_author=this.$store.state.getInfo_author;
		    	console.log(this.Musci_author)
		    	return this.Musci_author;
		    },
		     getInfo_Images(){
		    	this.Musci_Image=this.$store.state.getInfo_Images;
		    	
		    	 var imgid2=this.Musci_Image-0;
				   
				    var aa=imgid2%100;
				    console.log(aa)
				    this.imgurl=this.imgsrc1+aa+this.imgsrc2+imgid2+"_0.jpg"
		    	console.log(this.imgurl)
		    	return this.imgurl;
		    },
		    
		  
		    
		 },
		 methods:{
		 	getsongs(){
		 		
		 	}
		 }
				
		
		

	}
</script>

<style scoped lang="less">
       
	.foot1{
		overflow: hidden;
		background-color: pink;
		position: fixed;
		bottom: 0px;
		width: 100%;
	}
	.foot_ringt{
		float: left;
		margin-top: 20/100rem;
		margin-left: 20/100rem;
		p{
			font-size: 34/100rem;
			color: red;
			margin-bottom: 10/100rem;
		}
	}
	.foot_Left{
		float:left;
		margin-top: 20/100rem;
		img{
			width: 100/100rem;
			height: 100/100rem;
		}
	}
	#Music1{
		float: right;
		width: 240px;
		margin-top: 20/100rem;
	}
	.Music_play{
		float: right;
	}
</style>