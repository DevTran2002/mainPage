

var navigation = document.querySelector(".menu");
let eventPomodoro = navigation.querySelector(".menu-pomodoro");
let pomodoro = document.querySelector(".pomodoro");

// input set time pomodoro

let inputTimePomodoro = pomodoro.querySelector('.setTimePomodoro');
let inputTimeShort = pomodoro.querySelector('.setTimeShort');
let inputTimeLong = pomodoro.querySelector('.setTimeLong');


// value
var statusTime = true;          //trạng thái hidden or close
var activeHidden = true;
var breakTime  = 1;
var activeStart = true;
var s,m;
const audio = new Audio();
        audio.src = "../audio/Đồng Hồ Báo Thức.mp3";

//out pomodoro
pomodoro.querySelector('.out-pomodoro').onclick = function(){
        if(confirm('Bạn chắc chắn đóng Pomodoro không?')){
                statusTime = false;
                breakTime = 1;
                document.querySelector(".message-clock").innerHTML = '0 : 0';
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
              m =15;
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

                eventPomodoro.classList.add("activeEventClick-menu");
                activeHidden = false;


                document.querySelector('.c-containter').setAttribute("style", "display: none");
        } 
        else{
                pomodoro.setAttribute("style","transform: scale(0)", "display: none");
                activeHidden = true;
        }
};

//hàm hiển thị và show time
function countDow(s, m, statusTime) {

  var messageClock = document.querySelector(".message-clock");

        if (statusTime) {               // trạng thái hidden
                if (s === -1) {
                        m -= 1;
                        s = 59;
                }       
                else if (m === -1 & breakTime % 2 == 1& breakTime < 7 ) {
                        audio.play();
                        breakTime ++;
                        m = setBreakShort(m);
                        s = 0;
                }
                else if(m === -1 & breakTime % 2 == 0 ){
                        audio.play();
                        breakTime ++;
                        m = setTime(m);
                        s = 0;
                }
                else if(m === -1 & breakTime == 7){
                        audio.play();
                        breakTime = 0;
                        m = setBreakLong(m);
                        s = 0;
                }
        }
        // điều kiện trạng thái out 
       else if (statusTime == false) {
                clearTimeout(timeout);
                count = 0;
                return false;
        }

        messageClock.innerText = m.toString() + " : " + s.toString();

        //call back funtion
        timeout = setTimeout(function () {
                        s--;
                        countDow(s, m, statusTime);
                        }, 1000);
}
