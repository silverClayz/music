import axios from 'axios'
const reqdata= function(requrl,callback){
            var obj ="1" 
            var albums=[];
            axios.get(requrl)
            .then(res=>{

              if(res.status == 200){
                var albumTitle=res.data.data.songListName
              for(var i=0;i<res.data.data.songs.length;i++){
                  albums.push({
                  img:res.data.data.songs[i].pic,
                  name:res.data.data.songs[i].name,
                  id:res.data.data.songs[i].id
                  })
                }
                // console.log(1)
                obj ={albums:albums,albumTitle:albumTitle};
                callback(obj)
              }else{
                alert('获取失败')
              }
            }).catch(err=>{
              console.log(err);
            })
            // return then
              }

export {reqdata}