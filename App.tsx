
import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Code2,
  Terminal,
  Cpu,
  Globe,
  Mail,
  GraduationCap,
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
import { ProjectPages, SelectedWork, BeyondTeaser } from './components/ProjectPages';
import { usePortfolioRoute } from './routing';
import { INITIAL_RESUME_DATA } from './constants';
import { ResumeData } from './types';

const App: React.FC = () => {
  const [data] = useState<ResumeData>(INITIAL_RESUME_DATA);
  const route = usePortfolioRoute();
  const reducedMotion = useReducedMotion();
  const [formStatus, setFormStatus] = useState<'idle' | 'ready'>('idle');



  const skillVisuals = [
    { icon: <Layers className="w-6 h-6" />, color: "from-blue-500 to-cyan-400", shadow: "shadow-blue-500/20" },
    { icon: <Code2 className="w-6 h-6" />, color: "from-purple-500 to-blue-400", shadow: "shadow-purple-500/20" },
    { icon: <Globe className="w-6 h-6" />, color: "from-emerald-500 to-teal-400", shadow: "shadow-emerald-500/20" },
    { icon: <Cpu className="w-6 h-6" />, color: "from-orange-500 to-red-400", shadow: "shadow-orange-500/20" },
    { icon: <Database className="w-6 h-6" />, color: "from-indigo-500 to-sky-400", shadow: "shadow-indigo-500/20" },
    { icon: <ShieldCheck className="w-6 h-6" />, color: "from-rose-500 to-amber-400", shadow: "shadow-rose-500/20" }
  ];

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const subject = formData.get('subject');
    const message = formData.get('message');


    // Construct Mailto URL
    const mailtoUrl = `mailto:${data.email}?subject=${encodeURIComponent(String(subject || 'Portfolio Inquiry'))}&body=${encodeURIComponent(`Hi Hilal,\n\nMy name is ${name}.\n\n${message}\n\nBest regards.`)}`;

    window.location.href = mailtoUrl;
    setFormStatus('ready');
  };

  return (
    <Layout route={route}>
      {route.startsWith('/') ? <ProjectPages route={route} /> : <>
      {/* Hero Section */}
      <section id="about" className="relative min-h-[92svh] flex items-center justify-center pt-28 pb-12 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[760px] aspect-square bg-cyan-600/10 rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(340px,430px)] gap-9 lg:gap-16 items-center">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="text-center lg:text-left order-1 max-w-2xl mx-auto lg:mx-0"
          >
            <motion.div
              initial={reducedMotion ? false : { opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] sm:text-[10px] font-black uppercase tracking-[0.18em] sm:tracking-[0.2em] mb-4"
            >
              <Sparkles className="w-3 h-3" /> Business Systems & Interactive Experiences
            </motion.div>

            <p className="text-slate-400 font-black uppercase tracking-[0.22em] sm:tracking-[0.32em] text-[9px] md:text-xs mb-4 max-w-sm sm:max-w-none mx-auto lg:mx-0 leading-relaxed">
              {data.title}
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.6rem] font-black text-white tracking-tighter leading-[0.88] mb-5">
              HILAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                HABEEB
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-400 mb-5 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              <span className="sm:hidden">
                Software engineer building ERP, backend, automation, and AI-assisted business systems in Bahrain.
              </span>
              <span className="hidden sm:inline">{data.bio}</span>
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-7">
              {["Frappe / ERPNext", "Python / FastAPI", "React / Three.js"].map(item => (
                <span key={item} className="px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-slate-900/70 border border-white/10 text-slate-300 text-[9px] sm:text-[10px] font-black uppercase tracking-widest">
                  {item}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.a
                href="#/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-7 py-4 bg-white text-slate-950 rounded-xl font-black flex items-center justify-center gap-3 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all"
              >
                Explore My Work <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={data.resumeUrl}
                download="Hilal Habeeb SWE.pdf"
                whileHover={{ scale: 1.05 }}
                className="w-full sm:w-auto px-7 py-4 bg-slate-900/50 backdrop-blur-md text-white rounded-xl font-bold border border-white/10 hover:bg-slate-800 transition-all text-center flex items-center justify-center gap-3"
              >
                <Download className="w-5 h-5" /> Get Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="relative flex justify-center lg:justify-end order-2"
          >
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-[390px] lg:h-[390px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/35 to-purple-600/35 rounded-[2.5rem] blur-3xl animate-pulse"></div>
              <div className="absolute inset-0 rounded-[2.5rem] border border-cyan-400/15 bg-slate-900/35 shadow-[0_0_80px_rgba(6,182,212,0.12)]"></div>
              <div className="absolute -inset-3 rounded-[2.9rem] border border-white/10 rotate-2"></div>
              <div className="absolute inset-3 overflow-hidden rounded-[2rem] bg-slate-900 border-4 border-slate-950 shadow-inner group cursor-crosshair">
                <img
                  width={390}
                  height={390}
                  fetchPriority="high"
                  src={data.profileImageUrl}
                  alt={data.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5 sm:p-6">
                  <span className="text-white font-black text-lg sm:text-xl tracking-tighter">BAHRAIN BASED</span>
                  <span className="text-cyan-400 font-mono text-[10px] sm:text-xs uppercase tracking-widest">Software Engineer</span>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-3 -right-3 sm:top-4 sm:-right-4 glass p-3 sm:p-4 rounded-2xl border border-cyan-500/30 shadow-2xl"
              >
                <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute bottom-3 -left-3 sm:bottom-4 sm:-left-4 glass p-3 sm:p-4 rounded-2xl border border-purple-500/30 shadow-2xl"
              >
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <SelectedWork />
      <BeyondTeaser />

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-12 md:mb-14">
            <motion.span
              initial={reducedMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-cyan-400 font-black tracking-widest text-xs uppercase block mb-4"
            >
              Technical Strengths
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
              Systems I build <br />
              <span className="text-slate-400">and the stack behind them.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {data.skills.map((group, i) => {
              const visual = skillVisuals[i % skillVisuals.length];
              return (
              <motion.div
                key={i}
                initial={reducedMotion ? false : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`group glass p-6 rounded-3xl border border-white/10 hover:border-white/20 transition-all flex flex-col h-full`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${visual.color} flex items-center justify-center text-white mb-5 shadow-2xl ${visual.shadow} group-hover:scale-110 transition-transform`}>
                  {visual.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-3 tracking-tight">{group.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 font-medium">{group.summary}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.items.map(skill => (
                    <span key={skill} className="px-2.5 py-1 bg-slate-900/80 border border-white/5 text-slate-400 text-[9px] font-bold uppercase tracking-widest rounded-lg hover:text-white hover:border-white/20 transition-all">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )})}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-24 bg-slate-950/30">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-14">
            <div>
              <span className="text-purple-400 font-black tracking-widest text-xs uppercase block mb-4">Milestones</span>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">Experience</h2>
            </div>
            <div className="w-full md:w-1/3 h-[2px] bg-gradient-to-r from-purple-500 to-transparent mb-4"></div>
          </div>

          <div className="relative space-y-7">
            <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-800"></div>

            {data.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-6 md:pl-10"
              >
                <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,1)]"></div>
                <div className="group glass p-6 md:p-7 rounded-3xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500">
                  <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center mb-5 gap-4">
                    <div>
                      <h3 className="text-2xl font-black text-white mb-2 leading-tight">{exp.role}</h3>
                      <p className="text-cyan-400 font-bold tracking-widest text-xs uppercase">{exp.company}</p>
                    </div>
                    <span className="px-4 py-2 bg-slate-900 border border-white/10 rounded-xl text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3 text-slate-400 mb-6">
                    {exp.description.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-sm leading-relaxed items-start">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map(s => (
                      <span key={s} className="px-3 py-1.5 bg-slate-950/50 border border-white/5 text-slate-400 text-[9px] font-black uppercase tracking-widest rounded-full group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all">
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

      {/* Education & Recognized Section */}
      <section id="education" className="py-16 md:py-24 bg-slate-950/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">Academic Roots</h2>
              </div>
              <div className="space-y-5">
                {data.education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 10 }}
                    className="glass p-6 rounded-3xl border border-white/5 hover:border-cyan-500/20 transition-all flex flex-col gap-3"
                  >
                    <span className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.3em] block">{edu.period}</span>
                    <h3 className="text-xl font-black text-white leading-tight">{edu.degree}</h3>
                    <p className="text-slate-400 font-bold text-sm tracking-tight">{edu.institution}</p>
                    <p className="text-xs text-slate-400 bg-slate-900/80 p-4 rounded-xl border border-white/5 leading-relaxed font-medium">
                      {edu.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <Award className="w-6 h-6" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter">Accolades</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
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
                    className="glass p-4 rounded-2xl border border-white/5 flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0 group-hover:bg-purple-500/20 transition-colors">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-bold text-slate-300 leading-tight">{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto glass p-6 rounded-3xl border border-white/5 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 relative overflow-hidden group">
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
      <section id="contact" className="py-16 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-[2rem] p-6 md:p-10 lg:p-14 border border-white/10 relative overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[180px] -mr-96 -mt-96 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 blur-[180px] -ml-96 -mb-96 animate-pulse"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 relative z-10">
              <div>
                <motion.span
                  initial={reducedMotion ? false : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-cyan-400 font-black tracking-[0.3em] text-[10px] uppercase block mb-5"
                >
                  Contact
                </motion.span>
                <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-none">
                  Let's <br /> Connect.
                </h2>
                <p className="text-base md:text-lg text-slate-400 mb-8 max-w-md leading-relaxed font-medium">
                  Looking for a developer who understands both code and business operations? I am open to ERP, backend, automation, and integration work.
                </p>

                <div className="space-y-5">
                  <a href={`mailto:${data.email}`} className="flex items-center gap-5 group cursor-pointer w-fit">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-cyan-400 border border-white/5 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-xl">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Email</p>
                      <p className="text-lg md:text-xl text-white font-black tracking-tight group-hover:text-cyan-400 transition-colors">{data.email}</p>
                    </div>
                  </a>

                  <a href={`tel:${data.phone.replace(/\s+/g, '')}`} className="flex items-center gap-5 group cursor-pointer w-fit">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-emerald-400 border border-white/5 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-xl">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Phone</p>
                      <p className="text-lg md:text-xl text-white font-black tracking-tight group-hover:text-emerald-400 transition-colors">{data.phone}</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-5 group w-fit">
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center text-blue-400 border border-white/5 group-hover:scale-110 transition-transform shadow-xl">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Based in</p>
                      <p className="text-lg md:text-xl text-white font-black tracking-tight">{data.location}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <motion.a
                    href={data.resumeUrl}
                    download="Hilal Habeeb SWE.pdf"
                    whileHover={{ x: 10 }}
                    className="inline-flex items-center gap-3 text-white font-black text-base group"
                  >
                    <div className="w-10 h-10 bg-white text-slate-950 rounded-xl flex items-center justify-center group-hover:bg-cyan-400 transition-colors">
                      <Download className="w-5 h-5" />
                    </div>
                    DOWNLOAD MY RESUME
                  </motion.a>
                </div>
              </div>

              <motion.form
                initial={reducedMotion ? false : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-5 bg-slate-950/40 p-6 md:p-7 rounded-3xl border border-white/5 backdrop-blur-md relative"
                onSubmit={handleFormSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1" htmlFor="contact-name">Name</label>
                    <input autoComplete="name" id="contact-name" required name="name" type="text" placeholder="Full Name" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all text-white placeholder:text-slate-400 font-bold" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1" htmlFor="contact-subject">Subject</label>
                    <input id="contact-subject" required name="subject" type="text" placeholder="Project or Opportunity" className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all text-white placeholder:text-slate-400 font-bold" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1" htmlFor="contact-message">Message</label>
                  <textarea id="contact-message" required name="message" rows={4} placeholder="Tell me about your project or opportunity." className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-cyan-500 outline-none transition-all text-white resize-none placeholder:text-slate-400 font-bold"></textarea>
                </div>

                <button
                  type="submit"
                  className={`w-full py-4 rounded-xl font-black text-base transition-all shadow-2xl flex items-center justify-center gap-3 ${
                    formStatus === 'ready'
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white hover:scale-[1.02] active:scale-[0.98] shadow-cyan-500/30'
                  }`}
                >
                  {formStatus === 'idle' && <>OPEN EMAIL <Send className="w-6 h-6" /></>}
                  {formStatus === 'ready' && <>OPEN EMAIL AGAIN <CheckCircle2 className="w-6 h-6" /></>}
                </button>

                <p role="status" className="text-xs text-center text-slate-400 font-bold uppercase tracking-[0.2em]">
                  {formStatus === 'ready' ? 'Your draft opens in your email app. Review it and press Send there.' : 'Opens your email app with a draft. You send the message from there.'}
                </p>
              </motion.form>
            </div>
          </div>
        </div>
      </section>

      </>}
    </Layout>
  );
};

export default App;
