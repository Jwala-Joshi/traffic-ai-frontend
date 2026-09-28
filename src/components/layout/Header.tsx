import { Bell, ChevronDown, Moon, Sun, User} from 'lucide-react'
import { useTheme } from '../../context/useTheme'

function Header() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="header">
      <div className="header-page">
        <h2>Traffic AI</h2>
      </div>

      <div className="header-actions">
        <button
          className="header-icon-button"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <Moon size={20} />
          ) : (
            <Sun size={20} />
          )}
        </button>

        <button
          className="header-icon-button"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="notification-dot" />
        </button>

        <button className="header-user">
          <span className="header-user-icon">
            <User size={18} />
          </span>

          <span className="header-user-info">
            <strong>Admin User</strong>
            <small>Administrator</small>
          </span>

          <ChevronDown size={16} />
        </button>
      </div>
    </header>
  )
}

export default Header