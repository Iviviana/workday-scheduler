var currentDay=document.getElementById("#currentDay")
var currentTime;
displayData();

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

function saveData(event) {
    var time=$(event.target).parent().attr("id");
    var schedule=$(event.target).siblings(".text").val();

    if(schedule==="") {
        window.alert("Please type into text field to save")
    } else { localStorage.setItem(time,schedule);
    window.alert("Saved!");
    }

}

$(".saveBtn").click(saveData);

function displayData() {
    $("#9 .text").val(localStorage.getItem("9"));
    $("#10 .text").val(localStorage.getItem("10"));
    $("#11 .text").val(localStorage.getItem("11"));
    $("#12 .text").val(localStorage.getItem("12"));
    $("#13 .text").val(localStorage.getItem("13"));
    $("#14 .text").val(localStorage.getItem("14"));
    $("#15 .text").val(localStorage.getItem("15"));
    $("#16 .text").val(localStorage.getItem("16"));
    $("#17 .text").val(localStorage.getItem("17"));
}
