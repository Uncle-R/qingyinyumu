<template>
<div>
    <div class="playbar">
      <router-link to="/" tag="i"><img src="../assets/icon/back.png" alt="" /></router-link>
      <div class="playtitle">
        <p>song</p>
        <p>singer</p>
        <img src="../assets/icon/share.png" alt="">
      </div>
    </div>
    <audio :src="totalsrc" controls autoplay="autoplay"></audio>
</div>

</template>

<script>
  
export default {
  name: 'player',
  data(){
    return{
      musicsrc:"http://ws.stream.qqmusic.qq.com/",
      musicsrc1:".m4a?fromtag=46",
      totalsrc:"",
    }
  },
  created(){
    var src=this.$route.params.id;
    var imgid=src.split("|")[4];
    this.totalsrc=this.musicsrc+src.split("|")[0]+this.musicsrc1;
    console.log(this.totalsrc)
  },
  methods:{
    // pause(){
    //   console.log(666)
    //   audio.pause()
    // }
  }
}
</script>

<style scoped lang="less">
.playbar{
  position: relative;
  i{
      width:90/100rem;
      position: absolute;
      left:0;
      top:30/100rem;
      img{
        width:25/100rem;
        height:35/100rem;
      }
    }
}
  audio{
    position: fixed;
    bottom:0;
    right:0;
  }
</style>
