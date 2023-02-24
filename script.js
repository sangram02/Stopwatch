let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let time = document.querySelector("#displaytime")
let [seconds,minutes,hours] = [0,0,0];
function displaytime(){
    seconds += 1;
    if(seconds == 60){
        seconds = 0;
        minutes++;
        if(minutes == 60){
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    time.innerHTML = `${h} : ${m} : ${s}`; 
}
let int = null;
btn2.addEventListener('click',()=>{
    if(int != null){
        clearInterval(int)
    }
    int  = setInterval(displaytime,1000);
});
btn1.addEventListener('click',()=>{
    clearInterval(int);
})
btn3.addEventListener('click',()=>{
    clearInterval(int);
    [seconds,minutes,hours] = [0,0,0];
    time.innerHTML = "00:00:00"
})