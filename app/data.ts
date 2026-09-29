import { Schedule } from "./types";

export const cities = ["New Delhi", "Jaipur", "Mumbai", "Pune", "Bengaluru", "Mysuru", "Chandigarh", "Manali", "Ahmedabad", "Udaipur", "Delhi Airport • DEL", "Mumbai Airport • BOM"];
export const schedules: Schedule[] = [
  { id:"RV101", mode:"bus", name:"Rovia Premier", vehicle:"Premium AC Coach", departure:"06:30", arrival:"11:15", duration:"4h 45m", price:699, rating:4.8, seatsLeft:6, amenities:["Air conditioning","Wi-Fi","USB charging","Reclining seats"] },
  { id:"RV102", mode:"cab", name:"Rovia Private", vehicle:"Toyota Innova Crysta", departure:"08:00", arrival:"12:20", duration:"4h 20m", price:2499, rating:4.9, seatsLeft:6, amenities:["Door pickup","Air conditioning","3 bags","Professional driver"] },
  { id:"RV103", mode:"tempo", name:"Rovia Together", vehicle:"12-seat Tempo Traveller", departure:"07:15", arrival:"12:15", duration:"5h", price:5499, rating:4.7, seatsLeft:12, amenities:["Private vehicle","Air conditioning","Luggage space","Door pickup"] },
  { id:"RV104", mode:"bus", name:"Rovia Select", vehicle:"Volvo Multi-Axle Sleeper", departure:"09:00", arrival:"13:55", duration:"4h 55m", price:899, rating:4.9, seatsLeft:2, amenities:["Air conditioning","Water bottle","Charging","Live tracking"] },
  { id:"RV105", mode:"bus", name:"Rovia Daylight", vehicle:"AC Seater Coach", departure:"12:30", arrival:"17:35", duration:"5h 05m", price:599, rating:4.6, seatsLeft:18, amenities:["Air conditioning","Charging","Luggage space"] },
  { id:"RV106", mode:"cab", name:"Rovia Executive", vehicle:"Maruti Suzuki Dzire", departure:"14:00", arrival:"18:35", duration:"4h 35m", price:1999, rating:4.7, seatsLeft:4, amenities:["Door pickup","Air conditioning","2 bags"] },
  { id:"RV107", mode:"airport", name:"Rovia Airport", vehicle:"Premium Airport Transfer", departure:"16:30", arrival:"21:00", duration:"4h 30m", price:2899, rating:4.9, seatsLeft:4, amenities:["Flight tracking","Meet & greet","60 min wait","2 bags"] }
];
export const addOns = [
  { id:"insurance", name:"Travel insurance", note:"Protection for the unexpected", price:49 },
  { id:"luggage", name:"Extra luggage", note:"One additional checked bag", price:199 },
  { id:"flex", name:"Flexible cancellation", note:"Change plans up to 2 hours before", price:149 },
  { id:"priority", name:"Priority boarding", note:"Board before general seating", price:79 },
];
export const boardingPoints = ["Kashmiri Gate ISBT · 06:30", "Dhaula Kuan · 06:50", "IFFCO Chowk, Gurugram · 07:20"];
export const dropPoints = ["Sindhi Camp Bus Stand", "Narayan Singh Circle", "Jaipur Railway Station"];
