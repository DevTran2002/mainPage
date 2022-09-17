
 let navigation = document.querySelector('.menu');

 let toggle = navigation.querySelector('.toggle');

toggle.onclick = function(){
        navigation.classList.toggle('active')
}


//-------------------------time----table------------------------------------//

let timeTable = document.querySelector('.wrap-time-table');
let elementBox = timeTable. querySelectorAll('.box-table');
let penInput = timeTable.querySelector('.pencil-icon');
let cloudIcon = timeTable.querySelector('.cloud-icon');
let trashIcon = timeTable.querySelector('.trash-icon');



// time table button event
var flagTimeTable = true;
document.querySelector('.menu-timeTable').onclick = function(){
        if(flagTimeTable){
                loadingTimetable();
                document.querySelector('.block-timetable').setAttribute("style", " transform: scale(100%)" , "display: block");
                document.querySelector(".pomodoro").setAttribute("style","transform: scale(0)", "display: none");
                elementMusic.setAttribute("style", "display: none");
                flagTimeTable = false;
        }
        else{
                document.querySelector('.block-timetable').setAttribute("style", " transform: scale(0)" , "display: none");
                flagTimeTable = true;
        }
}




//set data time table in localStorage
var status_setTimeTable = true;
penInput.onclick = function(){

        
        if(status_setTimeTable){
                elementBox.forEach(function(rule){
                        let inputEle = rule.querySelector('input');
                        inputEle.setAttribute('style' , 'width : 100%');
                        status_setTimeTable = false;
                })

        }
        else
        {
                elementBox.forEach(function(rule){
                        let inputEle = rule.querySelector('input');
                        inputEle.setAttribute('style' , 'width : 0px');
                        rule.querySelector('.messTable').innerHTML = inputEle.value;         
                        status_setTimeTable = true;
                })        
        }
}

//save data in local storage

        cloudIcon.onclick = function(){
                count =0;
                alert('Dữ liệu đã được sao lưu!');
                elementBox.forEach(function(rule){
                        let inputEle = rule.querySelector('input');
                        localStorage.setItem(count , inputEle.value);          
                        count ++;
                })      
        }


// delete data in local storage
        trashIcon.onclick = function(){
                var result = confirm('Dữ liệu sẽ bị mất bạn có chắc chắn?');
                if(result){
                        localStorage.clear();
                        loadingTimetable();
                }
        }


// loading time table
function loadingTimetable()    {
      count = 0;
      elementBox.forEach(function(rule){
                let inputEle = rule.querySelector('input'); 
                rule.querySelector('.messTable').innerHTML = localStorage.getItem(count);
                inputEle.value =localStorage.getItem(count);   
                count ++;
        })          
}



// -----------------------------------------------music

let iconMusic = document.querySelector('.menu-music');
let elementMusic = document.querySelector('.c-containter');
var flagMusic = true;

iconMusic.onclick = function(){

        if(flagMusic){
                elementMusic.setAttribute("style" ,"display: flex" );
                document.querySelector('.block-timetable').setAttribute("style", " transform: scale(0)" , "display: none");
                document.querySelector(".pomodoro").setAttribute("style","transform: scale(0)", "display: none");
                flagMusic = false;
        }
        else{
                elementMusic.setAttribute("style", "display: none");
                flagMusic = true;
        }
}

      
/// background


function setCookie(name , value){

        document.cookie = name + "=" + value; 
   
}

function getCookie(name) {
        // Split cookie string and get all individual name=value pairs in an array
        var cookieArr = document.cookie.split(";");
        
        // Loop through the array elements
        for(var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");
            
            /* Removing whitespace at the beginning of the cookie name
            and compare it with the given string */
            if(name == cookiePair[0].trim()) {
                // Decode the cookie value and return
                return decodeURIComponent(cookiePair[1]);
            }
            else
            {
                setCookie("id" , 0);
            }
        }
        
        // Return null if not found
        return null;
    }


function background (){
        const listImg = [
                {
                        id : 1,
                        url:
                         "https://free4kwallpapers.com/uploads/originals/2020/03/26/lofi-music-channel-inspired-oc-wallpaper.jpg"
                },
                {
                        id : 2,
                        url:
                         "https://img6.thuthuatphanmem.vn/uploads/2022/01/25/anh-lofi-chill-dep-nhat_042522998.jpg"
                },
                {
                        id : 3,
                        url:
                         "https://img6.thuthuatphanmem.vn/uploads/2022/01/25/anh-lofi-chill-dep_042523254.jpg"
                },
                {
                        id : 4,
                        url:
                         "https://img6.thuthuatphanmem.vn/uploads/2022/01/25/hinh-anh-lofi-chill-don-gian-dep_042527188.jpg"
                },
                {
                        id : 5,
                        url:
                         "https://img6.thuthuatphanmem.vn/uploads/2022/01/25/hinh-anh-lofi-chill-buon-co-don_042525346.jpg"
                },
                {
                        id : 6,
                        url:
                         "https://img6.thuthuatphanmem.vn/uploads/2022/01/25/hinh-anh-lofi-chill-cuc-chat_042525996.jpg"
                },
                {
                        id : 6,
                        url:
                         "https://img6.thuthuatphanmem.vn/uploads/2022/01/25/hinh-anh-lofi-chill-mong-mo_042528196.jpg"
                },

        ];

        let backgroundEle = document.querySelector(".background-img img");
        let themeIcon = document.querySelector(".menu-theme");
        let numberID =getCookie("id") ;   
        backgroundEle.setAttribute("src" , listImg[numberID].url);

        themeIcon.onclick = function(){       
                temp = getCookie("id")  <=  listImg.length - 2 ? numberID ++ : numberID  = 0;
                backgroundEle.setAttribute("src" , listImg[temp].url);
                setCookie("id" , temp) ;          
        }
}

        background();