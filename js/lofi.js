
 let navigation = document.querySelector('.menu');
let action = navigation.querySelector('.grid-outline');
 let toggle = navigation.querySelector('.toggle');

toggle.onclick = function(){
        navigation.classList.toggle('active')
}

var flagAction = true;

action.onclick = function(){
        if(flagAction){
                navigation.classList.add('action');
                flagAction = false;
        }
        else{
                flagAction = true;
                navigation.classList.remove("action");
        }
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

                navigation.classList.remove("action");
                flagTimeTable = false;
        }
        else{
                document.querySelector('.block-timetable').setAttribute("style", " transform: scale(0%)");
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
                        saveData = localStorage.getItem('theme');
                        localStorage.clear();
                        localStorage.setItem('theme', saveData);
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

                navigation.classList.remove("action");
                flagMusic = false;
        }
        else{
                elementMusic.setAttribute("style", "display: none");
                flagMusic = true;
        }
}

      
/// background

        function isDataLocalStorage(){
                for(var i = 0; i< localStorage.length ; i++){
                        if(localStorage.key(i)  == 'theme'){
                                return true;
                        }
                }

                return false;
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
                         "https://images.unsplash.com/photo-1483095348487-53dbf97d8d5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
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
                        id : 7,
                        url:
                         "https://images.unsplash.com/photo-1512474331201-782fc6a4ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
                },

        ];

        let backgroundEle = document.querySelector(".background-img img");
        let themeIcon = document.querySelector(".menu-theme");
        
        
       if(isDataLocalStorage() == false){
                localStorage.setItem('theme' ,  1);
        }
        var getDataLocal = localStorage.getItem('theme');
        backgroundEle.setAttribute("src" , listImg[getDataLocal].url);
        //document.querySelector(".img_timeTable").setAttribute("src" , listImg[getDataLocal].url);
        themeIcon.onclick = function(){       
                if(getDataLocal < listImg.length-1)
                getDataLocal++;

                else
                getDataLocal = 0;
                localStorage.setItem('theme' ,  getDataLocal);
                backgroundEle.setAttribute("src" , listImg[getDataLocal].url);
                //document.querySelector(".img_timeTable").setAttribute("src" , listImg[getDataLocal].url);

        }
}

        background();
         