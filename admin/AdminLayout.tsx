
import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BookOpen, 
  FileText, 
  Users, 
  UserSquare2, 
  LogOut,
  ChevronRight,
  Menu,
  X,
  ShieldCheck
} from 'lucide-react';

const AdminLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Close sidebar on mobile when navigating
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    navigate('/');
  };

  const menuItems = [
    { id: 'services', label: 'Services', icon: LayoutDashboard, path: '/admin/dashboard/services' },
    { id: 'programs', label: 'Programs', icon: BookOpen, path: '/admin/dashboard/programs' },
    { id: 'blog', label: 'Blog Posts', icon: FileText, path: '/admin/dashboard/blog' },
    { id: 'team', label: 'Team', icon: Users, path: '/admin/dashboard/team' },
    { id: 'board', label: 'Board Members', icon: UserSquare2, path: '/admin/dashboard/board' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-slate-900 text-white sticky top-0 z-[60] shadow-md">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="font-black text-lg">N</span>
          </div>
          <span className="text-lg font-bold tracking-tight">Admin Portal</span>
        </Link>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-slate-300 hover:text-white"
        >
          {isSidebarOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar / Sidebar Overlay */}
      <div className={`
        fixed inset-0 z-50 lg:relative lg:z-0 lg:flex lg:w-72 
        ${isSidebarOpen ? 'block' : 'hidden lg:block'}
      `}>
        {/* Backdrop for mobile */}
        <div 
          className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>

        {/* Sidebar Content */}
        <aside className="relative w-72 bg-slate-900 text-white h-full p-6 flex flex-col shrink-0">
          <div className="hidden lg:flex items-center space-x-3 mb-12">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="font-black text-xl">N</span>
              </div>
              <span className="text-xl font-bold tracking-tight">Admin Portal</span>
            </Link>
          </div>

          <nav className="space-y-2 flex-grow overflow-y-auto pr-2 custom-scrollbar">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-4 ml-2">Content Management</div>
            {menuItems.map(item => (
              <Link
                key={item.id}
                to={item.path}
                className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all ${
                  location.pathname === item.path ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon size={20} />
                  <span className="font-bold text-sm">{item.label}</span>
                </div>
                {location.pathname === item.path && <ChevronRight size={16}/>}
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-slate-800">
            <div className="flex items-center space-x-3 px-4 mb-6">
               <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">
                 <ShieldCheck size={16} className="text-blue-400" />
               </div>
               <div>
                 <div className="text-xs font-bold">Administrator</div>
                 <div className="text-[10px] text-slate-500">Live Session Active</div>
               </div>
            </div>
            <button 
              onClick={handleLogout}
              className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-400/10 transition-all font-bold text-sm"
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </aside>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow p-4 md:p-8 lg:p-12 overflow-y-auto">
        <div className="max-w-5xl mx-auto w-full">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
