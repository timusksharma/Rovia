"use client";
import { createContext,useContext,useEffect,useMemo,useState } from "react";
import { initialState } from "./data";
import { canAccess } from "./logic";
import { Alert,CalendarEvent,OperationsState,Role,Shipment,ShipmentStatus } from "./types";
type Ctx={state:OperationsState;ready:boolean;setRole:(r:Role)=>void;setQuery:(q:string)=>void;createShipment:(s:Shipment)=>void;updateShipment:(id:string,p:Partial<Shipment>)=>void;resolveAlert:(id:string)=>void;addEvent:(e:CalendarEvent)=>void;reset:()=>void;can:(area:string)=>boolean;unresolved:Alert[]};
const Context=createContext<Ctx|null>(null);const KEY="rovia:logistics:v1";
export function OperationsProvider({children}:{children:React.ReactNode}){const [state,setState]=useState(initialState);const [ready,setReady]=useState(false);
 useEffect(()=>{const t=setTimeout(()=>{try{const raw=localStorage.getItem(KEY);if(raw)setState({...initialState,...JSON.parse(raw)})}catch{localStorage.removeItem(KEY)}setReady(true)},0);return()=>clearTimeout(t)},[]);
 useEffect(()=>{if(ready)localStorage.setItem(KEY,JSON.stringify(state))},[state,ready]);
 const patch=(p:Partial<OperationsState>)=>setState(s=>({...s,...p}));
 const setRole=(role:Role)=>patch({role});const setQuery=(query:string)=>patch({filters:{...state.filters,query}});
 const createShipment=(shipment:Shipment)=>patch({shipments:[shipment,...state.shipments]});
 const updateShipment=(id:string,p:Partial<Shipment>)=>patch({shipments:state.shipments.map(x=>x.id===id?{...x,...p}:x)});
 const resolveAlert=(id:string)=>patch({alerts:state.alerts.map(x=>x.id===id?{...x,resolved:true}:x)});
 const addEvent=(event:CalendarEvent)=>patch({events:[...state.events,event]});const reset=()=>{localStorage.removeItem(KEY);localStorage.removeItem("rovia:demo-count");setState(initialState)};
 const can=(area:string)=>canAccess(state.role,area);
 const unresolved=useMemo(()=>state.alerts.filter(x=>!x.resolved),[state.alerts]);
 return <Context.Provider value={{state,ready,setRole,setQuery,createShipment,updateShipment,resolveAlert,addEvent,reset,can,unresolved}}>{children}</Context.Provider>}
export function useOps(){const c=useContext(Context);if(!c)throw new Error("useOps requires OperationsProvider");return c}
export const statusOrder:ShipmentStatus[]=["Draft","Pending","Assigned","Picked Up","In Transit","Delayed","Delivered","Cancelled"];
