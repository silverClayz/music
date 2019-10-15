let axiosLoading=function (axios,requrl,callback){
    var axiosCreate = axios.create({
        baseURL :'https://music.api.umcoder.com',
        timeout:10000
    })
    axiosCreate.interceptors.request.use(config=>{
       return config
    },error=>{
      return Promise.reject(error)
    })
    axiosCreate.interceptors.response.use(response => {

        //对响应数据做些事，比如说把loading动画关掉
        // setTimeout(()=>{
        //   var loadingAll = document.getElementsByClassName('loading')
        //   var imgAll =document.getElementsByClassName('imgAll')
        //   for(let i=0;i<imgAll.length;i++){
        //     if(imgAll[i].complete) {
        //       loadingAll[i].style.display='none'
        //       imgAll[i].style.display='block'
        //       // console.log('该图片已经存在于缓存之中，不会再去重新下载');
        //   }else{
        //       imgAll[i].onload =()=> {
        //       loadingAll[i].style.display='none'
        //       // console.log('图片下载成功！');
        //       imgAll[i].style.display='block'
        //   }
        //   } 
        // }       
        // },500)
        return response
      }, error => {
        //请求错误时做些事
        return Promise.reject(error)
      })
      axiosCreate.get(requrl)
      .then(res=>{
        // var albums=[];
        // var obj='';
        if(res.status == 200){
        //   var albumTitle=res.data.data.songListName
        // for(var i=0;i<res.data.data.songs.length;i++){
        //     albums.push({
        //     img:res.data.data.songs[i].pic,
        //     name:res.data.data.songs[i].name,
        //     id:res.data.data.songs[i].id
        //     })
        //   }
        //   // console.log(1)
        //   obj ={albums:albums,albumTitle:albumTitle};
          callback(res)
        }
      })
      .catch(err=>{
        return err;
      })
}
export default axiosLoading = axiosLoading