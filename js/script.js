let startTime = new Date();
let startSecond = startTime.getSeconds().toString();
let clock = document.querySelector('#clock');
let digitalClock = document.querySelector('#time');
// let audio = document.createElement('audio');
// audio.setAttribute('src' , './audio/Увед.mp3');
function digitalClockNew(){
    let time = new Date();
    let s = time.getSeconds().toString();
    let m = time.getMinutes().toString();
    let h = time.getHours().toString();
    // if(m == 16 && s == 55){
    //     setTimeout(audioPlay, 1000);
    // }
    if (s.length < 2){
        s = '0' + s;
    }
    if (m.length < 2){
        m = '0' + m;
    }
    if (h.length < 2){
        h = '0' + h;
    }
    digitalClock.innerHTML = h + ':' + m + ':' + s;
};
function secondControl(){
    let time = new Date();
    let s = time.getSeconds().toString();
    if(startSecond == s - 2){
        clearInterval(secondControl);
        let s = time.getSeconds().toString();
        let m = time.getMinutes().toString();
        let h = time.getHours().toString();
        let secondPositionStart = s * 6;
        let secondPositionEnd = secondPositionStart + 360;
        clock.style.setProperty('--secondPositionStart', secondPositionStart + 'deg');
        clock.style.setProperty('--secondPositionEnd', secondPositionEnd + 'deg');
        let minPositionStart = m * 6 + s * 0.1;
        let minPositionEnd = minPositionStart + 360;
        clock.style.setProperty('--minPositionStart', minPositionStart + 'deg');
        clock.style.setProperty('--minPositionEnd', minPositionEnd + 'deg');
        let hourPositionStart = h * 30 + m * 0.5 + s * 0.0083333333333333;
        let hourPositionEnd = hourPositionStart + 360;
        clock.style.setProperty('--hourPositionStart', hourPositionStart + 'deg');
        clock.style.setProperty('--hourPositionEnd', hourPositionEnd + 'deg');
        clock.classList.add('clock_active');
        setInterval(digitalClockNew, 1);
    }
};

function start(){
    startInterval = setInterval(secondControl, 1);
};
setTimeout(start, 1000);

function audioPlay(){
    audio.play();
};