import { useState, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { BREAKPOINTS } from '@/lib/constants';
import { useIsMobile } from './useMediaQuery';
import { useOutsideClick } from './useOutsideClick';

export const useNavigation = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useIsMobile(BREAKPOINTS.MOBILE);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 메뉴 닫기 콜백 (useCallback으로 메모이제이션)
  const closeMenu = useCallback(() => setOpen(false), []);

  // 외부 클릭 감지로 메뉴 닫기
  useOutsideClick([menuRef, buttonRef], closeMenu, open);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // 이벤트 버블링 방지
    setOpen((v) => !v);
  };

  return {
    open,
    isMobile,
    pathname,
    menuRef,
    buttonRef,
    toggleMenu,
    closeMenu,
  };
}; 