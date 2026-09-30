"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Bell,
  CalendarDays,
  ChevronDown,
  CircleDollarSign,
  Compass,
  Container,
  FileText,
  LayoutDashboard,
  LogOut,
  MapPin,
  Menu,
  MessageSquare,
  Navigation,
  Package,
  Plus,
  Route,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  Truck,
  Users,
  X
} from "lucide-react";
import { useOps } from "../lib/store";
import { Role } from "../lib/types";
import { CreateShipment } from "./UI";

const navItems = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard },
  { label: "Live Map", href: "/live-map", icon: Navigation },
  { label: "Shipments", href: "/orders", icon: Package },
  { label: "Fleet Telematics", href: "/fleet", icon: Truck },
  { label: "Drivers & Crew", href: "/drivers", icon: Users },
  { label: "Routes & Corridors", href: "/routes", icon: Route },
  { label: "Dispatch Calendar", href: "/calendar", icon: CalendarDays },
  { label: "Analytics & BI", href: "/analytics", icon: BarChart3 },
  { label: "Financials", href: "/finance", icon: CircleDollarSign },
  { label: "Documents", href: "/documents", icon: FileText },
  { label: "Messages", href: "/messages", icon: MessageSquare, badge: 3 },
  { label: "Exceptions & Alerts", href: "/alerts", icon: AlertTriangle, dynamicBadge: true },
  { label: "Access & Roles", href: "/users", icon: ShieldCheck },
  { label: "System Settings", href: "/settings", icon: Settings }
];

export function Shell({
  children,
  title,
  subtitle,
  actions
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
}) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const { state, setRole, setQuery, unresolved, can } = useOps();

  return (
    <div className="cockpit-layout">
      {/* Sleek Deep Navy Sidebar */}
      <aside className={`sidebar-cockpit ${open ? "open" : ""}`}>
        {/* Brand Lockup */}
        <div className="brand-header">
          <div className="brand-symbol">
            <Container className="w-5 h-5 text-white" />
          </div>
          <div className="brand-text">
            <span className="brand-name">ROVIA</span>
            <span className="brand-sub">CONTROL TOWER</span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="mobile-close-btn"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Primary Navigation */}
        <nav className="nav-container">
          <div className="nav-group-label">OPERATIONS</div>
          {navItems.slice(0, 7).map(item => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? path === "/"
                : path === item.href || path.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`nav-tab ${isActive ? "active" : ""}`}
              >
                <Icon size={18} className="nav-icon" />
                <span className="nav-label">{item.label}</span>
              </Link>
            );
          })}

          <div className="nav-group-label">INSIGHTS & SUPPORT</div>
          {navItems.slice(7).map(item => {
            const Icon = item.icon;
            const isActive = path === item.href || path.startsWith(item.href + "/");
            const badgeCount = item.dynamicBadge ? unresolved.length : item.badge;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`nav-tab ${isActive ? "active" : ""}`}
              >
                <Icon size={18} className="nav-icon" />
                <span className="nav-label">{item.label}</span>
                {badgeCount && badgeCount > 0 ? (
                  <span className={`nav-badge ${item.dynamicBadge ? "alert-badge" : ""}`}>
                    {badgeCount}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer Status Indicator */}
        <div className="sidebar-foot">
          <div className="system-status-indicator">
            <span className="status-blip" />
            <div>
              <b>Network Operational</b>
              <small>All India 8 Hubs Connected</small>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Workspace */}
      <div className="workspace-main">
        {/* Modern Top Header Bar */}
        <header className="header-glass">
          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>

          {/* Greeting or Breadcrumb Area */}
          <div className="header-welcome">
            <h2 className="welcome-greeting">
              Good morning, <span>{state.role}</span>
            </h2>
            <p className="welcome-date">India Logistics Network · Live Operations Snapshot</p>
          </div>

          {/* Search Bar with Shortcut */}
          <div className="header-search">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search shipment number, truck, driver, hub..."
              value={state.filters.query}
              onChange={e => setQuery(e.target.value)}
              aria-label="Global shipment search"
            />
            <kbd className="search-kbd">⌘ K</kbd>
          </div>

          {/* Top Actions & Profile Zone */}
          <div className="header-actions">
            {can("orders") && (
              <button
                className="btn-create-top"
                onClick={() => setCreateOpen(true)}
              >
                <Plus size={15} />
                <span>New Shipment</span>
              </button>
            )}

            {/* Notification Bell with Badge */}
            <Link
              href="/alerts"
              className="action-icon-pill"
              aria-label={`${unresolved.length} unresolved alerts`}
            >
              <Bell size={17} />
              {unresolved.length > 0 && (
                <span className="badge-count">{unresolved.length}</span>
              )}
            </Link>

            {/* Role Switcher Pill */}
            <div className="role-switcher-pill">
              <span className="role-lbl">{state.role}</span>
              <select
                aria-label="Switch operator role"
                value={state.role}
                onChange={e => setRole(e.target.value as Role)}
              >
                <option value="Admin">Admin</option>
                <option value="Dispatcher">Dispatcher</option>
                <option value="Fleet Manager">Fleet Manager</option>
              </select>
              <ChevronDown size={14} className="role-chevron" />
            </div>

            {/* User Profile Avatar */}
            <div className="user-profile-chip" title={`${state.role} Profile`}>
              <div className="user-avatar-gradient">
                <span>{state.role === "Admin" ? "AS" : state.role === "Dispatcher" ? "RK" : "MN"}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Page Header & Actions */}
        <main className="main-content-area">
          {(title || actions) && (
            <div className="page-header-row">
              <div className="page-title-box">
                {title && <h1 className="page-main-title">{title}</h1>}
                {subtitle && <p className="page-subtitle">{subtitle}</p>}
              </div>
              {actions && <div className="page-actions-box">{actions}</div>}
            </div>
          )}

          {children}
        </main>

        {/* Mobile Bottom Tabs */}
        <nav className="mobile-dock-tabs">
          {navItems.slice(0, 5).map(item => {
            const Icon = item.icon;
            const isActive =
              item.href === "/"
                ? path === "/"
                : path === item.href || path.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`dock-tab ${isActive ? "active" : ""}`}
              >
                <Icon size={19} />
                <span>{item.label.split(" ")[0]}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Backdrop for Mobile Sidebar Drawer */}
      {open && (
        <div
          className="drawer-overlay"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Create Shipment Drawer */}
      <CreateShipment open={createOpen} onClose={() => setCreateOpen(false)} />
    </div>
  );
}
