import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
      loginstatus:'未登录',
      id:6,
      playingName:'',
      songName:'',
      singer:'',
      albumName:'',
      historylists:[],
      searchWords:'',
      albumId:'',
      albumImgUrl:'',
      uid:''
  },
  getters:{
    getSongId(state){
        return state.id;
    },
    getPlaylistTitle(state){
      return state.playingName;
    },
    getLoginstatus(state){
      return state.loginstatus;
    },
    getSearchWords(state){
      return state.searchWords;
    },
    getAlbumId(state){
      return state.albumId;
  },
},
actions:{
  setSongId({commit,state}, id){
      commit("getSongId", id);
  },
  setPlaylistTitle({commit,state}, playingName){
    commit("getPlaylistTitle", playingName);
},
setLoginstatus({commit,state},loginstatus){
  commit("getLoginstatus", loginstatus);  
},
setSearchWords({commit,state},searchWords){
  commit("getSearchWords", searchWords);  
},
setAlbumId({commit,state},albumId){
  commit("getSearchWords", albumId);  
}
},
mutations:{
  getSongId(state, playLoad){
      state.id = playLoad;
  },
  getPlaylistTitle(state, playLoad){
    state.playingName = playLoad;
}
,    
getLoginstatus(state,playLoad){
  state.loginstatus = playLoad;
},
getSearchWords(state,playLoad){
  state.searchWords = playLoad
},
getAlbumId(state,playLoad){
  state.albumId = playLoad
},
}
})