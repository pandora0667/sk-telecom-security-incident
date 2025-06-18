import { TimelineEvent } from '../types';

export const timelineData: TimelineEvent[] = [
  {
    date: '2025.04.18',
    time: '18:09',
    title: '비정상 트래픽 최초 발견',
    description: 'SK텔레콤 네트워크 인프라 센터에서 장비 간 비정상 데이터 이동(대량 트래픽 유출)을 처음 포착. 내부 보안관제센터(SOC)가 즉시 조사를 시작하고, 위험 징후를 모니터링.',
    category: 'hacking',
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.04.18',
    time: '23:20',
    title: '악성코드 존재 확인',
    description: '과금 분석 서버(WCDR) 상에서 악성코드 존재 및 파일 삭제 흔적을 확인하여 해킹 공격이 있었음을 내부적으로 공식 인지. 이 시점에 이미 공격자가 일부 데이터를 외부로 빼냈을 가능성이 제기됨.',
    category: 'hacking',
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.04.19',
    time: '01:40',
    title: '침해 서버 격리 조치',
    description: '침해 흔적이 발견된 과금분석 서버를 격리 조치하고, 초기 포렌식을 통해 침입 경로와 유출된 데이터 종류 분석에 착수.',
    category: 'response',
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.04.19',
    time: '23:40',
    title: 'HSS 서버 데이터 유출 확인',
    description: '서울 성수동 SKT IDC에 위치한 음성 가입자 인증 시스템(HSS) 장비 5대 중 3대에서 대규모 데이터 유출 정황을 확인. 해커가 HSS 등 핵심 통신장비에 악성코드를 심어 약 9.7GB 분량의 가입자 USIM 관련 파일이 외부로 전송된 것을 확인.',
    category: 'hacking',
    important: true,
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.04.20',
    time: '16:46',
    title: 'KISA 공식 신고',
    description: 'SK텔레콤이 한국인터넷진흥원(KISA)에 이번 침해 사고를 공식 신고. 신고서에는 "불상의 해커가 당사 내부 장비에 악성코드를 설치해 시스템 파일을 유출한 정황"이라고 원인이 명시됨.',
    category: 'response',
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.04.22',
    time: '10:00',
    title: '개인정보위 보고 및 대외 공개',
    description: 'SK텔레콤이 개인정보보호위원회에 사고 내용을 보고하고, 수사기관(경찰)에 정식 수사를 요청. 동시에 공식 보도자료를 통해 해킹 사고 사실을 대외 공개하여 언론에 처음 알려짐.',
    category: 'response',
    important: true,
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.04.23',
    title: '경찰 수사 착수 및 정부기관 조사',
    description: '서울지방경찰청 사이버수사대가 수사에 착수하여 전담수사팀을 편성. 과학기술정보통신부, KISA, 개인정보위 등 관계기관도 합동으로 현장 조사를 시작. 언론을 통해 약 2,300만 명 가입자 정보가 유출되었을 수 있다는 내용이 확산되어 사회적 파장이 커짐.',
    category: 'investigation',
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.04.24',
    title: '금융권 보안 점검 강화',
    description: '금융감독원에서 국내 금융회사들에게 "이동통신사 유심 해킹사고 관련 유의사항" 공문을 배포. 은행 등에서 휴대전화 기반 본인인증 관련 보안 점검 강화를 지시함.',
    category: 'financial',
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.04.25',
    time: '11:00',
    title: 'CEO 대국민 사과 및 무상 교체 발표',
    description: 'SK텔레콤 유영상 대표이사가 대국민 사과문을 발표하는 고객 정보 보호 조치 강화 설명회를 개최. 이 자리에서 "전국 모든 SKT 및 MVNO(SKT망 알뜰폰) 가입자 총 2,500만 명을 대상으로 오는 4월 28일부터 USIM 무상 교체를 실시한다"고 공식 발표.',
    category: 'response',
    important: true,
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.04.25',
    time: '15:30',
    title: 'KISA, 악성코드 정보 공유',
    description: 'KISA가 보안 공지를 통해 \'최근 해킹 공격에 악용된 악성코드, IP 등 위협 정보 공유 및 주의 안내\'를 발표하여 SKT 해킹에서 발견된 악성파일의 정보를 공개. 이 공지에서 BPFDoor 관련 IoC 지표 등이 공유되었으며, 다른 기관들도 자체 보안 점검을 하도록 권고함.',
    category: 'government',
    source: 'ahnlab.com'
  },
  {
    date: '2025.04.27',
    title: '총리 지시 및 SKT의 추가 대응',
    description: '대통령 권한대행인 한덕수 국무총리가 이번 사고에 대해 "SKT 대응 조치의 적절성을 철저히 점검하고 미흡한 부분을 보완하라"는 긴급 지시를 관계 부처에 내림. SKT는 이날 "USIM 보호서비스 가입 권고 및 피해 발생 시 100% 배상" 입장을 밝혀 고객 불안을 달랬음.',
    category: 'government',
    source: 'hg2lee.tistory.com'
  },
  {
    date: '2025.04.28',
    title: '전국 유심 무상 교체 시작',
    description: 'SK텔레콤이 예고대로 전국 2,600개 대리점에서 전 고객 대상 USIM 무상 교체 작업을 시작. 일시적인 유심 재고 부족 현상이 발생하자, SKT는 "차량용 단말기나 키즈폰 등 일부는 기존 USIM을 데이터 초기화하여 재사용하는 방식으로 병행"한다고 발표.',
    category: 'response',
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.04.28',
    title: 'SKT 주가 급락',
    description: '주식시장에서 SKT의 주가가 전 거래일 대비 8.5% 급락하여 시가총액 약 8,000억 원 증발 및 KT에 역전되는 사태가 벌어짐. 투자자들은 이번 해킹에 따른 비용 부담과 신뢰도 하락을 우려한 것으로 분석됨.',
    category: 'financial',
    source: 'reuters.com'
  },
  {
    date: '2025.04.29',
    title: '민관합동조사단 1차 조사 결과 발표',
    description: '과기정통부가 민관합동조사단의 1차 조사 결과를 발표. "가입자 전화번호, IMSI 등 유심 복제에 쓰일 수 있는 정보 4종과, 유심 정보 처리에 필요한 SKT 관리용 정보 21종이 유출되었으며, 단말기 고유식별번호(IMEI)는 유출되지 않았다"고 공식 확인.',
    category: 'investigation',
    important: true,
    source: 'koreadaily.com'
  },
  {
    date: '2025.04.29',
    title: '정부 기관 SKT 유심 전면 교체',
    description: '국가정보원이 전 정부부처 및 산하기관에 "업무용 단말기의 SKT USIM을 전면 교체하라"는 공문을 발송. 금융권에서는 추가 보안대책으로 얼굴인증 등 강력인증 절차를 확대하는 등 후속조치가 이어짐.',
    category: 'government',
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.04.30',
    title: 'CEO 국회 청문회 출석',
    description: 'SKT 유영상 CEO가 국회 과학기술정보방송통신위원회에 출석하여 사고 경위와 대응에 대해 증언. 경찰은 \'SKT 유심정보 해킹사건\'에 대해 사이버수사대 내 전담 수사팀을 공식 편성하여 수사 본격화.',
    category: 'government',
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.04.30',
    title: '이반티 VPN 취약점 공격 가능성 제기',
    description: 'SKT 유심 해킹이 \'이반티 VPN 취약점\'을 노린 중국 해커그룹 소행 가능성이 제기됨. 보안 전문가들은 이번 공격이 장기간에 걸쳐 치밀하게 계획된 APT(지능형 지속 위협) 공격일 가능성을 제시함.',
    category: 'investigation',
    link: 'https://www.khan.co.kr/article/202504301850001',
    source: 'khan.co.kr'
  },
  {
    date: '2025.05.01',
    title: '신규 가입 접수 중단 조치',
    description: '과기정통부는 "SKT 유심 재고 문제가 해소될 때까지 SKT의 신규 가입 접수를 중단하도록 한다"는 행정지도 조치를 내림. 실제로 SKT는 5월 5일까지 약 일주일간 번호이동 및 신규 개통 업무를 중지하고 유심 교체 업무에 집중함.',
    category: 'government',
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.05.01',
    title: '개인정보보호법 개정안 발의',
    description: '국회에서 이번 사태를 계기로 개인정보보호법 개정안(개인정보 유출 기업·기관의 사후 책임 강화)을 발의. 여당 주최로 \'SKT 소비자 권익 및 개인정보보호 긴급 간담회\'가 열려, 필요시 국가정보원의 침해 대응 전문인력을 민간에 지원하는 방안을 검토함.',
    category: 'legal',
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.05.02',
    title: '전 이용자 USIM 보호서비스 자동 가입',
    description: 'SK텔레콤이 긴급 기자회견을 통해 "전 이용자를 USIM 보호서비스에 자동 가입시켰다"고 발표. 기존에는 고객이 개별 신청해야 했던 것을, 전원 일괄 적용하여 IMSI-IMEI 불일치 접속 차단을 기본 활성화 조치함.',
    category: 'response',
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.05.02',
    title: '스미싱 주의보 발령',
    description: '방송통신위원회는 스미싱 등 문자사기 주의보를 발령하고, 5월 6~8일 기간 통신사들의 본인확인 서비스 보안 특별점검을 예고함. 개인정보위는 "SK텔레콤은 가입자 개개인에게 유출 사실을 즉시 통지하라"고 요구.',
    category: 'government',
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.05.03',
    title: 'SKT 비상경영체제 격상 및 국회 법안 발의',
    description: 'SK텔레콤이 비상 경영체제를 최고 단계로 격상 (24시간 상황실 가동 등). 국회에서는 통신사 귀책으로 정보유출 시 번호이동 위약금 면제를 의무화하는 법안을 발의.',
    category: 'response',
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.05.03',
    title: 'BPFDoor 변종 추가 발견',
    description: 'KISA 민관합동조사단이 SKT 내부 서버에서 기존에 확인된 악성코드 이외에 BPFDoor 변종 8종을 추가 발견하여 정밀 분석 중이라고 밝힘. KISA는 같은 날 관련 위협정보 2차 공유 공지를 통해 이를 공개함.',
    category: 'investigation',
    important: true,
    source: 'yna.co.kr'
  },
  {
    date: '2025.05.05',
    title: 'SKT 이용자 대규모 이탈',
    description: 'SK텔레콤이 앞서 결정한 대로 신규 가입 및 번호이동 접수 중단을 이행함에 따라, 번호이동 수요가 경쟁사로 폭증함. 이날 하루에만 SKT에서 KT로 7,087명, LG유플러스로 6,658명 등 총 13,745명이 이동통신사를 갈아탐. 이는 브랜드 신뢰 타격을 보여주는 사례.',
    category: 'customer',
    source: 'yna.co.kr'
  },
  {
    date: '2025.05.06',
    title: '금융권 FDS 강화 및 보안점검 확대',
    description: '금융당국이 전 금융권에 FDS(이상금융거래 탐지) 강화와 오픈뱅킹 보안점검을 권고. 유통·물류업계 등 타 산업에서도 SKT 해킹 여파로 자체 보안 시스템 강화에 나섰다고 보도됨.',
    category: 'financial',
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.05.06',
    title: '악성코드 분석 및 플랫폼 기업 대상 점검',
    description: 'KISA 주도의 민관합동조사단은 침입 시점, 추가 악성코드 유입 경로, VPN 장비 취약점 여부 등에 대한 조사를 진행 중이라고 밝힘. 과기정통부는 네이버, 카카오, 쿠팡 등 주요 플랫폼 기업과 통신3사 대상 보안현황 점검 회의에서 "플랫폼 업계도 SKT 해킹에 사용된 악성코드에 취약한지 면밀히 검토하라"고 당부.',
    category: 'government',
    source: 'yna.co.kr'
  },
  {
    date: '2025.05.08',
    title: '국회 종합 청문회 개최',
    description: '국회 과학기술정보방송통신위원회에서 SKT 유심 해킹 사태 종합 청문회가 열림. 위약금 면제, 2차 피해 방지, 법적 책임 강화 방안 등을 논의 중. 통신망 보안 강화를 위한 혁신적인 방안에 대한 논의가 이어짐.',
    category: 'government',
    important: true,
    source: 'lastcard.tistory.com'
  },
  {
    date: '2025.05.11',
    title: 'SK텔레콤, 유심 재설정 설루션 도입',
    description: 'SK텔레콤이 실물 유심 교체 없이 유심 일부 정보를 변경할 수 있는 \'유심 재설정(USIM 포맷)\' 설루션을 도입. 이 방식은 유심에 존재하는 \'사용자 식별 정보(IMSI)\'를 새 정보로 변경하여, 유출된 유심 정보로 복제를 시도해도 시스템 접속이 차단되도록 함. 기존 유심 교체와 달리 티머니, 금융인증서, 연락처 등 사용자 저장 정보가 유지되고 금융기관 재인증이 불필요하여 고객 편의성을 높임. 2025년 5월 11일 기준 유심 교체 완료 고객은 143만 명, 예약 완료 고객은 722만 명으로 집계.',
    category: 'response',
    important: true,
    link: 'https://www.yna.co.kr/view/AKR20250511017951017',
    source: 'yna.co.kr'
  },
  {
    date: '2025.05.19',
    title: '민관합동조사단 2차 조사 결과 발표',
    description: '4차에 걸친 BPFDoor 계열 악성코드 감염여부 집중 점검 결과, 현재까지 감염서버 총 23대, 악성코드 총 25종 확인 및 조치. 개인정보가 일정기간 임시로 관리되는 서버(2대)의 감염사실 확인. 단말기 고유식별번호(IMEI) 291,831건이 포함된 파일 발견.',
    category: 'investigation',
    important: true,
    source: 'korea.kr',
    link: 'https://www.korea.kr/briefing/pressReleaseView.do?newsId=156689587#pressRelease'
  },
  {
    date: '2025.05.26',
    title: 'KT, LG유플러스 직접 점검 착수',
    description: 'SKT 해킹 사건을 조사하고 있는 민관합동조사단이 KT와 LG유플러스의 해킹 피해 여부에 대해서도 직접 점검에 착수. BPF도어 악성코드를 사용한 SKT 해킹 집단이 국내 다른 통신사에도 사이버 공격을 시도했을 것이라는 추측에 따른 조치다. 조사단은 SKT의 서버 점검에 사용한 악성코드 변종 202종에 대한 백신을 KT와 LG유플러스 서버에 적용해 감염 여부를 조사하고 있다.',
    category: 'government',
    important: true,
    source: '과학기술정보통신부'
  },
  {
    date: '2025.06.03',
    title: 'USIM 교체 현황 발표 (누적 603만 장)',
    description: 'SK텔레콤은 데일리 브리핑을 통해 전날까지 누적 유심 교체 수는 603만 장이 이루어졌으며, 잔여 예약자는 325만 명이라고 발표.',
    category: 'response',
    source: 'SK텔레콤 공식 발표'
  },
  {
    date: '2025.06.11',
    title: 'USIM 교체 현황 발표 (누적 700만 장)',
    description: 'SK텔레콤은 데일리 브리핑을 통해 전날까지 누적 유심 교체 수는 700만 장이 이루어졌으며, 잔여 예약자는 264만 명이라고 발표.',
    category: 'response',
    source: 'SK텔레콤 공식 발표'
  },
  {
    date: '2025.06.12',
    title: 'USIM 교체 현황 발표 및 재고 확보 안내',
    description: 'SK텔레콤은 데일리 브리핑을 통해 전날까지 누적 유심 교체 수는 722만 장이 이루어졌으며, 잔여 예약자는 247만 명이라고 발표. 김희섭 SK텔레콤 PR 센터장은 "남은 예약자가 모두 유심을 교체해도 100만 장 이상 재고가 확보된 것"이라며, "일주일 안에 방문하지 않은 고객도 언제든 교체할 수 있을 정도의 처리 용량을 갖췄다"고 말했다. 이에 따라 SKT는 6월 20일까지 유심 교체 작업을 마무리할 예정이라고 밝혔다.',
    category: 'response',
    important: true,
    source: 'SK텔레콤 공식 발표'
  },
  {
    date: '2025.06.16',
    title: 'USIM 교체 현황 발표 (누적 807만 장) 및 e심 신규 영업 재개',
    description: 'SK텔레콤은 데일리 브리핑을 통해 전날까지 누적 유심 교체 수는 807만 장이 이루어졌으며, 잔여 예약자는 182만 명이라고 발표. 이날부터 전국 2,600여개 T월드 매장에서 e심을 이용한 신규 영업을 재개한다고 밝혔다. 이와 더불어 유심 미교체 고객들에게도 안내 문자를 발송할 예정이라고 덧붙였다.',
    category: 'response',
    important: true,
    source: 'SK텔레콤 공식 발표'
  },
  {
    date: '2025.06.17',
    title: 'USIM 교체 현황 발표 (누적 840만 장) 및 CDR 유출 의혹 해명',
    description: 'SK텔레콤은 데일리 브리핑을 통해 전날까지 누적 유심 교체 수는 840만 장이 이루어졌으며, 잔여 예약자는 153만 명이라고 발표. 김희섭 PR 센터장은 지난 4월 발생한 해킹 사고로 통화 세부 기록(CDR)이 유출됐다는 의혹이 다시 제기된 데 대해 "자체 조사 결과 CDR은 유출되지 않았으며, 암호화도 하고 있다"고 말했다. 이어 SK텔레콤은 전날 이심을 통한 신규 영업을 재개한 이후 750여 건의 이심 신규 개통이 있었다고 밝혔다. 또한 전날까지 모든 대기자에게 유심 교체가 가능하다는 안내 문자를 발송했다고 밝혔으며, "19일까지 기존 시스템으로 유심 교체를 완료하게 된다"며 "20일부터는 현 예약사이트 시스템을 개편해 고객분들이 방문 날짜와 시간을 지정할 수 있도록 할 것"이라고 소개했다.',
    category: 'response',
    important: true,
    source: 'SK텔레콤 공식 발표'
  },
  {
    date: '2025.06.18',
    title: '위약금 면제 논란, 과기정통부 판단 연기 검토',
    description: '과학기술정보통신부가 SKT 해킹 사고에 대한 위약금 면제 여부 판단을 6월 말을 넘겨 연기하는 방안을 검토 중이라고 밝혔다. 강도현 과기정통부 2차관은 민관합동조사단 최종 조사결과 발표 시 위약금 면제에 대한 입장 포함 여부를 검토 중이라고 답변했다. 유영상 SKT 대표는 위약금 면제 시 3년간 최대 7조원의 매출 손실이 예상된다며 사실상 어렵다는 입장을 표명했으나, "과기부가 법률적 판단을 해 조치한다면 따를 수밖에 없다"고 밝혔다. 법조계에서는 SKT 이용약관 제43조 제4항 "회사의 귀책 사유로 해지할 경우 위약금을 면제한다"는 조항의 적용 여부에 대해 의견이 엇갈리고 있는 상황이다.',
    category: 'legal',
    important: true,
    source: '머니투데이',
    link: 'https://news.nate.com/view/20250618n25048'
  }
]; 