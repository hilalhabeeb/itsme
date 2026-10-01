import React, { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Code2 } from "lucide-react";
import { INITIAL_RESUME_DATA } from "../constants";
import {
  PROJECT_DETAILS,
  WTC_LIVE_URL,
  WTC_STACK,
  WTC_SOURCES,
} from "../projectDetails";

const button =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-bold text-sm bg-white text-slate-950 hover:bg-cyan-200 transition-colors";
const eyebrow = "text-xs font-bold uppercase tracking-[0.2em] text-cyan-400";
const projects = INITIAL_RESUME_DATA.projects;
const tags = (items: string[]) => (
  <div className="flex flex-wrap gap-2">
    {items.map((t) => (
      <span
        key={t}
        className="rounded-lg border border-white/10 bg-slate-900 px-3 py-1.5 text-xs text-slate-300"
      >
        {t}
      </span>
    ))}
  </div>
);

function WtcPreview({ priority = false }: { priority?: boolean }) {
  return (
    <div className="wtc-preview">
      <img
        src="/bahrain-wtc-energy-lab.webp"
        alt="Bahrain WTC Energy Lab showing the twin towers, three turbines, wind controls and simulated energy output."
        width={1856}
        height={1030}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        className="block w-full h-auto"
      />
    </div>
  );
}

function ProjectCard({ index }: { index: number }) {
  const p = projects[index];
  const detail = PROJECT_DETAILS[index];
  return (
    <a
      href={`#/projects/${detail.slug}`}
      className="group glass rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-colors flex flex-col focus-visible:ring-2 focus-visible:ring-cyan-400"
    >
      <div className="aspect-[16/9] bg-slate-900 overflow-hidden">
        <img
          src={p.imageUrl}
          alt=""
          loading="lazy"
          decoding="async"
          width={800}
          height={450}
          className="h-full w-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <p className={eyebrow}>{p.category}</p>
        <h3 className="text-2xl font-bold text-white mt-3 mb-3">{p.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">
          {p.description}
        </p>
        <div className="mt-auto">{tags(p.tags)}</div>
        <span className="mt-6 flex items-center gap-2 text-sm text-cyan-300 font-bold">
          View project <ArrowRight size={16} />
        </span>
      </div>
    </a>
  );
}

export function SelectedWork() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-5 mb-9">
        <div>
          <p className={eyebrow}>Selected work</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-3">
            Software for real workflows.
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl">
            ERP, integrations and automation, with the problem, implementation
            and stack behind each project.
          </p>
        </div>
        <a href="#/projects" className={button}>
          All projects <ArrowRight size={17} />
        </a>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[0, 1, 3].map((i) => (
          <ProjectCard index={i} key={i} />
        ))}
      </div>
    </section>
  );
}

