"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, Menu, X } from "lucide-react";
import { useState } from "react";
import { schedules } from "./data";
import { useBooking } from "./store";

export function Header(){
 const [open,setOpen]=useState(false); const path=usePathname(); const home=path==="/";
 const links=[['Services','/services'],['Destinations','/destinations'],['Reviews','/reviews']];
 return <header className={home?"header header-overlay":"header"}>
  <Link href="/" className="brand">ROVIA<span>°</span></Link>
  <nav>{links.map(([n,h])=><Link key={h} href={h}>{n}</Link>)}<Link href="/#how">How it works</Link></nav>
  <div className="header-end"><span>INR ₹</span><Link className="pill small" href="/search">Book a ride</Link><button className="menu" aria-label="Open menu" onClick={()=>setOpen(true)}><Menu/></button></div>
  {open&&<div className="mobile-nav"><button aria-label="Close menu" onClick={()=>setOpen(false)}><X/></button><span>ROVIA</span>{links.map(([n,h])=><Link onClick={()=>setOpen(false)} key={h} href={h}>{n}</Link>)}<Link href="/search">Book a ride <ArrowRight/></Link></div>}
 </header>
}
export function Footer(){return <footer><div className="brand">ROVIA°</div><p>Go further. Travel better.</p><div><Link href="/services">Services</Link><Link href="/destinations">Destinations</Link><Link href="/reviews">Reviews</Link></div><small>© 2026 Rovia — A portfolio concept. No real bookings.</small></footer>}
export function BookingSummary(){ const {booking,total}=useBooking(); const trip=schedules.find(s=>s.id===booking.scheduleId)||schedules[0]; return <aside className="summary"><span className="eyebrow">Your journey</span><h3>{booking.search.from} <ArrowRight size={18}/> {booking.search.to}</h3><div className="summary-time"><b>{trip.departure}</b><span>{trip.duration}</span><b>{trip.arrival}</b></div><p>{trip.vehicle}</p>{booking.seats.length>0&&<p>Seats <b>{booking.seats.join(", ")}</b></p>}<div className="total"><span>Total</span><b>₹{total.toLocaleString("en-IN")}</b></div></aside> }
export function Progress({step}:{step:number}){ return <div className="progress" aria-label={`Booking step ${step} of 3`}>{["Trip","Traveller","Payment"].map((x,i)=><div className={step>=i+1?"active":""} key={x}><i>{step>i+1?<Check size={13}/>:i+1}</i><span>{x}</span></div>)}</div> }
export function Back({href,label="Back"}:{href:string;label?:string}){return <Link href={href} className="back"><ArrowLeft size={16}/>{label}</Link>}
