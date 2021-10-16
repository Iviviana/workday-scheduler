var currentDay=document.getElementById("#currentDay")
var currentTime;

//Time interval
var clock=setInterval(updateTime, 1000)

//function to update time and check time
function updateTime() {
    currentTime=moment();
    document.getElementById("currentDay").innerText=currentTime;
    
    checkTime();
}

//checks the time and the time block ID
function checkTime() {
    var currentHour=currentTime.hours();
    var timeBlock=$(".time-block");

    for(var i=0;i<timeBlock.length;i++) {
        var block=timeBlock[i];
        if(parseInt(block.id.split("-")[0])<currentHour) {
            $(block).addClass("past");
        } else if(parseInt(block.id.split("-")[0])===currentHour) {
            $(block).removeClass("past");
            $(block).addClass("present");
        } else { 
            $(block).removeClass("past");
            $(block).removeClass("present");
            $(block).addClass("future");
        }
    }
}

function saveData() {
    var time
    var schedule
}
