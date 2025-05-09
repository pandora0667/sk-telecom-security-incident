"use client";


import { useCallback, ReactNode } from "react";

import { 
  ReactFlow, 
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Node,
  Edge,
  Position,
  MarkerType,
  NodeProps,
  BackgroundVariant,
  ReactFlowProvider,
  Connection
} from "@xyflow/react";
import { motion } from "framer-motion";
import { 
  Server, 
  Database, 
  Code, 
  Layers,
  Network,
  Terminal,
  Cpu,
  Workflow,
  AlertTriangle
} from "lucide-react";

// React Flow 스타일 임포트
import "@xyflow/react/dist/style.css";

// 애니메이션 variants
const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } },
};

// 노드 데이터 타입 정의
interface NodeData {
  label: string | ReactNode;
  description?: string;
  icon?: ReactNode;
  style: {
    background: string;
    borderColor: string;
    color: string;
    gradient?: string;
  };
  [key: string]: any; 
}

// 타이틀 노드 데이터 타입
interface TitleNodeData {
  label: string;
  color: string;
  bgColor: string;
  [key: string]: any;
}

// 배경 노드 데이터 타입
interface BackgroundNodeData {
  [key: string]: any;
}

// 노드 스타일 타입
type NodeStyleType = 'attacker-server' | 'network-layer' | 'kernel-layer' | 
                   'application-layer' | 'data-layer' | 'system-call' | 'label' | 'threat' | 'flow';

// 카드 디자인을 위한 유틸리티 함수
const getNodeStyle = (type: NodeStyleType) => {
  switch (type) {
    case 'attacker-server':
      return { 
        background: '#fee2e2', 
        borderColor: '#ef4444', 
        color: '#991b1b',
        gradient: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)' 
      };
    case 'network-layer':
      return { 
        background: '#dbeafe', 
        borderColor: '#3b82f6', 
        color: '#1e40af',
        gradient: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)' 
      };
    case 'kernel-layer':
      return { 
        background: '#dcfce7', 
        borderColor: '#22c55e', 
        color: '#166534',
        gradient: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)' 
      };
    case 'application-layer':
      return { 
        background: '#f3e8ff', 
        borderColor: '#a855f7', 
        color: '#7e22ce',
        gradient: 'linear-gradient(135deg, #f3e8ff 0%, #e9d5ff 100%)' 
      };
    case 'data-layer':
      return { 
        background: '#cffafe', 
        borderColor: '#06b6d4', 
        color: '#0e7490',
        gradient: 'linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%)' 
      };
    case 'system-call':
      return { 
        background: '#fef9c3', 
        borderColor: '#eab308', 
        color: '#854d0e',
        gradient: 'linear-gradient(135deg, #fef9c3 0%, #fde68a 100%)' 
      };
    case 'threat':
      return { 
        background: '#fee2e2', 
        borderColor: '#ef4444', 
        color: '#991b1b',
        gradient: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)' 
      };
    case 'label':
    default:
      return { 
        background: '#f8fafc', 
        borderColor: '#cbd5e1', 
        color: '#334155',
        gradient: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' 
      };
  }
};

// 아이콘 선택 함수
const getNodeIcon = (type: NodeStyleType) => {
  switch (type) {
    case 'attacker-server':
      return <Server size={20} />;
    case 'network-layer':
      return <Network size={20} />;
    case 'kernel-layer':
      return <Cpu size={20} />;
    case 'application-layer':
      return <Terminal size={20} />;
    case 'data-layer':
      return <Database size={20} />;
    case 'system-call':
      return <Code size={20} />;
    case 'flow':
      return <Workflow size={20} />;
    case 'threat':
      return <AlertTriangle size={20} />;
    case 'label':
    default:
      return <Layers size={20} />;
  }
};

// 커스텀 노드 생성 함수
const createNode = (
  id: string,
  label: string,
  description: string,
  type: NodeStyleType,
  position: { x: number, y: number },
  width: number = 180,
  height: any = 'auto'
): Node<NodeData> => {
  const style = getNodeStyle(type);
  const icon = getNodeIcon(type);
  
  return {
    id,
    type: 'default',
    position,
    style: {
      background: style.gradient || style.background,
      borderColor: style.borderColor,
      borderWidth: '2px',
      borderStyle: 'solid',
      borderRadius: '8px',
      padding: '12px',
      width,
      height,
      boxShadow: '0 4px 8px -1px rgb(0 0 0 / 0.15), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      fontSize: '14px'
    },
    data: {
      label,
      description,
      icon,
      style
    },
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  };
};