export function BeyondTeaser() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-950/40 to-slate-900/50">
        <WtcPreview />
        <div className="p-7 md:p-12 flex flex-col justify-center">
          <p className={eyebrow}>A personal series · Episode 001</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4">
            Beyond Bahrain<span className="text-cyan-400">.</span>
          </h2>
          <p className="text-slate-300 text-lg mt-5 leading-relaxed">
            Exploring Bahrain through code, engineering and interactive
            experiences.
          </p>
          <p className="text-slate-400 mt-4 mb-7 leading-relaxed">
            First stop: the Bahrain World Trade Center. Explore the relationship
            between wind, turbine motion and simulated energy in an interactive
            3D environment.
          </p>
          <a href="#/beyond-bahrain" className={`${button} self-start`}>
            Discover the series <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function WtcCaseStudy() {
  return (
    <>
      <div className="grid gap-8 mb-14">
        <div>
          <p className={eyebrow}>Beyond Bahrain / 001</p>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-5 leading-tight">
            Bahrain World
            <br />
            Trade Center
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed mt-6">
            An interactive 3D energy lab exploring how architecture can harness
            the wind.
          </p>
          <a
            className={`${button} mt-7`}
            href={WTC_LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore live project <ExternalLink size={17} />
          </a>
        </div>
        <a
          href="/bahrain-wtc-energy-lab.webp"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View the WTC project screenshot full-size (opens in a new tab)"
          className="block overflow-hidden rounded-2xl border border-white/10"
        >
          <WtcPreview priority />
        </a>
      </div>
      <div className="grid sm:grid-cols-3 gap-4 mb-14">
        {[
          ["Format", "Interactive 3D experience"],
          ["My role", "Research, modeling & development"],
          ["Series", "Beyond Bahrain · 001"],
        ].map(([k, v]) => (
          <div key={k} className="glass rounded-2xl p-6">
            <p className={eyebrow}>{k}</p>
            <p className="mt-3 text-slate-200">{v}</p>
          </div>
        ))}
      </div>
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10">
        <div className="space-y-10">
          <article>
            <h2 className="text-2xl font-bold mb-4">The idea</h2>
            <p className="text-slate-400 leading-relaxed">
              Make the engineering behind an iconic Bahrain landmark easier to
              explore. Instead of only looking at the towers, visitors can
              change the wind, watch the turbines respond and see how the
              estimated energy contribution changes.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-bold mb-4">What I built</h2>
            <ul className="space-y-3 text-slate-400 leading-relaxed list-disc pl-5">
              <li>
                A procedural Python model exported to GLB, with independently
                controlled turbine rotors and an approximate architectural
                façade.
              </li>
              <li>
                A Three.js scene with orbit controls, camera presets, day/night
                views, airflow and energy visualization.
              </li>
              <li>
                A wind simulator with cut-in, rated and cut-out regions,
                direction controls and individual turbine shutdown.
              </li>
              <li>
                Open-Meteo weather integration, a guided tour and a
                compatibility renderer for devices without WebGL.
              </li>
            </ul>
          </article>
          <article>
            <h2 className="text-2xl font-bold mb-4">AI-assisted development</h2>
            <p className="text-slate-400 leading-relaxed">
              AI assisted the modeling and development process. The standalone
              experience uses deterministic scene controls and does not require
              a paid AI service. Engineering references and documented
              assumptions guide the simulation.
            </p>
          </article>
          <article className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
            <h2 className="text-xl font-bold mb-3">
              How to read the simulation
            </h2>
            <p className="text-slate-400 leading-relaxed">
              This is an independent educational visualization. The geometry is
              approximate and the output is estimated, rather than measured from
              the building. The model assumes cut-in at 4 m/s, rated output at
              12 m/s and cut-out at 25 m/s, with cubic interpolation. Weather at
              10 m is applied to all turbines without a hub-height correction.
              These assumptions are not a verified manufacturer power curve.
            </p>
          </article>
        </div>
        <aside className="space-y-7">
          <div className="glass rounded-2xl p-7">
            <h2 className="text-xl font-bold mb-5 flex gap-2 items-center">
              <Code2 size={20} className="text-cyan-400" />
              Technology stack
            </h2>
            {tags(WTC_STACK)}
          </div>
          <div className="glass rounded-2xl p-7">
            <h2 className="text-xl font-bold mb-5">
              Engineering & data sources
            </h2>
            <div className="space-y-5">
              {WTC_SOURCES.map((s) => (
                <div key={s.url}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-300 font-semibold inline-flex items-center gap-2 hover:underline"
                  >
                    {s.name}
                    <ExternalLink className="shrink-0" size={14} />
                  </a>
                  <p className="text-sm text-slate-400 mt-2 leading-relaxed">
                    {s.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
      <div className="mt-14 border-t border-white/10 pt-8 flex flex-wrap gap-4">
        <a href="#/beyond-bahrain" className={button}>
          Back to the series <ArrowRight size={17} />
        </a>
        <a
          href="#/projects"
          className="text-slate-300 py-3 px-4 hover:text-white"
        >
          Browse all projects
        </a>
      </div>
    </>
  );
}

function ProjectDetailPage({ slug }: { slug: string }) {
  const index = PROJECT_DETAILS.findIndex((p) => p.slug === slug);
  if (index < 0) return <NotFound />;
  const p = projects[index],
    d = PROJECT_DETAILS[index];
  return (
    <>
      <p className={eyebrow}>{d.status}</p>
      <h1 className="text-4xl md:text-6xl font-black tracking-tight my-5">
        {p.title}
      </h1>
      <p className="text-slate-400 text-lg leading-relaxed max-w-3xl mb-8">
        {p.description}
      </p>
      {tags(p.tags)}
      <div className="grid md:grid-cols-2 gap-7 mt-12">
        {[
          ["The problem", d.challenge],
          ["Implementation", d.approach],
        ].map(([title, text]) => (
          <article key={title} className="glass p-7 rounded-2xl">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-slate-400 leading-relaxed">{text}</p>
          </article>
        ))}
      </div>
      <article className="my-9">
        <h2 className="text-2xl font-bold mb-5">Scope</h2>
        <ul className="text-slate-400 list-disc pl-5 space-y-3">
          {d.deliverables.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </article>
      <div className="flex flex-wrap gap-4">
        {d.source && (
          <a
            className={button}
            href={d.source}
            target="_blank"
            rel="noopener noreferrer"
          >
            View source <ExternalLink size={16} />
          </a>
        )}
        <a className={button} href="#contact">
          Discuss a similar project <ArrowRight size={16} />
        </a>
      </div>
    </>
  );
}
function NotFound() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-5">Page not found</h1>
      <a href="#/projects" className={button}>
        Browse projects
      </a>
    </>
  );
}

export function ProjectPages({ route }: { route: string }) {
  const [filter, setFilter] = useState("All");
  let content: React.ReactNode;
  if (route === "/beyond-bahrain/001" || route === "/projects/bahrain-wtc")
    content = <WtcCaseStudy />;
  else if (route === "/beyond-bahrain")
    content = (
      <>
        <p className={eyebrow}>Bahrain through a developer’s lens</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-5">
          Beyond Bahrain<span className="text-cyan-400">.</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl leading-relaxed mt-6 mb-12">
          A personal series exploring Bahrain through code, engineering and
          interactive experiences. Each episode connects a place with an idea
          you can explore.
        </p>
        <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10">
          <WtcPreview />
          <div className="p-8 md:p-12 bg-slate-900/50 flex flex-col justify-center">
            <p className={eyebrow}>001 · Interactive energy lab</p>
            <h2 className="text-3xl font-bold mt-4 mb-4">
              Architecture meets wind.
            </h2>
            <p className="text-slate-400 leading-relaxed mb-7">
              Recreating the Bahrain World Trade Center to explore turbine
              motion, wind direction and simulated energy generation.
            </p>
            {tags(["3D visualization", "Engineering", "Weather data"])}
            <div className="flex flex-wrap gap-4 mt-7">
              <a href="#/beyond-bahrain/001" className={button}>
                Read case study <ArrowRight size={16} />
              </a>
              <a
                href={WTC_LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-300 font-bold text-sm"
              >
                Live experience <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-slate-400">
          More explorations will join the series as they are built.
        </p>
      </>
    );
  else if (route === "/projects")
    content = (
      <>
        <p className={eyebrow}>The work behind the skills</p>
        <h1 className="text-5xl md:text-7xl font-black tracking-tight mt-5">
          Projects<span className="text-cyan-400">.</span>
        </h1>
        <p className="mt-6 mb-8 text-lg text-slate-400 max-w-2xl leading-relaxed">
          Business systems, automation and interactive experiments. Explore what
          each project solves and how it was built.
        </p>
        <div
          className="flex flex-wrap gap-3 mb-10"
          aria-label="Filter projects"
        >
          {["All", "Business systems", "Computer vision", "Beyond Bahrain"].map(
            (f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`rounded-full border px-5 py-2.5 text-sm font-semibold ${filter === f ? "bg-cyan-400 border-cyan-400 text-slate-950" : "border-white/15 text-slate-300 hover:border-cyan-400"}`}
              >
                {f}
              </button>
            ),
          )}
        </div>
        <p role="status" className="sr-only">
          {filter === "All"
            ? "7 projects"
            : filter === "Business systems"
              ? "4 projects"
              : filter === "Computer vision"
                ? "2 projects"
                : "1 project"}{" "}
          shown.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(filter === "All" || filter === "Beyond Bahrain") && (
            <a
              href="#/beyond-bahrain/001"
              className="glass rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 flex flex-col"
            >
              <WtcPreview />
              <div className="p-6">
                <p className={eyebrow}>Beyond Bahrain · 001</p>
                <h2 className="text-2xl font-bold my-3">
                  Bahrain WTC Energy Lab
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  An interactive 3D exploration of architecture, wind and
                  simulated energy.
                </p>
                {tags(["React", "Three.js", "Python"])}
                <span className="mt-6 flex items-center gap-2 text-cyan-300 text-sm font-bold">
                  Read case study <ArrowRight size={16} />
                </span>
              </div>
            </a>
          )}
          {projects.map((_, i) =>
            filter === "All" ||
            (filter === "Business systems" && [0, 1, 3, 4].includes(i)) ||
            (filter === "Computer vision" && [2, 5].includes(i)) ? (
              <ProjectCard index={i} key={i} />
            ) : null,
          )}
        </div>
      </>
    );
  else if (route.startsWith("/projects/"))
    content = <ProjectDetailPage slug={route.slice("/projects/".length)} />;
  else content = <NotFound />;
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">
      <a
        href={route.startsWith("/projects/") ? "#/projects" : "#about"}
        className="text-sm text-slate-400 hover:text-white inline-flex items-center gap-2 mb-9"
      >
        <ArrowLeft size={16} />
        {route.startsWith("/projects/") ? "All projects" : "Back to home"}
      </a>
      {content}
    </section>
  );
}
