import { Bell, Search, Menu } from 'lucide-react';

interface HeaderProps {
  title: string;
  onMenuClick?: () => void;
}

export function Header({ title, onMenuClick }: HeaderProps) {
  return (
    <header className="bg-white border-b border-border px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {onMenuClick && (
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 hover:bg-muted rounded-lg"
            >
              <Menu size={20} />
            </button>
          )}
          <h2 className="text-foreground">{title}</h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-muted px-4 py-2 rounded-lg w-80">
            <Search size={18} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search orders, customers, products..."
              className="bg-transparent border-none outline-none flex-1 text-sm"
            />
          </div>

          <button className="relative p-2 hover:bg-muted rounded-lg">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
