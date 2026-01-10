
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { askCareerCoach } from '../services/geminiService';
import { ResumeData, ChatMessage } from '../types';

interface AIChatPanelProps {
  resumeData: ResumeData;
}

export const AIChatPanel: React.FC<AIChatPanelProps> = ({ resumeData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: `Greetings. I am ${resumeData.name}'s Digital Identity. How may I assist your inquiry?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    const newMessages = [...messages, { role: 'user', text: userText } as ChatMessage];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await askCareerCoach(userText, resumeData, messages);
      setMessages([...newMessages, { role: 'model', text: response }]);
    } catch (err) {
      setMessages([...newMessages, { role: 'model', text: "Signal interrupted. Please re-initiate." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-all group overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
        {isOpen ? <X className="relative z-10 w-6 h-6" /> : <MessageSquare className="relative z-10 w-6 h-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            className="fixed bottom-28 right-8 w-[90vw] md:w-96 h-[600px] z-[100] glass rounded-[2.5rem] flex flex-col overflow-hidden border border-white/10 shadow-2xl"
          >
            <div className="p-6 bg-slate-900/80 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-white tracking-tight">AI Agent Alpha</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span>
                    <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">System Active</span>
                  </div>
                </div>
              </div>
            </div>

            <div 
              ref={scrollRef}
              className="flex-grow p-6 overflow-y-auto space-y-6 scroll-smooth"
            >
              {messages.map((msg, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={idx} 
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] px-5 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-cyan-600 text-white rounded-tr-none shadow-lg' 
                        : 'bg-slate-800/80 text-slate-200 rounded-tl-none border border-white/5'
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-800/80 px-4 py-3 rounded-2xl rounded-tl-none flex gap-1">
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSend} className="p-6 bg-slate-900/50 border-t border-white/5">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Inquire system..."
                  className="w-full bg-slate-800 border border-white/5 rounded-2xl pl-5 pr-12 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-white transition-all placeholder:text-slate-500"
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-2 top-2 h-10 w-10 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 rounded-xl transition-all flex items-center justify-center text-white shadow-lg"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
