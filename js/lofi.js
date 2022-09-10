
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

      