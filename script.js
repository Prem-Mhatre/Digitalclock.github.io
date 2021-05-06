function updateTime(){
    const currentTime = new Date();

    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();

    document.getElementById("hour").innerHTML = hour + ":";
    document.getElementById("minute").innerHTML = minute + ":";
    document.getElementById("second").innerHTML = second;
}

setInterval(updateTime);