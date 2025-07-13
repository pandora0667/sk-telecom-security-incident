import { useState, useEffect } from 'react';

/**
 * 미디어 쿼리 상태를 관리하는 훅
 * @param query - 미디어 쿼리 문자열 (예: '(max-width: 768px)')
 * @param defaultValue - 서버 사이드 렌더링 시 기본값
 * @returns 미디어 쿼리 매치 여부
 */
export const useMediaQuery = (query: string, defaultValue: boolean = false): boolean => {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // 초기 상태 설정
    setMatches(mediaQuery.matches);
    
    // 변경 감지 리스너 등록
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches);
    };
    
    mediaQuery.addEventListener('change', listener);
    
    // 컴포넌트 언마운트 시 리스너 제거
    return () => mediaQuery.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

/**
 * 모바일 화면 여부를 확인하는 훅
 * @param breakpoint - 모바일 브레이크포인트 (기본값: 768px)
 * @returns 모바일 화면 여부
 */
export const useIsMobile = (breakpoint: number = 768): boolean => {
  return useMediaQuery(`(max-width: ${breakpoint - 1}px)`, false);
}; 