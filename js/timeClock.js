

var navigation = document.querySelector(".menu");
let eventPomodoro = navigation.querySelector(".menu-pomodoro");
let pomodoro = document.querySelector(".pomodoro");

// input set time pomodoro

let inputTimePomodoro = pomodoro.querySelector('.setTimePomodoro');
let inputTimeShort = pomodoro.querySelector('.setTimeShort');
let inputTimeLong = pomodoro.querySelector('.setTimeLong');
var mute = pomodoro.querySelector('.pomodoro-mute');

var messageClock = document.querySelector(".message-clock");

// value
var statusTime = true;          //trạng thái hidden or close
var activeHidden = true;
var breakTime  = 0;
var activeStart = true;
var s,m;
const audio = new Audio();
        audio.src = "https://docs.google.com/uc?id=1U002Nc1diUPDQuEUpI9dj5EI1bI35_yv";
const audioRing = new Audio()        ;
        audioRing.src = "https://docs.google.com/uc?id=1iZPoYhO25G2qm-bph67hknz9IAlalosL";
        
        //out pomodoro
pomodoro.querySelector('.out-pomodoro').onclick = function(){
        if(confirm('Bạn chắc chắn đóng Pomodoro không?')){
                statusTime = false;
                messageClock.innerHTML = '25 : 0';
                countDow(s, m, statusTime);
                pomodoro.setAttribute("style", "display: none");
                eventPomodoro.classList.remove("activeEventClick-menu");
        }     
}


// button play pomodoro
pomodoro.querySelector('.starTimePomodoro').onclick = function(){
        if(activeStart){
                statusTime = true;
                s = 0;
                countDow(s, setTime(m,s) , statusTime);
                activeStart = false;
        }
        else
        {
                statusTime = false;
                countDow(s, setTime(m,s) , statusTime);
                activeStart = true;
        }
                
}



//pause pomodoro
pomodoro.querySelector('.pauseTimePomodoro').onclick = function(){
        alert('Tạm dừng pomodoro');
}


// hàm kiểm tra giá trị set time nhập vào và trả lại giá trị đã cài
function setTime(m){
        if(inputTimePomodoro.value == '')
        {
              m =25;
        }
        else{
                m = inputTimePomodoro.value;
        }
        return m = m;
}
function setBreakShort(m){
        if(inputTimeShort.value == '')
        {
              m =5;
        }
        else{
                m = inputTimeShort.value;
        }
        return m = m;
}
function setBreakLong(m){
        if(inputTimeLong.value == '')
        {
              m =25;
        }
        else{
                m = inputTimeLong.value;
        }
        return m = m;
}




//sự kiện khi bấm pomodoro-menu
eventPomodoro.onclick = function () {

        //các lần tiếp sau đó sẽ ẩn và hiện
        if (activeHidden) {
                pomodoro.setAttribute("style", " transform: scale(100%)" , "display: block");
                document.querySelector('.block-timetable').setAttribute("style", " transform: scale(0)" , "display: none");

                document.querySelector('.c-containter').setAttribute("style", "display: none");
                document.querySelector('.menu').classList.remove("action");
                activeHidden = false;

        } 
        else{
                pomodoro.setAttribute("style","transform: scale(0)", "display: none");
                activeHidden = true;
        }
};

mute.addEventListener('click', function(event){
        if(confirm("Bạn có mốn tắt nhạc không")){
                audio.pause();
                audioRing.pause();
        }
})


//hàm hiển thị và show time
function countDow(s, m, statusTime) {
                if(breakTime == 0){
                        m = setTime(m);
                        s=0;
                        breakTime++;
                }

                if (s == -1 & m >= 1) {
                        m --;
                        s = 59;
                }  
        if (statusTime) {               // trạng thái hidden   (show active)   
                audio.loop;
                audioRing.loop;
                if(s == 0 & m == 0 & breakTime %2 ==0 ){
                        if(breakTime != 0){
                                audioRing.play();
                        }
                        m = setTime(m);
                        s=0;
                        breakTime++;

                }
                else if(s  == 0 & m == 0 & breakTime % 2 == 1 & breakTime != 7)    {
                        audio.play();
                        m = setBreakShort(m);
                        s = 0;
                        breakTime++;

                }
                else if(s == 0 & m == 0 & breakTime == 7){
                        audio.play();
                        m = setBreakLong(m);
                        s = 0;
                        breakTime = 0;
                }
        }
        
        // điều kiện trạng thái out 
       else {
                clearTimeout(timeout);
                breakTime =0;
                return false;
        }

        messageClock.innerText = m.toString() + " : " + s.toString();

        //call back funtion
        timeout = setTimeout(function () {
                        s--;
                        countDow(s, m, statusTime);
                        
                        }, 1000);
}
