<template>
  <div class="home" @scroll="lazyLoad"   ref="lazy">
    <div class="topAlbum">
      <h1>音乐榜</h1>
      <h2>{{topAlbumTiltle || "waiting"}}</h2>
      <div class="albumImgs" id="m1">
        <div class="albumImg" v-for="topAlbum in topAlbums" @click="album(topAlbum.id)">
          <img src="../assets/logo.png" :dataSrc="topAlbum.coverImgUrl.replace('http','https')" alt='资源加载失败'>
          <div class="playSvg">
            <svg data-v-7ba5bd90 width="48" height="48" xmlns="http://www.w3.org/2000/svg">
              <g data-v-7ba5bd90>
                <title data-v-7ba5bd90>background</title>
                <rect
                  data-v-7ba5bd90
                  fill="none"
                  id="canvas_background"
                  height="402"
                  width="582"
                  y="-1"
                  x="-1"
                ></rect>
              </g>
              <g data-v-7ba5bd90>
                <title data-v-7ba5bd90>play</title>
                <rect
                  data-v-7ba5bd90
                  id="svg_3"
                  height="23.269886"
                  width="23.529401"
                  y="12.671068"
                  x="13.662634"
                  stroke-width="1.5"
                  stroke="#000"
                  fill="#fff"
                ></rect>
                <path data-v-7ba5bd90 id="svg_1" fill="none" d="m0,0l48,0l0,48l-48,0l0,-48z"></path>
                <path
                  data-v-7ba5bd90
                  fill="#e82359"
                  stroke-width="0"
                  id="svg_2"
                  d="m24,3.910474c-11.05,0 -20,8.95 -20,20s8.95,20 20,20s20,-8.95 20,-20s-8.95,-20 -20,-20zm-4,29l0,-18l12,9l-12,9z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="recommandAlbum">
      <h1>小编推荐</h1>
      <h2>{{recommandAlbumTitle || "waiting"}}</h2>
      <div class="albumImgs" id="m4">
        <div
          class="albumImg"
          v-for="recommandAlbum in recommandAlbums"
          @click="album(recommandAlbum.id)"
        >
          <img src="../assets/logo.png" :dataSrc="recommandAlbum.picUrl" alt='资源加载失败'>
          <div class="cover-text">{{recommandAlbum.name.substring(0,6)+'...'}}</div>
          <div class="playSvg">
            <svg data-v-7ba5bd90 width="48" height="48" xmlns="http://www.w3.org/2000/svg">
              <g data-v-7ba5bd90>
                <title data-v-7ba5bd90>background</title>
                <rect
                  data-v-7ba5bd90
                  fill="none"
                  id="canvas_background"
                  height="402"
                  width="582"
                  y="-1"
                  x="-1"
                ></rect>
              </g>
              <g data-v-7ba5bd90>
                <title data-v-7ba5bd90>play</title>
                <rect
                  data-v-7ba5bd90
                  id="svg_3"
                  height="23.269886"
                  width="23.529401"
                  y="12.671068"
                  x="13.662634"
                  stroke-width="1.5"
                  stroke="#000"
                  fill="#fff"
                ></rect>
                <path data-v-7ba5bd90 id="svg_1" fill="none" d="m0,0l48,0l0,48l-48,0l0,-48z"></path>
                <path
                  data-v-7ba5bd90
                  fill="#e82359"
                  stroke-width="0"
                  id="svg_2"
                  d="m24,3.910474c-11.05,0 -20,8.95 -20,20s8.95,20 20,20s20,-8.95 20,-20s-8.95,-20 -20,-20zm-4,29l0,-18l12,9l-12,9z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="homeContentHotAlbum">
      <h1>热歌</h1>
      <h2>{{hotAlbumTitle || "waiting"}}</h2>
      <div class="albumImgs" id="m2">
        <div class="albumImg" v-for="hotAlbum in hotAlbums" @click="album(hotAlbum.id)">
          <img src="../assets/logo.png" :dataSrc="hotAlbum.coverImgUrl.replace('http','https')" alt='资源加载失败'>
          <div class="playSvg">
            <svg data-v-7ba5bd90 width="48" height="48" xmlns="http://www.w3.org/2000/svg">
              <g data-v-7ba5bd90>
                <title data-v-7ba5bd90>background</title>
                <rect
                  data-v-7ba5bd90
                  fill="none"
                  id="canvas_background"
                  height="402"
                  width="582"
                  y="-1"
                  x="-1"
                ></rect>
              </g>
              <g data-v-7ba5bd90>
                <title data-v-7ba5bd90>play</title>
                <rect
                  data-v-7ba5bd90
                  id="svg_3"
                  height="23.269886"
                  width="23.529401"
                  y="12.671068"
                  x="13.662634"
                  stroke-width="1.5"
                  stroke="#000"
                  fill="#fff"
                ></rect>
                <path data-v-7ba5bd90 id="svg_1" fill="none" d="m0,0l48,0l0,48l-48,0l0,-48z"></path>
                <path
                  data-v-7ba5bd90
                  fill="#e82359"
                  stroke-width="0"
                  id="svg_2"
                  d="m24,3.910474c-11.05,0 -20,8.95 -20,20s8.95,20 20,20s20,-8.95 20,-20s-8.95,-20 -20,-20zm-4,29l0,-18l12,9l-12,9z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="homeContentNewAlbum">
      <h1>最新专辑</h1>
      <h2>{{newAlbumTitle || "waiting"}}</h2>
      <div class="albumImgs" id="m3">
        <div class="albumImg" v-for="newAlbum in newAlbums" @click="album(newAlbum.id)">
          <img src="../assets/logo.png" :dataSrc="newAlbum.coverImgUrl.replace('http','https')" alt='资源加载失败'>
          <div class="playSvg">
            <svg data-v-7ba5bd90 width="48" height="48" xmlns="http://www.w3.org/2000/svg">
              <g data-v-7ba5bd90>
                <title data-v-7ba5bd90>background</title>
                <rect
                  data-v-7ba5bd90
                  fill="none"
                  id="canvas_background"
                  height="402"
                  width="582"
                  y="-1"
                  x="-1"
                ></rect>
              </g>
              <g data-v-7ba5bd90>
                <title data-v-7ba5bd90>play</title>
                <rect
                  data-v-7ba5bd90
                  id="svg_3"
                  height="23.269886"
                  width="23.529401"
                  y="12.671068"
                  x="13.662634"
                  stroke-width="1.5"
                  stroke="#000"
                  fill="#fff"
                ></rect>
                <path data-v-7ba5bd90 id="svg_1" fill="none" d="m0,0l48,0l0,48l-48,0l0,-48z"></path>
                <path
                  data-v-7ba5bd90
                  fill="#e82359"
                  stroke-width="0"
                  id="svg_2"
                  d="m24,3.910474c-11.05,0 -20,8.95 -20,20s8.95,20 20,20s20,-8.95 20,-20s-8.95,-20 -20,-20zm-4,29l0,-18l12,9l-12,9z"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axiosLoading from "../assets/common/axiosLoading.js";
