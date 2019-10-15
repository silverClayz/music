<template>
  <div class="Box"  @scroll="lazyLoad" ref="lazy">
      <div class="backIcon" @click="routerBack">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  fill="#fff" d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"/></svg>  
      </div>
      <div class="searchBox" @click="search()">
        <div class="artists">
          <h2>{{ablumsname}}</h2>
          <h2>Artists</h2>
          <div class="Ablum-head-content">
            <img :src="artists.replace('http','https')" alt>
          </div>
        </div>
        <div class="songs">
          <h2>Songs</h2>
          <div class="content" v-for="song in songs">
            <div class="contentImg">
              <img src="../assets/logo.png" :dataSrc="song.al.picUrl.replace('http','https')" alt='资源加载失败'>  
            </div>
            <div class="contentSongs">
              <div
                class="songNames"
                @click="getSongId(song.id,song.name,song.ar[0].name,song.al.picUrl)"
              >
                <p>{{song.name||"songName"}}</p>
              </div>
              <div class="singerNames">
                <p>{{song.ar[0].name||"songName"}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>

</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      artists: "",
      songs: [],
      albums: [],
      ablumsname:"",
      len:0,
    };
  },
  methods: {
  routerBack(){
            this.$router.back(-1)
        },
    getSongId(id, name, singer, albumImgUrl) {
      this.$store.state.id = id;
      this.$store.state.songName = name;
      this.$store.state.singer = singer;
      this.$store.state.albumImgUrl = albumImgUrl;
    },
    search(albumId) {
      var id = albumId || this.$router.currentRoute.params.id;
      var axios = this.$http;
      var axiosCreate = axios.create({
        baseURL: "https://music.api.umcoder.com",
        timeout: 5000
      });
      axiosCreate.interceptors.request.use(
        config => {
          //在发送请求之前做某事，比如说 设置loading动画显示
          //   this.select('.loading').style.display = 'block'
          return config;
        },
        error => {
          //请求错误时做些事
          return Promise.reject(error);
        }
      );
      //添加响应拦截器
      axiosCreate.interceptors.response.use(
        response => {
          //对响应数据做些事，比如说把loading动画关掉
          //   setTimeout(()=>{
          //       this.select('.loading').style.display = 'none'
          //   },500)
          return response;
        },
        error => {
          //请求错误时做些事
          return Promise.reject(error);
        }
      );
      axiosCreate
        .get(`/playlist/detail?id=${id}`)
        .then(res => {
          // console.log(res.data)
          if (res.status == 200) {
            //   console.log(res.data.playlist.tracks);
            this.songs = res.data.playlist.tracks;
            this.artists = res.data.playlist.coverImgUrl;
            this.albums = res.data.playlist.tracks;
            this.ablumsname = res.data.playlist.name;
            // console.log(this.songs,this.artists,this.albums);
          }
        })
        .catch(err => {
          return err;
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
              var img = this.$refs.lazy.querySelectorAll('.songs img');
              var top = document.documentElement.scrollTop + this.$refs.lazy.clientHeight;
              for(var i = this.len; i < img.length; i++) {
                if(img[i].parentNode.parentNode.offsetTop <= top) {  // 在可视区内则显示图片
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
  watch: {
    getAlbumId(curval, oldval) {
      // console.log(curval, oldval);
      if (!curval) this.search(oldval);
      else this.search(curval);
    }
  },
  computed: {
    ...mapGetters(["getAlbumId"])
  },
  beforeMount() {
    this.search(this.$store.state.albumId);
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
  box-shadow: 4px 4px 5px black;
  cursor: pointer;
}
.searchBox {
  display: flex;
  top: 0px;
  flex-direction: column;
  vertical-align: center;
  align-items: center;
  margin-bottom: 50%;
  width: 100%;
  height: 1000px;
}
.songs,
.albums {
  height: 100%;
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  vertical-align: center;
}
.songs {
  height: 60%;
}
.contentImg {
  height: 100%;
  width: 20px;
}
.content {
  height: 100%;
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: row;
  vertical-align: center;
}
.Ablum-head-content {
  height: 100%;
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: row;
  vertical-align: center;
}
.artists img {
  height: 250px;
  width: 250px;
}
.artists {
  height: 50%;
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  vertical-align: center;
}
.songs .content {
  flex-direction: row;
  text-indent: 16px;
  transition: 0.2s;
  padding: 10px 0;
}
.songs .content .contentSongs {
  display: flex;
  vertical-align: center;
  align-items: center;
  width: 100%;
  margin: auto;
  text-align: left;
}
.songs .content .contentSongs .songNames {
  width: 50%;
}
.songs .content .contentImg {
  height: 50px;
  width: 50px;
}
.songs .content .contentImg img {
  border-radius: 1px;
  box-shadow: 1px 1px 5px black;
}
.contentImg {
  margin-right: 20px;
}
.songs .content:hover {
  background: rgb(30, 52, 76);
}
.songs .content p {
  cursor: pointer;
}
h2 {
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
.homeContentHotAlbum{
  margin:30px 0 10px 0;
}
.backIcon{
    height:36px;
    width:36px;
    cursor: pointer;
    margin:0 0 20px 4px;
}
@media only screen and (max-width: 767px) {
  h2 {
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
  .searchBox{
    top: 44px;
  }
  .artists img {
    height: 120px;
    width: 120px;
  }
  .artists {
    height: 25%;
    width: 100%;
    margin: 10px 0 0 0px;
  }
  .songs .content .contentSongs .songNames {
    width: 100%;
  }
  .songs {
    height: 60%;
  }
  .singerNames {
    display: none;
  }
  .songs .content {
    margin: 5px 5px 2px 0px;
  }
}
</style>