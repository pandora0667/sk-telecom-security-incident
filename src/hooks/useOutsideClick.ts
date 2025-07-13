import { useEffect, RefObject } from 'react';

/**
 * 외부 클릭 감지 훅
 * @param refs - 감지에서 제외할 ref들의 배열
 * @param callback - 외부 클릭 시 실행할 콜백 함수
 * @param enabled - 감지 활성화 여부 (기본값: true)
 */
export const useOutsideClick = (
  refs: RefObject<HTMLElement | null>[],
  callback: () => void,
  enabled: boolean = true
): void => {
  useEffect(() => {
    if (!enabled) return;

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Node;
      
      // 모든 ref가 현재 타겟을 포함하지 않는 경우에만 콜백 실행
      const isOutside = refs.every(ref => 
        ref.current && !ref.current.contains(target)
      );
      
      if (isOutside) {
        callback();
      }
    };

    document.addEventListener('click', handleOutsideClick);
    
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [refs, callback, enabled]);
}; 