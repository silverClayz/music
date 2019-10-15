<template>
<section>
  <!--for demo wrap-->
  <h1>播放记录</h1>
  <div class="tbl-header">
    <table cellpadding="0" cellspacing="0" border="0">
            <thead>
                <tr>
                <th>歌曲ID</th>
                <th></th>
                <th>歌名</th>
                </tr>
            </thead>
    </table>
  </div>
  <div class="tbl-content">
    <table cellpadding="0" cellspacing="0" border="0">
      <tbody>
            <tr v-for="historylist in historylists">
                     <td>{{historylist.id}}</td>
                      <td>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><title id="addIconTitle">添加到播放列表</title><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-square"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><title id="addIconTitle">添加到收藏</title><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><title id="addIconTitle">分享</title><line x1="12" y1="2" x2="12" y2="15"></line></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><title id="addIconTitle">下载</title><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                      </td>
                      <td @click="rplay(historylist.id,historylist.name)">{{historylist.name}}</td>
            </tr>
      </tbody>
    </table>
  </div>
</section>
</template>
<script>
 export default{
     data(){
         return {
                historylists:[]
            }
     },
     methods:{
         show(){
             this.historylists=this.$store.state.historylists
         },
         rplay(id,name){
        this.$store.dispatch('setSongId',id),
        this.$store.dispatch('setPlaylistTitle',name)
      }
     },beforeMount(){
       this.show()
     }
        }
</script>
<style scoped>
h1{
  font-size: 30px;
  color: #000;
  text-transform: uppercase;
  font-weight: 200;
  text-align:left;
  margin:20px 0px 15px 20px;
}
table{
  width:100%;
  table-layout: fixed;
}
.tbl-header{
  background-color: rgba(255,255,255,0.3);
 }
.tbl-content{
  height:500px;
  overflow-x:auto;
  margin-top: 0px;
  border: 1px solid rgba(255,255,255,0.3);
}
th{
  padding: 20px 20px;
  text-align: left;
  font-weight: 500;
  font-size: 20px;
  color: #000;
  text-transform: uppercase;
}
td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 16px;
  color: #000;
  border-bottom: solid 1px rgba(255,255,255,0.1);
  cursor: pointer;
}
td svg{
  margin-left:8px;
}
/* demo styles */
section{
    position: absolute;
    left:15%;
    height:100%;
    width:85%;
    background: linear-gradient(to right, #bdccc6, #bdd2d4);
    font-family: 'Roboto', sans-serif;
}
/* follow me template */
.made-with-love {
  margin-top: 40px;
  padding: 10px;
  clear: left;
  text-align: center;
  font-size: 10px;
  font-family: arial;
  color: #000;
}
.made-with-love i {
  font-style: normal;
  color: #F50057;
  font-size: 14px;
  position: relative;
  top: 2px;
}
.made-with-love a {
  color: #000;
  text-decoration: none;
}
.made-with-love a:hover {
  text-decoration: underline;
}
/* for custom scrollbar for webkit browser*/
::-webkit-scrollbar {
    width: 6px;
} 
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
} 
::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3); 
}
</style>