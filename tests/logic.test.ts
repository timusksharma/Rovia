import {describe,expect,it} from "vitest";
import {calculateKpis,canAccess,canTransition,filterShipments} from "../app/lib/logic";
import {initialState} from "../app/lib/data";

describe("operations domain",()=>{
  it("calculates shared dashboard totals",()=>{expect(calculateKpis(initialState)).toMatchObject({activeShipments:4,activeVehicles:4,openAlerts:4})});
  it("filters shipments by text and status",()=>{expect(filterShipments(initialState.shipments,"Mumbai","Delayed").map(x=>x.id)).toEqual(["RVL-58457"])});
  it("enforces role permissions",()=>{expect(canAccess("Admin","finance")).toBe(true);expect(canAccess("Dispatcher","finance")).toBe(false);expect(canAccess("Fleet Manager","fleet")).toBe(true)});
  it("prevents reopening completed shipments",()=>{expect(canTransition("In Transit","Delivered")).toBe(true);expect(canTransition("Delivered","In Transit")).toBe(false)});
});
