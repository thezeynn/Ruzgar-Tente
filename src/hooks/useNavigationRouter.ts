import { useEffect, useState } from 'react';
import { NAV_ITEMS, isUserScrolling, scrollToSection } from '../utils/navigation';

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

  useEffect(() => {
    // 1. Initial cleanup: If URL has '#' like '#/anasayfa' or '#anasayfa'
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
      }
    } else {
      // Default clean path is /anasayfa
      window.history.replaceState(null, '', '/anasayfa');
    }

    // Scroll to initial target section if not home
    if (targetSection !== 'anasayfa') {
      const timer = setTimeout(() => {
        scrollToSection(targetSection);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, []);

  // Listen to popstate (back/forward browser buttons)
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

  // Scroll spy: Update browser URL dynamically without # as user scrolls
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!isUserScrolling()) {
            ticking = false;
            return;
          }

          const scrollPosition = window.scrollY + 140;
          const sections = NAV_ITEMS.map((item) => ({
            id: item.sectionId,
            path: item.path,
            el: document.getElementById(item.sectionId),
          })).filter((s) => s.el !== null);

          // If at the very top of the page, it's anasayfa
          if (window.scrollY < 120) {
            if (activeSection !== 'anasayfa') {
              setActiveSection('anasayfa');
              if (window.location.pathname !== '/anasayfa') {
                window.history.replaceState(null, '', '/anasayfa');
              }
            }
            ticking = false;
            return;
          }

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section.el && section.el.offsetTop <= scrollPosition) {
              if (activeSection !== section.id) {
                setActiveSection(section.id);
                if (window.location.pathname !== section.path) {
                  window.history.replaceState(null, '', section.path);
                }
              }
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return { activeSection, setActiveSection };
}