// 레이어 구분 생성 함수
const createLayerNode = (
  id: string,
  label: string,
  position: { x: number, y: number },
  width: number = 180,
  height: number = 50
): Node<TitleNodeData> => {
  return {
    id,
    type: 'layer',
    position,
    style: {
      width,
      height,
      padding: 0,
      borderRadius: '0px',
      background: 'transparent',
      zIndex: -1
    },
    data: {
      label,
      color: "#334155",
      bgColor: "transparent"
    },
    zIndex: -1
  };
};

// BPFDoor 다이어그램 컴포넌트
export default function BPFDoorDiagram() {
  // 섹션 너비 및 높이 설정
  const COLUMN_WIDTH = 200;
  const COLUMN_SPACING = 80;  // 열 간격 증가
  const ROW_HEIGHT = 200;    // 행 높이 더 증가
  const PADDING = 60;        // 패딩 증가

  // 열 위치 계산
  const COL1 = PADDING;
  const COL2 = COL1 + COLUMN_WIDTH + COLUMN_SPACING;
  const COL3 = COL2 + COLUMN_WIDTH + COLUMN_SPACING;
  const COL4 = COL3 + COLUMN_WIDTH + COLUMN_SPACING;
  const COL5 = COL4 + COLUMN_WIDTH + COLUMN_SPACING;

  // 행 위치 계산
  const ROW1 = PADDING;
  const ROW2 = ROW1 + ROW_HEIGHT;
  const ROW3 = ROW2 + ROW_HEIGHT;
  const ROW4 = ROW3 + ROW_HEIGHT;
  const ROW5 = ROW4 + ROW_HEIGHT;
  const ROW6 = ROW5 + ROW_HEIGHT;  // 추가 행

  // 초기 노드 정의
  const initialNodes: Node[] = [
    // === 레이어 배경 노드 ===
    {
      id: 'bg-attacker',
      type: 'background',
      position: { x: COL1 - 20, y: ROW1 - 20 },
      style: { 
        width: COLUMN_WIDTH + 40,
        height: ROW6 - ROW1 + 180,  // 높이 증가
        background: 'rgba(254, 226, 226, 0.3)',
        border: '1px dashed #ef4444',
        borderRadius: '12px',
        zIndex: -10
      },
      zIndex: -10,
      data: {} as BackgroundNodeData
    },
    {
      id: 'bg-network',
      type: 'background',
      position: { x: COL2 - 20, y: ROW1 - 20 },
      style: { 
        width: COLUMN_WIDTH + 40,
        height: ROW6 - ROW1 + 180,  // 높이 증가
        background: 'rgba(219, 234, 254, 0.3)',
        border: '1px dashed #3b82f6',
        borderRadius: '12px',
        zIndex: -10
      },
      zIndex: -10,
      data: {} as BackgroundNodeData
    },
    {
      id: 'bg-kernel',
      type: 'background',
      position: { x: COL3 - 20, y: ROW1 - 20 },
      style: { 
        width: COLUMN_WIDTH + 40,
        height: ROW6 - ROW1 + 180,  // 높이 증가
        background: 'rgba(220, 252, 231, 0.3)',
        border: '1px dashed #22c55e',
        borderRadius: '12px',
        zIndex: -10
      },
      zIndex: -10,
      data: {} as BackgroundNodeData
    },
    {
      id: 'bg-application',
      type: 'background',
      position: { x: COL4 - 20, y: ROW1 - 20 },
      style: { 
        width: COLUMN_WIDTH + 40,
        height: ROW6 - ROW1 + 180,  // 높이 증가
        background: 'rgba(243, 232, 255, 0.3)',
        border: '1px dashed #a855f7',
        borderRadius: '12px',
        zIndex: -10
      },
      zIndex: -10,
      data: {} as BackgroundNodeData
    },
    {
      id: 'bg-data',
      type: 'background',
      position: { x: COL5 - 20, y: ROW1 - 20 },
      style: { 
        width: COLUMN_WIDTH + 40,
        height: ROW6 - ROW1 + 180,  // 높이 증가
        background: 'rgba(207, 250, 254, 0.3)',
        border: '1px dashed #06b6d4',
        borderRadius: '12px',
        zIndex: -10
      },
      zIndex: -10,
      data: {} as BackgroundNodeData
    },
    
    // === 영역 제목 ===
    {
      id: 'title-attacker',
      type: 'title',
      position: { x: COL1, y: ROW1 - 10 },
      style: { width: COLUMN_WIDTH },
      data: {
        label: "공격자 영역",
        color: "#991b1b",
        bgColor: "#fee2e2"
      } as TitleNodeData
    },
    {
      id: 'title-network',
      type: 'title',
      position: { x: COL2, y: ROW1 - 10 },
      style: { width: COLUMN_WIDTH },
      data: {
        label: "네트워크 레이어",
        color: "#1e40af",
        bgColor: "#dbeafe"
      } as TitleNodeData
    },
    {
      id: 'title-kernel',
      type: 'title',
      position: { x: COL3, y: ROW1 - 10 },
      style: { width: COLUMN_WIDTH },
      data: {
        label: "커널 영역",
        color: "#166534",
        bgColor: "#dcfce7"
      } as TitleNodeData
    },
    {
      id: 'title-application',
      type: 'title',
      position: { x: COL4, y: ROW1 - 10 },
      style: { width: COLUMN_WIDTH },
      data: {
        label: "애플리케이션 영역",
        color: "#7e22ce",
        bgColor: "#f3e8ff"
      } as TitleNodeData
    },
    {
      id: 'title-data',
      type: 'title',
      position: { x: COL5, y: ROW1 - 10 },
      style: { width: COLUMN_WIDTH },
      data: {
        label: "HSS 서버",
        color: "#0e7490",
        bgColor: "#cffafe"
      } as TitleNodeData
    },
    
    // === 공격자 영역 ===
    createNode(
      'attacker-server',
      'C2 서버',
      '공격자 명령 제어 서버\n백도어 원격 조작 담당',
      'attacker-server',
      { x: COL1, y: ROW2 },
      COLUMN_WIDTH
    ),
    
    // === 네트워크 레이어 ===
    createNode(
      'magic-packet',
      '매직 패킷',
      'TCP/UDP/ICMP 프로토콜\n특수 패킷 시그니처 포함\n0x7255, 0x5293,\n0x39393939',
      'network-layer',
      { x: COL2, y: ROW2 },
      COLUMN_WIDTH
    ),
    createNode(
      'vpn-endpoint',
      'VPN 취약점',
      '외부접근 우회\n인증 절차 무력화\nIvanti VPN 취약점 이용',
      'network-layer',
      { x: COL2, y: ROW4 },  // 위치 조정
      COLUMN_WIDTH
    ),
    
    // === 커널 영역 ===
    createNode(
      'ebpf-hook',
      'eBPF 필터',
      '커널 레벨 필터링\n특정 패킷만 감지\n정규 트래픽 위장\n네트워크 모니터링 우회',
      'kernel-layer',
      { x: COL3, y: ROW2 },
      COLUMN_WIDTH
    ),
    createNode(
      'system-call-hooking',
      '시스템 콜 후킹',
      '프로세스 리스팅 조작\n포트 상태 숨김\n커널 함수 후킹\n정상 프로세스로 위장',
      'system-call',
      { x: COL3, y: ROW3 + 50 },  // 위치 조정
      COLUMN_WIDTH
    ),
    createNode(
      'kernel-module',
      'BPFDoor 백도어',
      '커널 모듈 내 은닉\n루트킷 기능 수행\n프로세스 관리자 회피\n메모리 상주 악성코드',
      'kernel-layer',
      { x: COL3, y: ROW5 },  // 위치 조정
      COLUMN_WIDTH
    ),
    
    // === 애플리케이션 영역 ===
    createNode(
      'backdoor-shell',
      '백도어 쉘',
      '명령어 실행 인터페이스\n특수 인증 메커니즘\n쉘 명령 수행\n권한 상승 도구',
      'application-layer',
      { x: COL4, y: ROW3 + 50 },  // 위치 조정
      COLUMN_WIDTH
    ),
    
    // === HSS 서버 영역 ===
    createNode(
      'hss-server',
      'HSS 서버',
      '가입자 데이터베이스\n고객 USIM 정보 관리\n권한 상승 후 접근 가능\n통신망 핵심 인프라',
      'data-layer',
      { x: COL5, y: ROW3 + 50 },  // 위치 조정
      COLUMN_WIDTH
    ),
    
    // === 데이터 흐름 노드 ===
    createNode(
      'data-exfiltration',
      'USIM 데이터 유출',
      '암호화된 연결 통로\n9.7GB 데이터 유출\n은닉 채널 이용\n방화벽/IDS 우회',
      'data-layer',
      { x: COL5, y: ROW4 + 50 },  // 위치 조정
      COLUMN_WIDTH
    ),
    
    // === 유출된 정보 노드 (추가) ===
    createNode(
      'leaked-data',
      'USIM 인증정보 유출',
      '• IMSI (가입자 식별번호)\n• Ki (가입자 인증키)\n• MSISDN (전화번호)\n• OPc (사업자 인증키)\n• 기타 관리정보 21종',
      'data-layer',
      { x: COL5, y: ROW5 + 60 },  // 위치 조정
      COLUMN_WIDTH
    ),
    
    // === 보안 위협 노드 (수정) ===
    createNode(
      'security-threat',
      '보안 위협',
      '• USIM 복제 가능성\n• SIM 스와핑 공격 위험\n• 위치추적 취약점\n• 감청 가능성 증가\n• 디지털 신분증 도용',
      'threat',
      { x: COL1, y: ROW5 + 50 },  // 위치 조정
      COLUMN_WIDTH
    ),
    
    // === 특징 설명 노드 ===
    createNode(
      'bpfdoor-features',
      'BPFDoor 특징',
      '• 패시브 트리거 방식\n• 포트 리스닝 없음\n• 시스템 함수 후킹\n• 정상 프로세스로 위장\n• 메모리 상주 (파일리스)\n• TCP/UDP/ICMP 트래픽 필터링',
      'label',
      { x: COL1, y: ROW4 },  // 위치 조정
      COLUMN_WIDTH,
      180
    ),
  ];

  // 초기 엣지 정의
  const initialEdges: Edge[] = [
    // 침투 경로
    {
      id: 'attacker-to-magic-packet',
      source: 'attacker-server',
      target: 'magic-packet',
      type: 'step',  // 직각형 연결선으로 변경
      animated: true,
      style: { stroke: '#3b82f6', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' },
      label: '1. 매직 패킷 전송',
      labelStyle: { fill: '#1e40af', fontWeight: 700, fontSize: 12 },
      labelBgStyle: { fill: '#dbeafe', fillOpacity: 0.9 },
      labelBgPadding: [4, 2],
      labelBgBorderRadius: 4,
    },
    {
      id: 'magic-packet-to-ebpf',
      source: 'magic-packet',
      target: 'ebpf-hook',
      type: 'step',  // 직각형 연결선으로 변경
      style: { stroke: '#3b82f6', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' },
      label: '2. 패킷 필터링',
      labelStyle: { fill: '#1e40af', fontWeight: 500, fontSize: 12 },
      labelBgStyle: { fill: '#dbeafe', fillOpacity: 0.9 },
      labelBgPadding: [4, 2],
      labelBgBorderRadius: 4,
    },
    {
      id: 'vpn-to-kernel',
      source: 'vpn-endpoint',
      target: 'kernel-module',
      type: 'step',  // 직각형 연결선으로 변경
      style: { stroke: '#3b82f6', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#3b82f6' },
      label: '2. 초기 침투',
      labelStyle: { fill: '#1e40af', fontWeight: 500, fontSize: 12 },
      labelBgStyle: { fill: '#dbeafe', fillOpacity: 0.9 },
      labelBgPadding: [4, 2],
      labelBgBorderRadius: 4,
    },
    {
      id: 'ebpf-to-system-call',
      source: 'ebpf-hook',
      target: 'system-call-hooking',
      type: 'step',  // 직각형 연결선으로 변경
      style: { stroke: '#16a34a', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#16a34a' },
      label: '3. 시스템 조작',
      labelStyle: { fill: '#166534', fontWeight: 500, fontSize: 12 },
      labelBgStyle: { fill: '#dcfce7', fillOpacity: 0.9 },
      labelBgPadding: [4, 2],
      labelBgBorderRadius: 4,
    },
    {
      id: 'system-call-to-kernel',
      source: 'system-call-hooking',
      target: 'kernel-module',
      type: 'step',  // 직각형 연결선으로 변경
      style: { stroke: '#16a34a', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#16a34a' },
      label: '4. 백도어 설치',
      labelStyle: { fill: '#166534', fontWeight: 500, fontSize: 12 },
      labelBgStyle: { fill: '#dcfce7', fillOpacity: 0.9 },
      labelBgPadding: [4, 2],
      labelBgBorderRadius: 4,
    },
    {
      id: 'kernel-to-shell',
      source: 'kernel-module',
      target: 'backdoor-shell',
      type: 'step',  // 직각형 연결선으로 변경
      style: { stroke: '#16a34a', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#16a34a' },
      label: '5. 원격 제어',
      labelStyle: { fill: '#166534', fontWeight: 500, fontSize: 12 },
      labelBgStyle: { fill: '#dcfce7', fillOpacity: 0.9 },
      labelBgPadding: [4, 2],
      labelBgBorderRadius: 4,
    },
    
    // 명령 전송 경로
    {
      id: 'backdoor-shell-to-hss',
      source: 'backdoor-shell',
      target: 'hss-server',
      type: 'step',  // 직각형 연결선으로 변경
      style: { stroke: '#7e22ce', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#7e22ce' },
      label: '6. HSS 서버 접근',
      labelStyle: { fill: '#7e22ce', fontWeight: 500, fontSize: 12 },
      labelBgStyle: { fill: '#f3e8ff', fillOpacity: 0.9 },
      labelBgPadding: [4, 2],
      labelBgBorderRadius: 4,
    },
    
    // 데이터 유출 경로
    {
      id: 'hss-to-data-exfil',
      source: 'hss-server',
      target: 'data-exfiltration',
      type: 'step',  // 직각형 연결선으로 변경
      style: { stroke: '#0e7490', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#0e7490' },
      label: '7. 데이터 수집',
      labelStyle: { fill: '#0e7490', fontWeight: 500, fontSize: 12 },
      labelBgStyle: { fill: '#cffafe', fillOpacity: 0.9 },
      labelBgPadding: [4, 2],
      labelBgBorderRadius: 4,
    },
    {
      id: 'data-exfil-to-attacker',
      source: 'data-exfiltration',
      target: 'attacker-server',
      type: 'step',  // 직각형 연결선으로 변경
      animated: true,
      style: { stroke: '#0e7490', strokeWidth: 2, strokeDasharray: '4,2' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#0e7490' },
      label: '8. 데이터 유출 (9.7GB)',
      labelStyle: { fill: '#0e7490', fontWeight: 700, fontSize: 12 },
      labelBgStyle: { fill: '#cffafe', fillOpacity: 0.9 },
      labelBgPadding: [4, 2],
      labelBgBorderRadius: 4,
    },
    
    // 유출된 정보 연결 (추가)
    {
      id: 'data-exfil-to-leaked-info',
      source: 'data-exfiltration',
      target: 'leaked-data',
      type: 'step',  // 직각형 연결선으로 변경
      style: { stroke: '#0e7490', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#0e7490' },
      label: '유출된 USIM 정보',
      labelStyle: { fill: '#0e7490', fontWeight: 500, fontSize: 12 },
      labelBgStyle: { fill: '#cffafe', fillOpacity: 0.9 },
      labelBgPadding: [4, 2],
      labelBgBorderRadius: 4,
    },
    
    // 보안 위협 연결 (추가)
    {
      id: 'leaked-info-to-security-threat',
      source: 'leaked-data',
      target: 'security-threat',
      type: 'step',  // 직각형 연결선으로 변경
      animated: true,
      style: { stroke: '#ef4444', strokeWidth: 2, strokeDasharray: '4,2' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' },
      label: '국가안보 및 개인정보 위협',
      labelStyle: { fill: '#991b1b', fontWeight: 700, fontSize: 12 },
      labelBgStyle: { fill: '#fee2e2', fillOpacity: 0.9 },
      labelBgPadding: [4, 2],
      labelBgBorderRadius: 4,
    },
    
    // 추가 연결: BPFDoor 특징과 커널 모듈
    {
      id: 'features-to-kernel',
      source: 'bpfdoor-features',
      target: 'kernel-module',
      type: 'step',  // 직각형 연결선으로 변경
      style: { stroke: '#64748b', strokeWidth: 1, strokeDasharray: '3,3' },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#64748b' },
      label: '특징 설명',
      labelStyle: { fill: '#475569', fontWeight: 500, fontSize: 10 },
      labelBgStyle: { fill: '#f1f5f9', fillOpacity: 0.9 },
      labelBgPadding: [4, 2],
      labelBgBorderRadius: 4,
    },
  ];

  // 상태 관리
  const [nodes, _setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // 연결 콜백
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  // 커스텀 노드 렌더링
  const nodeTypes = {
    // @ts-ignore - 노드 데이터 타입 문제 무시
    default: ({ data }: NodeProps<NodeData>) => (
      <div>
        {data.label && typeof data.label === 'string' && (
          <div className="flex items-center gap-2 mb-3">
            {data.icon && (
              <div className="w-8 h-8 rounded-sm flex items-center justify-center" 
                style={{
                  background: data.style?.background || '#f8fafc',
                  border: `1px solid ${data.style?.borderColor || '#cbd5e1'}`,
                  color: data.style?.color || '#334155'
                }}>
                {data.icon}
              </div>
            )}
            <h4 className="font-bold text-sm" style={{ color: data.style?.color || '#334155' }}>
              {data.label}
            </h4>
          </div>
        )}
        {data.label && typeof data.label !== 'string' && data.label}
        {data.description && (
          <p className="whitespace-pre-line text-xs text-slate-700 font-medium leading-relaxed">
            {data.description}
          </p>
        )}
      </div>
    ),
    // @ts-ignore - 노드 데이터 타입 문제 무시
    title: ({ data }: NodeProps<TitleNodeData>) => (
      <div className={`py-2 px-3 text-center rounded-md font-bold`} 
          style={{ backgroundColor: data.bgColor, color: data.color }}>
        {data.label}
      </div>
    ),
    // @ts-ignore - 노드 데이터 타입 문제 무시
    background: ({ data }: NodeProps<BackgroundNodeData>) => null,
  };

  return (
    <motion.section
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className="relative w-full border border-slate-200 rounded-md overflow-hidden shadow-md"
    >
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-3 border-b border-slate-200">
        <h3 className="text-center text-lg font-bold text-blue-900">
          BPFDoor 악성코드 아키텍처 다이어그램
        </h3>
      </div>

      {/* React Flow 컴포넌트 */}
      <div style={{ width: '100%', height: '1200px', background: '#ffffff' }}>
        <ReactFlowProvider>
          {/* @ts-ignore - React Flow의 타입 문제 무시 */}
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            // @ts-ignore - NodeTypes 타입 불일치 무시
            nodeTypes={nodeTypes}
            fitView
            minZoom={0.4}
            maxZoom={1.5}
            attributionPosition="bottom-right"
            proOptions={{ hideAttribution: false }}
            defaultEdgeOptions={{
              style: { strokeWidth: 2 },
              markerEnd: { type: MarkerType.ArrowClosed },
              type: 'step'
            }}
          >
            <Controls showInteractive={false} className="shadow-md rounded-md" />
            {/* @ts-ignore - Background 컴포넌트의 타입 문제 무시 */}
            <Background variant={BackgroundVariant.DOTS} gap={20} size={1} color="#e2e8f0" />
          </ReactFlow>
        </ReactFlowProvider>
      </div>

      {/* 설명 정보 */}
      <div className="bg-blue-50 p-4 border-t border-slate-200">
        <p className="text-center text-sm text-slate-700 leading-relaxed">
          BPFDoor는 리눅스 커널의 eBPF 기능을 악용하여 시스템에 침투하고, 시스템 콜을 후킹하여 흔적을 숨기며, 방화벽 우회 및 탐지 회피 기능을 구현합니다.
          <br />이 백도어는 포트 리스닝 없이 동작하므로 일반 모니터링 도구로는 탐지가 어렵습니다.
          <br />해킹으로 인해 유출된 IMSI, Ki, MSISDN, OPc 등의 정보는 디지털 신분증과 같은 역할을 하는 민감한 인증 데이터로, 
          <br />USIM 복제 및 통신 도청 등 심각한 보안 위협을 초래할 수 있습니다.
        </p>
      </div>
    </motion.section>
  );
}
