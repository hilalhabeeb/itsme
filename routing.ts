import { useEffect, useState } from "react";

// Hash routes work on static hosting without server rewrite rules.
export function usePortfolioRoute() {
  const [route, setRoute] = useState(() => window.location.hash.slice(1));
  useEffect(() => {
    const update = () => setRoute(window.location.hash.slice(1));
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);
  useEffect(() => {
    const title = route.startsWith("/beyond-bahrain")
      ? "Beyond Bahrain"
      : route.startsWith("/projects")
        ? "Projects"
        : "Software Engineer";
    document.title = `${title} | Hilal Habeeb`;
    if (route.startsWith("/")) {
      window.scrollTo({ top: 0, behavior: "instant" });
      document.getElementById("main-content")?.focus({ preventScroll: true });
    } else if (route) {
      requestAnimationFrame(() =>
        document.getElementById(route)?.scrollIntoView(),
      );
    }
  }, [route]);
  return route;
}
