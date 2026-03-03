import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { Leaf, BookOpen, Sprout, Calendar, User } from 'lucide-react';

const navItems = [
  { name: 'Jardim', path: '/', icon: Leaf },
  { name: 'Enciclopédia', path: '/about', icon: BookOpen },
  { name: 'Guias', path: '/services', icon: Sprout },
  { name: 'Cronograma', path: '/portfolio', icon: Calendar },
  { name: 'Contato', path: '/contact', icon: User },
];

export default function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-paper border-t border-petrol/10 pb-safe pt-2 px-4 z-50 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex justify-between items-end max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                'flex flex-col items-center justify-center w-12 h-14 gap-1 transition-all duration-300 relative',
                isActive ? 'text-petrol -translate-y-2' : 'text-petrol/40 hover:text-petrol/80'
              )}
            >
              <div 
                className={clsx(
                  "p-2 rounded-2xl transition-all duration-300",
                  isActive ? "bg-petrol text-paper shadow-lg shadow-petrol/20" : "bg-transparent"
                )}
              >
                <Icon size={24} strokeWidth={isActive ? 2 : 1.5} />
              </div>
              
              <span className={clsx(
                "text-[10px] font-medium tracking-wide transition-opacity duration-300",
                isActive ? "opacity-100 font-bold" : "opacity-0"
              )}>
                {item.name}
              </span>
              
              {isActive && (
                <div className="absolute -bottom-2 w-1 h-1 rounded-full bg-petrol" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
