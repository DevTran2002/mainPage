(function IIFE() {
        const list = [
          {
            id: 1,
            url:
              "https://docs.google.com/uc?id=1AnKWZpY-rKdGUEZXWf0_1QWvVixGFx7G",
            author: "Những Bản Piano nhạc việt ",
            title: "One",
            cover:
              "//cdn.atrera.com/images/cover_yz2mak.jpg"
          },
          {
            id: 2,
            url:
              "https://docs.google.com/uc?id=16KXi8x7HoMwOqMbnMGDn-BxA5KibEPNh",
            author: "Piano cover",
            title: "Two",
            cover:
              "//cdn.atrera.com/images/cover_yz2mak.jpg"
          },
          {
            id: 3,
            url:
              "https://docs.google.com/uc?id=1pNdIU7jqnU0cI6mNG1zdTYC4Ji65w5CI",
            author: "Music lofi chill Part1.",
            title: "Three",
            cover:
              "//cdn.atrera.com/images/cover_yz2mak.jpg"
          },
          {
            id: 4,
            url:
              "https://docs.google.com/uc?id=1KG3m0sBl1boKGuFSVABOzAZ7CR3U8GwO",
            author: "Music lofi chill Part2",
            title: "Four",
            cover:
              "//cdn.atrera.com/images/cover_yz2mak.jpg"
          },
          {
            id: 5,
            url:
              "https://docs.google.com/uc?id=1YXwGcmAZ8GZ3xNLlLsb-Sf7Q5R8yWy86",
            author: "Baroque giúp tăng khả năng ghi nhớ Part1.",
            title: "Five",
            cover:
              "//cdn.atrera.com/images/cover_yz2mak.jpg"
          },
          {
            id: 6,
            url:
              "https://docs.google.com/uc?id=1saEzh-iYf5Lxk3oWGCA7RlfrvI5HnEmQ",
            author: "Baroque giúp tăng khả năng ghi nhớ Part2.",
            title: "Six",
            cover:
              "//cdn.atrera.com/images/cover_yz2mak.jpg"
          },
          {
            id: 7,
            url:
              "https://docs.google.com/uc?id=1sYRVWSe3o8HIF07epPPu_PlpTFD6zG36",
            author: "Baroque giúp tăng khả năng tập trung Part1",
            title: "Seven",
            cover:
              "//cdn.atrera.com/images/cover_yz2mak.jpg"
          },
          {
            id: 8,
            url:
              "https://docs.google.com/uc?id=1nVKEF7UsOkH53TgDZ5bo1BjFtdrCd4og",
            author: "Baroque giúp tăng khả năng tập trung Part 2",
            title: "Eight",
            cover:
              "//cdn.atrera.com/images/cover_yz2mak.jpg"
          },
          {
            id: 9,
            url:
              "//cdn.atrera.com/audio/Marcel_Pequel_-_09_-_Nine.mp3",
            author: "Marcel Pequel",
            title: "Nine",
            cover:
              "//cdn.atrera.com/images/cover_yz2mak.jpg"
          }
        ];
      
        let currentId = 0;
        let isPlaying = false;
        let isLoop = true;
        let isShuffle = false;
        let currentAudio = "music1";
        let timer = null;
        let loopOne = false;
      
        const currentTimeIndicator = document.querySelector(".music-time__current");
        const leftTimeIndicator = document.querySelector(".music-time__last");
        const progressBar = document.getElementById("length");
        const playBtn = document.querySelector(".play");
        const cover = document.querySelector(".cover");
        const title = document.querySelector(".music-player__title");
        const author = document.querySelector(".music-player__author");
      
        const loopBtn = document.getElementById("loop");
        const shuffleBtn = document.getElementById("shuffle");
        const forwardBtn = document.getElementById("forward");
        const backwardBtn = document.getElementById("backward");
        const progressDiv = document.getElementById("progress");
      
        function play(e) {
          if (!isPlaying) {
            // console.log('play');
            e.target.src =
              "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/pause.svg";
            e.target.alt = "Pause";
            isPlaying = true;
            document.getElementById(currentAudio).play();
            showTime();
          } else {
            // console.log('pause');
            e.target.src =
              "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg";
            e.target.alt = "Play";
            document.getElementById(currentAudio).pause();
            isPlaying = false;
            clearInterval(timer);
          }
        }
      
        function changeBar() {
          const audio = document.getElementById(currentAudio);
          const percentage = (audio.currentTime / audio.duration).toFixed(3);
          progressBar.style.transition = "";
          // console.log(audio.currentTime);
      
          //set current time
          const minute = Math.floor(audio.currentTime / 60);
          const second = Math.floor(audio.currentTime % 60);
          const leftTime = audio.duration - audio.currentTime;
          currentTimeIndicator.innerHTML =
            ("0" + minute).substr(-2) + ":" + ("0" + second).substr(-2);
      
          //set left time
          const leftMinute = Math.floor(leftTime / 60);
          const leftSecond = Math.floor(leftTime % 60);
      
          leftTimeIndicator.innerHTML =
            ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);
      
          //set time bar
          progressBar.style.width = percentage * 100 + "%";
        }
      
        function showTime() {
          timer = setInterval(() => changeBar(), 500);
        }
      
        function nextMusic(mode) {
          playBtn.src =
            "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg";
          playBtn.alt = "Play";
          document.getElementById(currentAudio).pause();
          isPlaying = false;
          clearInterval(timer);
      
          if (mode === "next") {
            currentId = currentId + 1 > list.length - 1 ? 0 : currentId + 1;
            init();
          } else {
            currentId = currentId - 1 < 0 ? list.length - 1 : currentId - 1;
            init();
          }
        }
      
        function shuffle(e) {
          isShuffle = !isShuffle;
          if (isShuffle) {
            e.target.parentNode.classList.add("is-loop");
          } else {
            e.target.parentNode.classList.remove("is-loop");
          }
        }
      
        // function backward() {
        //   const audio = document.getElementById(currentAudio);
        //   audio.currentTime -= 5;
        //   if (!isPlaying) {
        //     changeBar();
        //   }
        // }
      
        // function forward() {
        //   const audio = document.getElementById(currentAudio);
        //   audio.currentTime += 5;
        //   if (!isPlaying) {
        //     changeBar();
        //   }
        // }
      
        function stopMusic() {
          playBtn.src =
            "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/play.svg";
          playBtn.alt = "Play";
          isPlaying = false;
        }
      
        function goToNextMusic() {
          let newId = currentId;
          while (isShuffle && !loopOne && newId === currentId) {
            newId = Math.floor(Math.random() * Math.floor(list.length - 1));
          }
      
          if (!isShuffle && !loopOne) {
            currentId = currentId + 1 > list.length - 1 ? 0 : currentId + 1;
          }
          if (!isShuffle && loopOne) {
            currentId = currentId;
          }
      
          if (isShuffle) {
            currentId = newId;
          }
          init();
          document.getElementById(currentAudio).play();
        }
      
        function loop(e) {
          const audio = document.getElementById(currentAudio);
      
          if (!isLoop && !loopOne) {
            isLoop = true;
            loopOne = false;
            // console.log('is loop');
            e.target.parentNode.classList.add("is-loop");
            e.target.src =
              "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/loop.svg";
            audio.loop = false;
            audio.onended = e => goToNextMusic();
            console.log(isLoop, loopOne);
          } else if (isLoop && !loopOne) {
            // console.log('is loop one');
            isLoop = true;
            loopOne = true;
            e.target.parentNode.classList.add("is-loop");
            e.target.src =
              "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/loopone.svg";
            audio.loop = true;
            audio.onended = e => goToNextMusic();
            console.log(isLoop, loopOne);
          } else {
            // console.log('not loop');
            isLoop = false;
            loopOne = false;
            e.target.parentNode.classList.remove("is-loop");
            e.target.src =
              "https://snowleo208.github.io/100-Days-of-Code/7.%20Music%20Player/img/loop.svg";
            audio.loop = false;
            audio.onended = e => stopMusic();
            console.log(isLoop, loopOne);
          }
        }
      
        function progress(e) {
          const audio = document.getElementById(currentAudio);
          //get current position and minus progress bar's x position to get current position in progress bar
          const pos =
            (e.pageX - progressDiv.getClientRects()[0].x) /
            progressDiv.getClientRects()[0].width;
          audio.currentTime = pos * audio.duration;
          changeBar();
        }
      
        function init() {
          //reset music duration and setup audio
          const audio =
            document.getElementById(currentAudio) === null
              ? new Audio()
              : document.getElementById(currentAudio);
          audio.src = list[currentId].url;
          audio.id = currentAudio;
          document.getElementById(currentAudio) === null
            ? document.body.appendChild(audio)
            : "";
      
          progressBar.style.transition = "none";
          progressBar.style.width = "0%";
          document.getElementById(currentAudio).currentTime = 0;
      
          title.innerHTML = list[currentId].title;
          author.innerHTML = list[currentId].author;
          cover.src = list[currentId].cover;
      
          //set current time
          audio.addEventListener("loadedmetadata", function() {
            const leftMinute = Math.floor(audio.duration / 60);
            const leftSecond = Math.floor(audio.duration % 60);
            currentTimeIndicator.innerHTML = "00:00";
            leftTimeIndicator.innerHTML =
              ("0" + leftMinute).substr(-2) + ":" + ("0" + leftSecond).substr(-2);
            progressBar.style.transition = "";
          });
      
          //set loop
          document.getElementById(currentAudio).onended = e => goToNextMusic(e);
        }
      
        playBtn.addEventListener("click", play);
        loopBtn.addEventListener("click", loop);
      
        shuffleBtn.addEventListener("click", shuffle);
        forwardBtn.addEventListener("click", e => nextMusic("next"));
        backwardBtn.addEventListener("click", e => nextMusic("prev"));
      
        progressDiv.addEventListener("click", e => {
          progress(e);
        });
      
        init();
      })();