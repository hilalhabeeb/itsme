import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

export const Layout: React.FC<{ children: React.ReactNode; route: string }> = ({
  children,
  route,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigation = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [route]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const firstLink =
      navigation.current?.querySelector<HTMLAnchorElement>("#mobile-menu a");
    firstLink?.focus();
    const close = () => {
      setIsMobileMenuOpen(false);
      toggle.current?.focus();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
      if (event.key !== "Tab") return;
      const items = Array.from(
        navigation.current?.querySelectorAll<HTMLElement>("a, button") || [],
      ).filter((element) => element.getClientRects().length > 0);
      const first = items[0],
        last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about", active: !route || route === "about" },
    {
      name: "Projects",
      href: "#/projects",
      active: route.startsWith("/projects"),
    },
    {
      name: "Beyond Bahrain",
      href: "#/beyond-bahrain",
      active: route.startsWith("/beyond-bahrain"),
    },
    { name: "Experience", href: "#experience", active: route === "experience" },
  ];
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    if (isMobileMenuOpen) toggle.current?.focus();
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-cyan-500/30 overflow-x-hidden">
      <a
        href="#main-content"
        className="skip-link"
        onClick={(event) => {
          event.preventDefault();
          closeMenu();
          const main = document.getElementById("main-content");
          main?.focus({ preventScroll: true });
          main?.scrollIntoView();
        }}
      >
        Skip to content
      </a>
      <div ref={navigation}>
        <nav
          aria-label="Main navigation"
          className={`fixed top-0 w-full z-[80] transition-all duration-300 ${scrolled ? "py-3" : "py-6"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`mx-auto max-w-5xl glass px-4 md:px-6 py-3 rounded-full flex justify-between items-center border border-white/10 shadow-2xl ${scrolled ? "bg-slate-950/80 backdrop-blur-xl" : ""}`}
            >
              <a
                href="#about"
                onClick={closeMenu}
                aria-label="Hilal Habeeb home"
                className="flex items-center gap-3"
              >
                <span className="w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-slate-950 font-black text-sm shadow-lg shadow-cyan-500/20">
                  HH
                </span>
                <span className="text-white font-black tracking-tighter text-lg hidden lg:block">
                  HABEEB
                </span>
              </a>
              <div className="hidden md:flex items-center gap-6 lg:gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    aria-current={link.active ? "page" : undefined}
                    className={`text-sm font-semibold py-2 transition-colors ${link.active ? "text-cyan-300" : "text-slate-300 hover:text-white"}`}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="bg-white text-slate-950 px-6 py-3 rounded-full text-xs font-black hover:bg-cyan-200 transition-colors"
                >
                  Connect
                </a>
              </div>
              <div className="md:hidden flex items-center gap-2">
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="bg-white text-slate-950 px-4 py-3 rounded-full text-xs font-black"
                >
                  Contact
                </a>
                <button
                  ref={toggle}
                  type="button"
                  onClick={() => setIsMobileMenuOpen((open) => !open)}
                  className="p-3 text-white hover:bg-white/10 rounded-full"
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                  aria-controls="mobile-menu"
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </nav>
        <div
          id="mobile-menu"
          hidden={!isMobileMenuOpen}
          className="fixed inset-0 z-[70] md:hidden bg-slate-950/95 backdrop-blur-2xl overflow-y-auto pt-36 pb-10 px-6"
        >
          <nav
            aria-label="Mobile navigation"
            className="min-h-full flex flex-col items-center justify-center"
          >
            <div className="space-y-6 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={link.active ? "page" : undefined}
                  className={`block py-2 text-3xl sm:text-4xl font-black tracking-tight ${link.active ? "text-cyan-300" : "text-slate-300 hover:text-white"}`}
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-10 flex gap-6">
              <a
                href="https://github.com/hilalhabeeb"
                aria-label="GitHub profile"
                className="p-3 text-slate-300 hover:text-white"
              >
                <Github size={28} />
              </a>
              <a
                href="https://linkedin.com/in/hilalhabeeb"
                aria-label="LinkedIn profile"
                className="p-3 text-slate-300 hover:text-white"
              >
                <Linkedin size={28} />
              </a>
            </div>
          </nav>
        </div>
      </div>
      <main
        id="main-content"
        tabIndex={-1}
        inert={isMobileMenuOpen}
        className="relative z-10 flex-grow focus:outline-none"
      >
        {children}
      </main>
      <footer
        inert={isMobileMenuOpen}
        className="py-12 border-t border-slate-900 bg-slate-950"
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-xs uppercase tracking-widest">
            Hilal Habeeb &copy; {new Date().getFullYear()}
          </div>
          <div className="flex gap-8">
            <a
              href="https://github.com/hilalhabeeb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-300 text-sm font-bold py-2"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/hilalhabeeb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-300 text-sm font-bold py-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