export default {
  data() {
    return {
      hotAlbumTitle: "",
      newAlbumTitle: "",
      topAlbumTiltle: "",
      recommandAlbumTitle: "",
      hotAlbums: [],
      newAlbums: [],
      topAlbums: [],
      recommandAlbums: [],
      oldScrollTop:0,
      len:0,
    };
  },
  methods: {
    album(id) {
      this.$router.push({
        name: "album",
        params: {
          id: id
        }
      });
      this.$store.state.albumId = id;
    },
    hotAlbum() {
      var requrl = "/top/playlist/highquality?limit=6";
      axiosLoading(this.$http, requrl, res => {
        // console.log(res.data)
        this.hotAlbumTitle = "hotAlbumTitle";
        this.hotAlbums = res.data.playlists;
      });
    },
    newAlbum() {
      var requrl = "/top/playlist?limit=7&order=new";
      axiosLoading(this.$http, requrl, res => {
        this.newAlbumTitle = "News";
        this.newAlbums = res.data.playlists;
      });
    },
    topAlbum() {
      var requrl = "/toplist";
      axiosLoading(this.$http, requrl, res => {
        this.topAlbumTiltle = "Top";
        this.topAlbums = res.data.list;
        // console.log(res.data.list)
      });
    },
    recommandAlbum() {
      var requrl = "/personalized";
      axiosLoading(this.$http, requrl, res => {
        this.recommandAlbumTitle = "Recommand";
        this.recommandAlbums = res.data.result;
        this.recommandAlbums.splice(7);
        // console.log(res);
      });
    },
    debounce(fn){
          clearTimeout(this.timer);
          this.timer = setTimeout(() => {
              fn();
          }, 1000);
    },
    loadImg(){
      if(this.$refs.lazy){
              var img = this.$refs.lazy.querySelectorAll('.albumImgs img');
              var top = document.documentElement.scrollTop + this.$refs.lazy.clientHeight;
                for(var i = this.len; i < img.length; i++) {
                if(img[i].parentNode.offsetTop <= top) {  // 在可视区内则显示图片
                    img[i].src = img[i].getAttribute("datasrc");
                    this.len = i;  
                }
                }
      }
    },
    lazyLoad(){
    // 如果上拉距离大于500px则自动加载
    if(document.documentElement.scrollTop - this.oldScrollTop > 500) {
        this.loadImg();
        this.oldScrollTop = document.documentElement.scrollTop;
    } else if(document.documentElement.scrollTop - this.oldScrollTop < 0) {  // 如果向下拉则不做操作
        return ;
    } else {  // 如果向下拉但小于500px则防抖加载
        this.debounce(this.loadImg);
    }
    }
  },
  beforeMount() {
    this.hotAlbum();
    this.newAlbum();
    this.topAlbum();
    this.recommandAlbum();
  },
  mounted(){
    document.addEventListener('scroll', this.lazyLoad,true)
    if(this.oldScrollTop === 0){
      this.lazyLoad()
    }
  },
    destroyed () {
  document.removeEventListener('scroll', this.lazyLoad)
  }
};
</script>
<style scoped>
img {
  height: 100%;
  width: 100%;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 6px 8px 2px #171b1c;
  cursor: pointer;
}
h1 {
  text-align: left;
  margin: 15px;
  font-size: 2rem;
}
h2 {
  text-align: left;
  margin: 15px;
  font-weight: 300;
  font-size: 1.5rem;
}
.home {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  vertical-align: center;
  align-items: center;
  margin-bottom: 50%;
}
.albumImgs {
  width: 93%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  vertical-align: center;
  align-items: center;
}
.albumImgs .albumImg {
  position: relative;
  height: 100%;
  width: 20%;
  padding: 0px;
  margin: 10px;
  transition: 0.4s;
}
.albumImgs .albumImg {
  height: 100%;
  width: 10%;
  padding: 10px;
  transition: 0.4s;
}
.playSvg {
  height: 50px;
  width: 100%;
  margin-top: -50px;
  display: flex;
  flex-direction: row-reverse;
}
.playSvg svg {
  height: 0;
  width: 0;
  transition: 0.4s;
}
.albumImgs .albumImg:hover img {
  opacity: 0.5;
}
.cover-text {
  display: none;
}
.albumImgs .albumImg:hover .cover-text {
  opacity: 1;
  width: 100%;
  top: 40%;
  text-align: center;
  font-size: 22px;
  letter-spacing: 2px;
  line-height: 40px;
  height: 200px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: block;
  position: absolute;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  -webkit-animation-name: fadeIn-data-v-fae5bece;
  -webkit-animation-duration: 0.4s;
  -webkit-animation-iteration-count: 1;
  -webkit-animation-delay: 0s;
}
@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.albumImgs .albumImg:hover .playSvg svg {
  height: 100%;
  width: 100%;
  z-index: 2;
}
.albumImgs .albumImg:hover .playSvg svg {
  height: 100%;
  width: 100%;
}
.recommandAlbum {
  margin: 30px 0 10px 0;
}
.homeContentHotAlbum {
  margin: 30px 0 10px 0;
}
#m1 .albumImg {
  width: 13%;
}
#m2 .albumImg {
  width: 16%;
}
#m3 .albumImg {
  width: 16%;
}
#m4 .albumImg {
  width: 20%;
}
@media only screen and (max-width: 767px) {
  h1 {
    text-align: left;
    margin: 15px 5px 9px 5px;
    font-size: 1.7rem;
  }
  h2 {
    text-align: left;
    margin: 10px 5px 9px 5px;
    font-weight: 300;
    font-size: 1.2rem;
  }
  .albumImgs .albumImg {
    width: 17%;
    padding: 7px;
  }
  #m1 .albumImg,
  #m2 .albumImg {
    width: 17%;
  }
  .longer {
    width: 20% !important;
  }
  .longerplaylistpage {
    width: 97% !important;
    left: 3%;
  }
  .albumImgs {
    width: 100%;
  }
  .albumImgs .albumImg {
    position: relative;
    height: 100%;
    width: 17%;
    padding: 0px;
    margin: 7px;
    transition: 0.4s;
  }
}
</style>
