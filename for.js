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
    var seatNo = prompt("Enter Seat Number 1 - 9:")
    for (var i = seatNo; i < seats.length; i++){
        if(seats[i])
            alert("Seat " + i + " is available");
        else
        alert("Seat " + i + " is NOT available.");
    }
}

// Declare Seats globally to make them accessible across functions

var seats = [false, true, false, true, true, true, false, true, false];
var selectedSeat = -1; // Keeps track of the currently selected seat


function initSeats(){
    // Initialize the appearance of all seats
    for(var i = 0; i < seats.length; i++) {
        if(seats[i]){
            let seatImg = document.getElementById("Seat " + i);
            if (seats[i]) {
                // Seat is available
                seatImg.src = "Available.jpeg";
                seatImg.alt = "Available Seat";
            } else {
                // Seat is Unavailable
                seatImg.src = "Unavailable.jpeg";
                seatImg.alt = "Unavailable Seat";
            }
        }
    }
}

function findSeat() {
    // Reset selection if a seat was already chosen

    if (selectedSeat >= 0) {
        selectedSeat = -1;
        initSeats();
    }

    // search for an available Seat
    for (var i=0; i < seats.length; i++){
        if(seats[i]) { // check if the seat is available
            selectedSeat = i;
            let seatImg = document.getElementById("Seat " + i);

            // update seat appearance to indicate Selection
            seatImg.src = "seat_select.jpeg";
            seatImg.alt = "Your Seat";

            // Ask user to confirm Seat Selection
            let accept = confirm("Seat " + (i + 1) + " is available. Accept?");
            if (accept) {
            // Seat is accepted, update availability
            seats[i] =false; // Mark as unavailable
            return;
            } else {
            // User rejected, reset appearance
            seatImg.src = "Available.jpeg";
            seatImg.alt = "Available Seat";
            }
        }
    }

    alert ("No available Seats left");
}
