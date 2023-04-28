export interface  Vessel {
  _id:string;
  id:number;
  user?:string;
  name:string;
  description:string|null;
  year:number;
  type:string;
  size:string;
  location:string;
  pricePerDay:number;
  pricePerWeek:number;
  pictures?:any;
  pickupDay:string;
  returnDay:string
}

// Small yachts are typically shorter than 33 feet (10 m) length overall.[35] Trailer sailers that are readily towed by a car are generally shorter than 25 feet (7.6 m) length overall and weigh less than 5,000 pounds (2,300 kg).[33]
// Near-shore yachts typically range in size from 33–45 feet (10–14 m) length overall.[5]
// Offshore yachts typically exceed 45 feet (14 m) length overall.[35]


// Sailing Yacht: a yacht mainly propelled via wind and sails.
// Motor Yacht: a yacht propelled via one or more motors.
// Gulet Yacht: a hybrid yacht with both sails and motors.