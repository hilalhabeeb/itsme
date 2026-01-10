
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Globe, 
  Mail, 
  Linkedin, 
  Github, 
  ExternalLink,
  GraduationCap,
  Briefcase,
  Zap,
  Send,
  Award,
  ShieldCheck,
  Database,
  Layers,
  Sparkles,
  ArrowRight,
  Phone,
  Download,
  CheckCircle2
} from 'lucide-react';
import { Layout } from './components/Layout';
import { AIChatPanel } from './components/AIChatPanel';
import { INITIAL_RESUME_DATA } from './constants';
import { ResumeData } from './types';

const App: React.FC = () => {
  const [data] = useState<ResumeData>(INITIAL_RESUME_DATA);
  const [activeSection, setActiveSection] = useState('about');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { threshold: 0.3 });

    document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    setFormStatus('sending');
    
    // Construct Mailto URL
    const mailtoUrl = `mailto:${data.email}?subject=${encodeURIComponent(String(subject || 'Portfolio Inquiry'))}&body=${encodeURIComponent(`Hi Hilal,\n\nMy name is ${name}.\n\n${message}\n\nBest regards.`)}`;
    
    // Artificial delay for UX feel
    setTimeout(() => {
      window.location.href = mailtoUrl;
      setFormStatus('sent');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 800);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section id="about" className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-cyan-600/10 rounded-full blur-[160px] animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8"
            >
              <Sparkles className="w-3 h-3" /> Digital Alchemist & Builder
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              HILAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                HABEEB
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {data.bio}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5">
              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 rounded-2xl font-black flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all"
              >
                Let's Collaborate <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href={data.resumeUrl} 
                download="Hilal_Habeeb_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-auto px-10 py-5 bg-slate-900/50 backdrop-blur-md text-white rounded-2xl font-bold border border-white/10 hover:bg-slate-800 transition-all text-center flex items-center justify-center gap-3"
              >
                <Download className="w-5 h-5" /> Get Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[480px] lg:h-[480px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/40 to-purple-600/40 rounded-[4rem] rotate-6 blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 glass rounded-[4rem] rotate-3 border-2 border-white/10 shadow-2xl"></div>
              <div className="absolute inset-4 overflow-hidden rounded-[3rem] bg-slate-900 border-4 border-slate-950 shadow-inner group cursor-crosshair">
                <img 
                  src={data.profileImageUrl} 
                  alt={data.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-white font-black text-2xl tracking-tighter">BAHRAIN BASED</span>
                  <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">Full Stack Developer</span>
                </div>
              </div>
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -right-8 glass p-5 rounded-3xl border border-cyan-500/30 shadow-2xl"
              >
                <Terminal className="w-8 h-8 text-cyan-400" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-8 -left-8 glass p-5 rounded-3xl border border-purple-500/30 shadow-2xl"
              >
                <Code2 className="w-8 h-8 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 md:py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-24">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-cyan-400 font-black tracking-widest text-xs uppercase block mb-4"
            >
              Technology Arsenal
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">
              Tools I use to build <br />
              <span className="text-slate-500">the future.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                title: "Backend Core", 
                skills: data.skills.backend,
                icon: <Layers className="w-6 h-6" />,
                color: "from-blue-500 to-cyan-400",
                shadow: "shadow-blue-500/20"
              },
              { 
                title: "Frontend Mastery", 
                skills: data.skills.frontend,
                icon: <Globe className="w-6 h-6" />,
                color: "from-purple-500 to-blue-400",
                shadow: "shadow-purple-500/20"
              },
              { 
                title: "Data & Cloud", 
                skills: ["PostgreSQL", "MySQL", "MongoDB", "AWS EC2", "Docker"],
                icon: <Database className="w-6 h-6" />,
                color: "from-emerald-500 to-teal-400",
                shadow: "shadow-emerald-500/20"
              },
              { 
                title: "Intelligence & QA", 
                skills: ["OpenCV", "Selenium", "Cucumber", "Agile", "Scrum"],
                icon: <ShieldCheck className="w-6 h-6" />,
                color: "from-orange-500 to-red-400",
                shadow: "shadow-orange-500/20"
              }
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`group glass p-8 rounded-[2.5rem] border border-white/10 hover:border-white/20 transition-all flex flex-col h-full`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-white mb-8 shadow-2xl ${cat.shadow} group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-black text-white mb-8 tracking-tight">{cat.title}</h3>
                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-slate-900/80 border border-white/5 text-slate-400 text-[10px] font-bold uppercase tracking-widest rounded-xl hover:text-white hover:border-white/20 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 md:py-40 bg-slate-950/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <div>
              <span className="text-purple-400 font-black tracking-widest text-xs uppercase block mb-4">Milestones</span>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Experience</h2>
            </div>
            <div className="w-full md:w-1/3 h-[2px] bg-gradient-to-r from-purple-500 to-transparent mb-4"></div>
          </div>

          <div className="relative space-y-12">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-800"></div>
            
            {data.experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-12"
              >
                <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,1)]"></div>
                <div className="group glass p-10 rounded-[2.5rem] border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center mb-8 gap-4">
                    <div>
                      <h3 className="text-3xl font-black text-white mb-2 leading-none">{exp.role}</h3>
                      <p className="text-cyan-400 font-bold tracking-widest text-xs uppercase">{exp.company}</p>
                    </div>
                    <span className="px-5 py-2 bg-slate-900 border border-white/10 rounded-2xl text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-4 text-slate-400 mb-10">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="flex gap-4 text-sm md:text-base leading-relaxed items-start">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map(s => (
                      <span key={s} className="px-4 py-2 bg-slate-950/50 border border-white/5 text-slate-500 text-[10px] font-black uppercase tracking-widest rounded-full group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <span className="text-blue-400 font-black tracking-widest text-xs uppercase block mb-4">Portfolio</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">Case Studies</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">Tangible results from complex problem solving.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {data.projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -15 }}
                className="group glass rounded-[3rem] overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.a 
                      href={project.link} 
                      whileHover={{ scale: 1.1 }}
                      className="p-5 bg-white text-slate-950 rounded-full shadow-2xl"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </motion.a>
                  </div>
                </div>
                <div className="p-10 flex-grow flex flex-col">
                  <h3 className="text-2xl font-black text-white mb-4 tracking-tight leading-none">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-8 leading-relaxed line-clamp-4 font-medium">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-900 border border-white/5 text-[9px] font-black text-slate-500 uppercase tracking-widest rounded-lg">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Recognized Section */}
      <section id="education" className="py-24 md:py-40 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
            <div>
              <div className="flex items-center gap-6 mb-16">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Academic Roots</h2>
              </div>
              <div className="space-y-8">
                {data.education.map((edu, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="glass p-10 rounded-[2.5rem] border border-white/5 hover:border-cyan-500/20 transition-all flex flex-col gap-4"
                  >
                    <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] block">{edu.period}</span>
                    <h3 className="text-2xl font-black text-white leading-none">{edu.degree}</h3>
                    <p className="text-slate-400 font-bold text-sm tracking-tight">{edu.institution}</p>
                    <p className="text-xs text-slate-500 bg-slate-900/80 p-5 rounded-2xl border border-white/5 leading-relaxed font-medium">
                      {edu.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-6 mb-16">
                <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <Award className="w-7 h-7" />
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">Accolades</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-12">
                {[
                  "Best Academic Project 2024",
                  "Academic Excellence (3rd sem)",
                  "Top 2 Performer (MCA)",
                  "Docker Essentials (IBM)",
                  "AWS Academy Graduate",
                  "Cloud & IoT (NPTEL)"
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass p-6 rounded-2xl border border-white/5 flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-500/20 transition-colors">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-slate-300 leading-tight">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto glass p-10 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-purple-500/20 transition-colors"></div>
                <p className="text-base text-slate-300 italic relative z-10 font-medium leading-relaxed">
                  "Highly motivated to continuously learn and adapt to emerging technologies, driving impact through software excellence and architectural precision."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-[4rem] p-10 md:p-24 border border-white/10 relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] -mr-96 -mt-96 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[180px] -ml-96 -mb-96 animate-pulse"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
              <div>
                <motion.span 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-cyan-400 font-black tracking-[0.3em] text-[10px] uppercase block mb-8"
                >
                  Contact Gateway
                </motion.span>
                <h2 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-none">
                  Let's <br /> Connect.
                </h2>
                <p className="text-xl text-slate-400 mb-16 max-w-md leading-relaxed font-medium">
                  Seeking a visionary developer or have a complex project? My digital door is always open.
                </p>
                
                <div className="space-y-10">
                  <a href={`mailto:${data.email}`} className="flex items-center gap-8 group cursor-pointer w-fit">
                    <div className="w-16 h-16 rounded-[2rem] bg-slate-900 flex items-center justify-center text-cyan-400 border border-white/5 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-xl">
                      <Mail className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Direct Signal</p>
                      <p className="text-2xl text-white font-black tracking-tight group-hover:text-cyan-400 transition-colors">{data.email}</p>
                    </div>
                  </a>

                  <a href={`tel:${data.phone.replace(/\s+/g, '')}`} className="flex items-center gap-8 group cursor-pointer w-fit">
                    <div className="w-16 h-16 rounded-[2rem] bg-slate-900 flex items-center justify-center text-emerald-400 border border-white/5 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-xl">
                      <Phone className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Mobile Link</p>
                      <p className="text-2xl text-white font-black tracking-tight group-hover:text-emerald-400 transition-colors">{data.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-8 group w-fit">
                    <div className="w-16 h-16 rounded-[2rem] bg-slate-900 flex items-center justify-center text-blue-400 border border-white/5 group-hover:scale-110 transition-transform shadow-xl">
                      <Globe className="w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Operational Base</p>
                      <p className="text-2xl text-white font-black tracking-tight">{data.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-20">
                  <motion.a 
                    href={data.resumeUrl}
                    download="Hilal_Habeeb_Resume.pdf"
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center gap-4 text-white font-black text-xl group"
                  >
                    <div className="w-12 h-12 bg-white text-slate-950 rounded-xl flex items-center justify-center group-hover:bg-cyan-400 transition-colors">
                      <Download className="w-6 h-6" />
                    </div>
                    DOWNLOAD MY RESUME
                  </motion.a>
                </div>
              </div>

              <motion.form 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8 bg-slate-950/40 p-10 rounded-[3rem] border border-white/5 backdrop-blur-md relative" 
                onSubmit={handleFormSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Identity</label>
                    <input required name="name" type="text" placeholder="Full Name" className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-cyan-500 outline-none transition-all text-white placeholder:text-slate-700 font-bold" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Subject</label>
                    <input required name="subject" type="text" placeholder="Project or Opportunity" className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-6 py-5 focus:ring-2 focus:ring-cyan-500 outline-none transition-all text-white placeholder:text-slate-700 font-bold" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Transmission</label>
                  <textarea required name="message" rows={5} placeholder="What vision are we bringing to life?" className="w-full bg-slate-900/50 border border-white/10 rounded-[2rem] px-6 py-5 focus:ring-2 focus:ring-cyan-500 outline-none transition-all text-white resize-none placeholder:text-slate-700 font-bold"></textarea>
                </div>
                
                <button 
                  disabled={formStatus !== 'idle'}
                  className={`w-full py-6 rounded-2xl font-black text-xl transition-all shadow-2xl flex items-center justify-center gap-4 ${
                    formStatus === 'sent' 
                    ? 'bg-emerald-500 text-white' 
                    : 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white hover:scale-[1.02] active:scale-[0.98] shadow-cyan-500/30'
                  }`}
                >
                  {formStatus === 'idle' && <>INITIATE SIGNAL <Send className="w-6 h-6" /></>}
                  {formStatus === 'sending' && <>TRANSMITTING...</>}
                  {formStatus === 'sent' && <>SIGNAL SENT <CheckCircle2 className="w-6 h-6" /></>}
                </button>

                <p className="text-[9px] text-center text-slate-600 font-bold uppercase tracking-[0.2em]">
                  Secure end-to-email transmission via protocol mailto
                </p>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      <AIChatPanel resumeData={data} />
    </Layout>
  );
};

export default App;
