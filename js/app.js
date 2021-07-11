function exer1()
{
    const timeNow = new Date();
    getCurrentDayName(timeNow);



    const cHours = timeNow.getHours();
    const cMinutes = timeNow.getMinutes();
    const cSeconds = timeNow.getSeconds();

}


function getCurrentDayName(time)
{
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const cDay = timeNow.getDay();
    const cDayEl = document.getElementById("current-day");
    cDayEl.innerHTML = dayNames[cDay];
    
}