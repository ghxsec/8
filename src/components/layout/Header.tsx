import { Menu, Bell, Settings } from 'lucide-react';
import { User } from '../../types/auth';

interface HeaderProps {
  onMenuClick: () => void;
  user: User | null;
}

const Header = ({ onMenuClick, user }: HeaderProps) => {
  return (
    <header className="bg-background-dark/50 backdrop-blur-md border-b border-white/10 sticky top-0 z-20">
      <div className="px-4 h-16 flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-white/10 rounded-lg md:hidden"
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          <button
            className="p-2 hover:bg-white/10 rounded-lg relative"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent-purple rounded-full" />
          </button>
          
          <button
            className="p-2 hover:bg-white/10 rounded-lg"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            <div className="hidden md:block">
              <p className="text-sm font-medium">{user?.name}</p>
              <p className="text-xs text-white/60">{user?.email}</p>
            </div>
            <div className="w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center">
              <span className="text-sm font-medium">
                {user?.name?.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;