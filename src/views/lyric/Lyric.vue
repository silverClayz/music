<template>
<div>
    <div class="lyrics">
            <p v-for="lyric in lyrics">{{lyric[1]}}</p>
    </div>
</div>
</template>
<script>
export default{
data(){
        return {
          lyrics:""
        }
    },
methods:{
        getLyrics(){
            this.$http.get(`http://music.api.umcoder.com/lyric?id=${this.$store.state.id}`)
            .then(res=>{
                // console.log(res);
                // console.log(res.data)
                this.parseLyric(res.data.lrc.lyric)
            })
            .catch(err=>{
                console.log(err)
            })
      },
      parseLyric(text) {
        // console.log(text)
    //将文本分隔成一行一行，存入数组
    var lines = text.split('\n'),
        //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
        pattern = /\[\d{2}:\d{2}.\d{2}\d{0}]|\[\d{2}:\d{2}.\d{2}\d{1}]/g,
        //保存最终结果的数组
        result = [];
    //去掉不含时间的行
    // while (!pattern.test(lines[0])) {
    //     lines = lines.slice(1);
    // };
    //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
    lines[lines.length - 1].length === 0 && lines.pop();
    lines.forEach(function(v /*数组元素值*/ , i /*元素索引*/ , a /*数组本身*/ ) {
        //提取出时间[xx:xx.xx]
        var time = v.match(pattern),
            //提取歌词
            value = v.replace(pattern, '');
        // 因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
        if(time!==null){
                  time.forEach(function(v1, i1, a1) {
            //去掉时间里的中括号得到xx:xx.xx
            var t = v1.slice(1, -1).split(':');
            //将结果压入最终数组
            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
        });
        }
    });
    //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
    result.sort(function(a, b) {
        return a[0] - b[0];
    });
    this.lyrics=result;
  }
},
mounted () {
    this.getLyrics()
}
}
</script>
<style scoped>
.searchBox{
    position: absolute;
    left:15%;
    height:100%;
    width:85%;
}
.searchBar{
    position: fixed;
    height:10%;
    width:85%;
    box-sizing: border-box;
    border-radius: 5px;
    background-color:rgb(232,240, 254);
    z-index:1;
}
.searchBar .search{
    height:90%;
    width:96%;
    margin:auto;
    padding:8px;
}
#search{
    height:80%;
    width:100%;
    font-size: 30px;
    line-height: 60px;
    border:none;
    outline:none;
    background-color:rgb(232, 240, 254)
}
.searchResult{
    position: absolute;
    top:10%;
    width:100%;
    height:90%;
}
table tbody tr td{
    cursor: pointer;
}
h1{
  font-size: 30px;
  color: #000;
  text-transform: uppercase;
  font-weight: 300;
  text-align: left;
  margin-bottom: 15px;
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
  padding: 20px 15px;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  color: #000;
  text-transform: uppercase;
}
td{
  padding: 15px;
  text-align: left;
  vertical-align:middle;
  font-weight: 300;
  font-size: 12px;
  color: #000;
  border-bottom: solid 1px rgba(255,255,255,0.1);
}
/* demo styles */
body{
  font-family: 'Roboto', sans-serif;
}
section{
  /* background: linear-gradient(to right, #bdccc6, #bdd2d4); */
  margin: 50px;
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
.lyrics p{
  margin:5px;
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