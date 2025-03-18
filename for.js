function takeStep() {
    for(var x = 0; x < 37; x++){
        alert(x);
    }
}
function filmRoll() {
    var count = prompt("Enter a number greater than 0:", "10");
    if(count > 0) {
        var x = count
        while (x > 0) {
            alert("Starting in..." + x);
            x--;
        }
        alert("Roll film!");

    }
    else
    alert("The number wasn't greater than 0. No movie for you!");

    // var count = prompt("Enter a number greater than 0.", " 10");
    // if(count > 0) {
    //     for (var x = count; x > 0; x--)
    //         alert("Starting in..." + x);
    //     alert("Roll film!");
    // }
    // else
    //     alert("The number wasn't greater than 0. No movie for you!");
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
var seats = [
    [false, true, false, true, true, true, false, true, false],
    [false, true, false, false, true, false, true, true, true],
    [true, true, true, true, true, true, false, true, false],
    [true, true, true, false, true, false, false, true, false]
];

var selectedSeat = -1; // Keeps track of the currently selected seat

// Initialize the appearance of all seats
function initSeats() {
    for (var i = 0; i < seats.length; i++) {
        for (var j = 0; j < seats[i].length; j++) {
            let seatImg = document.getElementById("seat" + i + "-" + j); // Corrected ID reference
            if (seatImg) {
                if (seats[i][j]) {
                    // Seat is available
                    seatImg.src = "Available.jpeg";
                    seatImg.alt = "Available Seat";
                } else {
                    // Seat is unavailable
                    seatImg.src = "Unavailable.jpeg";
                    seatImg.alt = "Unavailable Seat";
                }
            }
        }
    }
}

// Function to find and select three consecutive available seats
function findSeat() {
    // Reset selection if a seat was already chosen
    if (selectedSeat >= 0) {
        selectedSeat = -1;
        initSeats();
    }

    // Search for an available set of 3 consecutive seats
    for (var i = 0; i < seats.length; i++) {
        for (var j = 0; j < seats[i].length - 2; j++) {
            if (seats[i][j] && seats[i][j + 1] && seats[i][j + 2]) {
                // Highlight seats as selected
                updateSeatStatus(i, j, "seat_select.jpeg", "Your seat");
                updateSeatStatus(i, j + 1, "seat_select.jpeg", "Your seat");
                updateSeatStatus(i, j + 2, "seat_select.jpeg", "Your seat");

                // Prompt the user to accept the seats
                if (confirm(`Seats ${j + 1} through ${j + 3} in Row ${i + 1} are available. Accept?`)) {
                    selectedSeat = i;
                    return; // Exit after successful selection
                } else {
                    // Revert seat selection if rejected
                    updateSeatStatus(i, j, "Available.jpeg", "Available seat");
                    updateSeatStatus(i, j + 1, "Available.jpeg", "Available seat");
                    updateSeatStatus(i, j + 2, "Available.jpeg", "Available seat");
                }
            }
        }
    }
}

// Helper function to update seat status
function updateSeatStatus(row, col, imgSrc, altText) {
    let seatElement = document.getElementById("seat" + row + "-" + col);
    if (seatElement) {
        seatElement.src = imgSrc;
        seatElement.alt = altText;
    }
}



        // if(seats[i]) { // check if the seat is available
        //     selectedSeat = i;
        //     let seatImg = document.getElementById("Seat " + i);

        //     // update seat appearance to indicate Selection
        //     seatImg.src = "seat_select.jpeg";
        //     seatImg.alt = "Your Seat";

        //     // Ask user to confirm Seat Selection
        //     let accept = confirm("Seat " + (i + 1) + " is available. Accept?");
        //     if (accept) {
        //     // Seat is accepted, update availability
        //     seats[i] =false; // Mark as unavailable
        //     return;
        //     } else {
        //     // User rejected, reset appearance
        //     seatImg.src = "Available.jpeg";
        //     seatImg.alt = "Available Seat";
        //     }
        
   // alert ("No available Seats left");
    


