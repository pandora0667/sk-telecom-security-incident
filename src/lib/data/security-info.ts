import { SecurityInfo } from '../types';

export const securityInfoData: SecurityInfo[] = [
  {
    title: 'VPN 장비 취약점',
    description: 'Ivanti VPN 장비의 알려진 취약점을 통한 침투',
    severity: 'critical',
    affected: ['VPN 장비', '내부 네트워크'],
    solution: 'VPN 장비 펌웨어 업데이트 및 접근 제한 강화'
  },
  {
    title: 'BPFDoor 백도어',
    description: '리눅스 시스템에 설치된 BPFDoor 백도어',
    severity: 'high',
    affected: ['HSS 서버', '인증 시스템'],
    solution: '시스템 재설치 및 보안 강화'
  },
  {
    title: 'HSS 서버 침입',
    description: '가입자 인증 정보가 저장된 HSS 서버 침입',
    severity: 'critical',
    affected: ['가입자 정보', '인증 키'],
    solution: '유심 교체 및 인증 키 재발급'
  }
]; 