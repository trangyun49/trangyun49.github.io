var playList = document.querySelector(".playlist");
const playBtn = document.querySelector(".play--ui");
const playIco = document.querySelector(".play--ico")
const cd = document.querySelector(".cd--thumb");
const heading = document.querySelector(".header h2");
const audio = document.querySelector("#audio");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const processBar = document.querySelector(".process")
const musicApp = document.querySelector(".music--app")
const returnBtn = document.querySelector(".return")
const randomBtn = document.querySelector(".random")
const stockMusic= document.querySelector(".stock-music")
const inputSearch = document.querySelector(".search-input")
const volume=document.querySelector(".process-volume")
var app = {
    currentIndex: 0,
    isReturn: false,
    isRandom: false,
    isPlaying: false,
    isDOM: false,// xem true thì lấy DOM false thì không
    songs: [{
            id: 100,
            author: "Kenshi Yonezu, Hikaru Utada",
            name: "Jane Doe",
            path: "./assets/music/Jane Doe.mp3",
            image: "./assets/img/janedoe.jpg"
        },
        {
            id: 101,
            name: "Iris Out",
            author: "Kenshi Yonezu",
            path: "./assets/music/Iris Out.mp3",
            image: "./assets/img/irisout.jpg"
  },
        {
            id: 102,
            name: "Matsuri",
            author: "Fujii Kaze",
            path: "./assets/music/Matsuri.mp3",
            image: "./assets/img/matsuri.jpg"
        },
        {
            id: 103,
            name: "Love Like This",
            author: "Fujii Kaze",
            path: "./assets/music/Love Like This.mp3",
            image: "./assets/img/lovelikethis.jpg"
        },
        {
            id: 104,
            name: "Prema",
            author: "Fujii Kaze",
            path: "./assets/music/Prema.mp3",
            image: "./assets/img/prema.jpg"
        },
        {
            id: 105,
            name: "ココ",
            author: "Công, inari",
            path: "./assets/music/ココ.mp3",
            image: "./assets/img/koko.jpg"
        },
        {
            id: 106,
            name: "運命",
            author: "Tani Yuuki",
            path: "./assets/music/unmei.mp3",
            image: "./assets/img/unmei.jpg"
        },
        {
            id: 107,
            name: "点描の歌",
            author: "Mrs.GREEN APPLE, Inoue Sonoko",
            path: "./assets/music/Tenbyou No Uta.mp3",
            image: "./assets/img/Tenbyou No Uta.jpg"
        },
        {
            id: 108,
            name: "Anh Đánh Rơi Người Yêu Này",
            author: "Amee",
            path: "./assets/music/Anh Đánh Rơi Người Yêu Này.mp3",
            image: "https://i.ytimg.com/vi/RPKVerRT_aM/hqdefault.jpg"
        },
        {
            id: 109,
            name: "Đúng Người Đúng Thời Điểm",
            author: "Thanh Hưng",
            path: "./assets/music/Đúng Người Đúng Thời Điểm.mp3",
            image: "https://tse2.mm.bing.net/th/id/OIP._a8lB5s66ZyeQO4xk8aEEwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"
          },
       
    ],
    songsStock:[
        {
            id: 110,
            name: "Tình Đầu",
            author: "Tăng Duy Tân",
            path: "./assets/music/Tinh Dau.mp3",
            image: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/0/a/d/1/0ad18644161b1bbe41bc1ca0471600ba.jpg"
          },
          {
            id: 111,
            name: "Tháng Tư Là Lời Nói Dối Của Em",
            author: "Hà Anh Tuấn",
            path: "./assets/music/Tháng Tư Là Lời Nói Dối Của Em.mp3",
            image: "https://thoidai.com.vn/stores/news_dataimages/anh.khuong/032019/31/11/2902_1476093493424_500.jpg"
          },
          {
            id: 112,
            name: "I Do",
            author: "911",
            path: "./assets/music/I Do.mp3",
            image: "https://i.ytimg.com/vi/sFNArd-P2Qw/maxresdefault.jpg"
          },
          {
            id: 113,
            name: "Nơi Này Có Anh",
            author: "Sơn Tùng MTP",
            path: "./assets/music/Nơi Này Có Anh.mp3",
            image: "https://i.ytimg.com/vi/FN7ALfpGxiI/maxresdefault.jpg"
          },
          {
            id: 114,
            name: "Dancing In The Dark",
            author: "Soobin Hoàng Sơn",
            path: "./assets/music/DANCING IN THE DARK.mp3",
            image: "https://i.ytimg.com/vi/OZmK0YuSmXU/maxresdefault.jpg"
          },
          {
            id: 115,
            name: "Từ Ngày Em Đến",
            author: "Da LAB",
            path: "./assets/music/Từ Ngày Em Đến.mp3",
            image: "https://i.ytimg.com/vi/AmvA-XJF0j8/maxresdefault.jpg"
          },
          {
            id: 116,
            name: "Sài Gòn Hôm Nay Mưa",
            author: "JSOL, Hoàng Duyên",
            path: "./assets/music/Sài Gòn Hôm Nay Mưa.mp3",
            image: "https://cf.mora.jp/contents/package/0000/00000083/0018/878/317/0018878317.200.jpg"
          },
          {
            id: 117,
            name: "Tình Đắng Như Ly Cà Phê",
            author: "Nger x NÂN",
            path: "./assets/music/Tình Đắng Như Ly Cà Phê.mp3",
            image: "https://i.ytimg.com/vi/ae2rt9DnnqI/maxresdefault.jpg"
          },
          {
            id: 118,
            author: "Bùi Trường Linh",
            name: "Từng Ngày Yêu Em",
            path: "./assets/music/Từng Ngày Yêu Em.mp3",
            image: "https://tse4.mm.bing.net/th/id/OIP.0vbPdEHlXupdBKcClqf7GAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          },
          {
            id: 119,
            author: "Bùi Trường Linh",
            name: "Đường Tôi Chở Em Về",
            path: "./assets/music/Đường Tôi Chở Em Về.mp3",
            image: "https://i.ytimg.com/vi/GhrpnMdSG6s/maxresdefault.jpg"
          },
          {
            id: 120,
            author: "W/n",
            name: "id 072019",
            path: "./assets/music/id 072019.mp3",
            image: "https://i.ytimg.com/vi/leJb3VhQCrg/maxresdefault.jpg"
          }, {
            id: 121,
            author: "Dhruv",
            name: "double take",
            path: "./assets/music/double take.mp3",
            image: "https://tse4.mm.bing.net/th/id/OIP.sapjzDv67biX82yNkpguoQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
          },
          {
            id: 122,
            author: "Johnny Stimson",
            name: "Flower",
            path: "./assets/music/Flower.mp3",
            image: "https://linkstorage.linkfire.com/medialinks/images/30e36dc5-ec8d-4172-9ea0-0d03796eaa6d/artwork-440x440.jpg"
          },
          {
            id: 123,
            author: "Johnny Stimson",
            name: "Hard To Say Goodbye",
            path: "./assets/music/thanhambuonba.mp3",
            image: "./assets/img/def.jpg"
          },
          {
            id: 124,
            author: "HYBS",
            name: "Ride",
            path: "./assets/music/Ride.mp3",
            image: "https://i.ytimg.com/vi/qbEVGyRfS0I/maxresdefault.jpg"
          },
          {
            id: 125,
            author: "Backstreet Boys",
            name: "As Long As You Love Me",
            path: "./assets/music/As Long As You Love Me.mp3",
            image: "https://i.discogs.com/nM1LiCGxEXDuduyyJOflCU04GhCyZkTBD3LapmBxO_4/rs:fit/g:sm/q:90/h:500/w:500/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE0NDUx/Njc4LTE1NzQ3ODc1/MTUtMzM2MS5qcGVn.jpeg"
          },
          {
            id: 126,
            author: "Backstreet Boys",
            name: "In a World Like This",
            path: "./assets/music/In a World Like This.mp3",
            image: "https://tse1.mm.bing.net/th/id/OIP.Rf7fB6lkSiRfKG8MK1JcKwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
          },
          {
            id: 127,
            author: "Westlife",
            name: "My Love",
            path: "./assets/music/yenvohiet.mp3",
            image: "https://tse2.mm.bing.net/th/id/OIP.qU_T1nuCrtkfE3sZ1JKmfgHaGU?rs=1&pid=ImgDetMain&o=7&rm=3"
          },
          {
            id: 128,
            author: "Westlife",
            name: "I Lay My Love on You",
            path: "./assets/music/I Lay My Love on You.mp3",
            image: "https://i.ytimg.com/vi/bOEyti9cfqw/maxresdefault.jpg"
          },
          {
            id: 129,
            author: "B Ray",
            name: "Ex's Hate Me",
            path: "./assets/music/Ex's Hate Me.mp3",
            image: "https://i.ytimg.com/vi/8lkXLHCOYbQ/maxresdefault.jpg"
          },
          {
            id: 130,
            author: "Sơn Tùng MTP",
            name: "Lạc Trôi (Triple D remix)",
            path: "./assets/music/Lạc Trôi (Triple D Remix).mp3",
            image: "https://lh3.googleusercontent.com/5NYugIsnNaJfkqlEtUjRW5fTrHK4kkn3KFf1sehvdJ0YYPa9c0nNUHyBN6cxFBWiTX04CkdDvlektI5r"
          }, {
            id: 131,
            name: "Nothing's Gonna Change My Love For You",
            author: "Westlife",
            path: "./assets/music/Nothing's Gonna Change My Love For You.mp3",
            image: "https://i.ytimg.com/vi/VBpOA8eBRBY/maxresdefault.jpg"
          },
          {
            id: 132,
            author: "Lady Gaga, Bruno Mars",
            name: "Die With A Smile",
            path: "./assets/music/Die With A Smile.mp3",
            image: "https://djdark.ro/wp-content/uploads/2024/09/Lady-Gaga-Bruno-Mars-Die-With-A-Smile-Dj-Dark-Remix.jpg"
          },
          {
            id: 133,
            author: "Westlife",
            name: "You Raise Me Up",
            path: "./assets/music/You Raise Me Up.mp3",
            image: "https://th.bing.com/th/id/R.c4b8e5b6626c383e6b5aec39aedac1f8?rik=8w%2fT8nl6NBu0kA&riu=http%3a%2f%2fp1.music.126.net%2fffWmzD86V-IKPe0D1DNSsA%3d%3d%2f18348650045094640.jpg&ehk=hMnGjmAsRZcyRazZX6Jx80gOOJS2HwcC7GvUDXzHN%2fU%3d&risl=&pid=ImgRaw&r=0"
          },
          {
            id: 134,
            author: "Westlife",
            name: "If I Let You Go",
            path: "./assets/music/If I Let You Go.mp3",
            image: "https://tse1.mm.bing.net/th/id/OIP.vNSz4rWIHQVEp_ESjaqMqgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
          },
          {
            id: 135,
            author: "Westlife",
            name: "Only Love",
            path: "./assets/music/Only Love.mp3",
            image: "https://tse3.mm.bing.net/th/id/OIP.NDLlmJwDwXZ3VPwTaXIf5wHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
          },
          {
            id: 136,
            author: "Westlife",
            name: "As long as me love you",
            path: "./assets/music/As long as me love you.mp3",
            image: "https://tse3.mm.bing.net/th/id/OIP.85FnxiYjKWwniqYhh_HhBgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
          },
          {
            id: 137,
            author: "Westlife",
            name: "My Love (Radio Edit)",
            path: "./assets/music/My Love (Radio Edit).mp3",
            image: "https://i.ytimg.com/vi/MFYzMxxDJRk/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGEogWShlMA8=&rs=AOn4CLC0sGT-efahmBVET1jyzb3mwwF37g"
          },
          {
            id: 138,
            author: "Beabadoobee",
            name: "Coffee (Live In La)",
            path: "./assets/music/Coffee (Live In La).mp3",
            image: "https://tse2.mm.bing.net/th/id/OIP.RRmmHhXT-5EtjyX4CX7TWwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
          },
          {
            id: 139,
            author: "Ali Gatie",
            name: "It's You",
            path: "./assets/music/It's You.mp3",
            image: "https://i.ytimg.com/vi/uIyBlXf9WY0/maxresdefault.jpg"
          },
          {
            id: 140,
            author: "LBI",
            name: "跳楼机",
            path: "./assets/music/跳楼机.mp3",
            image: "https://i.ytimg.com/vi/TOC78RUj8pg/maxresdefault.jpg"
          },
          {
            id: 141,
            author: "Monday Liz, Punch",
            name: "Another Day",
            path: "./assets/music/Another Day.mp3",
            image: "https://i.ytimg.com/vi/BFpYBxleQ74/maxresdefault.jpg"
          },
          {
            id: 142,
            author: "Taeyeon",
            name: "All About You",
            path: "./assets/music/ALL ABOUT YOU.mp3",
            image: "https://i.ytimg.com/vi/JqJdLnCyFCs/maxresdefault.jpg"
          },
          {
            id: 143,
            author: "Yang Da II",
            name: "Only You",
            path: "./assets/music/Only You.mp3",
            image: "https://k-plaza.com/wp-content/uploads/2021/07/Hotel-Del-Luna.jpg"
          },
          {
            id: 144,
            author: "Heize",
            name: "Can You See My Heart",
            path: "./assets/music/Can You See My Heart.mp3",
            image: "https://k-plaza.com/wp-content/uploads/2021/07/Hotel-Del-Luna.jpg"
          },
          {
            id: 145,
            author: "Gummy",
            name: "Remember Me",
            path: "./assets/music/Remeber Me.mp3",
            image: "https://k-plaza.com/wp-content/uploads/2021/07/Hotel-Del-Luna.jpg"
          },
    ],
    handleEvent: function () {
        
        const _this = this;
        const cdThumbAnimate = cd.animate([{ transform: "rotate(360deg)" }], {
            duration: 10000, // 10 seconds
            iterations: Infinity
        });
        cdThumbAnimate.pause();
        //
        // lắng nghe search
        inputSearch.addEventListener("input", function(e){
            _this.songsStock.forEach((element,index)=>{
                let valueSearch = e.target.value.trim().toUpperCase();
                let valueName =element.name.toUpperCase();
                if(!valueName.includes(valueSearch)){
                    document.querySelector(`.song-stock-${index}`).classList.add("noneDisplay")
                   
                }
                else 
                document.querySelector(`.song-stock-${index}`).classList.remove("noneDisplay")

            })
        })
        playBtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }
        };

        // Khi song được play
        // When the song is played
        audio.onplay = function () {
            _this.isPlaying = true;
            musicApp.classList.add("playing");
            cdThumbAnimate.play();
            _this.scrollToActiveSong();
        };

        // Khi song bị pause
        // When the song is pause
        audio.onpause = function () {
            _this.isPlaying = false;
            musicApp.classList.remove("playing");
            cdThumbAnimate.pause();
        };

        nextBtn.onclick = function () {
            _this.getDOM()
            if (_this.isRandom) {
                _this.randomMusic();
            } else _this.nextSong()
            _this.render()
            audio.play();
        }
        prevBtn.onclick = function () {
            _this.getDOM()

            if (_this.isRandom) {
                _this.randomMusic();
            } else _this.prevSong()
            _this.render()
            audio.play();

        }
        audio.ontimeupdate = function () {
            if (audio.duration) {
                var processPercent = Math.floor((audio.currentTime / audio.duration) * 100)
                processBar.value = processPercent
            }
        }
        // returnBtn.onclick= function(){
        //     this.classlist.toggle("btnActive")
        // }
        audio.onended = function () {
            if (_this.isReturn) {
                audio.play();
            } else {
                if (_this.isRandom) {
                    _this.randomMusic();
                } else {
                    _this.nextSong()
                    _this.render()
                    audio.play()
                }
            }
        }
        returnBtn.onclick = function () {
            if (!this.classList.contains("btnActive")) {
                this.classList.add("btnActive")
                _this.isReturn = true;

            } else {
                this.classList.remove("btnActive");
                _this.isReturn = false;
            }
        }

        randomBtn.onclick = function () {
            if (!this.classList.contains("btnActive")) {
                this.classList.add("btnActive")
                _this.isRandom = true;
            } else {
                this.classList.remove("btnActive");
                _this.isRandom = false;
            }
        }
        // playList.ondragend = function () {
        //     _this.getDOM()
        //     _this.render();


        // }
        stockMusic.onclick=function (e) {
            const songNode = e.target.closest(".playlist--song:not(.love)");
            if(songNode){
                _this.songs.push(_this.songsStock[Number(songNode.dataset.index)])
                _this.isDOM=false
                _this.render()
                
            }
            else {
                const dataIndex=e.target.closest(".playlist--song").dataset.index ;
                console.log(dataIndex)
                console.log(_this.songs.indexOf(_this.songsStock[Number(dataIndex)]))
                if (dataIndex){
                    _this.songs.splice(_this.songs.indexOf(_this.songsStock[Number(dataIndex)]))
                    _this.render();
                    if (this.isPlaying){
                        audio.play()
                    }
                }
                
                
            }
        }

        playList.onclick = function (e) {
            const songNode = e.target.closest(".playlist--song:not(.active)");
            const ellipsis = e.target.closest(".ellipsis--song");
            if (songNode && !ellipsis) {
                // Xử lý khi click vào song
                // Handle when clicking on the song
                if (songNode) {
                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    _this.render();
                    audio.play();
                }
            }
            if (ellipsis) {
                var setting = ellipsis.querySelector(".setting");
                if (!setting.classList.contains("setting--active")) {
                    setting.classList.add("setting--active");
                } else {
                    setting.classList.remove("setting--active");


                }
            }
        }

        // thay đổi vt dài nhạc
        processBar.addEventListener("change", function () {
            audio.currentTime = Math.floor(this.value / 100 * audio.duration);
        })
        processBar.addEventListener("input", function () {
            audio.currentTime = Math.floor(this.value / 100 * audio.duration);
        })
        //lắng nghe thay đổi âm lượng
        volume.addEventListener("change", function () {
            audio.volume= this.value / 100 ;
        })
        volume.addEventListener("input", function () {
            audio.volume= this.value / 100 ;
        })
    },
    currentVolume: function () {
        volume.value=audio.volume*100
    },
    randomMusic: function () {
        this.getDOM()

        var indexRandom
        do{

            indexRandom=Math.floor(Math.random() * this.songs.length)
           
        } while(indexRandom===this.currentIndex)
        this.currentIndex = indexRandom
        this.loadCurrentSong();
        this.render();
        audio.play()
    },
    getCurrentIndex: function () {
        var playListSong=document.querySelectorAll(".songLover")
         
        playListSong.forEach((x,index)=>{
            if(x.classList.contains("active")){
                this.currentIndex=index;
                
        }})
    },
    nextSong: function () {
        this.getCurrentIndex()
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0;
        }
        this.loadCurrentSong();
    },
    prevSong: function () {
        this.getCurrentIndex()

        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    scrollToActiveSong: function () {
        setTimeout(() => {
            document.querySelector(".playlist--song.active").scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }, 300);
    },
    defineProperties: function () {
        Object.defineProperty(this, "currentSong", {
            get: function () {
                return this.songs[this.currentIndex];
            }
        });
    },
    loadCurrentSong: function () {
        heading.innerHTML = this.currentSong.name;
        cd.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;
    },
    delete:function () {
        this.getDOM()
        const _this = this;
        const btnDelete = document.querySelectorAll(".modifier")
        btnDelete.forEach((x,index) => {
            x.addEventListener("click",()=>{
                const indexRemoveLove=_this.songsStock.indexOf(this.songs[index])
                const songInStockRemoveLove=document.querySelector(`.song-stock-${indexRemoveLove}`)
                const heart=document.querySelectorAll(".heart")
                songInStockRemoveLove.classList.toggle("love")
                heart[indexRemoveLove].classList.toggle("heart-active")

                playList = document.querySelector(".playlist");
                this.songs.splice(index,1)

                if(index<this.currentIndex){
                    this.currentIndex=this.currentIndex-1;
                }
                if(index===btnDelete.length-1 && index===this.currentIndex){
                    this.currentIndex=this.currentIndex-1;
                    this.loadCurrentSong()

                } else
                if(index===this.currentIndex){
                    this.loadCurrentSong()
                }
                this.render()
                if (this.isPlaying){
                    audio.play()
                }
            
            })
        })
    },
    drag:function () {
        new Sortable (playList,{
            animation : 200 , 
            ghostClass : 'pink-background-class' 
        })
    },
   
    getDOM:function () {

        var DOM=document.querySelectorAll(".songs-name");
        var copySongs=[];
        DOM.forEach((E,index1)=>{
            this.songs.forEach((x,index2)=>{
                if(x.name===E.innerText){
                    copySongs=[...copySongs,x];
                }
            })
        })
        this.songs=[...copySongs];
        
    },
    renderStock: function () {

        var listSongsStock=this.songsStock.map(function(song,index){
            return `
            <div class="playlist--song songsStock song-stock-${index} love "  data-index="${index}">
                <div class="title--song">
                    <div class="title--song__img" style="background-image:url('${song.image}');"></div>
                        <div class="title--song__infor">
                            <div class="title--song__name songs_name_stock">
                                ${song.name}
                            </div>
                            <div class="title--song__author__stock">
                                ${song.author}
                            </div>
                        </div>
                    </div>
                <div class="heart"></div>
            </div>
            
        `
        })
        stockMusic.innerHTML=listSongsStock.join('')
    },

    render: function () {
        if(this.isDOM){
            this.getDOM()
        }
        else this.isDOM=true
        var listSongs = this.songs.map(function (song, index) {
            return `
            <div class="playlist--song songLover ${index === app.currentIndex ? "active" : ""}" data-index="${index}">
                    <div class="title--song">
                        <div class="title--song__img" style="background-image:url('${song.image}');">
                        </div>
                        <div class="title--song__infor">
                            <div class="title--song__name songs-name">
                                ${song.name}
                            </div>
                            <div class="title--song__author ">
                                ${song.author}
                            </div>
                        </div>
                    </div>
                    <div class="ellipsis--song setting--${index}">
                        <div class="setting " data-index="${index}">
                            <div class="modifier">Delete <i class="fa-solid fa-trash"></i></div>
                        </div>
                        <i class="fa-solid fa-ellipsis"></i>
                    </div>
                    
            
                </div>
        `
        })
        playList.innerHTML = listSongs.join('')
        this.delete()
        
    },
    start: function () {
        
        // hàm bắt sự kiên trong DOM
        this.handleEvent()
        this.defineProperties()
        // Render ra bài nhạc
        this.loadCurrentSong()
        this.render()
        this.renderStock()
        //volume ban dau
        this.currentVolume()
        this.drag()

        //delete
    }
}
app.start()
