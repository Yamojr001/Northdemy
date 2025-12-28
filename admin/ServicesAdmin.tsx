
import React, { useState, useEffect } from 'react';
import { Plus, Trash2, CheckCircle2, LayoutDashboard, Search } from 'lucide-react';
import { DataManager } from '../utils/dataManager';

const ServicesAdmin: React.FC = () => {
  const [items, setItems] = useState(DataManager.getServices());
  const [formData, setFormData] = useState<any>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    DataManager.addService(formData);
    setItems(DataManager.getServices());
    setFormData({});
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this service?')) {
      DataManager.deleteItem('SERVICES', id);
      setItems(DataManager.getServices());
    }
  };

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const inputClass = "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 focus:bg-white text-sm transition-all";
  const labelClass = "text-[11px] font-bold text-slate-500 uppercase tracking-widest ml-1 mb-1 block";

  return (
    <div className="space-y-8 md:space-y-12">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Services Management</h1>
          <p className="text-slate-500 text-sm font-medium">Configure your core service offerings.</p>
        </div>
        {isSuccess && (
          <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100 font-bold animate-bounce text-sm">
            <CheckCircle2 size={16} />
            <span>Success!</span>
          </div>
        )}
      </header>

      <form onSubmit={handleAdd} className="bg-white p-5 md:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Plus size={20} className="text-blue-600" />
          Add New Service
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-1">
            <label className={labelClass}>Title</label>
            <input required className={inputClass} value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} placeholder="e.g. Enterprise Security" />
          </div>
          <div className="space-y-1">
            <label className={labelClass}>Icon Name (Lucide)</label>
            <input required className={inputClass} value={formData.icon || ''} onChange={e => setFormData({...formData, icon: e.target.value})} placeholder="GraduationCap, Rocket, etc." />
          </div>
          <div className="space-y-1 md:col-span-2">
            <label className={labelClass}>Description</label>
            <textarea required rows={3} className={inputClass} value={formData.description || ''} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="Describe the service value proposition..." />
          </div>
        </div>
        <button className="w-full md:w-auto px-10 py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">Save Service</button>
      </form>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-1">
          <h3 className="text-lg font-bold text-slate-900">Existing Services ({items.length})</h3>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Filter services..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white p-4 md:p-6 rounded-2xl border border-slate-100 flex items-center gap-4 md:gap-6 shadow-sm group">
              <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600 shrink-0 border border-slate-100"><LayoutDashboard size={20}/></div>
              <div className="flex-grow min-w-0">
                <h4 className="font-bold text-slate-900 truncate">{item.title}</h4>
                <p className="text-sm text-slate-500 line-clamp-1">{item.description}</p>
              </div>
              <button onClick={() => handleDelete(item.id)} className="p-2.5 rounded-lg text-red-500 hover:bg-red-50 transition-all lg:opacity-0 lg:group-hover:opacity-100 bg-red-50 lg:bg-transparent"><Trash2 size={18}/></button>
            </div>
          ))}
          {filteredItems.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-100 border-dashed">
               <p className="text-slate-400 font-medium">No services found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesAdmin;
