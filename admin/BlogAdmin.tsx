
import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle2, FileText } from 'lucide-react';
import { DataManager } from '../utils/dataManager';

const BlogAdmin: React.FC = () => {
  const [items, setItems] = useState(DataManager.getBlog());
  const [formData, setFormData] = useState<any>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    DataManager.addBlogPost(formData);
    setItems(DataManager.getBlog());
    setFormData({});
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Delete this post?')) {
      DataManager.deleteItem('BLOG', id);
      setItems(DataManager.getBlog());
    }
  };

  const inputClass = "w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none focus:border-blue-500 text-sm";
  const labelClass = "text-xs font-bold text-slate-500 uppercase tracking-widest ml-1";

  return (
    <div className="space-y-12">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Blog Management</h1>
          <p className="text-slate-500 font-medium">Publish insights and news to your community.</p>
        </div>
        {isSuccess && <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl font-bold animate-bounce"><CheckCircle2 size={18}/><span>Published!</span></div>}
      </header>

      <form onSubmit={handleAdd} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-6">
        <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2"><Plus size={20} className="text-blue-600"/>New Blog Post</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className={labelClass}>Post Title</label>
            <input required className={inputClass} value={formData.title || ''} onChange={e => setFormData({...formData, title: e.target.value})} />
          </div>
          <div className="space-y-1">
            <label className={labelClass}>Category</label>
            <input required className={inputClass} value={formData.category || ''} onChange={e => setFormData({...formData, category: e.target.value})} />
          </div>
          <div className="space-y-1">
            <label className={labelClass}>Author</label>
            <input required className={inputClass} value={formData.author || ''} onChange={e => setFormData({...formData, author: e.target.value})} />
          </div>
          <div className="space-y-1">
            <label className={labelClass}>Image URL</label>
            <input className={inputClass} value={formData.image || ''} onChange={e => setFormData({...formData, image: e.target.value})} />
          </div>
          <div className="space-y-1 md:col-span-2">
            <label className={labelClass}>Excerpt</label>
            <textarea required rows={2} className={inputClass} value={formData.excerpt || ''} onChange={e => setFormData({...formData, excerpt: e.target.value})} />
          </div>
        </div>
        <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all">Publish Post</button>
      </form>

      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-6 shadow-sm group">
            <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0"><img src={item.image} className="w-full h-full object-cover" /></div>
            <div className="flex-grow">
              <h4 className="font-bold text-slate-900">{item.title}</h4>
              <p className="text-xs text-slate-400 font-bold">{item.date} • By {item.author}</p>
            </div>
            <button onClick={() => handleDelete(item.id)} className="p-2 text-red-500 hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"><Trash2 size={18}/></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogAdmin;
