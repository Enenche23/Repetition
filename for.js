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

function findSeat() {
    let availableSeats = []; // To store all available seat sets

    // Iterate through each row to find three consecutive available seats
    for (let row = 0; row < seats.length; row++) {
        for (let col = 0; col <= seats[row].length - 3; col++) {
            if (seats[row][col] && seats[row][col + 1] && seats[row][col + 2]) {
                // Store the seat positions
                availableSeats.push(`Row ${row + 1}: Seats ${col + 1} to ${col + 3}`);
            }
        }
    }

    // Show the user all available options
    if (availableSeats.length > 0) {
        let seatOptions = "Available seat sets:\n" + availableSeats.join("\n");
        alert(seatOptions);
    } else {
        alert("No three consecutive seats available in any row.");
    }
}



// Function to find and select three consecutive available seats
// function findSeat() {
//     // Reset selection if a seat was already chosen
//     if (selectedSeat >= 0) {
//         selectedSeat = -1;
//         initSeats();
//     }

//     // Search for an available set of 3 consecutive seats
//     for (var i = 0; i < seats.length; i++) {
//         for (var j = 0; j < seats[i].length - 2; j++) {
//             if (seats[i][j] && seats[i][j + 1] && seats[i][j + 2]) {
//                 // Highlight seats as selected
//                 updateSeatStatus(i, j, "seat_select.jpeg", "Your seat");
//                 updateSeatStatus(i, j + 1, "seat_select.jpeg", "Your seat");
//                 updateSeatStatus(i, j + 2, "seat_select.jpeg", "Your seat");

//                 // Prompt the user to accept the seats
//                 if (confirm(`Seats ${j + 1} through ${j + 3} in Row ${i + 1} are available. Accept?`)) {
//                     selectedSeat = i;
//                     return; // Exit after successful selection
//                 } else {
//                     // Revert seat selection if rejected
//                     updateSeatStatus(i, j, "Available.jpeg", "Available seat");
//                     updateSeatStatus(i, j + 1, "Available.jpeg", "Available seat");
//                     updateSeatStatus(i, j + 2, "Available.jpeg", "Available seat");
//                 }
//             }
//         }
//     }

//     getSeatStatus();
// }

// Helper function to update seat status
// function updateSeatStatus(row, col, imgSrc, altText) {
//     let seatElement = document.getElementById("seat" + row + "-" + col);
//     if (seatElement) {
//         seatElement.src = imgSrc;
//         seatElement.alt = altText;
//     }
// }

function getSeatStatus(seatNum) {
    const row = Math.floor(seatNum / seats[0].length);
    const col = seatNum % seats[0].length;

    // Ensure seatNum is within valid range
    if (row >= seats.length || col >= seats[0].length) {
        console.error("Invalid seat number:", seatNum);
        return "Invalid seat";
    }

    // Check if the seat is part of the currently selected block
    if (selectedSeat !== -1 && (seatNum === selectedSeat || seatNum === selectedSeat + 1 || seatNum === selectedSeat + 2)) {
        return "Yours";
    }

    // Check if the seat is available
    return seats[row][col] ? "Available" : "Unavailable";
}

function showSeatStatus(seatNum) {
    alert("This seat is " + getSeatStatus(seatNum) + ".");
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

   window.onload = function () {
    // Ensure the "Find Seat" button exists before adding an event listener
    let findSeatBtn = document.getElementById("findseats");
    if (findSeatBtn) {
        findSeatBtn.onclick = findSeat;
    } else {
        console.error("Button with ID 'findseats' not found.");
    }

    // Wire the seat image events dynamically for all 36 seats
    for (let i = 0; i < 36; i++) {
        let seat = document.getElementById("Seat " + i);  // Corrected the ID format
        if (seat) {
            seat.onclick = function () { showSeatStatus(i); };
        } else {
            console.error(`Seat ${i} not found in the document.`);
        }
    }

    // Initialize the seat appearance
    initSeats();
};


    


