export type Role = "Admin" | "Dispatcher" | "Fleet Manager";
export type ShipmentStatus = "Draft" | "Pending" | "Assigned" | "Picked Up" | "In Transit" | "Delayed" | "Delivered" | "Cancelled";
export type VehicleStatus = "Active" | "Idle" | "Maintenance" | "Offline";
export type Priority = "Standard" | "Express" | "Critical";

export interface Stop { id:string; city:string; address:string; eta:string; completed:boolean }
export interface CargoItem { id:string; description:string; weight:number; quantity:number; category:string }
export interface TrackingEvent { id:string; time:string; title:string; location:string; detail:string }
export interface Shipment { id:string; customer:string; origin:string; destination:string; status:ShipmentStatus; priority:Priority; vehicleId?:string; driverId?:string; weight:number; value:number; progress:number; eta:string; created:string; cargo:CargoItem[]; stops:Stop[]; events:TrackingEvent[]; notes:string }
export interface VehicleTelemetry { x:number; y:number; speed:number; fuel:number; temperature:number; updated:string }
export interface MaintenanceRecord { id:string; type:string; date:string; cost:number; status:"Scheduled"|"Completed" }
export interface Vehicle { id:string; registration:string; type:string; model:string; status:VehicleStatus; capacity:number; utilization:number; odometer:number; driverId?:string; telemetry:VehicleTelemetry; maintenance:MaintenanceRecord[] }
export interface Driver { id:string; name:string; phone:string; status:"On route"|"Available"|"Off duty"; rating:number; onTime:number; trips:number; licence:string; licenceExpiry:string; vehicleId?:string; avatar:string }
export interface Alert { id:string; type:"Delay"|"Maintenance"|"Deviation"|"Document"; title:string; detail:string; severity:"High"|"Medium"|"Low"; shipmentId?:string; created:string; resolved:boolean }
export interface CalendarEvent { id:string; title:string; type:"Dispatch"|"Delivery"|"Maintenance"|"Compliance"; date:string; time:string; relatedId:string }
export interface Document { id:string; name:string; type:string; relatedTo:string; updated:string; expiry?:string; status:"Valid"|"Expiring"|"Pending" }
export interface Invoice { id:string; customer:string; amount:number; due:string; status:"Paid"|"Pending"|"Overdue" }
export interface MessageThread { id:string; name:string; role:string; unread:number; lastMessage:string; time:string; messages:{from:"me"|"them";text:string;time:string}[] }
export interface User { id:string; name:string; email:string; role:Role; status:"Active"|"Invited" }
export interface DashboardFilters { range:"Today"|"7 days"|"30 days"|"Quarter"; region:string; query:string }
export interface OperationsState { shipments:Shipment[]; vehicles:Vehicle[]; drivers:Driver[]; alerts:Alert[]; events:CalendarEvent[]; documents:Document[]; invoices:Invoice[]; threads:MessageThread[]; users:User[]; role:Role; filters:DashboardFilters }
