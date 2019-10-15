<template>
    <div class="users">
        <div class="username">
            <p>{{username || " "}}</p>
        </div>
        <div class="playLists">
            <div class="playList" v-for="playList in playLists">
                <div class="playListImg" @click="getAlbumId(playList.id)">
                    <img :src="playList.coverImgUrl" alt="">
                    <p>{{playList.name}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
            username:'',
            playLists:''
        }
    },
    methods:{
        getAlbumId(id){
            this.$store.state.albumId =id;
            this.$router.push({
                name:'album',
                params:{
                    id:id
                }
            })
        },
        getUserName(id){
            var uid=id || this.$router.currentRoute.params.id || localStorage.getItem("uid");
            if(!uid)
            return;
            axios.get(`https://music.api.umcoder.com/user/detail?uid=${id}`)
            .then(res=>{
                this.username = res.data.profile.nickname
                // console.log(res.data.profile.nickname)
            }) 
        },
        getUserPlayList(id){
            var uid=id || this.$router.currentRoute.params.id;
            if(!uid)
            return;
            axios.get(`https://music.api.umcoder.com/user/playlist?uid=${id}`)
            .then(res=>{
                // console.log(res);
                this.playLists = res.data.playlist;
            })
        },
    },
    mounted(){
        // console.log(this.$router.currentRoute.params.id)
        if(!this.$router.currentRoute.params.id){
            alert('请登录你的网易云Id');
            this.$router.push({
                name:'/home'
            })
        }
        if(this.$router.currentRoute.params.id){
            this.getUserName(this.$router.currentRoute.params.id);
            this.getUserPlayList(this.$router.currentRoute.params.id);
        }
    }
}
</script>
<style scoped>
img{
    height:100%;
    width:100%;
    border-radius: 10px 10px 10px 10px;
    box-shadow: 6px 8px 2px #171b1c;
    cursor: pointer;
}
.users{
    /* height:100%;
    width:100%; */
    display:flex;
    flex-direction: column;
    margin-bottom: 110px;
    }
.users .username{
    font-size: 30px;
    text-align: left;
    margin-left:40px;
}
.users .playLists{
    width:100%;
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.users .playLists .playList{
    width:20%;
    margin:30px;
}
.users .playLists .playListImg{
    height:100%;
    width:100%;
}
.users .playLists .playListImg p{
        margin-top:10px;
}
@media screen and (max-width:960px){
.users .playLists .playListImg{
    height:100px;
    width:100px;
    }
.users .playLists .playListImg p{
        margin-top:15px;
}
}
</style>