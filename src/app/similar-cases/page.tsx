"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import Script from "next/script";

// 애니메이션 변수
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { y: 30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

export default function SimilarCasesPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <Script
        id="similar-cases-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "유사 해킹사례",
            "description": "국내외 통신사 및 기업 대상 해킹 사례들을 분석했습니다.",
            "datePublished": "2025-05-05",
            "dateModified": "2025-05-15",
            "publisher": {
              "@type": "Organization",
              "name": "SK텔레콤 유심 해킹 사태 분석",
              "url": "https://skt-hack.wisoft.io"
            },
            "hasPart": [
              {
                "@type": "Article",
                "name": "KT 심스와핑 해킹 사례 (2021-2022)",
                "description": "KT에서는 2021년 12월부터 2022년 초까지 심스와핑(SIM Swapping) 공격이 발생했습니다. 이는 SKT 해킹 사태보다 3년 전에 발생한 사건이었으며, 국내에서 보고된 첫 번째 심스와핑 사례로 알려져 있습니다.",
                "datePublished": "2025-05-05",
                "author": {
                  "@type": "Organization",
                  "name": "SK텔레콤 유심 해킹 사태 분석"
                },
                "isPartOf": {
                  "@type": "CollectionPage",
                  "@id": "https://skt-hack.wisoft.io/similar-cases"
                }
              },
              {
                "@type": "Article",
                "name": "LG유플러스 고객센터 해킹 (2024)",
                "description": "2024년 3월, LG유플러스 고객센터 시스템이 해킹되어 일부 고객 정보가 유출되었습니다.",
                "datePublished": "2025-05-05",
                "author": {
                  "@type": "Organization",
                  "name": "SK텔레콤 유심 해킹 사태 분석"
                },
                "isPartOf": {
                  "@type": "CollectionPage",
                  "@id": "https://skt-hack.wisoft.io/similar-cases"
                }
              },
              {
                "@type": "Article", 
                "name": "T-Mobile 데이터 유출 사태 (2023)",
                "description": "미국 통신사 T-Mobile이 2023년 1월에 약 3,740만명의 고객 정보가 해킹으로 유출된 사건입니다.",
                "datePublished": "2025-05-05",
                "author": {
                  "@type": "Organization",
                  "name": "SK텔레콤 유심 해킹 사태 분석"
                },
                "isPartOf": {
                  "@type": "CollectionPage",
                  "@id": "https://skt-hack.wisoft.io/similar-cases"
                }
              }
            ],
            "mainEntity": {
              "@type": "ItemList",
              "numberOfItems": 3,
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "url": "https://skt-hack.wisoft.io/similar-cases#kt"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "url": "https://skt-hack.wisoft.io/similar-cases#lgu-plus"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "url": "https://skt-hack.wisoft.io/similar-cases#t-mobile"
                }
              ]
            }
          })
        }}
      />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <path d="m12 19-7-7 7-7" />
                <path d="M5 12h14" />
              </svg>
              메인으로 돌아가기
            </Link>

            <h1 className="text-4xl font-bold text-blue-900 mb-4">
              유사 해킹사례
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              국내외 통신사 및 기업 대상 해킹 사례들을 분석했습니다.
            </p>
          </motion.div>

          {/* 국내 유사 해킹 사례 소개 */}
          <motion.section
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md p-8 border border-slate-200 mb-8"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              국내 유사 해킹 사례
            </h2>
            <p className="text-slate-700 mb-6">
              SK텔레콤 사태 이전에도 국내 통신사들은 이미 여러 번의 해킹과
              개인정보 유출 사건을 겪었습니다. 특히 KT와 LG유플러스의 사례는
              유심 해킹 및 개인정보 유출 면에서 주목할 만한 선례를 남겼습니다.
            </p>
          </motion.section>

          {/* KT 심스와핑 해킹 사례 */}
          <motion.section
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md p-8 border border-slate-200 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-red-600"
                    >
                      <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.41.59a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v5"></path>
                      <path d="M15 13v8"></path>
                      <path d="M18 13v8"></path>
                      <path d="M15 13a3 3 0 1 0 3 3"></path>
                      <path d="M5 10h4"></path>
                      <path d="M5 14h2"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-red-600">
                    KT 심스와핑 해킹 사례 (2021-2022)
                  </h2>
                </div>
                <div className="text-slate-700 space-y-4">
                  <p>
                    <strong>발생 시기 및 공격 유형</strong>
                    <br />
                    KT에서는 2021년 12월부터 2022년 초까지 심스와핑(SIM
                    Swapping) 공격이 발생했습니다. 이는 SKT 해킹 사태보다 3년
                    전에 발생한 사건이었으며, 국내에서 보고된 첫 번째 심스와핑
                    사례로 알려져 있습니다.
                  </p>
                  <p>
                    <strong>피해 규모</strong>
                    <br />
                    경찰에 신고된 피해 사례만 최소 36건으로 확인되었으며,
                    일각에서는 30명 이상의 피해자가 발생했다는 주장도
                    있었습니다. 피해액은 수백만 원에서 수억 원까지 다양했으며,
                    한 피해자는 퇴직금으로 투자한 2억 7천만 원 상당의 가상화폐를
                    모두 탈취당했습니다.
                  </p>
                  <p>
                    <strong>피해 패턴</strong>
                    <br />
                    보안뉴스가 조사한 첫 번째 피해자는 2021년 12월 23일과 24일
                    새벽에 연속으로 공격을 받았습니다. 피해자들은 모두 KT 통신망
                    사용자였으며, 가상자산 거래소에 계정을 가지고 있었다는
                    공통점이 있었습니다. 공격자는{" "}
                    <strong>일반 통신 단절</strong>을 유도한 후, 피해자가 잠에
                    있는 새벽 시간대에 <strong>기기변경</strong>을 시도했습니다.
                    그 다음엔 <strong>네이버와 카카오 계정 접근</strong>을 통해
                    가상자산을 탈취한 후, 이를 통해 다시{" "}
                    <strong>금융계좌 비밀번호 변경</strong>을 시도하는 방식으로
                    진행되었습니다.
                  </p>
                  <p>
                    <strong>KT의 대응</strong>
                    <br />
                    KT는 첫 번째 피해자에게 &quot;유심이 다른 단말기에
                    장착됐다가 다시 변경됐기 때문에 문제를 확인할 수
                    없다&quot;며 경찰에 신고하라는 답변을 했습니다. 이후 특정
                    시간대에 유심 변경을 막는 임시 조치를 취했지만, 근본적인
                    원인 파악에는 실패했다고 알려졌습니다.
                  </p>
                  <p>
                    이 사건은 SKT 해킹 사태에서 나타날 수 있는 2차 피해의
                    전례라고 볼 수 있으며, 통신사들이 이용자 보호를 위해 유심
                    교체 및 보안 강화 조치가 얼마나 중요한지를 보여주는
                    사례입니다.
                  </p>
                </div>
              </div>
              <div className="md:w-80 flex-shrink-0">
                <div className="sticky top-24 bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-red-700">
                    KT 심스와핑 요약
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-2 text-slate-700">
                    <li>2021년 12월~2022년 초 발생</li>
                    <li>최소 36건 이상 피해 사례 확인</li>
                    <li>피해액 수백만원~2억 7천만원</li>
                    <li>새벽 시간대 유심 변경으로 통신 장악</li>
                    <li>가상자산 탈취가 주요 목적</li>
                    <li>KT는 특정 시간대 유심 변경 제한 조치</li>
                    <li>국내 첫 심스와핑 사례로 기록</li>
                    <li>
                      출처:{" "}
                      <a
                        href="http://www.boannews.com/media/view.asp?idx=106573"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        보안뉴스
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KT 추가 해킹 사례들 */}
          <motion.section
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md p-8 border border-slate-200 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-orange-600"
                    >
                      <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.41.59a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v5"></path>
                      <path d="m21 15-3.5 3.5"></path>
                      <path d="m17.5 11.5 3.5 3.5"></path>
                      <path d="M10 9v1"></path>
                      <path d="M14 9v1"></path>
                      <path d="M18 9v1"></path>
                      <path d="M5 13h8"></path>
                      <path d="M5 17h6"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-orange-600">
                    KT 해킹 사례 모음 (2012-2024)
                  </h2>
                </div>
                <div className="text-slate-700 space-y-6">
                  <div className="space-y-3 border-l-4 border-orange-200 pl-4">
                    <h3 className="text-xl font-semibold text-orange-700">
                      2012년 KT 영업시스템 해킹 사례: 870만 명 개인정보 유출
                    </h3>
                    <p>
                      <strong>사건 개요 및 발생 배경</strong>
                      <br />
                      2012년 2월부터 7월까지 5개월간 지속된 이 사건은 국내
                      통신사 최초의 대규모 개인정보 유출 사례로 기록되었습니다.
                      해커들은 KT 영업시스템의 보안 취약점을 악용해 고객
                      고유번호 9자리 무작위 입력 프로그램을 개발, 시스템 접근
                      권한을 획득했습니다. 당시 유출된 정보에는 이름,
                      주민등록번호, 휴대전화번호, 사용 요금제 등 8개 항목이
                      포함되어 있었으며, 전체 KT 가입자 1,600만 명 중 54%에
                      해당하는 870만 명이 피해를 입었습니다.
                    </p>
                    <p>
                      <strong>공격 기법의 기술적 특성</strong>
                      <br />
                      해커들은 프록시 서버를 통한 위장 접속 기법을 사용해 KT의
                      실시간 모니터링 시스템을 우회했습니다. 이들은 영업대리점
                      직원의 계정을 사칭해 분당 6만 건의 정보를 조회하는
                      방식으로 시스템에 침투했으며, 이 과정에서 7개월간의 사전
                      준비기간을 거쳐 공격을 정교화했습니다. 특히
                      데이터베이스(DB) 직접 해킹 대신 API를 통한 점진적 정보
                      수집 방식은 기존 탐지 메커니즘을 무력화시키는 신종
                      수법이었습니다.
                    </p>
                    <p>
                      <strong>KT의 대응 및 사회적 파장</strong>
                      <br />
                      사고 발생 5개월 후에야 유출 사실을 인지한 KT는 내부
                      보안감사 절차의 근본적 결함을 노출시켰습니다. 당시 KT는
                      피해자에게 1인당 10만 원의 위자료를 지급하는 민사판결을
                      받았으나, 2018년 대법원에서 최종적으로 책임이 없음이
                      확정되면서 논란을 야기했습니다. 이 사건은 개인정보보호법
                      개정의 직접적 계기가 되었으며, 2012년 9월부터 시행된
                      &quot;개인정보의 기술적·관리적 보호조치 기준&quot; 강화로
                      이어졌습니다.
                    </p>
                  </div>

                  <div className="space-y-3 border-l-4 border-orange-200 pl-4">
                    <h3 className="text-xl font-semibold text-orange-700">
                      2014년 KT 홈페이지 해킹 사례: 1,200만 명 정보 추가 유출
                    </h3>
                    <p>
                      <strong>사건의 확장성과 공격 방식</strong>
                      <br />
                      전년도 사건과 달리 이번에는 KT 공식 홈페이지가 직접적인
                      표적이 되었습니다. 해커들은{" "}
                      <strong>파로스 프로그램(Parosproxy)</strong>을 이용해
                      HTTPS 트래픽을 분석, 고객 조회 시스템의 인증 프로토콜을
                      역공학적으로 해독했습니다. 9자리 고유번호 조합 알고리즘을
                      활용해 하루 20~30만 건씩 총 1,200만 건의 정보를
                      탈취했으며, 유출 범위가 이름, 주소, 은행계좌까지
                      확대되었습니다.
                    </p>
                    <p>
                      <strong>보안 시스템의 구조적 문제</strong>
                      <br />
                      당시 KT의 조회 시스템은 5회 이상의 잘못된 입력 시도에 대한
                      차단 메커니즘이 존재하지 않았습니다. 이는 해커들이
                      장기간에 걸쳐 무차별 대입 공격(Brute Force Attack)을
                      지속할 수 있도록 만든 결정적 약점이었습니다. 더욱 충격적인
                      사실은 2012년 사건 이후 도입된 것으로 알려진 차세대
                      모니터링 시스템이 이 같은 기본적 공격 패턴을 탐지하지
                      못했다는 점입니다.
                    </p>
                    <p>
                      <strong>법적 판결과 행정처분</strong>
                      <br />
                      개인정보보호위원회는 이 사건에 대해 과징금 7억 원을
                      부과했으나, 2018년 법원은 &quot;당시 기술 수준에서 KT가
                      합리적 보호조치를 이행했다&quot;며 행정처분을
                      취소했습니다. 이 판결은 정보통신서비스 제공자의 책임
                      범위에 대한 법리 해석의 전환점이 되었으며, 2023년 개정된
                      개인정보보호법에서 &quot;과실 책임주의&quot;로의 전환을
                      촉발시켰습니다.
                    </p>
                  </div>

                  <div className="space-y-3 border-l-4 border-orange-200 pl-4">
                    <h3 className="text-xl font-semibold text-orange-700">
                      2024년 KT 그리드 프로그램 차단 사건: 고객 PC 대상 악성코드
                      공격
                    </h3>
                    <p>
                      <strong>사건의 기술적 특성</strong>
                      <br />
                      KT 분당 데이터센터에서 발생한 이 사건은 P2P 기반 그리드
                      프로그램 사용자 100만 대 이상을 표적으로 했습니다.
                      공격자는 고객 PC에 설치된 KT 소프트웨어 업데이트 채널을
                      악용해 트래픽 패킷 변조 악성코드를 유포, 사용자 간 직접
                      데이터 교환을 차단했습니다. 이는 인터넷 사업자의 망 중립성
                      원칙을 명백히 위반한 사례로 평가받으며, 2024년 11월 현재
                      검찰 수사가 진행 중입니다.
                    </p>
                    <p>
                      <strong>업계 영향과 법적 쟁점</strong>
                      <br />
                      그리드 프로그램 차단으로 인해 웹하드 업체들은 데이터 전송
                      비용이 300% 이상 급증하는 경제적 피해를 입었습니다. 특히
                      KT가 2022년 대법원에서 그리드 프로그램 사용 차단 권한을
                      인정받은 상황에서, 악성코드 사용 여부가 주요 쟁점으로
                      부각되고 있습니다. 이 사건은 ICT 기업의 경쟁 제한 행위와
                      사용자 디바이스에 대한 무단 접근이라는 두 축에서 법적
                      논의가 예상됩니다.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-orange-700">
                      KT 보안 사고의 진화적 특성 분석
                    </h3>
                    <p>
                      <strong>시간축에 따른 공격 패턴 변화</strong>
                      <br />
                      KT 사례는 시간이 지남에 따라 공격 패턴의 변화를 명확하게
                      보여줍니다:
                    </p>
                    <ul className="list-disc list-inside pl-4 mb-4">
                      <li>
                        <strong>2012년:</strong> 내부 시스템 권한 상승을 통한
                        데이터 유출
                      </li>
                      <li>
                        <strong>2014년:</strong> 웹 인프라 취약점 악용한 대규모
                        정보 탈취
                      </li>
                      <li>
                        <strong>2021-2022년:</strong> 심스와핑을 통한 개인
                        금융자산 공격
                      </li>
                      <li>
                        <strong>2024년:</strong> 고객 단말기 제어를 통한 서비스
                        간접 방해
                      </li>
                    </ul>
                    <p>
                      이러한 패턴은 통신사를 대상으로 한 사이버 위협이 단순
                      데이터 탈취에서 보다 복잡하고 다층적인 금융 공격, 나아가
                      전략적 서비스 방해로 진화하고 있음을 시사합니다. SK텔레콤
                      해킹 사태와 비교할 때, KT 사례가 보여주는 중요한 교훈은
                      보안 취약점이 장기간에 걸쳐 반복적으로 노출될 수 있으며,
                      한 번의 보안 강화 조치만으로는 충분하지 않다는 점입니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-80 flex-shrink-0">
                <div className="sticky top-24 bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-orange-700">
                    KT 해킹 사례 요약
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-2 text-slate-700">
                    <li>
                      <strong>2012년:</strong> 870만 명 개인정보 유출
                      <ul className="list-circle list-inside ml-4 mt-1 text-xs text-slate-600">
                        <li>영업시스템 취약점 활용</li>
                        <li>5개월간 유출 지속</li>
                      </ul>
                    </li>
                    <li>
                      <strong>2014년:</strong> 1,200만 명 정보 유출
                      <ul className="list-circle list-inside ml-4 mt-1 text-xs text-slate-600">
                        <li>홈페이지 API 취약점</li>
                        <li>무차별 대입 공격 성공</li>
                      </ul>
                    </li>
                    <li>
                      <strong>2021-2022년:</strong> 심스와핑 공격
                      <ul className="list-circle list-inside ml-4 mt-1 text-xs text-slate-600">
                        <li>가상자산 탈취 목적</li>
                        <li>36건 이상 피해 발생</li>
                      </ul>
                    </li>
                    <li>
                      <strong>2024년:</strong> 그리드 프로그램 차단
                      <ul className="list-circle list-inside ml-4 mt-1 text-xs text-slate-600">
                        <li>악성코드 유포 의혹</li>
                        <li>100만대 이상 사용자 영향</li>
                      </ul>
                    </li>
                    <li>
                      KT 사례들은 <strong>통신사 보안의 진화적 역사</strong>를
                      보여주는 중요한 사례들입니다
                    </li>
                    <li>
                      출처:{" "}
                      <a
                        href="https://www.yna.co.kr/view/AKR20120727184900004"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        연합뉴스
                      </a>
                      ,{" "}
                      <a
                        href="https://www.yna.co.kr/view/AKR20140306149651065"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        연합뉴스
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* LG U+ 개인정보 유출 사례 */}
          <motion.section
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md p-8 border border-slate-200 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-purple-600"
                    >
                      <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.41.59a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v5"></path>
                      <circle cx="16" cy="20" r="2"></circle>
                      <path d="M12 17v-7"></path>
                      <path d="M10 10h4"></path>
                      <path d="M5 10h3"></path>
                      <path d="M5 14h2"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-purple-600">
                    LG U+ 개인정보 유출 사례 (2023)
                  </h2>
                </div>
                <div className="text-slate-700 space-y-4">
                  <p>
                    <strong>발생 시기 및 유출 내용</strong>
                    <br />
                    LG유플러스는 2023년 1월 해킹 공격을 받아 약 30만 건의 고객
                    개인정보가 유출되었습니다. 사실 이 정보는 2018년에 이미
                    유출됐으나 2023년에 다크웹에서 발견되면서 뒤늦게 사고가
                    드러났습니다.
                  </p>
                  <p>
                    <strong>유출된 정보 범위</strong>
                    <br />
                    유출된 정보에는 휴대전화번호, 성명, 주소, 생년월일, 이메일
                    주소, 아이디, USIM 고유번호 등 26개 항목이 포함되었습니다.
                    고객인증시스템(CAS)이 해킹당했는데, 이 시스템은 부가서비스
                    가입·해지 기능을 제공하는 시스템이었습니다.
                  </p>
                  <p>
                    <strong>LG U+의 대응</strong>
                    <br />
                    LG유플러스는 2023년 2월 20일부터 피해를 입은 고객부터
                    우선적으로 유심 무료 교체를 시작했습니다. 22일까지 사흘간 총
                    2,100건의 유심을 교체했고, 피해를 입지 않은 고객도 3월
                    1일부터 무료 교체가 가능하도록 조치했습니다.
                  </p>
                  <p>
                    <strong>행정 처분</strong>
                    <br />
                    개인정보보호위원회는 이 사건에 대해 LG유플러스에 과징금 68억
                    원을 부과했습니다. 조사 결과 LG유플러스의 고객인증시스템은
                    보안이 매우 취약한 상황이었으며, 운영체제, 데이터베이스,
                    웹서버 등 모든 시스템이 보안 업데이트가 이루어지지 않은
                    상태였습니다. 또한 기본적인 보안조치인 침입차단시스템과
                    침입방지시스템 등도 제대로 관리되지 않았습니다.
                  </p>
                  <p>
                    주목할 점은 최장혁 개인정보보호위원회 부위원장이 2025년 4월
                    29일 정례브리핑에서 &quot;SK텔레콤 유심 해킹사고는
                    LG유플러스의 개인정보 유출사고와는 차원이 다르다&quot;고
                    언급했다는 것입니다. LG유플러스의 경우 부가서비스 관련
                    시스템 침해였지만, SK텔레콤은 메인서버격인
                    홈가입자서버(HSS)가 해킹된 사례로, 피해 규모와 성격이 더
                    심각하다고 평가했습니다.
                  </p>
                </div>
              </div>
              <div className="md:w-80 flex-shrink-0">
                <div className="sticky top-24 bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-purple-700">
                    LG U+ 정보유출 요약
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-2 text-slate-700">
                    <li>2018년 발생, 2023년 발견</li>
                    <li>약 30만 명 개인정보 유출</li>
                    <li>26개 항목 개인정보 유출(전화번호, 주소 등)</li>
                    <li>USIM 고유번호도 유출</li>
                    <li>유심 무료 교체 실시(약 2,100건)</li>
                    <li>과징금 68억 원 부과</li>
                    <li>고객인증시스템(CAS) 보안 취약성 심각</li>
                    <li>
                      출처:{" "}
                      <a
                        href="https://www.hani.co.kr/arti/economy/marketing/1099986.html"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        한겨레
                      </a>
                      ,{" "}
                      <a
                        href="http://www.boannews.com/media/view.asp?idx=120105"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        보안뉴스
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 글로벌 유사 해킹 사례 소개 */}
          <motion.section
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md p-8 border border-slate-200 mb-8"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              글로벌 유사 해킹 사례와 비교 분석
            </h2>
            <p className="text-slate-700 mb-6">
              SKT 해킹 사건은 세계적으로도 큰 이동통신사 해킹 사례에 속합니다.
              이와 유사하게 대형 통신사가 해킹당한 사례로는 미국의 T-Mobile과
              AT&T 등을 들 수 있습니다. 각각의 사건에서 공통점과 차이점을
              기술적으로 비교해보겠습니다.
            </p>
          </motion.section>

          {/* T-Mobile 해킹 사례 */}
          <motion.section
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md p-8 border border-slate-200 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-600"
                    >
                      <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.41.59a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v5"></path>
                      <path d="M18 18.7a3 3 0 1 1-5.3 0"></path>
                      <path d="M13.2 14.9a1.5 1.5 0 1 1 2.6-1.5"></path>
                      <path d="M13.2 8.4a1.5 1.5 0 1 0 2.6 1.5"></path>
                      <path d="M5 10h4"></path>
                      <path d="M5 14h2"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-pink-600">
                    T-Mobile 해킹 사례
                  </h2>
                </div>
                <div className="text-slate-700 space-y-4">
                  <p>
                    T-Mobile US는 지난 몇 년간 여러 차례 대형 데이터 유출 사고를
                    겪었습니다. 2021년 8월, 해커가 T-Mobile 시스템에 침투하여 약
                    5,000만 명(현직 780만+과거 지원자 4천만)의 고객정보를 탈취한
                    사건이 있었습니다.
                  </p>
                  <p>
                    이때 유출된 정보에는 이름, 생년월일, SSN(사회보장번호),
                    운전면허증 번호 등 개인정보 외에, 전화번호와 단말기 IMEI,
                    IMSI 번호도 포함되었습니다. 그러나{" "}
                    <strong>SIM 인증키(Ki)</strong>나 패스워드 등은 포함되지
                    않은 것으로 발표되었습니다.
                  </p>
                  <p>
                    즉 개인식별정보+디바이스 식별정보 유출이었고, 인증
                    비밀정보는 유출되지 않았던 점이 SKT 사건과 다릅니다.
                    T-Mobile 해커(미국인 청년 존 빈스 등으로 추정)는 훔친
                    데이터를 다크웹에 판매하려 했고, 실제 일부 데이터가 유출되어
                    사기 등에 악용되었습니다.
                  </p>
                  <p>
                    T-Mobile은 이때 모든 유출 고객에게 2년간 무료 신용모니터링을
                    제공하고, 계정 PIN 초기화 등의 대응을 했습니다. 하지만 SIM
                    교체와 같은 조치는 하지 않았습니다. 왜냐하면 Ki 등의 유심
                    인증정보는 유출되지 않아 SIM 복제 위험은 없었기 때문입니다.
                    대신 T-Mobile은 Scam Shield 등의 스팸 차단 서비스 이용을
                    권하고, 고객들에게 비밀번호/PIN 강화를 안내했습니다.
                  </p>
                  <p>
                    기술적으로 볼 때, SKT 사건이 코어망(HSS) 침투로 SIM
                    인증정보까지 나온 것에 비해, T-Mobile 2021 사건은 고객 DB
                    위주의 유출이었습니다. 알려진 원인도, T-Mobile의 경우 노후된
                    GPRS 네트워크 장비의 취약점을 통해 해커가 내부 접근했다고
                    전해졌습니다 (일부 보도에 의하면, 해커가 폭스콘 라우터 설정
                    오류를 악용해 DB 크레덴셜을 얻어냈다고 함).
                  </p>
                  <p>
                    이에 비해 SKT는 VPN 및 리눅스 서버 경유 APT 침투로 경로가
                    다릅니다. T-Mobile은 이후에도 2022년, 2023년 연달아 해킹을
                    당했습니다. 2023년 1월 발표된 사건에서는 37백만 명의 고객
                    데이터(이름, 전화번호, 청구주소 등)가 한 해커에 의해
                    도난당했습니다. 이때는 API 취약점을 이용한 공격으로, 해커가
                    인증 없이 대량의 계정정보를 획득했습니다.
                  </p>
                  <p>
                    역시 IMSI 등이 포함되었으나 Ki는 없었고, T-Mobile은 주로 API
                    보안 강화와 고객 공지 정도로 대응했습니다. T-Mobile 사례들은
                    주로 사이버범죄자들이 금전 목적으로 벌인 해킹이며, 데이터
                    판매로 이어졌습니다. 반면 SKT 사건은 국가 혹은 조직적인 APT
                    가능성이 높고, 유출 정보도 비교적{" "}
                    <strong>타깃형 (통신 인증 정보)</strong>입니다. 공통적으로
                    수천만 명 규모 통신 가입자 정보가 노출되었다는 점은 같지만,
                    성격과 동기, 영향 범위에서 차이가 있습니다.
                  </p>
                </div>
              </div>
              <div className="md:w-80 flex-shrink-0">
                <div className="sticky top-24 bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-pink-700">
                    T-Mobile 해킹 요약
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-2 text-slate-700">
                    <li>2021년: 5천만 명 개인정보 유출</li>
                    <li>2023년: 37백만 명 고객정보 유출</li>
                    <li>유출된 정보: IMSI, 개인정보 포함</li>
                    <li>SIM 인증키(Ki)는 유출되지 않음</li>
                    <li>원인: 네트워크 장비 취약점, API 취약점</li>
                    <li>대응: 계정 PIN 초기화, 신용모니터링 제공</li>
                    <li>공격자: 금전적 목적의 사이버범죄자</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* AT&T 해킹 사례 */}
          <motion.section
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md p-8 border border-slate-200 mb-8"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.41.59a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v5"></path>
                      <path d="M21 15.5v4a1.5 1.5 0 0 1-3 0v-4"></path>
                      <path d="M19 13.5v1"></path>
                      <path d="M14 13a3 3 0 1 0 0-6h-1.5"></path>
                      <path d="M5 10h4"></path>
                      <path d="M5 14h2"></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-blue-600">
                    AT&T 해킹 사례
                  </h2>
                </div>
                <div className="text-slate-700 space-y-4">
                  <p>
                    미국 AT&T 역시 대규모 데이터 침해를 겪었습니다. 2022년에
                    AT&T의 콜 기록/문자 기록 데이터베이스가 해킹되어,{" "}
                    <strong>거의 전 고객(약 1억 명)</strong>의 통화 메타데이터가
                    유출되는 사고가 발생했습니다.
                  </p>
                  <p>
                    2024년 7월 이 사실이 공표되었는데, 해커가 2022년 5~10월 사이
                    AT&T의 제3자 클라우드 플랫폼에 저장된 통화·문자 송수신 기록
                    파일에 접근하여 이를 모두 다운로드한 것으로 드러났습니다.
                  </p>
                  <p>
                    이 데이터에는 전화번호 간 통화/문자 이력이 담겨 있었고,
                    일부는 기지국 ID (위치 정보)도 포함되었습니다. 다행히 통화
                    내용이나 문자 내용 자체, 그리고 이름·주민번호 등의 PII는
                    포함되지 않았다고 AT&T는 밝혔습니다. 그러나 통화상대 목록이
                    노출되었다는 점에서 프라이버시 침해 우려가 컸습니다.
                  </p>
                  <p>
                    AT&T의 이 사례는 통신 메타데이터 유출로서, SKT나 T-Mobile
                    사례와는 유출 데이터 유형이 다릅니다. SKT/TMO가 가입자
                    식별정보 중심이었다면, AT&T는 이용내역 정보였습니다. 공격
                    기법도 다릅니다. AT&T의 경우 외주 클라우드 저장소 설정 미비
                    또는 파트너 시스템 취약점이 원인으로 추정됩니다. (보도에
                    따르면 AT&T가 7개월 치 통화기록을 외부 클라우드에 두었고,
                    해커가 이를 통째로 복사했다고 합니다.)
                  </p>
                  <p>
                    한편 AT&T는 2015년경 내부직원들이 돈을 받고 고객 정보를
                    유출한 사건도 있었고, 2023년 3월에는 또 다른 공급망 해킹으로
                    900만 명의 AT&T 고객 개인정보가 유출되기도 했습니다. (이때는
                    마케팅 업체 해킹으로 이름, 전화번호 등 노출).
                  </p>
                  <p>
                    AT&T와 SKT 사례의 공통점은 MVNO(알뜰폰) 고객 정보까지 영향을
                    미쳤다는 점입니다. AT&T 2022 사고 때는 AT&T 망을 쓰는
                    MVNO들의 통화기록도 함께 유출되었습니다. SKT도 자회사인
                    SK텔링크 및 SK망 임대사업자의 가입자 Ki가 같이
                    유출되었습니다. 이는 한 통신사의 침해가 그 망을 공유하는
                    가상사업자들에게도 파급될 수 있음을 보여줍니다.
                  </p>
                </div>
              </div>
              <div className="md:w-80 flex-shrink-0">
                <div className="sticky top-24 bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2 text-blue-700">
                    AT&T 해킹 요약
                  </h3>
                  <ul className="list-disc list-inside text-sm space-y-2 text-slate-700">
                    <li>2022년: 약 1억 명의 통화 메타데이터 유출</li>
                    <li>2023년: 900만 명 개인정보 유출</li>
                    <li>유출된 정보: 통화기록, 문자기록, 일부 위치정보</li>
                    <li>원인: 외주 클라우드 저장소 설정 미비</li>
                    <li>MVNO 고객 정보도 함께 유출</li>
                    <li>통화/문자 내용, 개인식별정보는 유출되지 않음</li>
                    <li>2024년에야 공개된 2년 전의 유출 사고</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 그 외 사례 및 비교 요약 */}
          <motion.section
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md p-8 border border-slate-200 mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-purple-600"
                >
                  <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                  <path d="M21 3v5h-5" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-purple-600">
                그 외 사례 및 비교 요약
              </h2>
            </div>
            <div className="text-slate-700 space-y-4">
              <p>
                유럽과 기타 지역에서도 통신사 해킹 사례는 존재합니다. 예를 들어
                벨기에의 Proximus는 2013년 국가기관 해킹으로 내부망 침투를
                당했고, 호주의 Optus는 2022년 API 취약점으로 1천만 고객
                정보(이름, 여권번호 등)가 유출된 바 있습니다. Optus 사건은 SKT와
                유사하게 정부가 개입하고 여권 재발급 등을 지원했으나, SIM 정보는
                아니었습니다.
              </p>
              <h3 className="text-xl font-semibold mt-6 mb-3">비교 요약</h3>
              <p>전 세계 통신사 해킹들을 보면, 공통적으로:</p>
              <ul className="list-disc list-inside pl-4 mb-4">
                <li>
                  대량의 가입자 데이터가 표적이 된다. (수십만~수천만 규모)
                </li>
                <li>
                  사고 이후 고객 대상 신용모니터링 제공, 보안 공지 등 비슷한
                  대응을 취한다.
                </li>
                <li>
                  정부 규제 및 과징금이 뒤따른다. (미국에서는 T-Mobile이 3번
                  해킹 후 당국으로부터 조사와 벌금 압박을 받고 있음)
                </li>
              </ul>
              <p>차이점으로는:</p>
              <ul className="list-disc list-inside pl-4 mb-4">
                <li>
                  <strong>공격자 유형:</strong> SKT나 Proximus 등은 국가배후 APT
                  정황, T-Mobile/Optus 등은 금전취득 목적의 범죄자.
                </li>
                <li>
                  <strong>유출 데이터 종류:</strong> 인증정보(Ki)까지 나온 SKT는
                  드물고, 대부분은 개인식별정보나 통화기록 등이 많다.
                </li>
                <li>
                  <strong>악용 위험:</strong> 개인식별정보 유출은 신분 도용,
                  통화기록 유출은 사생활 노출, 인증정보 유출은 통신망 악용으로
                  각각 성격이 다르다.
                </li>
                <li>
                  <strong>대응 방법:</strong> SKT처럼 SIM 자체 교체까지 간
                  사례는 극히 드뭅니다. 이는 Ki 유출이 있었기에 필요했던
                  조치입니다. 다른 경우들은 주로 계정 비밀번호/PIN 변경 권고,
                  신분증 재발급 지원(Optus의 여권 교체 비용 지원 등)으로
                  대응했습니다.
                </li>
              </ul>
              <p>
                결국 SKT 사건은 글로벌 사례들과 맥락을 같이 하면서도 특별한
                교훈을 남겼습니다. 특히{" "}
                <strong>&quot;코어망 해킹으로 SIM 키 유출&quot;</strong>이라는
                점에서 통신사들에 새로운 경종을 울렸습니다. 해외 전문가들은 SKT
                사례를 보며 &quot;우리 HLR/HSS는 안전한가&quot; 자문하는 계기가
                되었을 것입니다.
              </p>
              <p>
                또한 전통적 IT 시스템(데이터베이스) 뿐 아니라{" "}
                <strong>통신 네트워크 장비(VPN, HSS 등)</strong>의 보안에 더욱
                신경써야 함을 확인시켰습니다. 이처럼 글로벌 비교를 통해, SKT
                사건의 위치를 파악하면: 이례적이고 심각한 수준이지만, 충분히
                대비 가능했던 종류의 공격이었다고 평가할 수 있습니다. 향후 전
                세계 통신사들은 이러한 사례들을 공유하며, 공동의 보안 강화
                노력을 펼칠 것으로 기대됩니다.
              </p>
            </div>
          </motion.section>

          {/* 관련 페이지 링크 */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          >
            <Link
              href="/analysis"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-5 rounded-xl shadow-md flex items-center justify-between transition-colors"
            >
              <div>
                <span className="text-sm text-blue-100">기술적 분석</span>
                <h3 className="text-xl font-semibold">침해 분석</h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>

            <Link
              href="/response"
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-5 rounded-xl shadow-md flex items-center justify-between transition-colors"
            >
              <div>
                <span className="text-sm text-purple-100">대응과 조치</span>
                <h3 className="text-xl font-semibold">대응 전략</h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
