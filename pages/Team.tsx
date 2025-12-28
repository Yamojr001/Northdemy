
import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { TEAM } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">Meet the <span className="text-blue-600">Experts</span></h1>
          <p className="text-xl text-slate-600">
            Our team brings together decades of experience in technology, entrepreneurship, and digital safety to drive NorthDemy's mission forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {TEAM.map((member) => (
            <div key={member.id} className="group">
              <div className="relative mb-8 rounded-[40px] overflow-hidden aspect-square shadow-xl group-hover:shadow-2xl transition-all">
                 <img src={member.image} alt={member.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/20 transition-all"></div>
                 <div className="absolute bottom-6 left-6 right-6 flex justify-center space-x-3 translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                    <button className="w-12 h-12 rounded-2xl bg-white text-blue-600 flex items-center justify-center shadow-xl hover:bg-blue-600 hover:text-white transition-all">
                      <Linkedin size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-2xl bg-white text-blue-400 flex items-center justify-center shadow-xl hover:bg-blue-400 hover:text-white transition-all">
                      <Twitter size={20} />
                    </button>
                    <button className="w-12 h-12 rounded-2xl bg-white text-slate-600 flex items-center justify-center shadow-xl hover:bg-slate-900 hover:text-white transition-all">
                      <Mail size={20} />
                    </button>
                 </div>
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-slate-900">{member.name}</h3>
                <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">{member.role}</p>
                <p className="text-slate-600 max-w-xs mx-auto pt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
