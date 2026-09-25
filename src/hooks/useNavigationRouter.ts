import { useEffect, useState } from 'react';
import { NAV_ITEMS, isUserScrolling, scrollToSection } from '../utils/navigation';

const SCROLL_SECTIONS = [
  { id: 'iletisim', path: '/iletisim' },
  { id: 'sss', path: '/sss' },
  { id: 'projeler', path: '/projeler' },
  { id: 'neden-biz', path: '/neden-biz' },
  { id: 'modeller', path: '/modeller' },
];

function getInitialSection(): string {
  if (typeof window === 'undefined') return 'anasayfa';
  const hash = window.location.hash;
  const pathname = window.location.pathname;

  if (hash) {
    const cleanHash = hash.replace(/^#\/?/, '').replace(/^\//, '');
    const matched = NAV_ITEMS.find((n) => n.sectionId === cleanHash);
    return matched ? matched.sectionId : 'anasayfa';
  }
  if (pathname && pathname !== '/') {
    const cleanPath = pathname.replace(/^\//, '');
    const matched = NAV_ITEMS.find((n) => n.sectionId === cleanPath || n.path === pathname);
    return matched ? matched.sectionId : 'anasayfa';
  }
  return 'anasayfa';
}

export function useNavigationRouter() {
  const [activeSection, setActiveSection] = useState<string>(getInitialSection);

  // 1. Initial URL normalization and initial scroll
  useEffect(() => {
    const hash = window.location.hash;
    const pathname = window.location.pathname;

    let targetSection = 'anasayfa';

    if (hash) {
      const cleanHash = hash.replace(/^#\/?/, '').replace(/^\//, '');
      if (cleanHash) targetSection = cleanHash;
      const matched = NAV_ITEMS.find((n) => n.sectionId === targetSection);
      const cleanPath = matched ? matched.path : `/${targetSection}`;
      window.history.replaceState(null, '', cleanPath);
    } else if (pathname && pathname !== '/') {
      const cleanPath = pathname.replace(/^\//, '');
      const matched = NAV_ITEMS.find((n) => n.sectionId === cleanPath || n.path === pathname);
      if (matched) {
        targetSection = matched.sectionId;
      } else {
        window.history.replaceState(null, '', '/anasayfa');
      }
    } else {
      // Default clean path is /anasayfa
      window.history.replaceState(null, '', '/anasayfa');
    }

    // If starting at a specific section (e.g. /modeller direct link), scroll to it
    if (targetSection !== 'anasayfa') {
      const timer = setTimeout(() => {
        scrollToSection(targetSection);
      }, 250);
      return () => clearTimeout(timer);
    } else {
      // Ensure clean /anasayfa in address bar on initial load
      if (window.location.pathname !== '/anasayfa') {
        window.history.replaceState(null, '', '/anasayfa');
      }
    }
  }, []);

  // 2. Listen to custom app-route-change (fired when clicking nav links via navigateTo)
  useEffect(() => {
    const handleRouteChange = (e: Event) => {
      const customEvent = e as CustomEvent<{ path: string; sectionId: string }>;
      if (customEvent.detail) {
        const { path, sectionId } = customEvent.detail;
        setActiveSection(sectionId);
        if (window.location.pathname !== path) {
          window.history.replaceState(null, '', path);
        }
      }
    };

    window.addEventListener('app-route-change', handleRouteChange);
    return () => window.removeEventListener('app-route-change', handleRouteChange);
  }, []);

  // 3. Listen to popstate (back/forward browser buttons)
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname.replace(/^\//, '');
      const matched = NAV_ITEMS.find((n) => n.sectionId === pathname || n.path === window.location.pathname);
      const section = matched ? matched.sectionId : (pathname || 'anasayfa');
      setActiveSection(section);
      scrollToSection(section);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // 4. Scroll spy: strictly syncs active section & URL without #
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false;
          if (!isUserScrolling()) return;

          const scrollY = window.scrollY;

          // Check sections from bottom to top
          let currentSection = 'anasayfa';
          let currentPath = '/anasayfa';

          // First check modeller's offset to ensure anasayfa is rock solid
          const modellerEl = document.getElementById('modeller');
          const modellerTop = modellerEl ? modellerEl.offsetTop : 750;

          // If anywhere in the upper portion above modeller section
          if (scrollY < modellerTop - 180) {
            currentSection = 'anasayfa';
            currentPath = '/anasayfa';
          } else {
            // Find section that user has scrolled into
            for (const sec of SCROLL_SECTIONS) {
              const el = document.getElementById(sec.id);
              if (el && scrollY >= el.offsetTop - 200) {
                currentSection = sec.id;
                currentPath = sec.path;
                break;
              }
            }
          }

          // Update active state
          setActiveSection(currentSection);

          // Update address bar path if not matching (ensuring 0 desync)
          if (window.location.pathname !== currentPath) {
            window.history.replaceState(null, '', currentPath);
          }
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { activeSection, setActiveSection };
}
