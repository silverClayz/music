<template>
<div id="login">
  <div class="box">
    <h1>
          Music Cloud
      <br>
      <i class="fa fa-camera-retro fa-lg">LOGO</i>
    </h1>
    
    <div class="float-label" >
      <input type="text"  id="f-name" placeholder="name" v-model='uname'>
      <!-- <label for="f-name">{{namemsg}}</label> -->
    </div>
    
    <!-- <div class="float-label" >
      <input type="email" id="email" placeholder="email" v-model='uemail'/>
      <label for="email" >{{emailmsg}}</label>
    </div> -->
    <div class="float-label" >
      <input type="password" id="pw" placeholder="password" v-model='upassword'/>
      <label for="pw">{{errmsg}}</label>
    </div>
    <div class="btns">
      <button type="button" class="btn" @click="getData()" id="btn1">Login</button>
      <button type="button" class="btn" @click="register()">Register</button>
    </div>
  </div>
        <div class="loading">
            <svg width="160" height="160" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg" stroke="#6195e0">
                <g fill="#6195e0" fill-rule="evenodd">
                    <g transform="translate(1 1)" stroke-width="2">
                        <circle cx="5" cy="50" r="5">
                            <animate attributeName="cy"
                                begin="0s" dur="2.2s"
                                values="50;5;50;50"
                                calcMode="linear"
                                repeatCount="indefinite" />
                            <animate attributeName="cx"
                                begin="0s" dur="2.2s"
                                values="5;27;49;5"
                                calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="27" cy="5" r="5">
                            <animate attributeName="cy"
                                begin="0s" dur="2.2s"
                                from="5" to="5"
                                values="5;50;50;5"
                                calcMode="linear"
                                repeatCount="indefinite" />
                            <animate attributeName="cx"
                                begin="0s" dur="2.2s"
                                from="27" to="27"
                                values="27;49;5;27"
                                calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                        <circle cx="49" cy="50" r="5">
                            <animate attributeName="cy"
                                begin="0s" dur="2.2s"
                                values="50;50;5;50"
                                calcMode="linear"
                                repeatCount="indefinite" />
                            <animate attributeName="cx"
                                from="49" to="49"
                                begin="0s" dur="2.2s"
                                values="49;5;27;49"
                                calcMode="linear"
                                repeatCount="indefinite" />
                        </circle>
                    </g>
                </g>
            </svg>
      </div>
</div>
</template>
<script>
import axiosPost from '../../assets/common/aixosPost.js'
export default{
    data(){
        return {
            uname:'',
            uemail:'',
            upassword:'',
            errmsg:''
        }
    },methods: {
      getData(){
        this.errmsg=""
        var obj={
          name:this.uname,
          email:this.uemail,
          pwd:this.upassword
        }
        axiosPost(this.$http,'/login',obj,res=>{
           if(res.status==200){
            this.errmsg="";
            if(res.data.type=='success'){
              alert(`${res.data.value}登陆成功`)
              this.$store.dispatch('setLoginstatus',res.data.value)
              this.$router.push({path: 'home'})
            }else{
              this.errmsg=res.data.value
            }
          }
        })
      },
      register(){
        this.errmsg=""
        var obj={
          name:this.uname,
          email:this.uemail,
          pwd:this.upassword
        }
        axiosPost(this.$http,'/register',obj,res=>{
           if(res.status==200){
            if(res.data.type=='success'){
              alert(`注册成功`)
              this.$store.dispatch('setLoginstatus',res.data.value)
              this.$router.push({path: 'home'})
            }else{
              this.errmsg=res.data.value
            }
           } 
         })
    }
}
}
</script>
<style scoped>
#login{
    position: absolute;
    top:0;
    left:15%;
    height:100%;
    width:85%;
  background-image: linear-gradient(to bottom right, #86b0ed, #1ec68d);
  color: #fff;
}
.box {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}
.row > div {
  width: 33.33333333333333%;
  display: inline-block;
  margin-right: -5px;
  position: relative;
}
.row > div:after {
  content: '';
  border-right: 1px solid rgba(255, 255, 255, 0.7);
  position: absolute;
  top: 3px;
  height: 75%;
  right: -3px;
}
.row > div:last-child:after {
  display: none;
}
h1 {
  font-weight: 300;
  font-size: 26px;
  line-height: 3;
  margin-bottom: 25px;
  text-align: center;
}
h1 .fa-camera-retro {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border: 2px solid #fff;
  cursor: pointer;
  border-radius: 50%;
}
h1 .fa-camera-retro:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
#btn1{
  margin-top:30px;
}
.btn {
  font-family: 'Lato', sans-serif;
  border: none;
  width: 105%;
  display: block;
  padding: 15px;
  margin-top:8px;
  background-color: #fff;
  font-size: 18px;
  color: #2ecc71;
  cursor: pointer;
}
.btn:hover, .btn:focus {
  color: #333;
  outline: none;
}
.float-label {
  position: relative;
  margin-bottom: 10px;
}
.float-label label{
    position: absolute;
    top:60px;
    left:4px;
    font-family: 'Lato', sans-serif;
  font-size: 16px;
  color:chocolate;
  font-weight: 600;
}
.float-label input {
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 300;
}
.float-label input {
  -webkit-appearance: none;
  outline: none;
  border: none;
  width: 100%;
  display: block;
  cursor: pointer;
  border-radius: 0;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  background: transparent;
  color: #fff;
  padding: 15px 20px 10px 10px;
}
@media (max-width: 320px) {
  .row > div {
    display: block;
    width: auto;
  }
  .row > div:after {
    display: none;
  }
}
/* loading 动画 */
.loading{
  display: none;
  position: absolute;
  top:10%;
  left:50%;
  transform: translate(-50%,50%);
  height:30%;
  width:100%;
  z-index:10;
}
</style>