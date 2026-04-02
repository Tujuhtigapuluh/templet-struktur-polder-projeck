import { useEffect, useState } from "react";

export default function useMediaQuery(query) {
  const getMatch = () => window.matchMedia(query).matches;
  const [matches, setMatches] = useState(getMatch);

  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = (event) => setMatches(event.matches);
    media.addEventListener("change", listener);
    setMatches(media.matches);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export function useBreakpoint() {
  return {
    isMobile: useMediaQuery("(max-width: 767px)"),
    isTablet: useMediaQuery("(min-width: 768px) and (max-width: 1023px)"),
    isDesktop: useMediaQuery("(min-width: 1024px)"),
  };
}