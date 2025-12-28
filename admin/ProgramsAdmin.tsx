
import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle2, BookOpen, Search } from 'lucide-react';
import { DataManager } from '../utils/dataManager';

const ProgramsAdmin: React.FC = () => {
  const [items, setItems] = useState(DataManager.getPrograms());
  const [formData, setFormData] = useState<any>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    DataManager.addProgram(formData);
    setItems(DataManager.getPrograms());
    setFormData({});
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this program?')) {
      DataManager.deleteItem('PROGRAMS', id);
      setItems(DataManager.getPrograms());
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
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Programs Management</h1>
          <p className="text-slate-500 text-sm font-medium">Update your training curriculum and cohorts.</p>
        </div>
        {isSuccess && (
          <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100 font-bold animate-bounce text-sm">
            <CheckCircle2 size={16} />
            <span>Success!</span>
          </div>
        )}
      </header>

      <form onSubmit={handleAdd} className="bg-white p-5 md:p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2"><Plus size={20} className="text-blue-600" />Add New Program</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-1">
            <label className={labelClass}>Program Title</label>
            <input required className={inputClass} value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} />
          </div>
          <div className="space-y-1">
            <label className={labelClass}>Duration</label>
            <input required className={inputClass} value={formData.duration || ''} onChange={e => setFormData({...formData, duration: e.target.value})} placeholder="e.g. 6 Months" />
          </div>
          <div className="space-y-1">
            <label className={labelClass}>Level</label>
            <input required className={inputClass} value={formData.level || ''} onChange={e => setFormData({...formData, level: e.target.value})} placeholder="Beginner, Intermediate, etc." />
          </div>
          <div className="space-y-1">
            <label className={labelClass}>Category</label>
            <input required className={inputClass} value={formData.category || ''} onChange={e => setFormData({...formData, category: e.target.value})} />
          </div>
          <div className="space-y-1 md:col-span-2">
            <label className={labelClass}>Image URL</label>
            <input className={inputClass} value={formData.image || ''} onChange={e => setFormData({...formData, image: e.target.value})} placeholder="Paste unsplash link or direct image URL" />
          </div>
        </div>
        <button className="w-full md:w-auto px-10 py-3.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">Save Program</button>
      </form>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 px-1">
          <h3 className="text-lg font-bold text-slate-900">Existing Programs</h3>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input 
              type="text" 
              placeholder="Filter programs..." 
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-blue-500"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-center gap-4 md:gap-6 shadow-sm group">
              <div className="w-full sm:w-24 md:w-32 h-20 md:h-16 rounded-xl bg-slate-50 overflow-hidden shrink-0 border border-slate-100">
                <img src={item.image} className="w-full h-full object-cover" alt=""/>
              </div>
              <div className="flex-grow min-w-0 text-center sm:text-left">
                <h4 className="font-bold text-slate-900 truncate">{item.title}</h4>
                <div className="flex items-center justify-center sm:justify-start gap-2 mt-1">
                   <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase">{item.category}</span>
                   <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{item.duration}</span>
                </div>
              </div>
              <button onClick={() => handleDelete(item.id)} className="w-full sm:w-auto p-2.5 rounded-lg text-red-500 hover:bg-red-50 transition-all lg:opacity-0 lg:group-hover:opacity-100 bg-red-50 lg:bg-transparent flex items-center justify-center gap-2 sm:block">
                <Trash2 size={18}/>
                <span className="sm:hidden text-sm font-bold">Delete Program</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsAdmin;
