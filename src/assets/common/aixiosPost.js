let axiosPost =function(axios,requrl,obj,callback){
    // console.log(requrl,obj)
    var axiosCreate = axios.create({
    baseURL :'https://manage.music.umcoder.com',
        timeout:5000
    })
    axiosCreate.interceptors.request.use(config=>{
            // var loading = document.getElementsByClassName('loading')
            // loading[0].style.display = 'block'
            return config
            },error=>{
                return Promise.reject(error)
            })
    axiosCreate.interceptors.response.use(response => {
                // setTimeout(()=>{
                //     var loading = document.getElementsByClassName('loading')
                //     loading[0].style.display = 'none'
                // },1000)
                return response
                }, error => {
                //请求错误时做些事
                console.log(error)
                return Promise.reject(error)
    })
    axiosCreate(requrl,{
        method:'post',
        data:obj
    })
    .then(res=>{
        setTimeout(()=>{
            callback(res)
        },1000)
    })
    .catch(err=>{
        return err
    })
}
    
export default axiosPost = axiosPost;