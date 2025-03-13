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

function seats(){
    var seats = [false, true, false, true, true, true, false, true, false];
    for (var i = 0; i < seats.length; i++){
        //prompt("Enter Seat Number 1 - 9:")
        if(seats[i])
            alert("Seat " + i + " is available");
        else
        alert("Seat " + i + " is not available.");
    }
}

function initSeats(){
    var seats = [false, true, false, true, true, true, false, true, false];
    // Initialize the appearance of all seats
    for(var i = 0; i < seats.length; i++) {
        if(seats[i]){
            // Set the seat to available
            document.getElementById("Seat " + i).src = "Available.jpeg";
            document.getElementById("Seat " + i).alt = "Available Seat";
        }
        else{
            // Set the seat to unavailable
            document.getElementById("Seat " + i).src = "Unavailable.jpeg";
            document.getElementById("Seat " + i).alt = "unavailable Seat";
        }
    }
}