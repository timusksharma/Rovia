"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { addOns, schedules } from "./data";
import { BookingState } from "./types";

const initial: BookingState = {
  search: { from:"New Delhi", to:"Jaipur", date:"2026-10-12", travellers:2 },
  scheduleId:"RV101", boarding:"", drop:"", seats:[], addOns:[], payment:"upi",
  traveller:{ name:"", phone:"", email:"", age:"", gender:"" }, bookingId:"RV-IND-48219"
};
type Store = { booking: BookingState; update: (value: Partial<BookingState>) => void; total:number; ready:boolean };
const Context = createContext<Store | null>(null);

export function BookingProvider({ children }:{ children:React.ReactNode }) {
  const [booking,setBooking] = useState(initial);
  const [ready,setReady] = useState(false);
  useEffect(()=>{
    const hydrate=setTimeout(()=>{
      try { const raw=sessionStorage.getItem("rovia:booking:v1"); if(raw) setBooking({...initial,...JSON.parse(raw)}); } catch { sessionStorage.removeItem("rovia:booking:v1"); }
      setReady(true);
    },0);
    return()=>clearTimeout(hydrate);
  },[]);
  useEffect(()=>{ if(ready) sessionStorage.setItem("rovia:booking:v1",JSON.stringify(booking)); },[booking,ready]);
  const update=(value:Partial<BookingState>)=>setBooking(old=>({...old,...value}));
  const total=useMemo(()=>{
    const trip=schedules.find(s=>s.id===booking.scheduleId) ?? schedules[0];
    const multiplier=trip.mode==="bus" ? Math.max(booking.seats.length,1) : 1;
    return trip.price*multiplier+booking.addOns.reduce((sum,id)=>sum+(addOns.find(a=>a.id===id)?.price ?? 0),0);
  },[booking]);
  return <Context.Provider value={{booking,update,total,ready}}>{children}</Context.Provider>;
}
export function useBooking(){ const value=useContext(Context); if(!value) throw new Error("useBooking requires BookingProvider"); return value; }
