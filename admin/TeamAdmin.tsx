
import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle2, Users } from 'lucide-react';
import { DataManager } from '../utils/dataManager';

const TeamAdmin: React.FC = () => {
  const [items, setItems] = useState(DataManager.getTeam());
  const [formData, setFormData] = useState<any>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    DataManager.addTeamMember(formData);
    setItems(DataManager.getTeam());
    setFormData({});
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Remove team member?')) {
      DataManager.deleteItem('TEAM', id);
      setItems(DataManager.getTeam());
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-sm";
  const labelClass = "text-xs font-bold text-slate-500 uppercase tracking-widest ml-1";

  return (
    <div className="space-y-12">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Team Management</h1>
          <p className="text-slate-500 font-medium">Update the NorthDemy leadership team.</p>
        </div>
        {isSuccess && <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl font-bold animate-bounce"><CheckCircle2 size={18}/><span>Saved!</span></div>}
      </header>

      <form onSubmit={handleAdd} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><Plus size={20} className="text-blue-600"/>Add Team Member</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className={labelClass}>Full Name</label>
            <input required className={inputClass} value={formData.name || ''} onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div className="space-y-1">
            <label className={labelClass}>Role</label>
            <input required className={inputClass} value={formData.role || ''} onChange={e => setFormData({...formData, role: e.target.value})} />
          </div>
          <div className="space-y-1 md:col-span-2">
            <label className={labelClass}>Photo URL</label>
            <input className={inputClass} value={formData.image || ''} onChange={e => setFormData({...formData, image: e.target.value})} />
          </div>
          <div className="space-y-1 md:col-span-2">
            <label className={labelClass}>Short Bio</label>
            <textarea required rows={3} className={inputClass} value={formData.bio || ''} onChange={e => setFormData({...formData, bio: e.target.value})} />
          </div>
        </div>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">Save Member</button>
      </form>

      <div className="grid grid-cols-1 gap-4">
        {items.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-6 shadow-sm group">
            <div className="w-14 h-14 rounded-full overflow-hidden shrink-0"><img src={item.image} className="w-full h-full object-cover" /></div>
            <div className="flex-grow">
              <h4 className="font-bold text-slate-900">{item.name}</h4>
              <p className="text-sm text-blue-600 font-bold uppercase tracking-tighter">{item.role}</p>
            </div>
            <button onClick={() => handleDelete(item.id)} className="p-2 text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"><Trash2 size={18}/></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamAdmin;
