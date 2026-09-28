import {
  LayoutDashboard,
  Radio,
  AlertTriangle,
  BarChart3,
  Users,
  Car,
  Camera,
  BrainCircuit,
  Settings,
  LogOut,
} from 'lucide-react'
import { NavLink } from 'react-router'

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo */}
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">
          #LOGO
        </div>

        <div>
          <h1>Traffic AI</h1>
          <span>Monitoring System</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">

        {/* Overview */}
        <div className="sidebar-section">
          <p className="sidebar-section-title">
            Overview
          </p>

          <NavLink to="/dashboard" className="sidebar-link">
            <LayoutDashboard size={20} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/live" className="sidebar-link">
            <Radio size={20} />
            <span>Live Monitoring</span>
          </NavLink>

          <NavLink to="/violations" className="sidebar-link">
            <AlertTriangle size={20} />
            <span>Violations</span>
          </NavLink>

          <NavLink to="/analytics" className="sidebar-link">
            <BarChart3 size={20} />
            <span>Analytics</span>
          </NavLink>
        </div>

        {/* Management */}
        <div className="sidebar-section">
          <p className="sidebar-section-title">
            Management
          </p>

          <NavLink to="/users" className="sidebar-link">
            <Users size={20} />
            <span>Users</span>
          </NavLink>

          <NavLink to="/vehicles" className="sidebar-link">
            <Car size={20} />
            <span>Vehicles</span>
          </NavLink>

          <NavLink to="/cameras" className="sidebar-link">
            <Camera size={20} />
            <span>Cameras</span>
          </NavLink>
        </div>

        {/* System */}
        <div className="sidebar-section">
          <p className="sidebar-section-title">
            System
          </p>

          <NavLink to="/ai-models" className="sidebar-link">
            <BrainCircuit size={20} />
            <span>AI Models</span>
          </NavLink>

          <NavLink to="/settings" className="sidebar-link">
            <Settings size={20} />
            <span>Settings</span>
          </NavLink>
        </div>

      </nav>

      {/* Bottom section */}
      <div className="sidebar-bottom">
        <button className="sidebar-logout">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar