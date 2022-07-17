const clock = document.querySelector("#clock");

function userClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

userClock();
setInterval(userClock,1000);