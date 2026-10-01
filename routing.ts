import { useEffect, useState } from "react";
import { PROJECT_DETAILS } from "./projectDetails";
import { INITIAL_RESUME_DATA } from "./constants";

// Hash routes work on static hosting without server rewrite rules.
export function usePortfolioRoute() {
  const [route, setRoute] = useState(() => window.location.hash.slice(1));
  useEffect(() => {
    const update = () => setRoute(window.location.hash.slice(1));
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  useEffect(() => {
    const projectIndex = PROJECT_DETAILS.findIndex(
      (project) => route === `/projects/${project.slug}`,
    );
    const title =
      route === "/beyond-bahrain/001" || route === "/projects/bahrain-wtc"
        ? "Bahrain WTC Energy Lab"
        : route === "/beyond-bahrain"
          ? "Beyond Bahrain"
          : route === "/projects"
            ? "Projects"
            : projectIndex >= 0
              ? INITIAL_RESUME_DATA.projects[projectIndex].title
              : route.startsWith("/")
                ? "Page not found"
                : "Software Engineer in Bahrain";
    document.title = `${title} | Hilal Habeeb`;
    if (route.startsWith("/")) {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main-content")?.focus({ preventScroll: true });
    } else if (route) {
      const frame = requestAnimationFrame(() => {
        const target = document.getElementById(route);
        target?.scrollIntoView();
        target?.setAttribute("tabindex", "-1");
        target?.focus({ preventScroll: true });
      });
      return () => cancelAnimationFrame(frame);
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [route]);
  return route;
}
