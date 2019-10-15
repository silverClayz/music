<template>
  <div id="app" tabindex="1">
    <nav class="navbar">
      <div class="content">
        <div class="content-icon" @click="toggleMenu()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
            <path
              data-name="layer2"
              fill="none"
              stroke="#ffffff"
              stroke-miterlimit="10"
              stroke-width="3"
              d="M2 14h60M2 32h36"
            />
            <path
              data-name="layer1"
              fill="none"
              stroke="#ffffff"
              stroke-miterlimit="10"
              stroke-width="3"
              d="M2 50h60"
            />
          </svg>
        </div>
        <div class="content-logo">
          <img
            src="https://notre-dame-de-paris-1257401906.cos.ap-chengdu.myqcloud.com/musiclogo.png"
            alt
          />
        </div>
        <div class="content-search">
          <div class="search-icon">
            <svg
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              aria-labelledby="searchIconTitle searchIconDesc"
              stroke="#fff"
              stroke-width="2"
              stroke-linecap="square"
              stroke-linejoin="miter"
              fill="none"
              color="#fff"
            >
              <path d="M14.4121122,14.4121122 L20,20" />
              <circle cx="10" cy="10" r="6" />
            </svg>
          </div>
          <div :class="['mInputText',issearchActive ? ' active ':'unactive']">
            <input
              type="search"
              placeholder="Search"
              :class="['searchContent']"
              v-model="searchWords"
              @keyup.enter="search(searchWords)"
              @blur="toBlur()"
              @focus="toFocus()"
            />
          </div>
        </div>
        <div class="content-login">
          <button @click="loginAnimation()">{{user||"LOG IN"}}</button>
        </div>
      </div>
    </nav>
    <aside class="menu">
      <ul>
        <li class="logoShow">
          <div class="menu-icon">
            <img
              data-v-7ba5bd90
              src="https://notre-dame-de-paris-1257401906.cos.ap-chengdu.myqcloud.com/musiclogo.png"
              style="height: 24px; width:24px;"
            />
          </div>
          <div class="menu-content">
            <p>XXX音乐</p>
          </div>
        </li>
        <li @click="home()">
          <div class="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path
                data-name="layer2"
                d="M46 45h-8a8 8 0 1 0 8 8V3c6 4 16 2.3 16 14-12-2-16-2-16-2"
                fill="none"
                stroke="#ffffff"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                data-name="layer1"
                fill="none"
                stroke="#ffffff"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M2 15h32M2 25h32M2 35h32M2 45h16"
              />
            </svg>
          </div>
          <div class="menu-content">
            <p>Home</p>
          </div>
        </li>
        <li @click="userPlayList(userId)">
          <div class="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <path
                data-name="layer2"
                d="M50.9 55.3a12.2 12.2 0 0 0-4.3-1.7c-8.1-1.5-8.1-4.1-8.1-5.7v-1a14.8 14.8 0 0 0 4.2-7.1c2.5 0 3-5.1 3-5.9s.1-3.8-2.4-3.8c5.4-14.6-8.9-20.5-19.6-13-4.4 0-4.8 6.5-3.1 13-2.5 0-2.4 3.1-2.4 3.8s.6 5.9 3 5.9a14.8 14.8 0 0 0 4.3 7.2v1c0 1.6 0 4.2-8.1 5.7a11.9 11.9 0 0 0-4.3 1.6"
                fill="none"
                stroke="#ffffff"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <circle
                data-name="layer1"
                cx="32"
                cy="32"
                r="30"
                fill="none"
                stroke="#ffffff"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </svg>
          </div>
          <div class="menu-content">
            <p>Personal</p>
          </div>
        </li>
        <li>
          <div class="menu-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
              <circle
                data-name="layer2"
                cx="32"
                cy="32"
                r="30"
                transform="rotate(-45 31.977 32.055)"
                fill="none"
                stroke="#ffffff"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <circle
                data-name="layer1"
                cx="32"
                cy="32"
                r="8"
                transform="rotate(-45 31.977 32.055)"
                fill="none"
                stroke="#ffffff"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <path
                data-name="layer2"
                d="M53.4 31.1a20.3 20.3 0 0 1-22.1 22.3m15.6-22.2A15 15 0 0 1 31.1 47m1.7-36.4a20.3 20.3 0 0 0-22.2 22.1M32.8 17A15 15 0 0 0 17 32.8"
                fill="none"
                stroke="#ffffff"
                stroke-miterlimit="10"
                stroke-width="2"
              />
              <circle
                data-name="layer1"
                cx="32"
                cy="32"
                r="1"
                fill="none"
                stroke="#ffffff"
                stroke-miterlimit="10"
                stroke-width="2"
              />
            </svg>
          </div>
          <div class="menu-content">
            <p>Player List</p>
          </div>
        </li>
      </ul>
    </aside>
    <div class="lyricsPage">
      <div class="closeItem" @click="hiddenLyricPage()">
        <p>&times;</p>
      </div>
      <div class="lyricContent">
        <div class="leftContent">
          <div class="topBox">
            <div class="imgBox">
              <img :src="albumImgUrl" alt />
            </div>
            <div class="playerControl-progress">
              <div class="currentProgress"></div>
            </div>
            <div class="timeShow">
              <p class="leftTime">{{currentTime}}</p>
              <p class="rightTime">{{duration}}</p>
            </div>
            <div class="canvasDraw">
              <canvas></canvas>
            </div>
            <div class="songBox">
              <p>{{name ||""}}</p>
              <p>{{singer ||""}}</p>
              <p>{{album ||""}}</p>
            </div>
            <div class="btnBox">
              <div class="previous" @click="previous()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <title>previous</title>
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
              <div class="play">
                <div class="playing" @click="cplay()" v-show="!bool">
                  <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <title>background</title>
                      <rect
                        fill="none"
                        id="canvas_background"
                        height="402"
                        width="582"
                        y="-1"
                        x="-1"
                      />
                    </g>
                    <g>
                      <title>play</title>
                      <rect
                        id="svg_3"
                        height="23.269886"
                        width="23.529401"
                        y="12.671068"
                        x="13.662634"
                        stroke-width="1.5"
                        stroke="#000"
                        fill="#fff"
                      />
                      <path id="svg_1" fill="none" d="m0,0l48,0l0,48l-48,0l0,-48z" />
                      <path
                        fill="#e82359"
                        stroke-width="0"
                        id="svg_2"
                        d="m24,3.910474c-11.05,0 -20,8.95 -20,20s8.95,20 20,20s20,-8.95 20,-20s-8.95,-20 -20,-20zm-4,29l0,-18l12,9l-12,9z"
                      />
                    </g>
                  </svg>
                </div>
                <div class="pause" @click="cpause()" v-show="bool">
                  <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <title>background</title>
                      <rect
                        fill="none"
                        id="canvas_background"
                        height="50"
                        width="50"
                        y="-1"
                        x="-1"
                      />
                    </g>
                    <g>
                      <title>pause</title>
                      <rect
                        stroke="null"
                        id="svg_3"
                        height="19.111119"
                        width="15.83829"
                        y="14.652042"
                        x="14.584344"
                        stroke-opacity="null"
                        stroke-width="null"
                        fill="#ffffff"
                      />
                      <path id="svg_1" fill="none" d="m11.485154,12.376245l24,0l0,24l-24,0l0,-24z" />
                      <path
                        stroke="null"
                        fill="#e82359"
                        id="svg_2"
                        d="m23.685191,4.244067c-10.930696,0 -19.801985,8.915646 -19.801985,19.900995s8.871289,19.900995 19.801985,19.900995s19.801985,-8.915646 19.801985,-19.900995s-8.871289,-19.900995 -19.801985,-19.900995zm-1.980199,27.861394l-3.960397,0l0,-15.920796l3.960397,0l0,15.920796zm7.920794,0l-3.960397,0l0,-15.920796l3.960397,0l0,15.920796z"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div class="next" @click="next()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#fff"
                >
                  <title>next</title>
                  <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                  <path d="M0 0h24v24H0z" fill="none" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="rightContent">
          <div class="lyricsTitle">
            <h2></h2>
          </div>
          <div class="lyricsContent">
            <p v-for="Lyric in lyric">{{Lyric[1]}}</p>
          </div>
        </div>
      </div>
    </div>
    <diV class="playlistpage" v-show="page">
      <router-view></router-view>
    </diV>
    <div class="player-bar" v-show="show">
      <div class="player-songImg" @click="showLyricPage()">
        <img class="rotation" :src="albumImgUrl" alt />
      </div>
      <div class="player-control">
        <div class="playerControl-progress" @click.stop="updateProgress($event)">
          <div class="currentProgress"></div>
          <div class="currentProgressIcon"></div>
        </div>
        <div class="playerControl-content">
          <div class="songContent">
            <div class="songName">
              <p>{{name ||""}}</p>
            </div>
            <div class="singer">
              <p>{{singer ||""}}</p>
            </div>
            <div class="songDetalis">
              <p>{{album ||""}}</p>
            </div>
          </div>
          <div class="controlContent">
            <div class="lyric">
              <p>{{timeLyric}}</p>
            </div>
            <div class="previous" @click="previous()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <title>previous</title>
                <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
            <div class="play">
              <div class="playing" @click="cplay()" v-show="!bool">
                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <title>background</title>
                    <rect
                      fill="none"
                      id="canvas_background"
                      height="402"
                      width="582"
                      y="-1"
                      x="-1"
                    />
                  </g>
                  <g>
                    <title>play</title>
                    <rect
                      id="svg_3"
                      height="23.269886"
                      width="23.529401"
                      y="12.671068"
                      x="13.662634"
                      stroke-width="1.5"
                      stroke="#000"
                      fill="#fff"
                    />
                    <path id="svg_1" fill="none" d="m0,0l48,0l0,48l-48,0l0,-48z" />
                    <path
                      fill="#e82359"
                      stroke-width="0"
                      id="svg_2"
                      d="m24,3.910474c-11.05,0 -20,8.95 -20,20s8.95,20 20,20s20,-8.95 20,-20s-8.95,-20 -20,-20zm-4,29l0,-18l12,9l-12,9z"
                    />
                  </g>
                </svg>
              </div>
              <div class="pause" @click="cpause()" v-show="bool">
                <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <title>background</title>
                    <rect fill="none" id="canvas_background" height="50" width="50" y="-1" x="-1" />
                  </g>
                  <g>
                    <title>pause</title>
                    <rect
                      stroke="null"
                      id="svg_3"
                      height="19.111119"
                      width="15.83829"
                      y="14.652042"
                      x="14.584344"
                      stroke-opacity="null"
                      stroke-width="null"
                      fill="#ffffff"
                    />
                    <path id="svg_1" fill="none" d="m11.485154,12.376245l24,0l0,24l-24,0l0,-24z" />
                    <path
                      stroke="null"
                      fill="#e82359"
                      id="svg_2"
                      d="m23.685191,4.244067c-10.930696,0 -19.801985,8.915646 -19.801985,19.900995s8.871289,19.900995 19.801985,19.900995s19.801985,-8.915646 19.801985,-19.900995s-8.871289,-19.900995 -19.801985,-19.900995zm-1.980199,27.861394l-3.960397,0l0,-15.920796l3.960397,0l0,15.920796zm7.920794,0l-3.960397,0l0,-15.920796l3.960397,0l0,15.920796z"
                    />
                  </g>
                </svg>
              </div>
            </div>
            <div class="next" @click="next()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <title>next</title>
                <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                <path d="M0 0h24v24H0z" fill="none" />
              </svg>
            </div>
          </div>
          <div class="controlShow">
            <div class="timeShow">
              <p>{{currentTime}} / {{duration}}</p>
            </div>
            <div class="volumeControl">
              <div class="volumeIcon">
                <div class="volumeOn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#fff"
                  >
                    <path
                      d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
                    />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
                <div class="volumeOff">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#fff"
                  >
                    <path
                      d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
                    />
                    <path d="M0 0h24v24H0z" fill="none" />
                  </svg>
                </div>
              </div>
              <div class="volumeProgress" @click.stop="updateVolumeProgress($event)">
                <div class="volumeProgressNow"></div>
              </div>
            </div>
            <div class="playListIcon" @click="openPlayList()">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns:x="&ns_extend;"
                xmlns:i="&ns_ai;"
                xmlns:graph="&ns_graphs;"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                enable-background="new 0 0 24 24"
                xml:space="preserve"
                fill="#fff"
              >
                <metadata>
                  <sfw xmlns="&ns_sfw;">
                    <slices />
                    <sliceSourceBounds
                      width="505"
                      height="984"
                      bottomLeftOrigin="true"
                      x="0"
                      y="-120"
                    />
                  </sfw>
                </metadata>
                <g>
                  <g>
                    <g>
                      <path
                        d="M12,24C5.4,24,0,18.6,0,12S5.4,0,12,0s12,5.4,12,12S18.6,24,12,24z M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10
                                S17.5,2,12,2z"
                      />
                    </g>
                  </g>
                  <g>
                    <g>
                      <circle cx="7" cy="12" r="2" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <circle cx="12" cy="12" r="2" />
                    </g>
                  </g>
                  <g>
                    <g>
                      <circle cx="17" cy="12" r="2" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="playList">
      <div class="playListTitle">
        <div class="playListName">
          <h2>List</h2>
        </div>
        <div class="playListClose" @click="closePlayList()">
          <p>&times;</p>
        </div>
      </div>
      <div class="playListContent">
        <div
          class="playListName songMenu"
          v-for="playlist in playlists"
          @click="audioplay(playlist.id,playlist.name,playlist.singer,playlist.album,playlist.albumImgUrl)"
        >
          <img :src="playlist.albumImgUrl" />
          <p>{{playlist.name||"name"}}</p>
          <p>{{playlist.singer||"singer"}}</p>
        </div>
      </div>
    </div>
    <div class="login">
      <div class="loginTxt">
        <input type="text" placeholder="用户名" v-model="userName" />
        <input type="text" placeholder="网易云id" v-model="userUid" />
        <p>{{errmsg}}</p>
        <button @click="getData(userName,userUid)">Login</button>
      </div>
    </div>
    <div class="toggleBar" @click="toggleBar">
      <div class="toggleBarIcon">
        <svg data-v-62547525 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            data-v-62547525
            fill="#fff"
            d="M427 234.625H167.296l119.702-119.702L256 85 85 256l171 171 29.922-29.924-118.626-119.701H427v-42.75z"
          />
        </svg>
      </div>
    </div>
    <audio id="player" autoplay="autoplay" @canplay="getDuration" @timeupdate="updateTime"></audio>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import axiosPost from "./assets/common/aixosPost.js";
