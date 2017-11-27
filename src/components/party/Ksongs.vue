<template>
  <div>
    <div class="kge">
      <img src="../../assets/images/fengmian1.png" alt="">
      <div class="kgebar">
        <a href="#">K歌</a>
      </div>
      <div class="ribang">
        <el-tabs v-model="activeName3">
            <el-tab-pane label="日榜" name="first" v-bind:class="{active:isActive}">
              <div class="kgesong">
                <img src="../../assets/images/kheader.png" alt="">
                <span>音沐音乐</span>
              </div>
              <div class="kgesong">
                <img src="../../assets/images/kheader.png" alt="">
                <span>音沐音乐</span>
              </div>
              <div class="kgesong">
                <img src="../../assets/images/kheader.png" alt="">
                <span>音沐音乐</span>
              </div>
              <div class="kgesong">
                <img src="../../assets/images/kheader.png" alt="">
                <span>音沐音乐</span>
              </div>
              <div class="kgesong">
                <img src="../../assets/images/kheader.png" alt="">
                <span>音沐音乐</span>
              </div>
            </el-tab-pane>
            <el-tab-pane label="总榜" name="second" v-bind:class="{active:isActive}">
              <div class="kgesong">
                <img src="../../assets/images/kheader.png" alt="">
                <span>音沐音乐</span>
              </div>
              <div class="kgesong">
                <img src="../../assets/images/kheader.png" alt="">
                <span>音沐音乐</span>
              </div>
              <div class="kgesong">
                <img src="../../assets/images/kheader.png" alt="">
                <span>音沐音乐</span>
              </div>
              <div class="kgesong">
                <img src="../../assets/images/kheader.png" alt="">
                <span>音沐音乐</span>
              </div>
              <div class="kgesong">
                <img src="../../assets/images/kheader.png" alt="">
                <span>音沐音乐</span>
              </div>
            </el-tab-pane>
          </el-tabs>
      </div>
    </div>
    <audio src="http://ws.stream.qqmusic.qq.com/101369814.m4a?fromtag=46" controls></audio>
  </div>
</template>

<script>

export default {
  name: 'Ksongs',
  data(){
    return{
        activeName3: 'first',
        isActive:true
    }
  }
}
</script>

<style lang="less">

    .active{
      border: 1px solid #000;
    }


    .kge{


      //Kgebar

      .kgebar{
        padding:15/100rem 0;
        border-bottom:10px solid #eee;
        a{
          display: block;
          width:280/100rem;
          height:80/100rem;
          background-color:#E41F6E;
          border-radius:8px;
          font-size:50/100rem;
          line-height: 80/100rem;
          color:#fff;
          margin:0 auto;
        }
      }


        //选项卡     
        .el-tabs__header{
          margin-bottom:0;
          .el-tabs__nav{
            width:100%;
            height:80/100rem;
            line-height:80/100rem; 
            padding:0 74/100rem; 
            box-sizing:border-box;      
            .el-tabs__item{
              padding:0;
              width:50%;
            font-size:30/100rem;
            &:hover{
              color:#E41F6E;
            }
            &.is-active{
              color:#E41F6E;
            }
            }
            .el-tabs__active-bar{
            background-color: #E41F6E;
            height:4px;
            // width:170/100rem !important;
            // left:-20px;
            // transform:translateX(0) !important;
            }
          }
        }

        .el-tabs__item is-active{
              color:#E41F6E;
            }

        //封面

        &>img{
          width:750/100rem;
          height:750/100rem;
        }

        //歌曲

        .kgesong{
          padding:10/100rem 30/100rem 10/100rem 20/100rem;
          text-align: left;
          border-bottom:1px solid #E5E5E6;
          img{
            width:81/100rem;
            height:81/100rem;
            padding:0 54/100rem;
          }
          span{
            font-size:34/100rem;
            line-height: 81/100rem;
          }
        }
    }
  
    


</style>
