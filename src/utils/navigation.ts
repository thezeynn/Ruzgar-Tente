export interface NavItem {
  name: string;
  path: string;
  sectionId: string;
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'Ana Sayfa', path: '/anasayfa', sectionId: 'anasayfa' },
  { name: 'Modellerimiz', path: '/modeller', sectionId: 'modeller' },
  { name: 'Neden Biz?', path: '/neden-biz', sectionId: 'neden-biz' },
  { name: 'Projeler', path: '/projeler', sectionId: 'projeler' },
  { name: 'S.S.S.', path: '/sss', sectionId: 'sss' },
  { name: 'İletişim', path: '/iletisim', sectionId: 'iletisim' },
];

let isProgrammaticScrolling = false;
let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

export function scrollToSection(sectionId: string) {
  isProgrammaticScrolling = true;
  if (scrollTimeout) clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    isProgrammaticScrolling = false;
  }, 1000);

  if (sectionId === 'anasayfa' || !sectionId) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const el = document.getElementById(sectionId);
  if (el) {
    const yOffset = -70; // Header height compensation
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export function navigateTo(pathOrSection: string, replace = false) {
  // Normalize string: handles '#/anasayfa', '#anasayfa', '/anasayfa', 'anasayfa'
  let clean = pathOrSection.replace(/^#\/?/, '').replace(/^\//, '');
  if (!clean || clean === '/') clean = 'anasayfa';

  const match = NAV_ITEMS.find(
    (item) => item.sectionId === clean || item.path === `/${clean}`
  );

  const targetPath = match ? match.path : `/${clean}`;
  const sectionId = match ? match.sectionId : clean;

  if (window.location.pathname !== targetPath || window.location.hash) {
    if (replace) {
      window.history.replaceState(null, '', targetPath);
    } else {
      window.history.pushState(null, '', targetPath);
    }
  }

  scrollToSection(sectionId);
  window.dispatchEvent(new CustomEvent('app-route-change', { detail: { path: targetPath, sectionId } }));
}

export function isUserScrolling() {
  return !isProgrammaticScrolling;
}
