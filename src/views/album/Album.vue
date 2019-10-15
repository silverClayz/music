<template>
  <div class="albumcontent">
      <h1>{{albumTitle}}</h1>
      <div class="content">
        <div v-for="album in albums" class="albums">
          <div class="album">
                          <div class='loading'>
                    <svg width="55" height="80" viewBox="0 0 55 80" xmlns="http://www.w3.org/2000/svg" fill="#86b0ed">
                        <g transform="matrix(1 0 0 -1 0 80)">
                            <rect width="10" height="20" rx="3">
                                <animate attributeName="height"
                                    begin="0s" dur="4.3s"
                                    values="20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20" calcMode="linear"
                                    repeatCount="indefinite" />
                            </rect>
                            <rect x="15" width="10" height="80" rx="3">
                                <animate attributeName="height"
                                    begin="0s" dur="2s"
                                    values="80;55;33;5;75;23;73;33;12;14;60;80" calcMode="linear"
                                    repeatCount="indefinite" />
                            </rect>
                            <rect x="30" width="10" height="50" rx="3">
                                <animate attributeName="height"
                                    begin="0s" dur="1.4s"
                                    values="50;34;78;23;56;23;34;76;80;54;21;50" calcMode="linear"
                                    repeatCount="indefinite" />
                            </rect>
                            <rect x="45" width="10" height="30" rx="3">
                                <animate attributeName="height"
                                    begin="0s" dur="2s"
                                    values="30;45;13;80;56;72;45;76;34;23;67;30" calcMode="linear"
                                    repeatCount="indefinite" />
                            </rect>
                        </g>
                    </svg>
                  </div>
            <div class="albumimg">
              <a><img class='imgAll' :src="album.coverImgUrl" @click="setPlaylistTitle(album.name);setSongId(album.id)"></a>
            </div>
            <div class="albumtitle">
              <p>{{album.name}} </p>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
import axiosLoading from '../../assets/common/axiosLoading.js'
export default {
data () {
  return {
    albumTitle:'',
    albums:[],
  }
},
  methods: {
   imgurl(){
     var requrl= '/top/playlist/highquality';
     axiosLoading(this.$http,requrl,res=>{
                this.albumTitle='Highquality';
                this.albums = res.data.playlists;
     })
    
      },
       ...mapActions([
      'setSongId', 
      'setPlaylistTitle' 
      ]),
      // getSongurl(id,name){
      //   this.$store.dispatch('setSongId',id),
      //   this.$store.dispatch('setPlaylistTitle',name)
      // }
},
beforeMount () {
  this.imgurl();
}
}
</script>
<style scoped>
#nav-bar a.router-link-exact-active {
  color: #000;
}
a:hover {
  color: rgb(37, 5, 5);
}
#nav-bar a.router-link-exact-active::before{
  content:'';
  display:inline-block;
  position:absolute;
  left:4px;
  height:28px;
  margin-left:1px;
  width:4px;
  background-color:#86eda2;
}
.nav-body h1{
  text-align: left;
  margin-left:30px;
}
.content{
  height:100%;
  display: flex;
flex-direction: row;
  flex-wrap:wrap;
  padding-bottom: 20px;
  margin:20px;
  overflow: hidden;
}
a.router-link-exact-active {
  color: #000;
}
.albums{
  height:100%;
  padding-bottom: 20px;
  display: inline-flex;
  flex-direction: column-reverse;
  margin:20px;
  height:160px;
  width:200px;
}
.album {
  height:100%;
  width:100%;
}
.albumimg{
  height:100%;
  width:100%;
}
.albums img{
  height:100%;
  width:100%;
  cursor: pointer;
}
.albums .album .albumtitle{
  margin:10px;
}
/* loading加载动画 */
.loading{
  height:100%;
  width:100%
}
.imgAll{
  display: none;
}
</style>