export default {
  data: function() {
    return {
      top: 0,
      duration: "00:00",
      currentTime: "00:00",
      show: false,
      name: "",
      singer: "",
      album: "",
      playlists: [],
      bool: false,
      num: "",
      loginshow: true,
      lyrics: "",
      lyric: "",
      timeLyric: "",
      searchWords: "",
      user: "",
      errmsg: "",
      uname: "",
      upassword: "",
      albumImgUrl: "",
      page: true,
      userId: "",
      issearchActive: false,
      userName: "",
      userUid: "",
      mediaElementSource:false
    };
  },
  props: {
    lyricIndex: {
      type: Number,
      default: 0
    }
  },
  methods: {
    toggleBar() {
      var playerBar = document.querySelector(".player-bar");
      playerBar.classList.toggle("togglePlayerBar");
    },
    toFocus(input) {
      this.issearchActive = true;
    },
    toBlur(input) {
      this.issearchActive = false;
    },
    getData(uname, uid) {
      this.errmsg = "";
      var obj = {
        name: uname,
        uid: uid
      };
      axiosPost(this.$http, "/login", obj, res => {
        if (res.status == 200) {
          this.errmsg = "";
          if (res.data.type == "success") {
            alert(`${res.data.value}登陆成功`);
            this.loginAnimation();
            this.userId = res.data.uid;
            this.$store.dispatch("setLoginstatus", res.data.value);
            this.$router.push({ name: "home" });
          } else if ((res.data.type = "err")) {
            this.register(uname, uid);
          } else {
            this.errmsg = res.data.value;
          }
        }
      });
    },
    register(uname, uid) {
      this.errmsg = "";
      var obj = {
        name: uname,
        uid: uid
      };
      axiosPost(this.$http, "/register", obj, res => {
        if (res.status == 200) {
          if (res.data.type == "success") {
            alert(`注册成功`);
            this.userId = res.data.uid;
            this.loginAnimation();
            this.$store.dispatch("setLoginstatus", res.data.value);
            this.$router.push({ name: "home" });
          } else {
            this.errmsg = res.data.value;
          }
        }
      });
    },
    updateVolumeProgress(e) {
      var volumeProgressNow = document.querySelector(".volumeProgressNow");
      var volumeProgress = document.querySelector(".volumeProgress");
      var percentage = e.offsetX / volumeProgress.offsetWidth;
      var audio = document.querySelector("audio");
      audio.volume = percentage;
      volumeProgressNow.style.width = e.offsetX + "px";
    },
    updateProgress(e) {
      var playerControlProgress = document.querySelectorAll(
        ".playerControl-progress"
      );
      var audio = document.querySelector("audio");
      var percentage = e.offsetX / playerControlProgress[1].offsetWidth;
      audio.currentTime = parseFloat(audio.duration * percentage);
    },
    home() {
      this.$router.push({
        name: "home"
      });
    },
    userPlayList(id) {
      var uid = id || this.$store.state.uid || localStorage.getItem("uid");
      this.$router.push({
        name: "userlist",
        params: {
          id: uid
        }
      });
      if (!uid) {
        this.loginAnimation();
        return;
      }
      localStorage.setItem("uid", uid);
    },
    hiddenLyricPage() {
      this.page = true;
      var lyricsPage = document.querySelector(".lyricsPage");
      lyricsPage.style.height = 0;
    },
    showLyricPage() {
      this.page = false;
      var lyricsPage = document.querySelector(".lyricsPage");
      lyricsPage.style.height = 100 + "%";
    },
    loginAnimation() {
      var login = document.querySelector(".login");
      login.classList.toggle("loginAnimation");
    },
    openPlayList() {
      var playList = document.querySelector(".playList");
      playList.classList.toggle("show");
    },
    closePlayList() {
      var playList = document.querySelector(".playList");
      playList.classList.toggle("show");
    },
    search(words) {
      this.$router.push({
        name: "search",
        params: {
          words: words
        }
      });
      this.$store.state.searchWords = words;
    },
    toggleMenu() {
      var menu = document.querySelector(".menu");
      var playlistpage = document.querySelector(".playlistpage");
      menu.classList.toggle("change");
      playlistpage.classList.toggle("longerplaylistpage");
      if (document.querySelectorAll(".albumImg")) {
        var albumImg = document.querySelectorAll(".albumImg");
        for (var i = 0; i < albumImg.length; i++) {
          albumImg[i].classList.toggle("longer");
        }
      }
    },
    cplay() {
      if (this.$store.getters.getSongId == "") {
        alert("还没有点击歌曲哦");
      } else {
        var audio = document.getElementById("player");
        if (this.bool == false) {
          this.bool = !this.bool;
        }
        audio.play();
      }
    },
    cpause() {
      var audio = document.getElementById("player");
      if (this.bool == true) {
        this.bool = !this.bool;
      }
      audio.pause();
      // console.log('停止播放')
    },
    audioplay(id, name, singer, album, albumImgUrl) {
      var audio = document.getElementById("player");
      var songId = id || this.$store.getters.getSongId;
      this.name = name || "";
      this.singer = singer || "";
      this.albumName = album || "";
      this.bool = true;
      this.show = true;
      if (this.$store.state.albumImgUrl.indexOf("https") == -1)
        this.$store.state.albumImgUrl = this.$store.state.albumImgUrl.replace(
          "http",
          "https"
        );
      this.albumImgUrl = albumImgUrl || this.$store.state.albumImgUrl;
      this.getLyrics(songId);
      this.$http
        .get(`https://music.api.umcoder.com/song/url?id=${songId}`)
        .then(res => {
          // if (res.data.data[0].url.indexOf("https") == -1){
          //     this.$store.state.albumImgUrl = this.$store.state.albumImgUrl.replace(
          //   "http",
          //   "https"
          // );
          // }else
          audio.src = res.data.data[0].url.replace("http", "https");
          this.AudioVisualize();
        });
      // this.cplay()
    },
    getDuration(e) {
      //  console.log(e.target.duration); //此时可以获取到duration
      this.duration = this.timeToStr(e.target.duration.toFixed(0));
    },
    updateTime(e) {
      this.currentTime = this.timeToStr(e.target.currentTime.toFixed(0)); //获取audio当前播放时间
      this.changeProgress(
        e.target.currentTime.toFixed(0),
        e.target.duration.toFixed(0)
      );
      this.audioSatus();
      for (var i = 0; i < this.lyric.length; i++) {
        var p = document.querySelectorAll(".lyricsContent p");
        if (e.target.currentTime > this.lyric[i][0]) {
          this.timeLyric = this.lyric[i][1];
          document.querySelector(".lyricsContent").style.transform =
            "translateY(-" + i * 21 + "px)";
        }
      }
    },
    changeProgress(cur, dur) {
      var cprogress = document.querySelectorAll(".currentProgress");
      cprogress[0].style.width = (cur / dur) * 100 + "%";
      cprogress[1].style.width = (cur / dur) * 100 + "%";
      // console.log(cur,dur)
    },
    timeToStr(time) {
      var m = 0,
        s = 0,
        _h = "00",
        _m = "00",
        _s = "00";
      time = Math.floor(time % 3600);
      m = Math.floor(time / 60);
      s = Math.floor(time % 60);
      _s = s < 10 ? "0" + s : s + "";
      _m = m < 10 ? "0" + m : m + "";
      return _m + ":" + _s;
    },
    audioSatus() {
      var audio = document.getElementById("player");
      if (audio.ended) {
        this.currentTime = "00:00";
        var cprogress = document.querySelectorAll(".currentProgress");
        cprogress[0].style.width = 0;
        cprogress[1].style.width = 0;
        this.next();
      }
    },
    previous() {
      if (this.num === "") {
        this.num = this.playlists.length - 1;
      }
      if (this.$store.state.albumImgUrl.indexOf("https") == -1) {
        this.$store.state.albumImgUrl = this.$store.state.albumImgUrl.replace(
          "http",
          "https"
        );
      }
      if (this.num == 0) {
        this.num = this.playlists.length - 1;
        // console.log('this.num置为最大');
      } else {
        --this.num;
        // console.log('--this.num')
      }
      this.name = this.playlists[this.num].name;
      this.singer = this.playlists[this.num].singer;
      this.album = this.playlists[this.num].album;
      this.albumImgUrl = this.playlists[this.num].albumImgUrl;
      this.audioplay(
        this.playlists[this.num].id,
        this.name,
        this.singer,
        "",
        this.albumImgUrl
      );
    },
    next() {
      if (this.num === "") {
        this.num = this.playlists.length - 1;
      }
      if (this.$store.state.albumImgUrl.indexOf("https") == -1) {
        this.$store.state.albumImgUrl = this.$store.state.albumImgUrl.replace(
          "http",
          "https"
        );
      }
      // console.log(this.num);
      if (this.num == this.playlists.length - 1) {
        this.num = 0;
        // console.log('this.num置为0');
      } else {
        ++this.num;
        // console.log('this.num++');
      }
      this.name = this.playlists[this.num].name;
      this.singer = this.playlists[this.num].singer;
      this.album = this.playlists[this.num].album;
      this.albumImgUrl = this.playlists[this.num].albumImgUrl;
      // console.log(this.playlists[this.num].name,this.playlists);
      this.audioplay(
        this.playlists[this.num].id,
        this.name,
        this.singer,
        "",
        this.albumImgUrl
      );
    },
    getLyrics(id) {
      var Lid = id || this.$store.state.id;
      this.$http
        .get(`https://music.api.umcoder.com/lyric?id=${id}`)
        .then(res => {
          // console.log(res);
          // console.log(res.data)
          if (res.data.lrc != null) {
            this.lyrics = res.data.lrc.lyric;
            this.parseLyric(this.lyrics);
          } else {
            this.timeLyric = "sorry,the lyrics is null";
            return;
          }
        })
        .catch(err => {
          return err;
        });
    },
    parseLyric(text) {
      //将文本分隔成一行一行，存入数组
      var lines = text.split("\n"),
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
      lines.forEach(function(v /*数组元素值*/, i /*元素索引*/, a /*数组本身*/) {
        //提取出时间[xx:xx.xx]
        var time = v.match(pattern),
          //提取歌词
          value = v.replace(pattern, "");
        // 因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
        if (time !== null) {
          time.forEach(function(v1, i1, a1) {
            //去掉时间里的中括号得到xx:xx.xx
            var t = v1.slice(1, -1).split(":");
            //将结果压入最终数组
            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
          });
        }
      });
      //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
      result.sort(function(a, b) {
        return a[0] - b[0];
      });
      this.lyric = result;
    },
    AudioVisualize() {
            const myAudio = document.querySelector('audio');
                  myAudio.crossOrigin='anonymous'
            const canvas = document.querySelector('canvas');
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)()
            const analyser = audioCtx.createAnalyser()
            analyser.fftSize = 1024;
            var ctx = canvas.getContext('2d')
            // 获取声音源
            if(!this.mediaElementSource){
                this.mediaElementSource =!this.mediaElementSource;
                var W = canvas.width = 400;
                var H = canvas.height = 100;
                var ctx = canvas.getContext('2d')
                const source = audioCtx.createMediaElementSource(myAudio)
                source.connect(analyser)
                source.connect(audioCtx.destination)
            }
            const bufferLength = analyser.fftSize
            const dataArray = new Uint8Array(bufferLength)
            const draw2 = () => {
              analyser.getByteFrequencyData(dataArray)
              ctx.clearRect(0, 0, W, H)
              ctx.fillStyle = 'rgb(15,58,93)'
              ctx.fillRect(0, 0, W, H)
              const barWidth = (W / bufferLength) * 30
              let barHeight
              let x = 0

              for (let i = 0; i < bufferLength; i++) {
                  barHeight = dataArray[i] / 2
                  ctx.fillStyle = `rgb(${barHeight + 121},199,149)`
                  ctx.fillRect(x, H - barHeight, barWidth, barHeight)
                  x += barWidth + 1
              }
                  requestAnimationFrame(draw2)
            }
            draw2()

    }
  },
  beforeMount() {
    console.info("Welcome soulMusic,hava a good time");
  },
  mounted() {},
  watch: {
    getSongId(curval, oldval) {
      // console.log(curval,oldval);
      if (this.$store.state.albumImgUrl.indexOf("https") == -1) {
        this.$store.state.albumImgUrl = this.$store.state.albumImgUrl.replace(
          "http",
          "https"
        );
      }
      this.$store.state.historylists.push({
        id: `${this.$store.state.id}`,
        name: `${this.$store.state.songName}`,
        singer: `${this.$store.state.singer}`,
        album: `${this.$store.state.albumName}`,
        albumImgUrl: `${this.$store.state.albumImgUrl}`
      });
      // this.num++;
      this.changeProgress();
      this.audioplay();
      this.name = this.$store.state.songName;
      this.singer = this.$store.state.singer;
      this.album = this.$store.state.albumName;
      this.albumImgUrl = this.$store.state.albumImgUrl;
      this.playlists = this.$store.state.historylists;
    },
    getPlaylistTitle(curval, oldval) {
      this.name = curval;
      // this.historylists[this.count].push([{name:oldval}])
      // console.log(`新歌名${curval}--旧歌名${oldval}`);
    },
    getLoginstatus(curval, oldval) {
      this.user = this.$store.state.loginstatus;
      // localStorage.setItem(this.user,this.playlists);
      // console.log(localStorage.getItem(this.user));
    }
  },
  computed: {
    // lyricTop() {
    //   return `transform :translate3d(0, ${-34 *(this.lyricIndex - this.top)}px, 0)`;
    // },
    ...mapGetters(["getSongId", "getPlaylistTitle", "getLoginstatus"])
  }
};
</script>
<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  /* overflow-y: auto; */
}
a {
  color: #fff;
}
img {
  height: 100%;
  width: 100%;
}
nav {
  position: fixed;
  height: 80px;
  width: 100%;
  background: rgb(30, 52, 76);
  box-shadow: 0px 2px 3px #000;
  z-index: 10;
}
nav .content {
  margin: 0 10px;
  display: flex;
  flex-direction: row;
  vertical-align: center;
  align-items: center;
  padding: 5px 15px;
}
nav .content .content-icon {
  height: 25px;
  width: 25px;
  cursor: pointer;
}
nav .content .content-logo {
  margin: 10px 0 0 45px;
  width: 50px;
}
.menu {
  position: fixed;
  height: 1000vh;
  width: 14%;
  z-index: 9;
  left: 0;
  transition: 0.4s;
  background: rgb(30, 52, 76);
}
.playlistpage {
  position: absolute;
  height: 100%;
  width: 79%;
  top: 108px;
  /* z-index: 6; */
  left: 18%;
  transition: 0.4s;
}
.menu.change {
  left: -14%;
}
.content .content-search {
  display: flex;
  position: absolute;
  right: 12%;
  flex-direction: row;
  vertical-align: center;
  align-items: center;
  height: 48px;
  border-radius: 50px;
  width: 320px;
  margin: 5px 170px;
  background: rgb(66, 85, 105);
}
.content .content-search .search-icon {
  position: absolute;
  left: 10px;
  height: 24px;
  width: 24px;
}
.content .content-search .mInputText {
  height: 100%;
  width: 100%;
}
.content .content-search .mInputText input {
  height: 100%;
  width: 75%;
  margin: auto;
  background: rgb(66, 85, 105);
  border: none;
  outline: none;
  font-size: 18px;
  text-indent: 10px;
  color: #fff;
}
.content .content-search .mInputText input::placeholder {
  color: rgb(173, 162, 162);
}
.content .content-login {
  position: absolute;
  right: 12%;
  top: calc((100% - 32px) / 2);
  height: 36px;
  width: 88px;
}
.content .content-login button {
  height: 100%;
  width: 100%;
  color: #fff;
  background: rgb(218, 15, 71);
  border: none;
  outline: none;
  cursor: pointer;
}
.content .content-login button:hover {
  background: rgb(223, 39, 91);
}
.menu ul {
  position: absolute;
  top: 98px;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
.menu ul li {
  transition: 0.2s;
  display: flex;
  flex-direction: row;
  vertical-align: center;
  align-items: center;
  padding: 12px 20px;
  cursor: pointer;
}
.menu .menu-icon svg {
  height: 24px;
  width: 24px;
}
.menu ul li .menu-content {
  padding-left: 30px;
  color: #fff;
}
.menu ul li:hover {
  background: rgb(48, 68, 90);
}
.menu .menu-icon {
  height: 24px;
  width: 24px;
}
.player-bar {
  position: fixed;
  bottom: 0;
  height: 96px;
  width: 100%;
  display: flex;
  flex-direction: row;
  vertical-align: center;
  align-items: center;
  transition: 0.4s;
  z-index: 10;
}
.player-bar .player-songImg {
  height: 96px;
  width: 96px;
  cursor: pointer;
}
.player-bar .player-control {
  height: 96px;
  width: 100%;
  background: rgb(17, 58, 93);
}
.player-bar .player-control .playerControl-progress {
  display: flex;
  flex-direction: row;
  align-items: right;
  vertical-align: center;
  height: 3px;
  width: 100%;
  cursor: pointer;
  background: rgb(54, 75, 100);
}
.player-bar .player-control .playerControl-progress:hover .currentProgressIcon {
  display: block;
}
.player-bar .player-control .playerControl-progress .currentProgress {
  height: 100%;
  width: 0;
  background: rgb(218, 15, 71);
}
.player-bar .player-control .playerControl-progress .currentProgressIcon {
  display: none;
  margin-top: -4px;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background: rgb(218, 15, 71);
}
.player-bar .player-control .playerControl-content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  vertical-align: center;
  align-items: center;
  overflow: hidden;
}
.player-bar .player-control .playerControl-content .songContent {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  vertical-align: center;
  align-items: left;
  text-align: left;
  overflow: hidden;
  margin: 0 20px;
  height: 100%;
  width: auto;
}
.player-bar .player-control .playerControl-content .controlContent,
.player-bar .player-control .playerControl-content .controlShow,
.player-bar .player-control .playerControl-content .volumeControl {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  vertical-align: middle;
  align-items: center;
  overflow: hidden;
  /* padding-left:200px; */
  height: 100%;
  width: auto;
}
.player-bar .player-control .playerControl-content .songContent .songName {
  margin-top: 10px;
}
.player-bar .player-control .playerControl-content .songContent .singer,
.player-bar .player-control .playerControl-content .songContent .songDetalis {
  margin-top: 10px;
}
.player-bar .player-control .playerControl-content .controlContent .previous,
.player-bar .player-control .playerControl-content .controlContent .play,
.player-bar .player-control .playerControl-content .controlContent .next {
  display: flex;
  flex-wrap: nowrap;
  vertical-align: middle;
  align-items: center;
  /* overflow: hidden; */
  height: 48px;
  width: 48px;
  cursor: pointer;
}
.player-bar .player-control .playerControl-content .controlContent .play svg {
  background: #e82359;
  border-radius: 100%;
  box-shadow: rgb(244, 91, 133) 0px 0px 15px;
}
.player-bar .player-control .playerControl-content .controlShow .timeShow,
.player-bar .player-control .playerControl-content .controlShow .volumeControl {
  width: 40%;
}
/* .player-bar .player-control .playerControl-content .controlContent .play .pause, */
.player-bar .player-control .playerControl-content .controlShow .volumeOff {
  /* position: absolute; */
  display: none;
}
.player-bar .player-control .playerControl-content .controlContent .next {
  flex-direction: row-reverse;
}
.player-bar
  .player-control
  .playerControl-content
  .controlContent
  .controlShow
  .volumeControl {
  height: 100%;
  width: 100%;
  flex-direction: column;
}
.player-bar .player-control .volumeProgress {
  height: 3px;
  width: 110px;
  background: rgb(4, 31, 53);
}
.player-bar .player-control .volumeProgress .volumeProgressNow {
  height: 100%;
  width: 10%;
  background: #fff;
}
.player-bar .player-control .playerControl-content .songContent {
  width: 15%;
  flex-shrink: 1;
}
.player-bar .player-control .playerControl-content .controlContent {
  width: 50%;
  flex-shrink: 2;
}
.player-bar .player-control .playerControl-content .controlShow {
  width: 30%;
  flex-shrink: 1;
}
.player-bar .player-control .playerControl-content .controlShow .timeShow {
  padding-right: 15px;
}
.player-bar
  .player-control
  .playerControl-content
  .controlShow
  .volumeControl
  .volumeIcon {
  margin-right: 10px;
}
.player-bar
  .player-control
  .playerControl-content
  .controlShow
  .volumeControl
  .volumeProgress {
  height: 4px;
  margin-right: 8px;
}
.player-bar .player-control .playerControl-content .controlShow .volumeIcon,
.player-bar .player-control .playerControl-content .controlShow .volumeProgress,
.player-bar .player-control .playerControl-content .controlShow .playListIcon {
  cursor: pointer;
}
.playList {
  position: fixed;
  height: 70%;
  top: 15%;
  right: -22%;
  width: 20%;
  background: rgb(30, 52, 76);
  overflow-x: auto;
  transition: 0.4s;
}
.show {
  right: 10px;
  z-index: 17;
  box-shadow: 1px 1px 10px #b3d4fc54;
}
.playList .playListTitle h2 {
  /* position: absolute; */
  text-align: left;
  margin: 10px;
}
.playList .playListTitle .playListClose {
  position: absolute;
  top: 0;
  right: 6px;
  font-size: 50px;
  cursor: pointer;
}
.lyric {
  width: 40%;
  text-align: left;
  margin-right: 20px;
}
.playList .playListName {
  position: relative;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-direction: row;
  transition: 0.4s;
}
.playList .songMenu:hover {
  background: rgb(4, 31, 53);
  cursor: pointer;
}
.playList .songMenu img {
  width: 40px;
}
.playList .songMenu p {
  text-align: left;
  width: 50%;
  margin: 5px;
}
.login {
  display: none;
}
.login input {
  text-indent: 8px;
}
.loginAnimation {
  position: fixed;
  display: block;
  height: 100%;
  width: 100%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.7);
}
.loginAnimation .loginTxt {
  display: flex;
  flex-direction: column;
  vertical-align: center;
  align-items: center;
  padding: 100px;
}
.loginAnimation .loginTxt input {
  margin: 5px 0;
  height: 30px;
  width: 160px;
  outline: none;
  list-style: none;
  border: none;
  text-indent: 16px;
}
.loginAnimation .loginTxt button {
  /* background:#b4c7e2; */
  border: 1px solid #adafb2;
  margin-top: 15px;
  height: 30px;
  width: 160px;
  transition: 0.4s;
}
.loginAnimation .loginTxt button:hover {
  background: rgba(201, 206, 213, 0.2);
}
.closeItem {
  position: absolute;
  height: 40px;
  width: 40px;
  top: 10px;
  left: 10px;
  font-size: 40px;
  transition: 0.3s;
  cursor: pointer;
  border-radius: 50%;
}
.closeItem p {
  line-height: 40px;
  margin: auto;
}
.closeItem:hover {
  background: #b6c5d9;
}
.longerplaylistpage {
  left: 8%;
}
.lyricsPage {
  position: absolute;
  height: 0;
  width: 100%;
  background: rgb(15, 58, 93);
  z-index: 11;
  bottom: 0;
  overflow-y: auto;
  transition: 0.6s;
}
.lyricsPage .lyricContent {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.lyricsPage .leftContent,
.lyricsPage .rightContent {
  height: 100%;
  width: 50%;
  overflow: hidden;
}
.lyricsPage .leftContent {
  display: flex;
  flex-direction: column;
  vertical-align: center;
  padding: 100px 0 0 0;
}
.lyricsPage .rightContent {
  padding: 60px 0 0 0;
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.6) 15%,
    rgba(255, 255, 255, 1) 25%,
    rgba(255, 255, 255, 1) 75%,
    rgba(255, 255, 255, 0.6) 85%,
    rgba(255, 255, 255, 0) 100%
  );
}
.lyricsPage .leftContent .topBox {
  width: 100%;
  display: flex;
  flex-direction: column;
  vertical-align: center;
  align-items: center;
  padding: 10px;
}
.lyricsPage .leftContent .btnBox {
  display: flex;
  flex-direction: column;
  vertical-align: center;
  align-items: center;
}
.lyricsPage .leftContent .btnBox svg {
  margin: 5px;
  cursor: pointer;
}
.lyricsPage .leftContent .topBox p {
  margin-top: 10px;
  font-size: 20px;
}
.lyricsPage .leftContent .topBox .imgBox {
  height: 350px;
  width: 350px;
  margin: auto;
}
.lyricsPage .leftContent .topBox .imgBox img {
  box-shadow: 0.2rem 0.2rem 1rem #fff;
}
.lyricsPage .playerControl-progress {
  height: 3px;
  width: 60%;
  margin: 40px 0 0 0;
  background: rgb(54, 75, 100);
}
.lyricsPage .playerControl-progress .currentProgress {
  height: 100%;
  width: 0;
  background: rgb(218, 15, 71);
}
.lyricsPage .timeShow {
  display: flex;
  width: 60%;
  flex-direction: row;
  vertical-align: center;
}
.lyricsPage .timeShow .leftTime {
  width: 50%;
  text-align: left;
}
.lyricsPage .timeShow .rightTime {
  width: 50%;
  text-align: right;
}
.lyricsPage .lyricsContent {
  transition: 0.4s;
}
.lyricsPage .lyricsContent p {
  margin: 6px;
}
.lyricsPage .leftContent .btnBox {
  flex-direction: row;
}
.menu .logoShow {
  display: none;
}
.lyricsPage .music-lyric p {
  margin: 6px;
}
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}
.theme--dark.v-btn {
  color: #fff;
}
.v-btn {
  align-items: center;
  border-radius: 2px;
  display: inline-flex;
  height: 36px;
  flex: 0 0 auto;
  font-size: 14px;
  font-weight: 500;
  justify-content: center;
  margin: 6px 19px;
  min-width: 88px;
  outline: 0;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;
  position: relative;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.v-btn:before {
  border-radius: inherit;
  color: inherit;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  opacity: 0.12;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  width: 100%;
}
.v-btn {
  padding: 0 16px;
}
.v-btn:focus,
.v-btn:hover {
  position: relative;
}
.v-btn:focus:before,
.v-btn:hover:before {
  background-color: currentColor;
}
@media (hover: none) {
  .v-btn:hover:before {
    background-color: transparent;
  }
}
.v-btn__content {
  align-items: center;
  border-radius: inherit;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  margin: 0 auto;
  position: relative;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  white-space: nowrap;
  width: inherit;
}
.v-btn .v-btn__content .v-icon {
  color: inherit;
}
.v-btn:not(.v-btn--depressed):not(.v-btn--flat) {
  will-change: box-shadow;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
}
.v-btn:not(.v-btn--depressed):not(.v-btn--flat):active {
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);
}
.v-btn--icon {
  background: transparent;
  box-shadow: none !important;
  border-radius: 50%;
  justify-content: center;
  min-width: 0;
  width: 36px;
}
.v-btn--icon:before {
  border-radius: 50%;
}
.v-btn--icon {
  padding: 0;
}
*,
:after,
:before {
  box-sizing: inherit;
}
:after,
:before {
  text-decoration: inherit;
  vertical-align: inherit;
}
* {
  background-repeat: no-repeat;
  padding: 0;
  margin: 0;
}
[type="button"],
button {
  cursor: pointer;
}
button {
  font: inherit;
}
button {
  overflow: visible;
}
[type="button"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: 0;
  padding: 0;
}
[type="button"]::-moz-focus-inner,
button:-moz-focusring {
  outline: 0;
  border: 0;
}
button,
html [type="button"] {
  -webkit-appearance: button;
}
button {
  text-transform: none;
}
button {
  background-color: transparent;
  border-style: none;
  color: inherit;
}
::-moz-selection {
  background-color: #b3d4fc;
  color: #000;
  text-shadow: none;
}
::selection {
  background-color: #b3d4fc;
  color: #000;
  text-shadow: none;
}
::-ms-clear,
::-ms-reveal {
  display: none;
}
.mt-3 {
  margin-top: 16px !important;
}
.theme--dark.v-icon {
  color: #fff;
}
.v-icon {
  align-items: center;
  display: inline-flex;
  -webkit-font-feature-settings: "liga";
  font-feature-settings: "liga";
  font-size: 24px;
  justify-content: center;
  line-height: 1;
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  vertical-align: text-bottom;
}
.layout {
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
}
.layout.row {
  flex-direction: row;
}
.align-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
button {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
button {
  overflow: visible;
}
button {
  text-transform: none;
}
[type="button"],
button {
  -webkit-appearance: button;
}
[type="button"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
[type="button"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}
* {
  box-sizing: border-box;
  min-width: 0;
}
.primaryText--text {
  color: var(--v-primaryText-base) !important;
  caret-color: var(--v-primaryText-base) !important;
}
.play-button:hover {
  cursor: pointer;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.play-button {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: -webkit-transform 0.2s ease;
  transition: transform 0.2s ease;
  transition: transform 0.2s ease, -webkit-transform 0.2s ease;
}
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2)
    format("woff2");
}
.song-name {
  font-size: 1.4rem;
  letter-spacing: 1px;
  font-weight: 500;
}
.singer p {
  color: #b9b0b0;
}
.singer-name {
  color: rgb(189, 189, 189);
  font-size: 1rem;
  letter-spacing: 3px;
  margin: 3px 0 0 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1 1 auto;
}
.dia-playerControl-width,
.dia-timeShow-width {
  width: 100%;
}
.active {
  border: 1px solid rgba(255, 255, 255, 0.199);
  border-radius: 50px;
}
.unactive {
  border: none;
}
.logoShow {
  display: none;
}
.toggleBar {
  position: fixed;
  bottom: 30px;
  right: 2%;
  height: 36px;
  width: 36px;
  cursor: pointer;
  z-index: 10;
}
.togglePlayerBar {
  width: 0%;
}
@media only screen and (max-width: 767px) {
  .player-bar .player-songImg {
    height: 80px;
    width: 96px;
    cursor: pointer;
  }
  .toggleBar {
    display: none;
  }
  .menu .logoShow {
    display: block;
  }
  .lyricsPage .rightContent {
    right: 0;
    margin: 0 auto;
    position: absolute;
    top: 500px;
    left: 0;
    width: 300px;
    height: 1050px;
    overflow: over;
    text-align: center;
    padding: 50px 0 0 0;
  }
  .lyricsPage .leftContent .topBox {
    top: 0;
  }
  .player-bar .player-control .playerControl-content .controlContent .lyric,
  .player-bar .player-control .playerControl-content .controlShow,
  .player-bar .player-control .playerControl-content .songContent .songDetalis {
    display: none;
  }
  .player-bar .player-control .playerControl-content .songContent,
  .player-bar .player-control .playerControl-content .controlContent {
    height: 100%;
    width: 50%;
  }
  .longerplaylistpage {
    width: 95%;
    left: 2%;
  }
  .lyricsPage .playerControl-progress,
  .lyricsPage .timeShow {
    width: 100%;
  }
  .content-login {
    display: none;
  }
  .menu ul {
    top: 78px;
  }
  .menu ul li a {
    display: none;
  }
  .menu ul li {
    padding: 12px 16px;
  }
  .menu-content p {
    display: none;
  }
  .submitbtn {
    width: 105px;
    margin: 0 auto;
    cursor: pointer;
  }
  .loginAnimation {
    height: 100%;
    width: 100%;
    background: rgba(30, 52, 76, 0.67);
    /* z-index: 89999999999999999; */
    right: 0;
  }
  .content .content-search .mInputText {
    height: 100%;
    width: 100%;
    text-indent: 8px;
  }
  .content .content-search {
    display: -webkit-box;
    display: -ms-flexbox;
    right: 0;
    left: 0;
    margin: 0 auto;
    display: flex;
    position: absolute;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    vertical-align: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 36px;
    border-radius: 50px;
    width: 200px;
    background: rgb(66, 85, 105);
  }
  /* .lyricsPage .music-lyric {
    right: 0;
    left: 0;
    width: 100%;
    position: absolute;
    top: 0px;
    margin: 0 auto;
    bottom: 0;
    overflow: hidden;
    text-align: center;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.6) 15%,
      rgba(255, 255, 255, 1) 25%,
      rgba(255, 255, 255, 1) 75%,
      rgba(255, 255, 255, 0.6) 85%,
      rgba(255, 255, 255, 0) 100%
    );
  } */
  .lyricsPage .leftContent {
    position: absolute;
    top: 60px;
    margin: 0 auto;
    right: 0;
    left: 0;
    overflow: hidden;
    text-align: center;
    padding: 50px 0 0 0;
  }
  .lyricsPage .leftContent .topBox .imgBox {
    height: 50%;
    width: 80%;
    margin: auto;
  }
  .dia-timeShow-width {
    width: 60% !important;
  }
  .playlistpage {
    width: 79%;
    top: 78px;
  }
  nav {
    height: 58px;
  }
  nav .content {
    padding: 0px;
    margin: 16px 10px 10px 16px;
  }
  nav .content .content-logo {
    margin: 0px;
    right: 50px;
    margin-left: 270px;
    width: 40px;
    display: none;
  }
  .recommandAlbum {
    margin: 30px 0 10px 0;
  }
  .homeContentHotAlbum {
    margin: 30px 0 10px 0;
  }
  .logoShow {
    display: block;
  }
  .content-logo {
    display: none;
  }
  .lyricsPage .leftContent .topBox p:nth-child(3) {
    display: none;
  }
  .player-bar {
    background: #113a5d;
  }
  .player-bar .player-control .playerControl-content .songContent {
    width: 30%;
    margin: 0 10px;
  }
  .player-bar .player-control .playerControl-content .controlContent {
    width: 50%;
    margin: 0 10px;
  }
  .player-bar .player-songImg {
    width: 120px;
  }
  .player-songImg img {
    height: 70px;
    width: 70px;
    border-radius: 50%;
  }
  @-webkit-keyframes rotation {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  .rotation {
    -webkit-transform: rotate(360deg);
    animation: rotation 3s linear infinite;
    -moz-animation: rotation 3s linear infinite;
    -webkit-animation: rotation 3s linear infinite;
    -o-animation: rotation 3s linear infinite;
  }
}
</style>
