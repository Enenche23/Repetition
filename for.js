function takeStep() {
    for(var x = 0; x < 37; x++){
        alert(x);
    }
}

function filmRoll() {
    var count = prompt("Enter a number greater than 0.", " 10");
    if(count > 0) {
        for (var x = count; x > 0; x--)
            alert("Starting in..." + x);
        alert("Roll film!");
    }
    else
        alert("The number wasn't greater than 0. No movie for you!");
}

function movieSeats() {
    var seat1 = false;
    var seat2 = true;
    var seat3 = false;
    var seat4 = true;
    var seat5 = true;
    var seat6 = true;
    var seat7 = false;
    var seat8 = false;
    var seat9 = false;
    var showTime = ["12:30", "2:45", "5:00", "7:15", "9:30" ];

    alert("The late movie starts at " + showTime[4] + " .");

    for (var i = 0; i < 10; i++) {

    }
}