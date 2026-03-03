import { Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';

const navItems = [
  { name: 'Jardim', path: '/' },
  { name: 'Enciclopédia', path: '/about' },
  { name: 'Guias', path: '/services' },
  { name: 'Cronograma', path: '/portfolio' },
  { name: 'Contato', path: '/contact' },
];

export default function Header() {
  const location = useLocation();

  return (
    <header className="h-full flex flex-col justify-between py-12 px-8 border-r border-petrol">
      <nav className="flex flex-col gap-6">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={clsx(
                'text-sm font-medium transition-all duration-300 hover:translate-x-1 flex items-center gap-2 rounded-md py-1 px-2 -ml-2',
                'focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-2',
                isActive ? 'text-petrol font-bold' : 'text-petrol/60 hover:text-petrol'
              )}
            >
              {item.name}
              {isActive && <span className="text-[10px] leading-none">↗</span>}
            </Link>
          );
        })}
      </nav>

      <div className="flex flex-col gap-6">
        <button className="group flex flex-col gap-2 text-left w-full hover:bg-petrol/5 p-3 -ml-3 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-petrol focus-visible:ring-offset-2">
          <div className="flex items-center gap-2 text-sm font-medium text-petrol">
            <div className="w-2 h-2 bg-petrol rounded-full group-hover:scale-125 transition-transform"></div>
            <span>Newsletter Técnica</span>
          </div>
          <p className="text-xs text-petrol/60 leading-tight">
            Receba micro-dossiês semanais sobre botânica aplicada.
          </p>
        </button>
        
        <p className="text-[10px] font-mono text-petrol/40 uppercase tracking-widest border-t border-petrol/10 pt-4">
          @VictorHerbarium
        </p>
      </div>
    </header>
  );
}
