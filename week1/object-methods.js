let resturant = {
	
	name:'ASB',
	guestCapacity: 75,
	guestCount:0,
	//Method - A object property whos value is a function
	checkAvailability: function(partySize){
		
		//this references the object that the method is defined on
		return partySize < this.guestCapacity-this.guestCount;
		
	},
	seatParty: function(partySize){
		this.guestCount = this.guestCount + partySize;
	},
	removeParty: function(partySize){
		this.guestCount = this.guestCount - partySize;
	}
}


//removeParty, remvoes from guest count

resturant.seatParty(72);
console.log(resturant.checkAvailability(4));
resturant.removeParty(10);
console.log(resturant.checkAvailability(4));
