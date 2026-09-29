export type TravelMode = "bus" | "cab" | "tempo" | "airport";

export interface Schedule {
  id: string; mode: TravelMode; name: string; vehicle: string; departure: string;
  arrival: string; duration: string; price: number; rating: number; seatsLeft: number;
  amenities: string[];
}
export interface SearchState { from: string; to: string; date: string; travellers: number; }
export interface Traveller { name: string; phone: string; email: string; age: string; gender: string; }
export interface BookingState {
  search: SearchState; scheduleId: string; boarding: string; drop: string;
  seats: string[]; addOns: string[]; traveller: Traveller; payment: string; bookingId: string;
}
