//Booking Class

class Booking {
    constructor(travelerName,destination,date,type){
        this.travelerName = travelerName;
        this.destination = destination;
        this.date = date;
        this.type = type;
    }
    
    describe(){
        return `${this.travelerName} booked a ${this.type} to ${this.destination} on ${this.date}.`
    }
}

//Flight Booking class

class FlightBooking extends Booking {
    constructor(travelerName,destination,date,flightNumber){
        super(travelerName,destination,date);
        this.flightNumber = flightNumber;
        this.type = "flight"
    }
    describe(){
        return `${this.travelerName} booked a flight to ${this.destination} on ${this.date} (Flight Number: ${this.flightNumber}).`
    }
}

//Test Bookings

let booking1 = new Booking("JT", "New York", "10/10/2025","Flight")
let booking2 = new Booking("Ben", "Flordia", "2/12/2026","Boat")
let booking3 = new Booking("Ellie", "London", "5/10/2025","Uber")

const bookings = [booking1, booking2, booking3]

const testBookings = [
            new FlightBooking("Alice Smith", "Paris", "2025-10-15", "AF123"),
            new Booking("Bob Jones", "Berlin", "2025-11-01", "train"),
            new FlightBooking("Cara Lee", "Tokyo", "2025-12-05", "JL456"),
        ];

// Add and Remove bookings

function addBooking(newBooking){
    bookings.push(newBooking)
}

function removeBooking(newBooking){
    bookings.splice(newBooking)
}

//Display and Filtered Display Bookings

function displayBooking(bookings){
    console.log("All bookings:")
    for(let i=0; i < bookings.length; i++){
        console.log(bookings[i].describe())
    }
}

function findBookingsByType(type, bookings){
    console.log(`All ${type} bookings:`)
    for(let i=0; i < bookings.length; i++){
        if (bookings[i].type == type){
            console.log(bookings[i].describe())
        }
    }
}

