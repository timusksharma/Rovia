import { OperationsState, Role, Shipment, ShipmentStatus } from "./types";

const permissions:Record<Role,string[]>={
  Admin:["*"],
  Dispatcher:["orders","routes","map","drivers","messages","alerts","calendar","documents","analytics"],
  "Fleet Manager":["fleet","drivers","maintenance","documents","analytics","map"],
};

export function canAccess(role:Role,area:string){return permissions[role].includes("*")||permissions[role].includes(area)}
export function calculateKpis(state:OperationsState){return {activeShipments:state.shipments.filter(x=>["Picked Up","In Transit","Delayed"].includes(x.status)).length,activeVehicles:state.vehicles.filter(x=>x.status==="Active").length,openAlerts:state.alerts.filter(x=>!x.resolved).length,totalRevenue:state.invoices.reduce((sum,x)=>sum+x.amount,0)}}
export function filterShipments(shipments:Shipment[],query:string,status="All"){const q=query.trim().toLowerCase();return shipments.filter(s=>(status==="All"||s.status===status)&&`${s.id} ${s.customer} ${s.origin} ${s.destination}`.toLowerCase().includes(q))}
export function canTransition(from:ShipmentStatus,to:ShipmentStatus){if(from===to)return true;if(["Delivered","Cancelled"].includes(from))return false;const allowed:Record<string,ShipmentStatus[]>={Draft:["Pending","Cancelled"],Pending:["Assigned","Cancelled"],Assigned:["Picked Up","Cancelled"],"Picked Up":["In Transit","Delayed"],"In Transit":["Delayed","Delivered"],Delayed:["In Transit","Delivered","Cancelled"]};return allowed[from]?.includes(to)??false}
