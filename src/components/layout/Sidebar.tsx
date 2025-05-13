import { NavLink } from 'react-router-dom';
import { 
  Terminal, 
  Network, 
  Shield, 
  Zap,
  Lock,
  Wifi,
  LayoutDashboard,
  Server,
  User as UserIcon,
  X
} from 'lucide-react';
import { User } from '../../types/auth';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
  user: User | null;
}

const Sidebar = ({ isOpen, onClose, isMobile, user }: SidebarProps) => {
  const navigationItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Servers', path: '/dashboard/servers', icon: Server },
    { name: 'Profile', path: '/dashboard/profile', icon: UserIcon },
    { 
      type: 'divider',
      label: 'Protocols'
    },
    { name: 'SSH Tunnel', path: '/dashboard/ssh-tunnel', icon: Terminal },
    { name: 'VMess', path: '/dashboard/vmess', icon: Network },
    { name: 'Shadowsocks', path: '/dashboard/shadowsocks', icon: Shield },
    { name: 'VLESS', path: '/dashboard/vless', icon: Zap },
    { name: 'Trojan-Go', path: '/dashboard/trojan-go', icon: Lock },
    { name: 'WireGuard', path: '/dashboard/wireguard', icon: Wifi },
  ];

  const sidebarClasses = `
    fixed top-0 left-0 z-30 h-full w-64 bg-background-dark/95 backdrop-blur-lg
    border-r border-white/10 transform transition-transform duration-300 ease-in-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    ${!isMobile ? '!translate-x-0' : ''}
  `;

  return (
    <aside className={sidebarClasses}>
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-white/10">
          <h2 className="text-xl font-bold">VPN Dashboard</h2>
          {isMobile && (
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <div className="px-3 space-y-1">
            {navigationItems.map((item, index) => (
              item.type === 'divider' ? (
                <div
                  key={index}
                  className="pt-4 pb-2"
                >
                  <p className="px-3 text-xs font-semibold text-white/40 uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              ) : (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-item ${isActive ? 'active' : ''}`
                  }
                  onClick={isMobile ? onClose : undefined}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </NavLink>
              )
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <div className="text-sm text-white/60">
            <p>Logged in as</p>
            <p className="font-medium text-white">{user?.name}</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;