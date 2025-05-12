"use client";

import Link from 'next/link';
import { motion } from "framer-motion";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';

// 애니메이션 변수
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100
    }
  }
};

export default function ResponsePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.div variants={fadeInUp}>
            <Link 
              href="/" 
              className="mb-6 flex items-center text-sm text-muted-foreground hover:text-primary"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="m12 19-7-7 7-7"/><path d="M5 12h14"/></svg>
              메인으로 돌아가기
            </Link>

            <h1 className="text-4xl font-bold text-blue-900 mb-4">SK텔레콤 유심 해킹 대응 조치</h1>
            <p className="text-lg text-muted-foreground mb-8">
              SK텔레콤의 유심 해킹 사태에 대한 대응 조치와 정부 및 산업계의 후속 대응을 정리했습니다.
            </p>
          </motion.div>

          {/* 대응 개요 섹션 */}
          <motion.section
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12v4"/></svg>
                </span>
                대응 조치 개요
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl shadow-sm border border-blue-100 overflow-hidden">
                  <div className="bg-blue-100 px-5 py-3 border-b border-blue-200">
                    <h3 className="font-semibold text-blue-800">즉시 대응 조치</h3>
                  </div>
                  <div className="p-5">
                    <ul className="list-disc list-inside space-y-3 text-slate-700">
                      <li>침입 경로 차단 및 시스템 격리</li>
                      <li>KISA 및 관계기관 신고</li>
                      <li>전 고객 대상 유심 무상 교체 프로그램</li>
                      <li>USIM 보호서비스 자동 적용</li>
                      <li>고객 대상 보안 경고 발령</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-xl shadow-sm border border-purple-100 overflow-hidden">
                  <div className="bg-purple-100 px-5 py-3 border-b border-purple-200">
                    <h3 className="font-semibold text-purple-800">장기적 대응 방안</h3>
                  </div>
                  <div className="p-5">
                    <ul className="list-disc list-inside space-y-3 text-slate-700">
                      <li>네트워크 보안 강화 및 전수 점검</li>
                      <li>HSS 구조 개편 및 인증키 분산 관리</li>
                      <li>AI 기반 이상징후 탐지 시스템 도입</li>
                      <li>위기 커뮤니케이션 체계 구축</li>
                      <li>통신망 보안 제도 및 규제 개편</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SKT 공식 안내 영상 */}
          <motion.section
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                <span className="bg-red-100 text-red-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
                </span>
                고객 보호를 위한 조치 안내 (공식 영상)
              </h2>
              
              <div className="aspect-video w-full overflow-hidden rounded-xl border shadow-sm mb-4">
                <iframe
                  src="https://www.youtube.com/embed/9RItjUTupJM"
                  title="[알려드립니다] 고객 보호를 위한 추가 조치 안내"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <p className="text-sm text-slate-500 text-center">
                출처: SK텔레콤 공식 유튜브 채널 &quot;[알려드립니다] 고객 보호를 위한 추가 조치 안내&quot; (2025.04.27)
              </p>
            </div>
          </motion.section>

          {/* IT 유튜버의 해킹 사태 리뷰 및 대처법 안내 */}
          <motion.section
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                <span className="bg-yellow-100 text-yellow-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M9 13v-1h6v1"/><path d="M11 18h2"/><path d="M12 12v6"/></svg>
                </span>
                IT 유튜버의 해킹 사태 리뷰 및 대처법 안내
              </h2>
              
              <div className="aspect-video w-full overflow-hidden rounded-xl border shadow-sm mb-4">
                <iframe
                  src="https://www.youtube.com/embed/yPFP6QcL_wI"
                  title="최악의 사태와 대응.. SKT 유심 해킹&피해 대처법 총정리"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <p className="text-sm text-slate-500 text-center mb-6">
                출처: 유튜브 채널 &quot;최악의 사태와 대응.. SKT 유심 해킹&피해 대처법 총정리&quot; (2025.04.28)
              </p>
              
              <div className="bg-gray-50 p-5 rounded-lg border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">영상 주요 내용</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">사태 설명 및 영향</h4>
                    <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
                      <li>해킹 사태의 발생 경위와 초기 상황</li>
                      <li>SIM 카드 복제의 위험성과 개인정보 유출 가능성</li>
                      <li>SKT의 초기 대응 조치에 대한 리뷰</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">실질적 대처 방법</h4>
                    <ul className="text-sm text-slate-600 list-disc pl-5 space-y-1">
                      <li>USIM 교체 신청 방법 및 주의사항 (08:42)</li>
                      <li>유심 보호 서비스 신청 및 설정 방법 (11:38)</li>
                      <li>교통카드 및 eSIM 관련 정보</li>
                      <li>부가 서비스 등 추가 보안 조치</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">유용한 링크</h4>
                  <div className="flex flex-wrap gap-2">
                    <a href="https://bit.ly/42HIIgC" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">
                      유심보호서비스 신청
                    </a>
                    <a href="https://care.tworld.co.kr/usim/" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">
                      유심 교체 신청
                    </a>
                    <a href="https://www.tworld.co.kr/web/support/store/map" target="_blank" rel="noopener noreferrer" className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors">
                      유심 교체 가능 매장 찾기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 상세 분석 영역 */}
          <motion.section
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                </span>
                SKT의 기술적 대응 조치 및 문제점 분석
              </h2>

              <div className="text-slate-700 space-y-6">
                <p className="leading-relaxed">
                  SK텔레콤은 해킹 사실을 인지한 직후부터 고객 피해를 막기 위한 다양한 기술적 대응 조치를 실행했습니다. 
                  그러나 일련의 과정에서 몇 가지 미흡한 대응과 문제점도 드러났습니다. 
                  여기서는 SKT의 주요 대응책과 그 한계에 대해 살펴보겠습니다.
                </p>

                {/* 4.1 SKT의 주요 대응 조치 */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-purple-900 mb-3" id="skt-responses">SKT의 주요 대응 조치</h3>
                  
                  <div className="pl-4 border-l-4 border-purple-200 py-1 space-y-5">
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                        <span className="text-purple-700 mr-2">①</span> 즉각적인 차단 및 악성코드 제거
                      </h4>
                      <p className="mb-4 leading-relaxed">
                        4월 19일 밤 해킹을 확인한 즉시, SKT는 침해 흔적이 발견된 서버들을 <strong className="text-blue-700">격리(분리)</strong>하고 
                        악성코드 삭제를 실시했습니다. 추가적인 확산을 막기 위해 전사 시스템 전수 조사도 병행되었습니다. 
                        특히 HSS 등 핵심 장비에는 추가 방어 조치(예: 방화벽 룰 강화, 계정 비밀번호 변경 등)를 적용하고, 
                        해커의 불법 USIM 교체 시도나 비정상 인증 시도를 실시간 차단하기 위한 모니터링을 강화했습니다. 
                        이처럼 기술적 봉쇄로 추가 데이터 유출은 초기 단계에서 차단된 것으로 파악됩니다.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                        <span className="text-purple-700 mr-2">②</span> KISA 및 관계기관 신고
                      </h4>
                      <p className="mb-4 leading-relaxed">
                        SKT는 내부 조치와 병행해 공식 사고 대응 프로토콜에 따라 KISA와 개인정보위 등에 신고하였습니다. 
                        이를 통해 민관 합동조사단이 구성되고 외부 전문가들의 지원을 받게 되었습니다. 
                        또한 경찰 수사를 의뢰하여 형사적 대응도 개시했습니다. 이러한 신고 절차는 법적 의무이기도 하지만, 
                        외부 도움을 통한 원인 규명 및 추가 공격 방지에 필수적입니다.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                      <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                        <span className="text-purple-700 mr-2">③</span> USIM 무상 교체 시행
                      </h4>
                      <p className="mb-4 leading-relaxed">
                        가장 주목할 만한 조치는 전국민 대상 USIM 카드 무료 교체였습니다. 
                        SKT는 사고 공개 후 빠르게 결정하여 4월 28일부터 23백만 SKT 가입자 + 약 187만 알뜰폰(SK망) 가입자 등 
                        총 2,500만 명을 대상으로 새 USIM을 발급해주기 시작했습니다. 
                        이는 유출된 Ki 값의 무력화를 위한 궁극적인 조치로, 가입자 개개인의 SIM을 새 키로 교체함으로써 
                        기존 해커가 가진 IMSI-Ki 복제본이 쓸모없게 만드는 것입니다. 
                        (새 USIM에는 새 Ki가 설정되므로, 해커가 가진 Ki로는 인증이 실패함.)
                      </p>
                      
                      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg border border-blue-100">
                        <div className="md:w-1/2">
                          <h5 className="text-sm font-medium text-blue-700 mb-2">USIM 교체 실행 방법</h5>
                          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                            <li>전국 2,600개 대리점과 공항 로밍센터 통한 교체</li>
                            <li>재고 부족 시 기존 USIM 데이터 초기화로 대처</li>
                            <li>온라인 사전 예약 시스템 마련하여 혼잡 완화</li>
                            <li>온라인 신청 후 방문 수령 또는 택배 수령 선택 가능</li>
                          </ul>
                        </div>
                        <div className="md:w-1/2">
                          <h5 className="text-sm font-medium text-blue-700 mb-2">교체 우선순위</h5>
                          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                            <li>1순위: 대기업, 금융권 등 기업용 회선</li>
                            <li>2순위: 공공기관 및 정부 관계자</li>
                            <li>3순위: 일반 고객 (온라인 신청 우선 대응)</li>
                            <li>추가 조치: 원거리 지역은 이동형 부스 운영</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                        <span className="text-purple-700 mr-2">④</span> USIM 보호서비스 제공 (자동가입)
                      </h4>
                      <p className="mb-4 leading-relaxed">
                        SKT에는 원래 <strong className="text-blue-700">&quot;USIM 보호서비스&quot;</strong>라는 부가 서비스가 있었습니다. 
                        이는 USIM(IMSI)과 단말기(IMEI)의 조합이 사전에 등록된 값과 다르면 네트워크 접속을 차단하는 보안 기능입니다. 
                        평소에는 고객이 선택 가입해야 했으나, SKT는 해킹 이후 &quot;유심 교체가 어려운 고객을 위해&quot; 이 서비스를 무료화 및 
                        전원 자동가입 조치했습니다. 5월 2일 모든 SKT 이용자에 일괄 적용되었으며, 이에 따라 IMSI만 복제한 유심은 
                        원 단말기의 IMEI와 일치하지 않으면 통신이 불가하게 만들었습니다. 
                        (사실상 유심 교체와 동일한 수준의 보안 효과라고 SKT는 설명했습니다.)
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                        <span className="text-purple-700 mr-2">⑤</span> 고객 공지 및 추가 지원
                      </h4>
                      <p className="mb-4 leading-relaxed">
                        SKT는 <strong className="text-blue-700">공식 홈페이지(T월드)</strong>에 사고 공지와 Q&A를 게재하고, 
                        고객에게 개인정보 유출 통지 메일을 발송하기 시작했습니다. 또, 고객 문의 대응을 위해 콜센터 인력 보강 및 
                        온라인 상담 채널을 운영했습니다. 피해 우려가 큰 고객들에게는 신용정보 무료 모니터링 서비스나 보험 지원 검토도 
                        밝혔습니다 (추후 필요시). 그리고 <em>&quot;만약 이번 유출로 인한 피해 사례가 발생하면 SKT가 100% 책임지고 보상하겠다&quot;</em>고 
                        약속하여 보상 의지를 표명했습니다.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                        <span className="text-purple-700 mr-2">⑥</span> 네트워크 보안 점검 및 향후 대책
                      </h4>
                      <p className="leading-relaxed">
                        SKT 내부적으로 비상 TF를 꾸려, 전체 망 장비 보안 수준 재점검에 들어갔습니다. 
                        취약한 부분 (예: 지연된 패치, EDR 미설치 구간 등)을 찾아 7월 말까지 백신/EDR 배포 완료 계획을 수립했고, 
                        재발 방지를 위한 망 분리 강화, 권한계정 관리 등도 추진 중입니다. 
                        또한 민관 조사 결과를 토대로 HSS 아키텍처 개선 등 중장기 보강 대책을 마련하겠다고 밝혔습니다.
                      </p>
                      <p className="mt-4 leading-relaxed">
                        위의 조치들을 통해 다행히 현재까지 확인된 2차 피해는 없는 상황입니다. 
                        SKT와 정부 합동 점검 결과 복제 USIM을 통한 부정 통화, 문자 가로채기 등의 사례는 5월 6일까지 
                        보고되지 않았다고 밝혔습니다. 이는 SKT의 신속한 USIM 차단/교체 조치와 고객 보호 시스템 작동 덕분으로 분석됩니다.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg p-5 border border-blue-100 mt-6">
                      <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                        <span className="text-purple-700 mr-2">⑦</span> 유심 재설정 설루션 도입 (2025.05.11)
                      </h4>
                      <p className="mb-4 leading-relaxed">
                        SKT는 5월 11일, 실물 유심 교체 없이 유심 일부 정보를 변경할 수 있는 <strong className="text-blue-700">'유심 재설정' 설루션</strong>을 추가로 도입했습니다. 
                        이 방식은 유심에 존재하는 '사용자 식별·인증 정보'를 새 정보로 변경하여, 유출된 유심 정보를 이용한 복제 시도 시 시스템 접속이 차단되도록 합니다.
                      </p>
                      
                      <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg border border-blue-100">
                        <div>
                          <h5 className="text-sm font-medium text-blue-700 mb-2">유심 재설정의 주요 장점</h5>
                          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                            <li>티머니, 금융인증서, 연락처 등 사용자 저장 정보 유지</li>
                            <li>금융기관 재인증 불필요 - 빠른 처리 가능</li>
                            <li>일반 유심과 eSIM 사용자 모두 적용 가능</li>
                            <li>실물 유심 교체와 동등한 보안 효과 제공</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-blue-700 mb-2">이용 방법</h5>
                          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1">
                            <li>T월드 매장 방문 시 유심 재설정 또는 실물 교체 중 선택 가능</li>
                            <li>유심 재설정 후에도 향후 원하면 1회 무료 실물 교체 가능</li>
                            <li>기존 유심 교체 신청자 대상으로 우선 적용</li>
                          </ul>
                          <p className="text-xs text-slate-500 mt-2">
                            출처: <a href="https://www.yna.co.kr/view/AKR20250511017951017" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">연합뉴스(2025.05.11)</a>
                          </p>
                        </div>
                      </div>
                      
                      <p className="mt-4 text-sm text-slate-700">
                        이 조치로 유심 재고 부족 문제를 완화하고, 고객 편의성을 높였습니다. 임봉호 SKT MNO 사업부장은 "다음 주부터 유심 재고량이 부족해서 교체를 못 하는 일은 없을 것"이라며, 
                        유심 재설정과 교체를 병행하여 고객 상황에 맞는 선택이 가능하다고 밝혔습니다.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* 4.2 대응 과정의 문제점과 비판 */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-purple-900 mb-3" id="response-issues">대응 과정의 문제점과 비판</h3>
                  
                  <div className="pl-4 border-l-4 border-purple-200 py-1">
                    <p className="mb-6 leading-relaxed">
                      그러나 이러한 대응에도 불구하고 여러 문제점과 비판이 제기되었습니다. 주요 이슈들을 짚어보면:
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                        <h4 className="font-semibold text-amber-800 mb-3">이상 징후의 사전 탐지와 예방 부족</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          SKT는 4월 18일에 비로소 대규모 트래픽 이상을 발견했는데, 이는 이미 수많은 데이터가 빠져나간 사후 탐지에 가깝습니다. 
                          공격자는 그 전에 한동안 내부망에 숨어 있었던 것으로 보이는데, 실시간 이상행위 탐지 체계의 부재나 
                          핵심 서버 접근 통제 미흡으로 초기 침입을 놓쳤다는 지적이 있습니다. 
                          HSS 같은 핵심 DB에 접근이 발생할 때 <strong className="text-red-600">이상징후(예: 평소보다 많은 쿼리)</strong>를 
                          감지하는 시스템이 있었더라면 피해를 줄였을 수 있습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          이 부분에 대해 업계 전문가들은 <em>&quot;SKT의 핵심망에 대한 보안 모니터링이 안이했다&quot;</em>고 평가하며 
                          예방적 통합보안 관제 부재를 꼬집었습니다.
                        </p>
                      </div>
                      
                      <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                        <h4 className="font-semibold text-amber-800 mb-3">사고 초기 대응과 정보 공개의 지연</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          SKT는 18일 내부 파악 후 22일에 언론 공개하여 4일간 공백이 있었습니다. 
                          이 기간 동안 고객 대다수는 해킹 사실을 모르고 있었고, SKT도 개별 통지나 경고 메시지를 보내지 않았습니다. 
                          결국 언론보도가 나온 뒤에야 많은 고객이 알게 되어 패닉 상태가 커졌습니다. 
                          정부 측도 <em>&quot;해킹 사실을 알리기까지 시간이 걸려 국민 불안이 커졌다&quot;</em>며 아쉬움을 표했습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          SKT는 22일 T월드 공지사항에 사고 소식을 올렸지만, 정작 이를 문자나 이메일로 개별 통보하지 않았습니다. 
                          개인정보보호법상 1천명 이상 정보유출 시 지체없이 통지 의무가 있는데, 형식적 공지만 한 셈입니다. 
                          이 때문에 개인정보위가 5월 2일 <em>&quot;가입자별 즉각 통지&quot;</em>를 요구하기에 이르렀습니다. 
                          초동 소통 부족으로 루머와 과장 정보가 퍼져 더 큰 혼란을 낳았다는 비판이 있습니다.
                        </p>
                      </div>
                      
                      <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                        <h4 className="font-semibold text-amber-800 mb-3">USIM 교체 실행상의 혼란</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          4월 28일부터 시작된 대규모 USIM 교체 작업은 현실적으로 엄청난 물량과 인력이 필요했습니다. 
                          초기에는 대리점마다 교체 수요가 폭주하여 재고가 동나는 곳이 속출했습니다. 
                          일부 고객들은 먼 대리점을 찾아다녀야 했고, 대기줄이 길어 불편이 컸습니다. 
                          또한 eSIM 단말기(내장형 SIM)나 특수 단말기(키즈폰 등)는 현장에서 즉시 교체가 어려워, 
                          일부 고객은 기다려야 하는 상황도 있었습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          SKT는 온라인 예약 등을 유도했으나 초기공지 부족으로 몰랐던 고객도 많았습니다. 
                          또한 5월 초 황금연휴 기간(5/5 어린이날 등)에 대리점이 문을 닫거나 인력이 부족해 교체 공백이 생긴 점도 
                          아쉬움으로 남았습니다. 결과적으로 SKT는 5월 1일 과기정통부의 권고에 따라 일반 신규업무 중단까지 하며 
                          교체에 집중했지만, 사전 시뮬레이션 부족으로 인한 현장 혼란은 피하지 못했습니다.
                        </p>
                      </div>
                      
                      <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                        <h4 className="font-semibold text-amber-800 mb-3">USIM 보호서비스 안내 미흡과 부작용</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          USIM 보호서비스를 전원 적용한 것은 좋은 조치였지만, 이에 대한 고객 공지와 이해도 제고가 충분하지 않았습니다. 
                          많은 이용자들이 이 서비스의 기능을 몰라 &quot;이게 뭔지 해제해야 하나&quot; 혼란을 겪었고, 
                          일부는 해외로밍이 안 될까봐 걱정했습니다. 실제로 이 서비스는 해외에서 현지 단말기에 심카드를 옮겨쓰는 경우 등에 
                          불편을 줄 수 있습니다. (IMEI가 바뀌면 접속 차단되므로, 해외여행 시 현지폰에 갈아끼우는 것이 제한됨.)
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          또한 향후 서비스 해지 시 영업점 방문 필요 등 번거로운 절차도 뒤늦게 알려져 불만이 있었습니다. 
                          SKT는 <em>&quot;사실상 유심 교체와 동일한 보안 효과&quot;</em>라고 홍보했으나, 고객 입장에서 사전에 그런 서비스를 
                          몰랐던 이들은 권리 제한처럼 느낄 수 있어 충분한 사전 설명이 필요했습니다.
                        </p>
                      </div>
                      
                      <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                        <h4 className="font-semibold text-amber-800 mb-3">컨트롤타워 및 책임 논란</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          이 사건 대응에서 SKT 내부적으로 보안사고 비상대응 컨트롤타워가 제대로 가동되었는지 의문이 제기됩니다. 
                          초기 고객 안내 부재, 대리점 현장 혼란 등을 봤을 때, 전사적 위기관리팀의 지휘가 미흡했다는 평가입니다. 
                          또한 통신망 보안 투자에 대한 경영진 인식 부족, 사전에 LG유플러스 해킹(2023) 교훈을 살리지 못한 점도 
                          도마에 올랐습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          업계 전반적으로 민간 자율에 맡긴 통신망 보안의 한계가 드러났고, 정부 개입의 필요성이 거론되었습니다. 
                          이런 문제점들에 대해 SKT는 사과하며 개선 의지를 보였지만, 이미 신뢰 훼손은 피할 수 없었습니다. 
                          실제 4월 19~20일 사이 SKT 번호 해지자가 평소 대비 크게 증가했고, 인터넷 커뮤니티에는 
                          SKT 보안 역량에 대한 비판 여론이 확산되었습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          전문가들은 &quot;통신사도 금융권 수준의 강력한 보안규제가 필요하다&quot;, 
                          <em>&quot;이통3사가 비용 문제로 보안 투자를 소홀히 한 측면이 있다&quot;</em>고 지적했습니다.
                        </p>
                      </div>
                    </div>
                    
                    <p className="mt-6 leading-relaxed">
                      정리하면, SKT는 사후대응 측면에서 할 수 있는 대부분의 기술적 조치를 취했으나, 
                      사전 예방과 초기 대응, 고객대응 프로세스에서 허점이 드러났습니다. 
                      이는 비단 SKT만의 문제가 아니라 국내 주요 기간망 사업자의 공통 과제로 인식되었으며, 
                      후속 섹션에서 다룰 정부와 업계의 대책 논의로 이어졌습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 5. 정부기관의 기술적 분석 및 보안 권고 사항 */}
          <motion.section
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                <span className="bg-indigo-100 text-indigo-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m14.5 9-5 5"/><path d="m9.5 9 5 5"/></svg>
                </span>
                정부기관의 기술적 분석 및 보안 권고 사항
              </h2>

              <div className="text-slate-700 space-y-6">
                <p className="leading-relaxed">
                  SKT 유심 해킹 사고에 대해 정부와 공공기관도 적극 개입하여 기술 분석과 보안 대책 권고를 수행했습니다. 
                  주요 역할을 한 기관은 KISA(한국인터넷진흥원), 개인정보보호위원회, 과학기술정보통신부, 경찰청 사이버수사대, 
                  그리고 국정원 등입니다. 이들 기관의 대응과 권고사항을 살펴보겠습니다.
                </p>

                {/* 5.1 한국인터넷진흥원(KISA)의 조사 및 발표 */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-purple-900 mb-3" id="kisa-analysis">한국인터넷진흥원(KISA)의 조사 및 발표</h3>
                  
                  <div className="pl-4 border-l-4 border-purple-200 py-1 space-y-5">
                    <p className="leading-relaxed">
                      한국인터넷진흥원은 우리나라 사이버 보안 총괄기관으로, SKT 사고 발생 직후 민관합동조사단을 구성하여 
                      핵심적인 기술 분석을 진행했습니다. KISA는 4월 20일 SKT로부터 공식 신고를 접수받은 후, 
                      4월 25일과 5월 3일에 두 차례에 걸쳐 관련 보안 공지를 발표했습니다.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
                        <h4 className="font-semibold text-indigo-800 mb-3">1차 보안 공지 (4월 25일)</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          제목은 <em>&quot;최근 해킹공격에 악용된 악성코드·IP 등 위협정보 공유 및 주의 안내&quot;</em>였으며, 
                          SKT를 특정하지는 않았지만 사실상 이번 사고 대응 중 발견된 리눅스 악성파일 정보를 담고 있었습니다. 
                          보안업계는 이 공지에 포함된 악성코드 해시 등이 SKT 해킹에 사용된 BPFDoor 관련 파일이라고 해석했습니다. 
                          또한 악성 IP 목록과 IoC(Indicators of Compromise)를 공개하여, 다른 기업들도 유사 공격 시그니처를 
                          탐지할 수 있도록 했습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          KISA는 이 공지를 통해 국내 기업·기관들에게 자체 보안 점검을 권고하고, 
                          침입 흔적 발견 시 KISA에 신고토록 당부했습니다.
                        </p>
                      </div>
                      
                      <div className="bg-indigo-50 p-5 rounded-lg border border-indigo-100">
                        <h4 className="font-semibold text-indigo-800 mb-3">2차 보안 공지 (5월 3일)</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          KISA는 5월 3일 추가 분석 결과를 반영한 &quot;최근 해킹 공격에 악용된 악성코드 위협정보 2차 공유&quot; 공지를 게시했습니다. 
                          여기에는 새롭게 확인된 악성코드 8종의 파일 해시, 특성 정보 등이 포함되었습니다. 
                          이는 조사 과정에서 SKT 내부 다른 지점 또는 다른 파일에서 발견된 악성 스크립트/툴일 가능성이 큽니다. 
                          조사단은 <em>&quot;추가 공개된 8종 악성코드의 유입 시점, 발견 위치 등을 분석 중&quot;</em>이라고 밝혔습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          이들 8종이 최초 4종 BPFDoor와 동일 HSS에서 나온 것인지, 별도 서버에서 나온 것인지 등을 파악하고 있다고 합니다. 
                          KISA 2차 공지 역시 통신3사와 주요 플랫폼 기업들에게 공유되어, 자사 시스템의 유사 침해 여부를 점검하도록 활용되었습니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white p-5 rounded-lg border border-purple-100 shadow-sm">
                      <h4 className="font-semibold text-purple-800 mb-3">KISA 민관합동조사단의 주요 분석 결과</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <h5 className="text-sm font-medium text-gray-800 mb-2">유출 정보 분석</h5>
                          <ul className="text-xs text-slate-700 list-disc pl-5 space-y-1">
                            <li>SKT 관련 서버 5대 우선 분석</li>
                            <li>유출 정보 25종 확인 (USIM 복제 관련 4종 + 관리 정보 21종)</li>
                            <li>IMEI는 미유출 확인</li>
                            <li>HLR 등 다른 시스템 정상 확인</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <h5 className="text-sm font-medium text-gray-800 mb-2">악성코드 및 공격자 분석</h5>
                          <ul className="text-xs text-slate-700 list-disc pl-5 space-y-1">
                            <li>BPFDoor 관련 IoC 식별 및 공유</li>
                            <li>중국발 APT 조직 소행 추정</li>
                            <li>Ivanti VPN 취약점 악용 가능성 탐지</li>
                            <li>국정원 등과 협조하여 공격자 추적</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                      <h4 className="font-semibold text-green-800 mb-3">KISA의 보안 권고 사항</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="text-sm font-medium text-green-700 mb-2">기업 대상 권고사항</h5>
                          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-2">
                            <li>리눅스 서버에 최신 백신/EDR 설치</li>
                            <li>보안 패치 적시 적용</li>
                            <li>관리자 계정 비밀번호 변경 및 접근통제 강화</li>
                            <li>VPN 등 원격접속 장비 취약점 점검</li>
                            <li>로그 면밀 모니터링 실시</li>
                            <li>리눅스용 백신·EDR 시스템 구축</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-green-700 mb-2">일반 이용자 대상 안내</h5>
                          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-2">
                            <li>통신사 안내에 따라 유심 교체 실시</li>
                            <li>유심 보호서비스 가입 확인</li>
                            <li>금융계정 등의 2단계 인증 재설정</li>
                            <li>스미싱 문자 주의 및 신고</li>
                            <li>본인명의로 개통된 낯선 휴대폰 명의도용 조회</li>
                            <li>개인정보 유출 관련 후속조치 확인</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 5.2 개인정보보호위원회 및 기타 기관의 조치 */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-purple-900 mb-3" id="other-govt-agencies">개인정보보호위원회 및 기타 기관의 조치</h3>
                  
                  <div className="pl-4 border-l-4 border-purple-200 py-1">
                    <div className="space-y-6">
                      <div className="bg-fuchsia-50 p-5 rounded-lg border border-fuchsia-100">
                        <h4 className="font-semibold text-fuchsia-800 mb-3">개인정보보호위원회</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          개인정보보호위원회(개인정보위)는 이번 사고에서 개인정보 유출 통지/조치 이행을 감독하는 역할을 했습니다. 
                          4월 22일 SKT로부터 유출 신고를 받은 개인정보위는 우선 조사에 착수하여 SKT가 개인정보 보호법을 준수했는지 살폈습니다. 
                          이후 5월 2일 <em>&quot;SK텔레콤은 가입자에게 유출 사실을 즉각 통지하라&quot;</em>는 공식 요구를 했습니다. 
                          이는 앞서 지적한대로 SKT의 개별 통지가 늦어진 데 따른 조치입니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          개인정보위는 SKT에 유출규모, 유출항목, 이용자 조치요령 등을 명시해 신속히 통지하라고 지시했습니다. 
                          이에 SKT는 5월 초부터 순차적으로 이메일/문자 통지를 실시했습니다. 또한 개인정보위는 만약 이번 사건으로 인한 
                          개인정보 침해 신고(피해 사례)가 접수될 경우, 조사를 거쳐 과징금/과태료 부과 등 행정처분을 내릴 수 있음을 시사했습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          현재까지 구체적 처분 결과는 나오지 않았지만, 개인정보위는 <em>&quot;SKT의 관리적 과실 여부를 철저히 검토할 것&quot;</em>이라고 밝힌 바 있습니다. 
                          법적으로 개인정보 대량유출 시 기업에 매출액의 3% 이하 과징금이 부과될 수 있고, 징벌적 손해배상 책임도 질 수 있습니다. 
                          SKT는 이에 대비해 법률 검토와 잠재적 소송 대비를 하고 있는 것으로 전해졌습니다.
                        </p>
                      </div>
                      
                      <div className="bg-fuchsia-50 p-5 rounded-lg border border-fuchsia-100">
                        <h4 className="font-semibold text-fuchsia-800 mb-3">과학기술정보통신부</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          과학기술정보통신부(과기정통부)는 주무부처로서 사고 수습과 정책 대응을 주도했습니다. 
                          과기정통부 장관은 사고 직후 SKT 현장에 점검반을 보내 상황을 보고받고 대책을 논의했습니다. 
                          4월 29일에는 1차 조사결과를 직접 브리핑하며 국민들에게 경위와 안전조치를 설명했습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          또한 5월 3일에는 통신3사 및 주요 플랫폼 기업 대상 정보보호 긴급 점검회의를 소집하여, 
                          유사 위협에 대한 업계 전반의 점검을 지시했습니다. 이 자리에서 앞서 언급한 Ivanti VPN 장비 취약점 이야기도 나오며, 
                          통신사와 네이버/카카오 등도 자사 VPN 장비 보안패치 상태를 확인하는 계기가 되었습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          과기정통부는 한편으로 통신분야 제도 개선도 검토했습니다. 5월 1일 SKT에 신규가입 중단 권고를 한 것은 
                          이례적 조치였는데, 이는 소비자 불안 해소 차원이었습니다. 또한 통신사 귀책으로 정보유출 시 
                          번호이동 위약금 면제를 의무화하는 국회 입법에 대해서도 의견을 내며, 이용자 보호 제도 강화에 협조할 뜻을 밝혔습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          과기정통부 산하 방송통신위원회는 5월 2일 스미싱 주의 경보를 발령하고 이동통신 본인확인 서비스의 
                          안전성 점검을 실시했습니다. 이는 유출 정보가 보이스피싱 등에 악용될 가능성을 선제 차단하려는 조치였습니다.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-fuchsia-50 p-5 rounded-lg border border-fuchsia-100">
                          <h4 className="font-semibold text-fuchsia-800 mb-3">경찰청 사이버수사대</h4>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            경찰청 사이버수사대는 기술분석과는 별개로, 범인 추적과 법적 처벌을 위한 수사를 진행하고 있습니다. 
                            4월 23일 수사 착수 후, SKT 로그 및 IP 자료를 확보하였고 국제 공조도 검토 중입니다.
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed mt-2">
                            만약 중국 등 해외 APT 조직 소행이라면 수사가 어려울 수도 있으나, 인터폴 협력과 국내 연계 공조로 
                            최대한 추적하고 있는 것으로 알려졌습니다. 형법상 해킹범죄와 정보통신망법 위반 혐의 등이 적용될 수 있습니다. 
                            경찰은 또한 다크웹 모니터링을 통해 SKT 유출정보가 거래되는지 감시하고 있습니다.
                          </p>
                        </div>
                        
                        <div className="bg-fuchsia-50 p-5 rounded-lg border border-fuchsia-100">
                          <h4 className="font-semibold text-fuchsia-800 mb-3">국가정보원(NSS)</h4>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            국가정보원(NSS)은 국가기간망 보안 관점에서 조언과 지원을 했습니다. 
                            4월 27일 국무총리 지시에 따라 국정원은 사고 조사에 전문인력을 투입 검토했고, 
                            정부부처에 업무용 SKT USIM 교체를 권고했습니다.
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed mt-2">
                            국정원은 평소 통신망 사이버공격 관련 첩보를 다수 보유하고 있어, KISA 및 수사기관에 이를 공유했을 것으로 보입니다. 
                            특히 중국발 위협 그룹 동향, BPFDoor 관련 TTPs 등에 대한 인텔리전스를 제공하여 공격자 규명에 기여했을 것입니다.
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg border border-blue-100 p-5">
                        <h4 className="text-lg font-semibold text-blue-800 mb-3">종합 평가</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          정리하면, 정부기관들은 기술 분석(악성코드, 취약점) → 경고 및 정보공유 → 제도적 권고 → 이용자 보호조치 권고의 
                          다단계 대응을 펼쳤습니다. 이 과정에서 통신사들의 보안체계 미흡이 확인되어, 향후 규제 및 지원책 논의가 활발해졌습니다. 
                          또한 다른 산업계 (금융, 플랫폼 등)에도 경각심을 주어 전반적인 사이버 보안 수준 제고를 촉구하는 효과가 있었습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          KISA 등의 권고사항은 사실상 <strong className="text-blue-700">&quot;이런 해킹이 다시 발생하지 않도록 하라&quot;</strong>는 가이드라인으로, 
                          통신사들은 이를 토대로 보안투자를 확대할 압력을 받게 되었습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 6. 고객 보호 조치 및 보안적 효과 분석 */}
          <motion.section
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                <span className="bg-teal-100 text-teal-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10"/><path d="M2 10.6L12 2l10 8.6"/></svg>
                </span>
                고객 보호 조치 및 보안적 효과 분석
              </h2>

              <div className="text-slate-700 space-y-6">
                <p className="leading-relaxed">
                  SKT 유심 해킹 사태 이후 고객 보호를 위한 조치들이 다양하게 시행되었고, 이에 따른 보안 효과와 한계가 논의되었습니다. 
                  여기서는 일반 개인 이용자들을 보호하기 위해 취해진 조치들과 그 기술적 유효성을 분석합니다.
                </p>

                {/* 6.1 고객 대상 주요 보호 조치 */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-purple-900 mb-3" id="customer-protection">고객 대상 주요 보호 조치</h3>
                  
                  <div className="pl-4 border-l-4 border-purple-200 py-1 space-y-5">
                    <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                      <h4 className="font-semibold text-teal-800 mb-3 flex items-center">
                        <span className="text-teal-700 mr-2">(1)</span> USIM 카드 교체
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        가장 근본적인 조치는 앞서도 언급된 SIM 카드 교체입니다. 고객 입장에서 새 유심으로 교체하는 것은 번거롭지만, 
                        현존하는 위협을 제거하는 확실한 방법입니다. 새로운 SIM에는 새로운 <strong className="text-teal-700">Ki (인증키)</strong>가 
                        설정되므로, 해커가 가진 Ki로는 더 이상 통신사 네트워크에 인증할 수 없습니다. 
                        즉 <strong className="text-teal-700">&quot;열쇠를 바꿔 단 것&quot;</strong>과 같아, 유출된 키는 무력화됩니다.
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed mt-2">
                        SKT는 전 고객에게 무상 교체를 제공하여 비용 부담을 없앴고, 신분증 지참 시 1회 무료라는 조건으로 진행했습니다. 
                        교체 즉시, 이전 USIM은 시스템에서 폐기 등록되어 쓸모없게 됩니다. 이 조치는 복제심 공격을 원천 차단하는 결정타로, 
                        효과 면에서 가장 확실합니다. 실제 이 조치 이후 혹시 모를 공격 가능성이 급감했다고 평가됩니다.
                      </p>
                    </div>
                    
                    <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                      <h4 className="font-semibold text-teal-800 mb-3 flex items-center">
                        <span className="text-teal-700 mr-2">(2)</span> USIM 보호서비스 (IMSI-IMEI 매칭 잠금)
                      </h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        SKT는 유심 교체 이전이라도 긴급히 USIM 보호서비스를 제공하여 위험을 줄이고자 했습니다. 
                        이 서비스는 가입자의 USIM과 단말기를 1:1로 묶어 다른 조합으로는 통신 접속이 안되게 하는 것입니다. 
                        구체적으로, 가입 신청 시 현재 사용 중인 단말기의 IMEI를 고객 계정에 등록해둡니다. 
                        이후 네트워크에 동일 IMSI로 접속이 들어오면 기지국이 해당 IMEI도 함께 검증하여, 다를 경우 연결을 거부합니다.
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed mt-2">
                        이 기술은 이미 eUICC 정책 등에서 일부 활용되지만, 상용 서비스로 제공한 것은 SKT가 선도적입니다. 
                        해킹 후 SKT는 이 서비스를 무료화하고 모두 적용했습니다. 그 결과 해커가 아무리 IMSI-Ki를 알아도, 
                        원 단말기 기기가 아니면 망에 붙을 수 없게 되었습니다. 보안적 효과는 매우 컸습니다. 
                        IMEI 비일치 복제 SIM은 식별 즉시 차단되므로, 심지어 USIM을 안 바꾼 고객일지라도 보호됩니다.
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed mt-2">
                        특히 고령층 등 당장 교체 어려운 이들에게 유용했습니다. 다만 IMSI+IMEI를 둘 다 알아낸 공격에는 취약할 수 있는데, 
                        이번 유출에는 IMEI가 없으므로 문제되지 않았습니다. 따라서 SKT 주장대로 
                        &quot;보호서비스만으로도 유심 교체와 유사한 수준의 보안 효과&quot;라는 말이 성립합니다.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                        <h4 className="font-semibold text-teal-800 mb-3 flex items-center">
                          <span className="text-teal-700 mr-2">(3)</span> 통신사 명의도용 차단 서비스 안내
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          통신 3사는 원래 본인 명의 개통조회 서비스를 제공합니다. 이는 내 주민번호로 다른 통신사에 
                          모르는 휴대폰이 개통되어 있는지 확인하는 서비스입니다. SKT는 해킹 후 고객들에게 이 명의도용 조회 
                          서비스를 이용해보도록 안내했습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          만약 해커가 개인정보를 이용해 새로운 회선을 개통하거나 번호이동을 시도하는 경우 여기 포착될 수 있습니다. 
                          또한 번호 이동시 SMS 통보 시스템을 강화하여, 고객 동의 없는 이동이 이루어지지 않도록 조치했습니다.
                        </p>
                      </div>
                      
                      <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                        <h4 className="font-semibold text-teal-800 mb-3 flex items-center">
                          <span className="text-teal-700 mr-2">(4)</span> 2차 인증 및 계정 보안 강화 권고
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          고객들에게 통신 인증 기반 서비스들(예: SMS로 인증번호 받는 은행, 이메일 등)에 대해 
                          2단계 인증(2FA) 설정을 독려했습니다. 또한 주요 계정 (포털, SNS 등)의 비밀번호를 변경하고 
                          로그인 알림을 켜두라는 등의 일반 보안숙칙을 안내했습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          이는 혹여 SIM 스와핑으로 계정 탈취 시도를 막기 위한 예방입니다. 금융위원회도 각 금융사에 
                          고객 OTP나 인증서 사용 시 휴대폰 외 대체인증을 준비토록 권고했습니다.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                        <h4 className="font-semibold text-teal-800 mb-3 flex items-center">
                          <span className="text-teal-700 mr-2">(5)</span> 신용정보 모니터링 지원
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          SKT와 관계부처는 정보 유출로 인한 2차 피해 중 하나인 신원 도용 금융사기를 우려했습니다. 
                          그래서 고객들에게 신용정보변동 알림 서비스를 이용토록 권했습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          예를 들어 NICE지키미, 올크레딧 등의 서비스를 통해 내 명의로 대출이나 카드발급이 시도되면 알림을 받는 것입니다. 
                          일부에서는 SKT가 무료로 이 서비스를 제공해야 한다는 요구도 있었는데, 공식 결정된 바는 없습니다. 
                          다만 SKT가 피해 발생 시 100% 배상 의지를 밝힌 만큼, 추후 문제가 생기면 지원 가능성이 있습니다.
                        </p>
                      </div>
                      
                      <div className="bg-teal-50 p-5 rounded-lg border border-teal-100">
                        <h4 className="font-semibold text-teal-800 mb-3 flex items-center">
                          <span className="text-teal-700 mr-2">(6)</span> 사용자 교육 및 홍보
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          사고 이후 언론과 전문가들이 나서서 과장된 공포를 줄이고 올바른 정보를 전달하려 노력했습니다. 
                          유튜브, 블로그, 언론 기사 등에서 &quot;내 유심이 해킹되었을 때 무엇을 해야 하는가&quot;, &quot;피해 예방법&quot; 
                          같은 콘텐츠를 통해 사용자 행동지침을 알렸습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          SKT도 자체 홈페이지 FAQ를 통해 &quot;이심으로 바꿔도 될까요?&quot;, &quot;유심 안 바꾸면 어떻게 되나요?&quot; 등의 
                          질문에 답변하며 정확한 정보를 주려 했습니다. 이러한 보안 인식 제고 활동은 향후 유사 사태 시 
                          고객들이 패닉에 빠지지 않고 대응할 수 있게 하는 중요한 부분입니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* 6.2 보안적 효과와 한계 분석 */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-purple-900 mb-3" id="security-effect-analysis">보안적 효과와 한계 분석</h3>
                  
                  <div className="pl-4 border-l-4 border-purple-200 py-1">
                    <p className="mb-4 leading-relaxed">
                      위의 조치들은 종합적으로 고객 피해를 예방하는 데 상당한 효과를 발휘했습니다. 
                      그 결과 5월 6일 현재까지 보고된 실질적 피해 건수가 0인 것은 고무적입니다. 
                      기술적 보호와 고객 협조가 잘 맞아떨어진 사례라 볼 수 있습니다.
                    </p>
                    
                    <div className="space-y-6">
                      <div className="bg-white p-5 rounded-lg border border-purple-100 shadow-sm">
                        <h4 className="font-semibold text-purple-800 mb-3">각 조치별 효과성 평가</h4>
                        
                        <div className="space-y-4">
                          <div className="flex items-center">
                            <div className="w-1/3 font-medium text-gray-800">USIM 카드 교체</div>
                            <div className="w-2/3">
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                              </div>
                              <div className="flex justify-between text-xs mt-1">
                                <span className="text-teal-700">매우 효과적</span>
                                <span className="text-teal-700">근본적 해결책</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="w-1/3 font-medium text-gray-800">USIM 보호서비스</div>
                            <div className="w-2/3">
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                              </div>
                              <div className="flex justify-between text-xs mt-1">
                                <span className="text-teal-700">매우 효과적</span>
                                <span className="text-gray-500">일부 불편함 존재</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="w-1/3 font-medium text-gray-800">명의도용 차단/2FA 권고</div>
                            <div className="w-2/3">
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                              </div>
                              <div className="flex justify-between text-xs mt-1">
                                <span className="text-teal-700">효과적</span>
                                <span className="text-gray-500">추가 보완책으로서 가치</span>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <div className="w-1/3 font-medium text-gray-800">사용자 교육/홍보</div>
                            <div className="w-2/3">
                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-teal-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                              </div>
                              <div className="flex justify-between text-xs mt-1">
                                <span className="text-teal-700">중장기적 효과</span>
                                <span className="text-gray-500">지속적 노력 필요</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 p-5 rounded-lg border border-green-100">
                          <h4 className="font-semibold text-green-800 mb-3">보안 효과의 주요 측면</h4>
                          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-2">
                            <li>
                              <strong>USIM 교체</strong>는 기술적으로 가장 확실한 대책입니다. 통신망 보안의 근간(키)을 새로 발급했기 때문에, 
                              기존 위협은 완전히 제거됩니다.
                            </li>
                            <li>
                              <strong>USIM 보호서비스</strong>는 교체 전이라도 복제 SIM 사용을 차단하여 
                              즉각적인 보호 효과를 제공했습니다.
                            </li>
                            <li>
                              이용자 정보 모니터링이나 2FA 설정 권고 등은 보안 수준을 한 단계 끌어올리는 데 기여했습니다. 
                              특히 많은 이용자들이 자신의 계정 보안상태를 점검하게 되어, 전반적인 사이버 위생이 향상되는 부수효과도 있었습니다.
                            </li>
                            <li>
                              종합적인 대응으로 복제 SIM 공격 시도가 차단되었고, 이후 확인된 피해 사례는 없는 상황입니다.
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                          <h4 className="font-semibold text-amber-800 mb-3">한계점 및 개선 필요사항</h4>
                          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-2">
                            <li>
                              USIM 교체는 일회성 조치입니다. 만약 해커가 또 다른 방법으로 새로운 키를 훔친다면, 다시 교체해야 합니다. 
                              근본해결이 아닌 사후복구임을 유념해야 합니다.
                            </li>
                            <li>
                              <strong>알뜰폰(MVNO) 가입자</strong>의 경우, SKT 망을 쓰더라도 SKT 직접 고객이 아니어서 
                              안내가 늦었다는 불만이 있었습니다.
                            </li>
                            <li>
                              해외 체류 중인 SKT 고객은 USIM 교체를 바로 못해 불안이 지속되었습니다. 
                              이들에게는 귀국 시까지 보호서비스로 대응하라고 했지만, 근본 불안은 남습니다.
                            </li>
                            <li>
                              USIM 보호서비스는 편의성 저하가 있었습니다. 특히 휴대폰을 자주 바꾸는 사용자나 
                              듀얼심 장착, 해외 SIM 교환 이용자에게 번거로움을 주었습니다.
                            </li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg border border-blue-100 p-5">
                        <h4 className="text-lg font-semibold text-blue-800 mb-3">종합 결론 및 시사점</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          결론적으로, SKT는 사후대응 측면에서 할 수 있는 대부분의 기술적 조치를 취했으나, 
                          사전 예방과 초기 대응, 고객대응 프로세스에서 허점이 드러났습니다. 
                          이는 비단 SKT만의 문제가 아니라 국내 주요 기간망 사업자의 공통 과제로 인식되었으며, 
                          후속 섹션에서 다룰 정부와 업계의 대책 논의로 이어졌습니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          이러한 경험은 향후 다른 침해사고에서도 표준 대응 모델로 참고될 것입니다. 특히 전 국민 대상 SIM 교체라는 
                          전대미문의 작업을 무리 없이 해낸 것은, 통신 인프라의 탄력성을 보여준 사례입니다.
                        </p>
                        <p className="text-sm text-slate-700 leading-relaxed mt-2">
                          향후에는 이러한 고객 보호조치를 더 체계화하여, 사고 발생 시 자동으로 실행되는 매뉴얼로 삼을 필요가 있습니다. 
                          또한 평시에도 opt-in 형태로 이용할 수 있는 보안 서비스(예: 보호서비스, 신용알림 등)를 적극 홍보하여, 
                          고객 스스로 대비할 수 있게 하는 것이 중요합니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 7. eSIM 도입 가능성과 보안적 장점 비교 */}
          <motion.section
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                <span className="bg-cyan-100 text-cyan-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12.5 6h.01"/><path d="M10.5 10h.01"/><path d="M15.5 10h.01"/><path d="M10.5 14h.01"/><path d="M15.5 14h.01"/><path d="M10.5 18h.01"/><path d="M15.5 18h.01"/></svg>
                </span>
                eSIM 도입 가능성과 보안적 장점 비교
              </h2>

              <div className="text-slate-700 space-y-6">
                <p className="leading-relaxed">
                  이번 해킹 사태를 계기로 eSIM(embedded SIM, 내장형 가입자식별모듈)에 대한 관심도 높아졌습니다. 
                  eSIM은 물리적인 SIM 칩 대신 단말기 내장 칩에 소프트웨어적으로 가입자 정보를 저장하는 기술로, 
                  최근 고급 스마트폰 등에 도입되고 있습니다. eSIM의 보안적 장점과 한계, 그리고 이번 사건과의 연관성을 살펴보겠습니다.
                </p>

                {/* 7.1 eSIM 개요와 현황 */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-purple-900 mb-3" id="esim-overview">7.1 eSIM 개요와 현황</h3>
                  
                  <div className="pl-4 border-l-4 border-purple-200 py-1 space-y-5">
                    <p className="leading-relaxed">
                      eSIM은 기기 내에 납땜된 작은 칩 형태로 존재하며, 사용자는 QR코드 스캔이나 통신사 프로파일 다운로드를 통해 
                      가입자 정보를 그 칩에 올려서 사용합니다. 한국에서는 2022년부터 이통3사가 스마트폰 eSIM 개통을 지원하기 시작했습니다. 
                      예를 들어 아이폰이나 일부 삼성폰, 최신 스마트워치 등이 eSIM을 탑재하고 있습니다. SKT도 당연히 eSIM 서비스를 제공 중입니다.
                    </p>
                    
                    <div className="bg-white p-5 rounded-lg border border-purple-100 shadow-sm">
                      <h4 className="font-semibold text-purple-800 mb-3">eSIM의 주요 특징</h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <h5 className="text-sm font-medium text-gray-800 mb-2">원격 프로비저닝</h5>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            가입자 인증정보(IMSI, Ki 등)를 OTA(Over-The-Air) 방식으로 내려받아 SIM에 쓸 수 있습니다. 
                            즉 대리점 방문 없이 온라인으로 개통 가능하고, 하나의 eSIM 칩에 여러 통신사 프로파일을 저장해 전환도 가능합니다.
                          </p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <h5 className="text-sm font-medium text-gray-800 mb-2">물리적 특성</h5>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            기기 내 납땜된 칩으로 제거 불가능
                            단말기와 일체형 구조로 물리적 탈취 어려움
                            필요에 따라 다양한 통신사 프로파일 전환 가능
                            일반적으로 보안 요소(SE)와 함께 저장됨
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="aspect-video w-full overflow-hidden rounded-xl border shadow-sm mb-4">
                      <Image 
                        src="/images/analysis/samsung-esim-comparison.jpg" 
                        alt="물리적 SIM과 eSIM 비교" 
                        className="w-full h-full object-contain bg-white"
                        width={800}
                        height={450}
                      />
                    </div>
                    <p className="text-sm text-slate-500 text-center">
                       물리적 SIM과 eSIM 비교 (출처: <a href="https://r1.community.samsung.com/t5/%EC%86%90%EC%89%AC%EC%9A%B4-%ED%95%B4%EA%B2%B0-%EB%B0%A9%EB%B2%95/%EA%B0%A4%EB%9F%AD%EC%8B%9C-%EC%8A%A4%EB%A7%88%ED%8A%B8%ED%8F%B0%EC%97%90-%EC%A0%81%EC%9A%A9%EB%90%9C-esim-%EA%B8%B0%EB%8A%A5-%EB%B0%8F-%EC%82%AC%EC%9A%A9-%EB%B0%A9%EB%B2%95%EC%9D%B4-%EA%B6%81%EA%B8%88%ED%95%A9%EB%8B%88%EB%8B%A4/ba-p/18281765" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">삼성 커뮤니티</a>)
                    </p>
                  </div>
                </div>
                
                {/* 7.2 eSIM의 보안적 이점 */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-purple-900 mb-3" id="esim-security-benefits">7.2 eSIM의 보안적 이점</h3>
                  
                  <div className="pl-4 border-l-4 border-purple-200 py-1">
                    <div className="space-y-6">
                      <div className="bg-cyan-50 p-5 rounded-lg border border-cyan-100">
                        <h4 className="font-semibold text-cyan-800 mb-3 flex items-center">
                          <span className="text-cyan-700 mr-2">(1)</span> 물리적 탈취 어려움
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          eSIM은 기기에서 분리할 수 없으므로, 분실/도난 시 SIM만 빼서 악용하는 것을 막아줍니다. 
                          전통적 SIM은 기기를 훔치지 않아도 카드만 빼돌리면 다른 폰에 꽂아 쓸 수 있지만, 
                          eSIM은 애초에 떼어낼 수 없습니다. 따라서 유심 스왑 사기(심 스와핑) 같은 사회공학에서도, 
                          공격자가 &quot;새 SIM 발송&quot;을 요구할 수 없고 반드시 기기를 요구해야 하므로 난이도가 올라갑니다.
                        </p>
                      </div>
                      
                      <div className="bg-cyan-50 p-5 rounded-lg border border-cyan-100">
                        <h4 className="font-semibold text-cyan-800 mb-3 flex items-center">
                          <span className="text-cyan-700 mr-2">(2)</span> 원격 폐기/재발급 용이
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          eSIM은 통신사에서 원격으로 해당 프로파일을 삭제하거나 비활성화할 수 있습니다. 
                          만약 가입자 Ki가 유출되는 일이 발생하면, 통신사가 즉각 원격으로 그 eSIM을 무효화시키고 
                          <strong className="text-cyan-700">새 프로파일 발급 (새 Ki)</strong>을 푸시할 수 있습니다. 
                          이번 SKT 사태의 경우에도, 만약 모두 eSIM이었다면 고객이 대리점 갈 필요 없이 통신사가 일괄 프로파일 
                          업데이트를 통해 키를 바꿔줄 수 있었을 것입니다. 이는 대응 속도와 편의성 측면에서 장점입니다.
                        </p>
                      </div>
                      
                      <div className="bg-cyan-50 p-5 rounded-lg border border-cyan-100">
                        <h4 className="font-semibold text-cyan-800 mb-3 flex items-center">
                          <span className="text-cyan-700 mr-2">(3)</span> 프로파일 인증 및 암호화 전송
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          eSIM 프로파일 (IMSI, Ki 등)을 내려보낼 때는 통신사-단말 간 강력한 암호화와 인증 과정을 거칩니다. 
                          QR코드를 통한 다운로드도 일회용 토큰 기반이어서, 해커가 중간에 가로채기가 어렵습니다. 
                          반면 물리적 SIM은 택배 유출 등으로 배송 중 노출 위험이 존재합니다. 
                          또한 eSIM 프로파일 발급에는 통신망 단말 인증이 필요하여, 임의로 해커가 자기 기기에 남의 프로파일을 
                          싣기가 거의 불가능합니다. (통신사 시스템이 아닌 이상 eSIM 정보를 생성할 수 없음.)
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-cyan-50 p-5 rounded-lg border border-cyan-100">
                          <h4 className="font-semibold text-cyan-800 mb-3 flex items-center">
                            <span className="text-cyan-700 mr-2">(4)</span> 저장공간 보안성
                          </h4>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            현대 스마트폰의 eSIM 영역은 <strong className="text-cyan-700">보안 칩(security element)</strong>에 
                            해당하며, 임의 해킹이 매우 어렵습니다. (일부 폰은 eSIM을 eUICC라는 독립된 보안칩에서 운영함.) 
                            설령 휴대폰이 악성코드에 감염되어도 eSIM의 Ki를 추출하기란 쉽지 않습니다. 
                            이 부분은 물리 SIM도 보안칩이어서 안전하긴 마찬가지지만, 백업 추출 측면에서는 eSIM이 더 통제되어 있습니다.
                          </p>
                        </div>
                        
                        <div className="bg-cyan-50 p-5 rounded-lg border border-cyan-100">
                          <h4 className="font-semibold text-cyan-800 mb-3 flex items-center">
                            <span className="text-cyan-700 mr-2">(5)</span> 다중 프로파일로 전환 용이
                          </h4>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            eSIM은 하나의 칩에 여러 통신사 프로파일을 저장할 수 있으므로, 해킹 시 신속한 통신사 변경도 가능합니다. 
                            예를 들어 SKT에 사고가 났을 때, 사용자가 즉시 KT나 LGU+ eSIM 프로파일을 다운로드받아 전환하면, 
                            SKT 프로파일(유출된 것)은 비활성화하고 타사로 갈아탈 수 있습니다. 
                            (물리 SIM도 가능하지만 eSIM은 온라인으로 즉시 수행 가능.) 
                            이런 유연성은 재난 시 통신 백업으로도 쓰일 수 있습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 7.3 eSIM의 한계 및 고려사항 */}
                <div className="mt-10">
                  <h3 className="text-xl font-bold text-purple-900 mb-3" id="esim-limitations">7.3 eSIM의 한계 및 고려사항</h3>
                  
                  <div className="pl-4 border-l-4 border-purple-200 py-1">
                    <p className="mb-4 leading-relaxed">
                      그러나 eSIM이 만능 해결책은 아닙니다. 몇 가지 유의할 점이 있습니다:
                    </p>
                    
                    <div className="space-y-4">
                      <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                        <h4 className="font-semibold text-amber-800 mb-3">HSS 해킹 자체에는 동일한 취약점</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          eSIM은 SIM 관리 방식만 바뀔 뿐, HSS에 저장되는 IMSI와 Ki는 물리 SIM과 동일합니다. 
                          이번 사건처럼 <strong className="text-amber-800">통신사 서버(DB)</strong>가 털리면 
                          eSIM 가입자의 IMSI와 Ki도 똑같이 유출됩니다. 따라서 <em>&quot;eSIM이면 해킹을 피했을 것이다&quot;</em>란 생각은 오해입니다. 
                          다만 eSIM이라면 원격으로 신속한 키 교체 등 대응 속도는 빨랐을 것입니다.
                        </p>
                      </div>
                      
                      <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                        <h4 className="font-semibold text-amber-800 mb-3">프로파일 탈취 가능성</h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          eSIM은 프로파일 다운로드에 강력 인증이 필요해 위험이 낮지만, 완전히 배제할 수는 없습니다. 
                          예를 들어 해커가 통신사의 eSIM 관리 서버(SM-DP+)를 해킹하거나, 사용자 계정을 탈취해 QR 코드를 발급받는 
                          식으로 악용할 수 있습니다. 물론 이 과정에는 다중 인증과 암호화가 적용되어 있어 현실적으로 매우 어렵습니다.
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                          <h4 className="font-semibold text-amber-800 mb-3">사용자 제약</h4>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            eSIM은 듀얼심 폰에서도 일반적으로 하나만 사용하거나, 물리 SIM과 조합하는 경우가 많습니다. 
                            아직 eSIM 전용 단말이 주류가 아니어서, 모든 사용자가 즉각 eSIM으로 전환하기엔 한계가 있습니다. 
                            또한 해외로밍 시 현지 eSIM 개통은 편리하지만, 물리 SIM처럼 간단히 갈아끼우는 개념이 아니어서 
                            사용자 경험 측면에서 변화가 필요합니다.
                          </p>
                        </div>
                        
                        <div className="bg-amber-50 p-5 rounded-lg border border-amber-100">
                          <h4 className="font-semibold text-amber-800 mb-3">호환성 문제</h4>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            일부 구형 기기나 특정 IoT 기기는 eSIM을 지원하지 않습니다. 
                            이번 사태에서도 키즈폰 등 몇몇 기기는 eSIM으로 대체가 어려워 기존 SIM 초기화 방식으로 대응해야 했습니다. 
                            따라서 eSIM 전환은 단계적으로 진행될 수밖에 없습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-lg border border-blue-100 p-5 mt-6">
                      <h4 className="text-lg font-semibold text-blue-800 mb-3">향후 전망</h4>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        eSIM 도입 확대는 장기적으로 SIM 보안관리의 효율성을 높이고 사고 대응능력을 키워줄 것으로 기대됩니다. 
                        실제 SKT도 <em>&quot;eSIM과 유심보호서비스로 2차 피해를 막을 수 있다&quot;</em>며 eSIM을 대안 중 하나로 언급했습니다. 
                        그러나 eSIM 자체가 통신 Core망 보안 문제를 해결해주진 않으므로, HSS 및 키 관리 보안은 별도로 강화해야 합니다. 
                      </p>
                      <p className="text-sm text-slate-700 leading-relaxed mt-2">
                        그럼에도 불구하고 eSIM은 원격 대처의 용이성과 물리적 공격 표면 축소 측면에서 보안상 이점이 분명하므로, 
                        향후 eSIM 전환 가속은 피할 수 없는 흐름일 것입니다. 통신사들도 이번 사건을 계기로 eSIM 전환을 더욱 
                        적극적으로 권장할 가능성이 높습니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 관련 페이지 링크 */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          >
            <Link href="/timeline" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-5 rounded-xl shadow-md flex items-center justify-between transition-colors">
              <div>
                <span className="text-sm text-blue-100">사건 연대기</span>
                <h3 className="text-xl font-semibold">전체 타임라인 보기</h3>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            
            <Link href="/analysis" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-5 rounded-xl shadow-md flex items-center justify-between transition-colors">
              <div>
                <span className="text-sm text-green-100">기술적 분석</span>
                <h3 className="text-xl font-semibold">해킹 상세 분석</h3>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
} 