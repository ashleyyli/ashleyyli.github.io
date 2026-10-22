import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    goatcounter?: {
      count: (vars: { path: string; title?: string; event?: boolean }) => void;
    };
  }
}

// The GoatCounter script in index.html loads async, so it may not be ready yet
export function count(vars: { path: string; title?: string; event?: boolean }) {
  if (window.goatcounter?.count) {
    window.goatcounter.count(vars);
  } else {
    window.addEventListener("load", () => window.goatcounter?.count(vars), {
      once: true,
    });
  }
}

// GoatCounter ignores the URL hash, which is where HashRouter keeps the route,
// so count each route change ourselves. Also counts clicks on links that leave
// the site (GitHub, LinkedIn, email, webring, project links) as events.
export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    count({ path: location.pathname + location.hash });
  }, [location]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest?.<HTMLAnchorElement>(
        'a[href^="http"], a[href^="mailto:"]',
      );
      if (link && link.host !== window.location.host) {
        count({ path: link.href, title: link.textContent?.trim(), event: true });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
}
