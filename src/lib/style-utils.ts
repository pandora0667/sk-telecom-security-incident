import { SEVERITY_LEVELS, SEVERITY_STYLES } from './constants';
import { 
  StyleClassName, 
  SeverityLevel, 
  ButtonVariant, 
  ButtonSize, 
  CardVariant, 
  TextGradientType, 
  BackgroundGradientType, 
  ContainerSize, 
  TextSize 
} from './types';

/**
 * 심각도 레벨에 따른 스타일 클래스를 반환하는 함수
 * @param severity - 심각도 레벨 ('critical', 'high', 'medium', 'low')
 * @returns 해당 심각도의 스타일 클래스
 */
export const getSeverityStyle = (severity: SeverityLevel): StyleClassName => {
  return SEVERITY_STYLES[severity as keyof typeof SEVERITY_STYLES] || SEVERITY_STYLES[SEVERITY_LEVELS.LOW];
};

/**
 * 네비게이션 활성화 상태에 따른 스타일 클래스를 반환하는 함수
 * @param isActive - 활성화 상태 여부
 * @returns 해당 상태의 스타일 클래스
 */
export const getNavLinkStyle = (isActive: boolean): StyleClassName => {
  const baseStyle = 'relative px-1.5 lg:px-2 py-1 font-medium transition-colors hover:text-fuchsia-700';
  const activeStyle = 'text-fuchsia-700';
  const inactiveStyle = 'text-muted-foreground';
  
  return `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`;
};

/**
 * 모바일 네비게이션 링크 스타일 클래스를 반환하는 함수
 * @param isActive - 활성화 상태 여부
 * @returns 해당 상태의 스타일 클래스
 */
export const getMobileNavLinkStyle = (isActive: boolean): StyleClassName => {
  const baseStyle = 'px-3 py-2 rounded-md font-medium text-base transition-colors';
  const activeStyle = 'text-fuchsia-700 bg-fuchsia-50';
  const inactiveStyle = 'text-muted-foreground hover:bg-fuchsia-50 hover:text-fuchsia-700';
  
  return `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`;
};

/**
 * 카드 컴포넌트의 기본 스타일을 반환하는 함수
 * @param variant - 카드 변형 ('default', 'outlined', 'elevated')
 * @returns 해당 변형의 스타일 클래스
 */
export const getCardStyle = (variant: CardVariant = 'default'): StyleClassName => {
  const baseStyle = 'rounded-xl p-6 border';
  
  const variants: Record<CardVariant, string> = {
    default: 'bg-white border-slate-200 shadow-sm',
    outlined: 'bg-white border-slate-300',
    elevated: 'bg-white border-slate-200 shadow-lg',
  };
  
  return `${baseStyle} ${variants[variant]}`;
};

/**
 * 버튼 컴포넌트의 기본 스타일을 반환하는 함수
 * @param variant - 버튼 변형 ('primary', 'secondary', 'outline', 'ghost')
 * @param size - 버튼 크기 ('sm', 'md', 'lg')
 * @returns 해당 변형과 크기의 스타일 클래스
 */
export const getButtonStyle = (
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md'
): StyleClassName => {
  const baseStyle = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    outline: 'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50',
    ghost: 'text-slate-700 hover:bg-slate-100',
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  return `${baseStyle} ${variants[variant]} ${sizes[size]}`;
};

/**
 * 그라데이션 텍스트 스타일을 반환하는 함수
 * @param gradient - 그라데이션 타입 ('blue-purple', 'blue-fuchsia', 'purple-pink')
 * @returns 해당 그라데이션의 스타일 클래스
 */
export const getGradientTextStyle = (gradient: TextGradientType = 'blue-purple'): StyleClassName => {
  const baseStyle = 'bg-gradient-to-r bg-clip-text text-transparent';
  
  const gradients = {
    'blue-purple': 'from-blue-700 via-purple-600 to-fuchsia-500',
    'blue-fuchsia': 'from-blue-700 to-fuchsia-600',
    'purple-pink': 'from-purple-600 to-pink-500',
  };
  
  return `${baseStyle} ${gradients[gradient]}`;
};

/**
 * 배경 그라데이션 스타일을 반환하는 함수
 * @param gradient - 그라데이션 타입 ('blue-purple', 'slate-light', 'blue-white')
 * @returns 해당 그라데이션의 스타일 클래스
 */
export const getBackgroundGradientStyle = (gradient: BackgroundGradientType = 'blue-purple'): StyleClassName => {
  const baseStyle = 'bg-gradient-to-br';
  
  const gradients = {
    'blue-purple': 'from-blue-50 via-white to-purple-100',
    'slate-light': 'from-slate-50 to-white',
    'blue-white': 'from-blue-50 to-white',
  };
  
  return `${baseStyle} ${gradients[gradient]}`;
};

/**
 * 컨테이너 최대 너비 스타일을 반환하는 함수
 * @param size - 컨테이너 크기 ('sm', 'md', 'lg', 'xl', 'full')
 * @returns 해당 크기의 스타일 클래스
 */
export const getContainerStyle = (size: ContainerSize = 'lg'): StyleClassName => {
  const baseStyle = 'mx-auto px-4';
  
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };
  
  return `${baseStyle} ${sizes[size]}`;
};

/**
 * 반응형 텍스트 크기 스타일을 반환하는 함수
 * @param size - 텍스트 크기 ('sm', 'md', 'lg', 'xl', 'hero')
 * @returns 해당 크기의 반응형 스타일 클래스
 */
export const getResponsiveTextStyle = (size: TextSize = 'md'): StyleClassName => {
  const sizes = {
    sm: 'text-sm md:text-base',
    md: 'text-base md:text-lg',
    lg: 'text-lg md:text-xl',
    xl: 'text-xl md:text-2xl',
    hero: 'text-3xl sm:text-4xl md:text-6xl',
  };
  
  return sizes[size];
}; 