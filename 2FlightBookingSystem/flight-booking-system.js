class FlightBookingSystem {
    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {
        let existingFlight = this.flights.find(f => f.flightNumber == flightNumber);

        this.flights.push({flightNumber, destination, departureTime, price});
        
        if(!existingFlight) {
            return `Flight ${flightNumber} to ${destination} has been added to the system.`
        } else {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        } 
    }

    bookFlight (passengerName, flightNumber) {
        let foundFlight = this.flights.find(f => f.flightNumber == flightNumber)
        if(!foundFlight) {
            return `Flight ${flightNumber} is not available for booking.`;
        } else {
            this.bookings.push( {passengerName, flightNumber});
            this.bookingsCount++;
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
        }
    }
    cancelBooking (passengerName, flightNumber) {
        let foundBookingIndex = this.bookings.findIndex(b => b.passengerName === passengerName && b.flightNumber === flightNumber);
        if(foundBookingIndex === -1) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        } else {
        this.bookings.splice(foundBookingIndex, 1);
        this.bookingsCount--;
        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
        }
    }
    showBookings(criteria) {
        let result = [];
    
        if(this.bookings.length === 0) {
            throw new Error('No bookings have been made yet.');
        }

        if(criteria === 'all') {
            result.push(`All bookings(${this.bookingsCount}):`);
            this.bookings.forEach(b => result.push(`${b.passengerName} booked for flight ${b.flightNumber}.`));
        }
        
        if(criteria === 'cheap') {
            let cheapFlight = this.flights.find(f => f.price <= 100);
            if(!cheapFlight) {
                return "No cheap bookings found.";
            } else {
                result.push("Cheap bookings:");
                let filtered = this.bookings.filter(c => c.flightNumber === cheapFlight.flightNumber)
                filtered.forEach(f => result.push(`${f.passengerName} booked for flight ${f.flightNumber}.`));
            }
        } 
        
        if(criteria === 'expensive') {
            let expensiveFlight = this.flights.find(f => f.price > 100);
            if(!expensiveFlight) {
                return "No expensive bookings found."
            } else {
                result.push("Expensive bookings:");
               let filtered = this.bookings.filter(e => e.flightNumber === expensiveFlight.flightNumber);
               filtered.forEach(b => result.push(`${b.passengerName} booked for flight ${b.flightNumber}.`));   
            }    
        }
        if (!criteria) {
            throw new Error("Invalid criteria.")
        }

        return result.join('\n').trim();  
    }

}
const system = new FlightBookingSystem("TravelWorld");
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 20));
  console.log(system.addFlight("BB202", "New York", "10:30 AM", 10));
  console.log(system.bookFlight("Alice", "AA101"));
  console.log(system.bookFlight("Bob", "BB202"));
  console.log(system.showBookings("expensive"));
  console.log(system.showBookings("cheap"));





