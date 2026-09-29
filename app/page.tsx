"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, MapPin, Minus, Plus, Quote, Repeat2, Search, ShieldCheck, Sparkles, Users } from "lucide-react";
import { cities } from "./data";
import { Footer, Header } from "./components";
import { useBooking } from "./store";

function SearchPanel(){
 const {booking,update}=useBooking(); const [search,setSearch]=useState(booking.search); const router=useRouter();
 const go=()=>{update({search}); router.push(`/search?from=${encodeURIComponent(search.from)}&to=${encodeURIComponent(search.to)}&date=${search.date}&travellers=${search.travellers}`)};
 return <div className="search-panel">
  <label><span><MapPin/>From</span><input list="cities" value={search.from} onChange={e=>setSearch({...search,from:e.target.value})}/></label>
  <button className="swap" aria-label="Swap route" onClick={()=>setSearch({...search,from:search.to,to:search.from})}><Repeat2/></button>
  <label><span><MapPin/>To</span><input list="cities" value={search.to} onChange={e=>setSearch({...search,to:e.target.value})}/></label>
  <label><span><CalendarDays/>Departure</span><input type="date" value={search.date} onChange={e=>setSearch({...search,date:e.target.value})}/></label>
  <div className="travellers"><span><Users/>Travellers</span><div><button aria-label="Remove traveller" onClick={()=>setSearch({...search,travellers:Math.max(1,search.travellers-1)})}><Minus/></button><b>{search.travellers}</b><button aria-label="Add traveller" onClick={()=>setSearch({...search,travellers:Math.min(6,search.travellers+1)})}><Plus/></button></div></div>
  <button className="search-submit" onClick={go}><Search/><span>Search rides</span></button>
  <datalist id="cities">{cities.map(c=><option key={c}>{c}</option>)}</datalist>
 </div>
}
function IntroLoader(){ const [show,setShow]=useState(false); useEffect(()=>{if(!sessionStorage.getItem("rovia:intro")){sessionStorage.setItem("rovia:intro","1");const reveal=setTimeout(()=>setShow(true),0);const hide=setTimeout(()=>setShow(false),1700);return()=>{clearTimeout(reveal);clearTimeout(hide)}}},[]); return show?<motion.div className="loader" initial={{y:0}} animate={{y:"-100%"}} transition={{delay:1.15,duration:.55,ease:[.76,0,.24,1]}}><span>ROVIA°</span><motion.i initial={{width:0}} animate={{width:"100%"}} transition={{duration:1}}/><small>INDIA, IN MOTION</small></motion.div>:null }
const services=[
 ["01","Intercity coach","City to city, without the chaos.","Relax into generous seats, clear schedules and thoughtful service."],
 ["02","Private cab","Your car. Your schedule.","Door-to-door journeys with trusted professional drivers."],
 ["03","Tempo traveller","Better journeys, together.","Flexible group travel for families, friends and teams."],
 ["04","Airport transfer","Land. We'll handle the rest.","Reliable pickups, live flight tracking and upfront fares."]
];
export default function Home(){return <><IntroLoader/><main><section className="hero"><Header/><div className="hero-image"/><div className="hero-copy"><span className="eyebrow light">Premium intercity travel · India</span><motion.h1 initial={{opacity:0,y:40}} animate={{opacity:1,y:0}}>Go further.<br/><em>Travel better.</em></motion.h1><p>Beautifully considered journeys across India,<br/>from your city to the next.</p></div><a href="#discover" className="scroll"><ArrowDown/> Discover</a><SearchPanel/></section>
 <section className="manifesto" id="discover"><span className="eyebrow">Rovia, in numbers</span><h2>Built for the distance<br/>between <em>here</em> and <em>there.</em></h2><div className="stats"><div><b>250K<sup>+</sup></b><span>Journeys completed</span></div><div><b>80<sup>+</sup></b><span>Cities connected</span></div><div><b>150<sup>+</sup></b><span>Routes across India</span></div><div><b>4.8</b><span>Average rating</span></div></div></section>
 <section className="feature"><div className="feature-image"/><div className="feature-copy"><span className="eyebrow light">Featured route · 281 km</span><h2>New Delhi<br/>to <em>Jaipur.</em></h2><div className="route-line"><i/><span>4h 45m</span><i/></div><p>Premium AC Coach</p><b>from ₹699</b><Link className="round-link" href="/search"><ArrowUpRight/></Link></div></section>
 <section className="services"><div className="section-head"><span className="eyebrow">Ways to travel</span><h2>One platform.<br/><em>Four ways to move.</em></h2></div>{services.map((s,i)=><article key={s[0]}><div className={`service-visual visual-${i}`}><span>{s[0]}</span>{i===0?<div className="coach-shape">ROVIA</div>:i===1?<div className="car-shape"/>:i===2?<div className="van-shape"/>:<div className="airport-code">DEL<br/><ArrowRight/></div>}</div><div><span className="eyebrow">{s[1]}</span><h3>{s[2]}</h3><p>{s[3]}</p><Link href="/services">Explore service <ArrowUpRight/></Link></div></article>)}</section>
 <section className="how" id="how"><div className="how-sticky"><span className="eyebrow light">How Rovia works</span><h2>Four small steps.<br/><em>One remarkable journey.</em></h2><div className="road"><i/><div className="moving-dot"/></div></div><div className="steps">{[["01","Choose your route","Tell us where the road should take you."],["02","Compare your ride","Clear schedules, honest prices, no surprises."],["03","Make it yours","Choose your seat and the extras you need."],["04","You're on your way","Your ticket, your plan, all in one place."]].map(x=><article key={x[0]}><b>{x[0]}</b><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>
 <section className="destinations"><div className="section-head"><span className="eyebrow">Worth the journey</span><h2>Places calling<br/><em>your name.</em></h2><Link href="/destinations">Explore all <ArrowRight/></Link></div><div className="destination-grid">{[["JAIPUR","The pink city","Delhi → Jaipur · from ₹599"],["MANALI","Above the clouds","Chandigarh → Manali · from ₹899"],["UDAIPUR","City of lakes","Ahmedabad → Udaipur · from ₹749"]].map((d,i)=><Link href="/search" className={`destination d${i}`} key={d[0]}><span>0{i+1}</span><div><small>{d[1]}</small><h3>{d[0]}</h3><p>{d[2]}</p></div><ArrowUpRight/></Link>)}</div></section>
 <section className="testimonial"><Quote/><blockquote>“For once, the journey felt<br/>as considered as the destination.”</blockquote><div><b>Aarav Mehta</b><span>Business traveller · Delhi → Jaipur</span></div></section>
 <section className="promise"><ShieldCheck/><div><span className="eyebrow light">The Rovia promise</span><h2>Clear prices.<br/>Thoughtful journeys.<br/><em>No surprises.</em></h2></div><Sparkles/></section>
 <section className="final-cta"><div><span className="eyebrow light">Where to next?</span><h2>Your next city<br/>is waiting.</h2><a href="#top" onClick={e=>{e.preventDefault();scrollTo({top:0,behavior:"smooth"})}}>Find your ride <ArrowRight/></a></div></section></main><Footer/></>}
