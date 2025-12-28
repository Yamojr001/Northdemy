import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, Users, Briefcase, Globe2, ShieldCheck, GraduationCap, Rocket, Code, TrendingUp, Mail, Phone } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { DataManager } from '../utils/dataManager';

const Home: React.FC = () => {
  const [services, setServices] = useState(DataManager.getServices());

  useEffect(() => {
    const handleUpdate = () => setServices(DataManager.getServices());
    window.addEventListener('data-updated', handleUpdate);
    return () => window.removeEventListener('data-updated', handleUpdate);
  }, []);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 text-left space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-semibold text-sm">
                <Star size={16} fill="currentColor" />
                <span>Your Partner in Digital Safety and Growth</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
                Empowering <br />
                <span className="text-blue-600">Tech Talent</span> <br />
                For Tomorrow
              </h1>
              <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
                NorthDemy is Africa's leading tech talent incubation and digital safety center, transforming potential into world-class expertise through innovative training, mentorship, and funding opportunities.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold flex items-center space-x-2 hover:bg-blue-700 transition-all shadow-xl shadow-blue-200">
                  <span>Apply Now</span>
                  <ArrowRight size={20} />
                </button>
                <button className="px-8 py-4 rounded-xl border-2 border-slate-100 text-slate-800 font-bold hover:bg-slate-50 transition-all">
                  Partner With Us
                </button>
              </div>
              
              <div className="grid grid-cols-3 gap-8 pt-10">
                <div>
                  <div className="text-3xl font-extrabold text-blue-600">500+</div>
                  <div className="text-slate-500 font-medium text-sm">Trained Talents</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-blue-600">50+</div>
                  <div className="text-slate-500 font-medium text-sm">Startups Incubated</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-blue-600">25+</div>
                  <div className="text-slate-500 font-medium text-sm">Global Partners</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <div className="relative w-full aspect-square flex items-center justify-center">
                {/* Blue circle background */}
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-10 animate-pulse scale-110"></div>
                
                {/* Main ND circle */}
                <div className="absolute inset-0 bg-blue-600 rounded-full opacity-80 shadow-2xl shadow-blue-400/50 flex flex-col items-center justify-center text-center p-12">
                  <h2 className="text-7xl font-black text-white mb-2">ND</h2>
                  <p className="text-white/80 font-medium tracking-widest uppercase">Innovation Hub</p>
                </div>
                
                {/* Top Right Box - Talent Pipeline */}
                <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">Talent Pipeline</div>
                    <div className="text-slate-500 text-xs">Global Network</div>
                  </div>
                </div>
                
                {/* Bottom Left Box - Startup Funding */}
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">Startup Funding</div>
                    <div className="text-blue-600 font-semibold text-xs">Investor Ready</div>
                  </div>
                </div>
                
                {/* Bottom Right Box - Digital Safety */}
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">Digital Safety</div>
                    <div className="text-blue-600 font-semibold text-xs">Certified Programs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h3 className="text-blue-600 font-bold tracking-widest uppercase text-sm">What We Do</h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Comprehensive Solutions for <br />
              <span className="text-blue-600">Digital Growth</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComp = {
                GraduationCap, Rocket, ShieldCheck, Code, TrendingUp, Users
              }[service.icon as string] || Code;
              
              return (
                <div key={idx} className="bg-white p-10 rounded-3xl border border-slate-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-100 transition-all group flex flex-col items-start h-full">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-900 mb-8 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <IconComp size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    {service.description}
                  </p>
                  <Link to={service.link || `/services/${service.id}`} className="flex items-center space-x-2 text-blue-600 font-bold hover:space-x-4 transition-all">
                    <span>Learn More</span>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* ... Other sections omitted for brevity but they follow the same pattern ... */}
    </div>
  );
};

export default Home;