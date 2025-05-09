"use client";

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: '메인' },
  { href: '/timeline', label: '타임라인' },
  { href: '/analysis', label: '침해 분석' },
  { href: '/response', label: '대응 조치' },
  { href: '/press', label: '사회적 반응' },
  { href: '/classaction', label: '집단소송' },
  { href: '/similar-cases', label: '유사 해킹사례' },
  { href: '/faq', label: 'FAQ' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 화면 크기 변경 감지
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // 초기 실행
    checkScreenSize();
    
    // 리사이즈 이벤트 리스너 등록
    window.addEventListener('resize', checkScreenSize);
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // 드롭다운 외부 클릭 시 닫기
  useEffect(() => {
    if (!open) return;
    
    const handleOutsideClick = (e: MouseEvent) => {
      // 메뉴 버튼이나 메뉴 영역 내부 클릭이 아닐 경우에만 닫기
      if (
        menuRef.current && 
        buttonRef.current && 
        !menuRef.current.contains(e.target as Node) && 
        !buttonRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    
    document.addEventListener('click', handleOutsideClick);
    
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [open]);

  return (
    <header className="w-full flex justify-center py-4 bg-transparent">
      <div className="w-full max-w-6xl rounded-2xl shadow-lg bg-white flex flex-wrap items-center px-6 py-2 gap-4 relative">
        {/* 로고/타이틀 */}
        <div className="flex-shrink-0 flex items-center gap-3">
          <Link href="/">
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
              <Image 
                src="/skt-logo/BI_T.png" 
                alt="SK텔레콤 T 로고" 
                width={40}
                height={40}
                priority
                className="object-contain"
                style={{ objectPosition: 'center center' }}
              />
            </div>
          </Link>
          <Link href="/" className="font-extrabold text-sm sm:text-lg md:text-xl text-primary truncate">
            <span className="inline-block max-w-[180px] sm:max-w-none truncate">SK텔레콤 유심 해킹 사건 분석</span>
          </Link>
        </div>
        
        {/* 네비게이션 - 데스크탑 (오른쪽 정렬) */}
        <nav className="hidden md:flex flex-1 justify-end gap-2 lg:gap-4 text-sm lg:text-base font-medium overflow-x-auto whitespace-nowrap">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-2 py-1 font-medium transition-colors
                hover:text-fuchsia-700
                ${pathname === item.href ? 'text-fuchsia-700' : 'text-muted-foreground'}
              `}
            >
              {item.label}
              {pathname === item.href && (
                <span className="absolute left-0 right-0 -bottom-1 h-0.5 bg-fuchsia-500 rounded-full" />
              )}
            </Link>
          ))}
        </nav>
        
        {/* 네비게이션 - 모바일 햄버거 (md 미만에서만 표시) */}
        <div className="md:hidden ml-auto">
          <button
            ref={buttonRef}
            className="p-2 rounded-lg hover:bg-fuchsia-50 transition-colors"
            onClick={(e) => {
              e.stopPropagation(); // 이벤트 버블링 방지
              setOpen((v) => !v);
            }}
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          >
            {open ? (
              <X className="w-6 h-6 text-fuchsia-700" />
            ) : (
              <Menu className="w-6 h-6 text-fuchsia-700" />
            )}
          </button>
        </div>
      </div>
      
      {/* 드롭다운 메뉴 (모바일 & 태블릿) - md 미만에서만 표시 */}
      {open && isMobile && (
        <div 
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setOpen(false)}
        >
          <div 
            ref={menuRef}
            className="absolute top-20 left-0 right-0 mx-auto w-[90%] max-w-md bg-white rounded-xl shadow-lg border py-3 px-4 z-50 flex flex-col gap-2 animate-fade-in"
            onClick={(e) => e.stopPropagation()} // 내부 클릭 시 버블링 방지
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md font-medium text-base transition-colors ${
                  pathname === item.href 
                    ? 'text-fuchsia-700 bg-fuchsia-50' 
                    : 'text-muted-foreground hover:bg-fuchsia-50 hover:text-fuchsia-700'
                }`}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
} 