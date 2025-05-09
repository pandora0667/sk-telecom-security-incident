"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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

export default function PressPage() {
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
              사회적 반응
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              SK텔레콤 유심 해킹 사태에 대한 국내외 언론, 전문가들의 분석 및
              일반 대중들의 반응을 정리했습니다.
            </p>
          </motion.div>

          {/* 국내 언론 초기 보도와 정정 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Z" />
                    <path d="M16 2v10h-4a2 2 0 0 0-2 2v8" />
                  </svg>
                </span>
                국내 언론 초기 보도와 정정
              </h2>

              <div className="text-slate-700 space-y-6">
                <p className="leading-relaxed">
                  SK텔레콤 유심 해킹 사건은 국내는 물론 해외에서도 큰 관심을
                  모았습니다. 초기에는 일부 언론에서 과장된 추측 보도가 나오기도
                  했으나, 곧 여러 보안 전문가들이 정확한 분석과 평가를
                  내놓았습니다.
                </p>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                  <h3 className="font-bold text-lg text-blue-900 mb-3">
                    초기 언론 보도의 혼선
                  </h3>
                  <p className="text-slate-700 mb-4">
                    사건 공개 직후 몇몇 언론은{" "}
                    <span className="text-red-600 font-medium">
                      &ldquo;최대 1,000만 명 해킹&rdquo;
                    </span>
                    ,{" "}
                    <span className="text-red-600 font-medium">
                      &quot;사상 최악의 개인정보 유출&quot;
                    </span>{" "}
                    등의 자극적인 헤드라인을 뽑았습니다. 이는 HSS 서버에 등록된
                    전체 이용자 수(약 2천만)를 단순히 피해 규모로 간주한
                    오해에서 비롯되었습니다.
                  </p>
                  <div className="border-l-4 border-blue-300 pl-4 italic text-slate-600 mb-4">
                    <p>
                      &quot;유심 정보 유출이 곧바로 대규모 금융피해로 이어지는 것은
                      아니며, 통신망 구조상 복제폰 작동에 여러 제약이 있다&quot;
                    </p>
                  </div>
                  <p className="text-slate-700">
                    이런 전문 해설이 나가자 언론도{" "}
                    <span className="font-medium">
                      &quot;해킹은 맞지만, 피해는 없었다&quot;
                    </span>{" "}
                    식으로 톤을 조정하며 정확한 핵심 정리를 내놓았습니다.
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-4 text-sm text-muted-foreground">
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
                  >
                    <path d="M18 6 7 17l-5-5" />
                    <path d="m22 10-7.5 7.5L13 16" />
                  </svg>
                  <span>
                    고려대 정보보호대학원 김승주 교수는{" "}
                    <span className="font-medium">
                      &quot;IMEI 미유출로 심 스와핑 가능성은 낮다&quot;
                    </span>
                    ,{" "}
                    <span className="font-medium">
                      &quot;과도한 공포를 가질 필요는 없다&quot;
                    </span>
                    고 설명했습니다.
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
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
                  >
                    <path d="M18 6 7 17l-5-5" />
                    <path d="m22 10-7.5 7.5L13 16" />
                  </svg>
                  <span>
                    주요 언론은 초기 과장 보도에서{" "}
                    <a
                      href="https://www.kyeonggi.com/article/20250506580117"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      &quot;해킹은 확인, 피해는 미확인&quot;
                    </a>{" "}
                    기조로 보도 방향을 수정했습니다.
                  </span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 보안 전문가들의 기술 분석 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-purple-100">
              <h2 className="text-2xl font-bold text-purple-900 mb-5 flex items-center gap-2">
                <span className="bg-purple-100 text-purple-700 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m14.5 9-5 5" />
                    <path d="m9.5 9 5 5" />
                  </svg>
                </span>
                보안 전문가들의 기술 분석
              </h2>

              <div className="text-slate-700 space-y-6">
                <p className="leading-relaxed">
                  국내 보안 커뮤니티에서는 사고 원인과 수법에 대한 심층 분석이
                  활발했습니다. 다양한 블로그와 보안 기업들이 BPFDoor 악성코드의
                  작동원리와 SK텔레콤 망 구조에 대한 고급 분석 자료를
                  공개했습니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 p-5 rounded-xl border border-purple-200">
                    <h3 className="font-bold text-purple-900 mb-3">
                      BPFDoor 악성코드 분석
                    </h3>
                    <div className="space-y-3 text-slate-700">
                      <p>
                        보안 블로그{" "}
                        <a
                          href="https://hg2lee.tistory.com/entry/2025-SKT-%ED%95%B4%ED%82%B9-%EC%82%AC%EA%B1%B4-%EC%A0%95%EB%A6%AC-Feat-BPFdoor-%EC%95%85%EC%84%B1%EC%BD%94%EB%93%9C"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 font-medium hover:underline"
                        >
                          감자 텃밭
                        </a>
                        에서는 BPFDoor 악성코드의 상세 작동원리와 SKT 망 구조에
                        대한 고급 분석 글을 공개했습니다.
                      </p>
                      <div className="border-l-4 border-purple-300 pl-4 italic text-slate-600">
                        <p>
                          &quot;포트리스(backdoor) 상태 구현으로 NDR 한계에 도전하는
                          BPFDoor&quot;
                        </p>
                      </div>
                      <p>
                        보안 기업 Plura에서는 자체 XDR 솔루션으로 BPFDoor를
                        탐지하는
                        <a
                          href="https://blog.plura.io/ko/respond/bpfdoor/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:underline"
                        >
                          {" "}
                          시연 영상
                        </a>
                        까지 게시했습니다.
                      </p>
                    </div>
                  </div>

                  <div className="bg-rose-50 p-5 rounded-xl border border-rose-200">
                    <h3 className="font-bold text-rose-900 mb-3">
                      위기 대응에 대한 분석
                    </h3>
                    <div className="space-y-3 text-slate-700">
                      <p>
                        <span className="text-rose-600 font-medium">
                          &quot;실패학 교과서 된 SKT 유심 해킹 사태&quot;
                        </span>
                        라는 칼럼(조선일보 5월 1일자)에서는 SKT의 초기 대응
                        미흡을 지적하며, 투명한 정보 공개와 신속 대응의 중요성을
                        역설했습니다.
                      </p>
                      <div className="border-l-4 border-rose-300 pl-4 italic text-slate-600">
                        <p>&quot;해킹 대응도 결국 신뢰의 문제&quot;</p>
                      </div>
                      <p>
                        이 칼럼은 정보 공유가 늦어 불안과 루머를 키운 점을
                        비판했습니다. 이는 이후 SKT가 개별 통지 등
                        커뮤니케이션을 강화하는 계기가 되었습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center mt-2">
                  <a
                    href="https://blog.plura.io/ko/column/leak_of_skt_usim/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Plura의 SKT 유심 해킹 기술 분석 보기
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2"
                    >
                      <path d="M7 7h10v10" />
                      <path d="M7 17 17 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 해외 매체와 전문가 반응 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-indigo-100">
              <h2 className="text-2xl font-bold text-indigo-900 mb-5 flex items-center gap-2">
                <span className="bg-indigo-100 text-indigo-700 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 10v12" />
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                  </svg>
                </span>
                해외 매체와 전문가 반응
              </h2>

              <div className="text-slate-700 space-y-6">
                <p className="leading-relaxed">
                  해외에서도 이 사건은 흥미로운 사례로 다루어졌습니다. 주요
                  외신과 전문 보안 매체들이 SKT 해킹 사태를 보도하면서 글로벌
                  보안 커뮤니티의 주목을 받았습니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-slate-50 p-5 rounded-xl border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
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
                          className="text-indigo-600"
                        >
                          <path d="M12 3v12" />
                          <path d="m8 11 4 4 4-4" />
                          <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-indigo-900">
                        주요 외신 보도
                      </h3>
                    </div>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-0.5">•</span>
                        <span>
                          로이터 통신은{" "}
                          <span className="italic">
                            &quot;SK Telecom shares plunge after data breach&quot;
                          </span>
                          라는 제목의{" "}
                          <a
                            href="https://www.reuters.com/sustainability/boards-policy-regulation/sk-telecom-shares-plunge-after-data-breach-due-cyberattack-2025-04-28/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-600 hover:underline"
                          >
                            기사
                          </a>
                          에서, SKT의 주가 하락 소식과 대응책을 소개했습니다.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-0.5">•</span>
                        <span>
                          Telecoms.com은{" "}
                          <span className="italic">
                            &quot;South Korean authorities probe cyberattack on SK
                            Telecom exposing SIM data&quot;
                          </span>
                          라는 보도로, 유출된 IMSI와 Ki 정보의 위험성과 정부의
                          조사 착수를 언급했습니다.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-0.5">•</span>
                        <span>
                          AP통신도{" "}
                          <span className="italic">
                            &quot;No personal IDs leaked in SK hack, only technical
                            SIM data&quot;
                          </span>
                          라는 서울발 기사를 내어 사건을 요약했습니다.
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-50 p-5 rounded-xl border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
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
                          className="text-indigo-600"
                        >
                          <path d="M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5Z" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M14.526 12.621 6 22h12.8a5.2 5.2 0 0 0 5.2-5.2V11h-4.526a5 5 0 0 0-4.948 1.621Z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-indigo-900">
                        글로벌 보안 전문가 반응
                      </h3>
                    </div>
                    <ul className="space-y-3 text-slate-700">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-0.5">•</span>
                        <span>
                          미국 SANS Institute의 한 연구원은{" "}
                          <span className="italic">
                            &quot;BPFDoor rears its head in South Korea – likely
                            Chinese APT behind SK Telecom hack&quot;
                          </span>
                          라고 언급하며, 중동/아시아에서 목격된 BPFDoor
                          캠페인과의 연관성을 시사했습니다.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-0.5">•</span>
                        <span>
                          해외 해커 뉴스(HackerNews) 포럼에서도{" "}
                          <span className="italic">
                            &quot;이반티 VPN 0-day exploited?&quot;
                          </span>
                          ,{" "}
                          <span className="italic">
                            &quot;telecoms under siege by Chinese APT&quot;
                          </span>{" "}
                          등의 토론이 이어졌습니다.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600 mt-0.5">•</span>
                        <span>
                          영국의 ComputerWeekly 지는{" "}
                          <span className="italic">
                            &quot;SK Telecom breach shows telcos not immune –
                            learnings for UK operators&quot;
                          </span>
                          라는 제목의 해설 기사를 통해, 통신 핵심망 보안에 대한
                          투자 필요성을 역설했습니다.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200 mt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-indigo-600"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <h3 className="font-bold text-indigo-900 text-lg">
                      주요 해외 반응 요약
                    </h3>
                  </div>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-0.5">→</span>
                      <span>기술적 측면: BPFDoor의 정교함과 은밀성에 주목</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-0.5">→</span>
                      <span>
                        중국 해커그룹 관련성: TeamT5의 분석과 경향신문{" "}
                        <a
                          href="https://www.khan.co.kr/article/202504301850001"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:underline"
                        >
                          보도
                        </a>
                        를 통해 추정
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-0.5">→</span>
                      <span>
                        유럽에서는 GDPR 등으로 통신사 보안에 엄격한데, 한국
                        사례를 교훈 삼아 자국 통신망 점검을 요구하는 목소리도
                        있었습니다.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 주요 이슈에 대한 공론화 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-emerald-100">
              <h2 className="text-2xl font-bold text-emerald-900 mb-5 flex items-center gap-2">
                <span className="bg-emerald-100 text-emerald-700 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 14V2" />
                    <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                  </svg>
                </span>
                주요 이슈에 대한 공론화
              </h2>

              <div className="text-slate-700 space-y-6">
                <p className="leading-relaxed">
                  SK텔레콤 해킹 사태는 실제로 여러 중요한 사회적 의제를
                  부각시켰습니다. 국회입법조사처는 이번 사태에서 기업의 자율적
                  대처와 정부 대응 체계의 한계가 발견되었다고 지적했습니다. 이
                  사건을 계기로 통신사 보안 사고 대응, 개인정보 보호, 그리고
                  디지털 인프라 보안 강화에 대한 논의가 활발하게 이루어지고
                  있습니다. 국회 과방위는 SKT 해킹 사건 이후에도 전담 조직(TF)을
                  구성하여 통신업계 전반의 보안 실태를 점검하기로 결정했습니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200 flex flex-col h-full">
                    <h3 className="font-bold text-emerald-800 mb-3">
                      개인정보 법제도 개선 논의
                    </h3>
                    <p className="text-sm text-slate-700 flex-grow">
                      국회입법조사처는 SK텔레콤 해킹 사태를 계기로 피해 배상
                      규정의 유연한 적용이 가능하도록 법 개정이 필요하다는
                      의견을 제시했습니다. 구체적으로 통신사업자의 귀책사유로
                      계약을 해지할 경우 위약금을 면제하도록 전기통신사업법
                      개정이 필요하다는 의견이 제시되었습니다. 개인정보 유출
                      피해자가 특정되지 않더라도 전체 가입자를 대상으로
                      공지하도록 개인정보보호법 개정이 제안되었습니다.
                    </p>
                  </div>

                  <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200 flex flex-col h-full">
                    <h3 className="font-bold text-emerald-800 mb-3">
                      통신사 보안 강화 방안
                    </h3>
                    <p className="text-sm text-slate-700 flex-grow">
                      과학기술정보통신부는 통신사 전반의 보안체계를 재점검하고
                      재발방지대책을 마련하겠다고 발표했습니다. 대한변호사협회는
                      통신사에 대한 보안 규제를 강화하여 금융권 수준의 연 2회
                      이상 외부 모의 침투훈련 의무화 등을 제안했습니다.
                      과기정통부는 알뜰폰 부정 개통 방지를 위해
                      정보보호관리체계(ISMS) 인증을 모든 알뜰폰 사업자에
                      의무화하기로 했습니다.
                    </p>
                  </div>

                  <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200 flex flex-col h-full">
                    <h3 className="font-bold text-emerald-800 mb-3">
                      국가 핵심 인프라 보안 강화
                    </h3>
                    <p className="text-sm text-slate-700 flex-grow">
                      대통령실은 &quot;범정부 핵심 인프라 보안 협의회&quot;를 출범시켜
                      국가 주요 인프라 시설에 대한 보안을 강화하기로 했습니다.
                      해저 통신케이블과 육지 통신망이 연결되는 중요 육양국을
                      국가보안시설로 지정하고 민관 합동 보안 협의체 운영을
                      추진하기로 했습니다. 과학기술정보통신부는 &quot;행정정보시스템
                      재난 위기대응 실무매뉴얼&quot;을 마련하여 정보시스템 장애 발생
                      시 신속한 복구와 피해 최소화를 목표로 하는 대응체계를
                      구축했습니다.
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100 mt-6">
                  <h3 className="font-bold text-emerald-800 mb-3">
                    정부의 대응과 향후 계획
                  </h3>
                  <div className="space-y-3 text-slate-700">
                    <p>
                      과기정통부는 SKT로부터 침해사고 신고를 접수한 이후
                      자료보존과 제출 요구, 현장 전문가 파견, 민관합동 조사단
                      구성 등의 조치를 취했습니다. 국회 과방위는 통신업계 전반의
                      보안 실태 점검을 위한 태스크포스(TF)를 구성하기로
                      결정했습니다.
                    </p>
                    <p>
                      이전 사례로, 과기정통부는 LGU+ 대상 디도스 공격 등에
                      대응하기 위해 &quot;특별조사점검단&quot;을 운영하여 전반적인
                      정보보호 대응체계를 심층 점검한 바 있습니다. 이번 사건을
                      계기로 피해자가 개인정보 유출과 피해 간 인과관계를
                      입증하기 어려울 수 있으므로 개인정보 보호법에 인과관계를
                      추정할 수 있는 규정을 두는 방안도 검토되고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 일반 대중들의 사회적 반응과 소비자 불만 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-red-100">
              <h2 className="text-2xl font-bold text-red-900 mb-5 flex items-center gap-2">
                <span className="bg-red-100 text-red-700 p-2 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z"></path>
                    <path d="M12 13v8"></path>
                    <path d="M12 3v3"></path>
                  </svg>
                </span>
                일반 대중들의 사회적 반응과 소비자 불만
              </h2>

              <div className="text-slate-700 space-y-6">
                <p className="leading-relaxed">
                  SK텔레콤의 유심 해킹 사태는 약 2,500만 명의 사용자에게 영향을
                  미치는 대규모 사건으로, 사회적으로 큰 혼란과 불안을
                  야기했습니다. 뉴스 보도와 소셜 미디어에서 나타난 대중들의 주요
                  반응과 불만 사항들을 정리했습니다.
                </p>

                {/* 유심 교체 관련 혼란 */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-red-900 mb-3">
                    유심 교체 관련 혼란과 불만
                  </h3>

                  <div className="pl-4 border-l-4 border-red-200 py-1 space-y-5">
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                        <span className="text-red-700 mr-2">①</span> 매장 대기
                        시간 및 재고 부족 문제
                      </h4>
                      <p className="mb-4 leading-relaxed">
                        코리아중앙데일리 보도에 따르면, 전국 SKT 매장에는 유심
                        교체를 위해 긴 대기 줄이 형성되었으며, 많은 매장에서
                        &quot;유심 재고 소진&quot;이라는 안내문이 붙었습니다. 소비자들은
                        평균 40분 이상 대기하는 경우가 많았고, 재고 부족으로
                        교체를 하지 못하고 돌아가는 사례도 빈번했습니다.
                      </p>
                      <div className="bg-red-50 p-4 rounded-lg text-sm text-red-700 mb-4">
                        <p className="font-medium mb-1">소비자 불만 사례:</p>
                        <p>
                          &quot;점심 시간에 방문했는데, &lsquo;유심 물량이 소진됐다&rsquo;는
                          답변만 들었어요. 다음 날 다시 오라는데 안내를 제대로
                          하지 않았어요.&quot; - 서울 마포구 SK텔레콤 매장 방문객
                        </p>
                      </div>

                      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8">
                        <div className="rounded-xl overflow-hidden shadow-md max-w-xl w-full">
                          <div className="relative pb-[56.25%] h-0">
                            <iframe
                              className="absolute top-0 left-0 w-full h-full"
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/GuyNDZ2E2kY?si=f6Q2kMrQl3rroUlt"
                              title="대리점마다 유심 교체 대응 '제각각'…가입자 혼란 가중"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <div className="bg-black bg-opacity-70 text-white p-2 text-xs">
                            &quot;대리점마다 유심 교체 대응 &lsquo;제각각&rsquo;…가입자 혼란 가중&quot;
                            (출처: JTBC 아침&)
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                        <span className="text-red-700 mr-2">②</span> 취약계층
                        지원 부족
                      </h4>
                      <p className="mb-4 leading-relaxed">
                        노인이나 장애인 등 직접 매장 방문이 어려운 취약계층에
                        대한 지원이 부족하다는 비판이 제기되었습니다. 특히 치매
                        환자나 거동이 불편한 고령층의 경우, 가족들도 평일에 대신
                        방문하기 어려워 불안감이 가중되었습니다.
                      </p>
                      <div className="bg-red-50 p-4 rounded-lg text-sm text-red-700 mb-4">
                        <p className="font-medium mb-1">소비자 사례:</p>
                        <p>
                          &quot;양가 부모님이 모두 SKT를 쓰는데, 두 분 다 치매가
                          있어서 혼자서는 매장에 방문할 수 없어요. 주말에만
                          방문할 수 있는데 매장에서는 평일에만 재고가 들어온다고
                          해서 너무 불안합니다.&quot; - 송경섭(54), 경기도 오산 거주
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                        <span className="text-red-700 mr-2">③</span> 영업시간
                        제약으로 인한 교체 어려움
                      </h4>
                      <p className="mb-4 leading-relaxed">
                        주말이나 늦은 시간 근무자들이 영업시간 내 매장 방문이
                        어려워 유심 교체를 하지 못하는 사례가 많았습니다.
                        코리아중앙데일리에 따르면, 한 대학원생은 &quot;평일에는
                        일하고 주말에도 일해서 아예 영업시간에 방문할 수 없다&quot;며
                        불안감을 토로했습니다.
                      </p>
                      <div className="bg-red-50 p-4 rounded-lg text-sm text-red-700 mb-4">
                        <p className="font-medium mb-1">SK텔레콤 입장:</p>
                        <p>
                          &quot;현재 고객이 직접 매장에 방문해야만 유심 교체가
                          가능합니다. 본인 확인 절차가 필요합니다.&quot; - SK텔레콤
                          관계자
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 위약금 및 보상 관련 불만 */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-red-900 mb-3">
                    위약금 및 보상 관련 불만
                  </h3>

                  <div className="pl-4 border-l-4 border-red-200 py-1 space-y-5">
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                        <span className="text-red-700 mr-2">①</span> 위약금 면제
                        논란과 SKT 입장의 모순
                      </h4>
                      <p className="mb-4 leading-relaxed">
                        코리아헤럴드 보도에 따르면, SK그룹 최태원 회장은 위약금
                        면제 요구에 대해 &quot;검토 중&quot;이라고 밝혔습니다. 그러나
                        SK텔레콤이 2025년 5월 7일 국회
                        과학기술정보방송통신위원회에 제출한 &quot;위약금 면제 해지
                        관련 드리는 말씀&quot;이라는 문서에서는 &quot;위약금 면제시 회복할
                        수 없는 피해가 우려된다&quot;며 부정적 입장을 표명했습니다.
                      </p>

                      <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 mb-4">
                        <h5 className="font-bold text-red-800 mb-2">
                          SKT가 주장하는 위약금 면제 우려사항
                        </h5>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700">
                          <li>
                            대규모 고객 이탈 우려: 유영상 대표는 청문회에서
                            &quot;위약금 면제시 한 달 기준 최대 500만명까지 이탈할 수
                            있다&quot;고 주장
                          </li>
                          <li>
                            경제적 손실: 위약금과 향후 매출까지 고려하면 3년간
                            7조원 이상의 손실 예상
                          </li>
                          <li>
                            회사 존립 기반 위협: &quot;대규모 고객 이탈로 인한 회사의
                            존립 기반이 무너질 우려&quot;
                          </li>
                          <li>
                            통신 인프라 운영 능력 저하: &quot;국가 핵심 인프라를
                            담당하는 기간통신사업자로서... 책무를 수행하기
                            어려운 상황을 초래&quot;
                          </li>
                          <li>
                            주주 대표소송 가능성: 위약금 면제로 발생하는 손실로
                            인한 주주 소송 우려
                          </li>
                        </ul>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg text-sm text-red-700 mb-4">
                        <p className="font-medium mb-1">최태원 회장 발언:</p>
                        <p>
                          &quot;위약금 면제 문제도 검토 중입니다. 고객들에게 불편을
                          끼치지 않는 방향으로 이 문제가 해결되기를 바랍니다.&quot; -
                          SK그룹 최태원 회장 (2025.05.07 기자회견)
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                        <span className="text-red-700 mr-2">②</span> 법적 근거와
                        국회의 입장
                      </h4>
                      <p className="mb-4 leading-relaxed">
                        SK텔레콤의 이동통신 이용약관에는 &quot;회사의 귀책 사유로
                        계약을 해지할 땐 고객의 위약금을 면제한다&quot;고 규정되어
                        있습니다. 국회 입법조사처는 &quot;해킹 사태가
                        에스케이텔레콤의 귀책사유로 인한 서비스 문제라면 약관을
                        근거로도 위약금을 면제할 수 있다&quot;고 밝혔습니다. 또한
                        &quot;에스케이텔레콤이 (해킹에 대비한) 기술적 보호 조처를 다
                        했다고 보기도 어려운 상황&quot;이라고도 짚었습니다.
                      </p>

                      <div className="flex justify-center mb-6">
                        <div className="rounded-xl overflow-hidden shadow-md max-w-xl w-full">
                          <div className="relative pb-[56.25%] h-0">
                            <iframe
                              className="absolute top-0 left-0 w-full h-full"
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/v88R8IFKrYw?si=a9jooC8jHjXzAOv6"
                              title="SKT가 국회의원들에게 (일부) 고객을 묘사하는 방식"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <div className="bg-black bg-opacity-70 text-white p-2 text-xs">
                            SKT가 국회의원들에게 (일부) 고객을 묘사하는 방식
                            (출처: 오목교 전자상가)
                          </div>
                        </div>
                      </div>

                      <div className="bg-rose-50 p-5 rounded-xl border border-rose-200 mb-5">
                        <h5 className="font-bold text-rose-800 mb-2">
                          SK텔레콤 국회 제출 문서 논란
                        </h5>
                        <p className="text-slate-700 mb-3 text-sm leading-relaxed">
                          SK텔레콤이 국회 과학기술정보방송통신위원회 소속
                          의원들에게 제출한 문서에서 고객들을 &quot;우선 (통신사를)
                          바꾸고 보자는 분위기에 휩쓸릴 수 있는 존재&quot;로
                          묘사했다는 사실이 알려져 논란이 되고 있습니다.
                          문서에는 위약금 면제가 &quot;사회적 혼란&quot;을 야기할 수
                          있으며, &quot;국가 책무를 다할 수 없게 될 것&quot;이라는 주장도
                          포함되어 있었습니다.
                        </p>
                        <p className="text-slate-700 text-sm leading-relaxed">
                          이는 SK텔레콤이 해킹 사태 초기에 고객들에게
                          &quot;믿어달라&quot;고 한 메시지와 상반되는 내용으로, 고객을
                          바라보는 기업의 진정성에 의문이 제기되고 있습니다.
                          또한 문서에는 &quot;위약금을 면제할 경우 일방의 주장으로
                          보상을 요구하게 될 것&quot;이라는 우려도 담겨 있었습니다.
                        </p>
                      </div>

                      <div className="bg-indigo-50 p-4 rounded-lg text-sm text-indigo-700 mb-4">
                        <p className="font-medium mb-1">
                          국회 청문회 여야 의원 발언:
                        </p>
                        <p>
                          &quot;SKT가 번호 이동 위약금 면제와 관련해 종전과 다른
                          소리를 하고 있다. 지난해 1조8000억원, 올 1분기
                          5500억원의 영업이익이 발생한 국내 1위 통신사가
                          대형사고를 치고도 (위약금 면제를)못하겠다? SKT가
                          소탐대실하지 않았으면 한다.&quot; - 이훈기 의원
                        </p>
                        <p className="mt-2">
                          &quot;최태원 회장의 사과문과 불출석사유서 1340글자 중에
                          &quot;배상&quot;이라는 단어가 없다. 말로만 책임지겠다는 것은 
                          말로 때우겠다는 것과 다름없다.&quot; - 황정아 의원
                        </p>
                      </div>

                      <div className="bg-amber-50 p-4 rounded-lg text-sm text-amber-700 mb-4">
                        <p className="font-medium mb-1">SK텔레콤 대표 답변:</p>
                        <p>
                          유영상 SK텔레콤 대표는 청문회에서 &quot;최민희 과방위원장이
                          &quot;위약금은 꼭 받아야겠다고 이야기하는 거냐&quot;라고
                          질문하자 &quot;네&quot;라고 답했습니다. 또한 &quot;과기정통부가
                          법률적 유권해석을 내린다면 그 점을 참고해 이사회와
                          신뢰회복위원회에서 상의해 결정하겠다&quot;고 밝혔습니다.&quot;
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                        <span className="text-red-700 mr-2">③</span> 타
                        통신사로의 이탈 및 불편 보상 요구
                      </h4>
                      <p className="mb-4 leading-relaxed">
                        코리아헤럴드 보도에 따르면, 해킹 사태 이후 많은 SKT
                        사용자들이 KT나 LG유플러스 등 타 통신사로 이동하고
                        있습니다. 일부 소비자들은 개인정보 유출에 따른 불안과
                        불편에 대한 보상으로 요금 할인이나 위약금 면제 등을
                        요구하고 있습니다.
                      </p>

                      <div className="bg-slate-50 p-4 rounded-lg text-sm text-slate-700 mb-4">
                        <p className="font-medium mb-1">
                          SK텔레콤의 현재 피해 보상 절차:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>2025년 4월 유심 해킹 사고 관련 피해 사용자</li>
                          <li>본인 명의 회선 및 본인 명의 금융계좌 피해</li>
                          <li>
                            유심 복제 또는 인증키 유출이 명확히 확인된 사례
                          </li>
                          <li>
                            보상 신청 시에는 본인 신분증 사본, 유심 재발급 또는
                            해킹 사실 확인서, 금융 피해 내역, 피해 상황 캡처
                            자료 등의 서류를 제출해야 합니다.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 정보 제공 및 커뮤니케이션 관련 불만 */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-red-900 mb-3">
                    정보 제공 및 커뮤니케이션 관련 불만
                  </h3>

                  <div className="pl-4 border-l-4 border-red-200 py-1 space-y-5">
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                        <span className="text-red-700 mr-2">①</span> 초기 대응
                        및 정보 제공 미흡
                      </h4>
                      <p className="mb-4 leading-relaxed">
                        SK텔레콤의 초기 사태 인지와 고객 안내 사이에 상당한
                        시간차가 있었다는 점이 지적되었습니다. 많은 소비자들은
                        공식 발표 전에 이미 언론이나 SNS를 통해 해킹 소식을
                        접했으며, 정확한 정보와 대처법에 대한 안내가 늦어져
                        불안감이 증폭되었다는 불만을 제기했습니다.
                      </p>
                      <div className="bg-red-50 p-4 rounded-lg text-sm text-red-700 mb-4">
                        <p className="font-medium mb-1">소비자 불만 사례:</p>
                        <p>
                          &quot;유심 해킹 소식을 자신도 모르게 SNS를 통해 알게
                          되었다. SKT에 문의하니 KT 공격이라는 가짜 뉴스가 돌고
                          있다는 답변을 받았다.&quot; - 부산 소재 SKT 고객
                        </p>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                        <span className="text-red-700 mr-2">②</span> 온라인
                        시스템 과부하
                      </h4>
                      <p className="mb-4 leading-relaxed">
                        해킹 사태 직후 유심 교체 예약 시스템에 너무 많은 접속이
                        몰리면서 시스템 과부하가 발생했습니다. 조선일보 보도에
                        따르면, 일부 사용자는 &quot;유심보호서비스 하루새 217만 가입…
                        한때 대기 170시간&quot;까지 늘어났다고 보고했으며, 온라인
                        고객센터 접속도 어려웠다는 불만이 제기되었습니다.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-red-800 mb-2 flex items-center">
                        <span className="text-red-700 mr-2">③</span> 피싱 및
                        스미싱 위험 증가
                      </h4>
                      <p className="mb-4 leading-relaxed">
                        해킹 사태 이후 SK텔레콤을 사칭한 피싱 문자나 전화가
                        증가했다는 보고가 있습니다. 아주경제 보도에 따르면, 일부
                        사용자들은 &quot;SK텔레콤의 유심 교체를 위해 개인정보를
                        입력하라&quot;는 가짜 URL이 포함된 문자를 받았다고
                        보고했으며, 이로 인한 2차 피해 우려가 커지고 있습니다.
                      </p>

                      <div className="flex justify-center mb-4">
                        <div className="rounded-xl overflow-hidden shadow-md max-w-xl w-full">
                          <div className="relative pb-[56.25%] h-0">
                            <iframe
                              className="absolute top-0 left-0 w-full h-full"
                              width="560"
                              height="315"
                              src="https://www.youtube.com/embed/jcik-7Pip2s?si=PzOP67M9LGHtqee0"
                              title="'SKT 유심 재고 도착' 스미싱 주의…'URL 클릭 말고 의심부터' / JTBC 뉴스룸"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                          <div className="bg-black bg-opacity-70 text-white p-2 text-xs">
                            &quot;SKT 유심 재고 도착&quot; 스미싱 주의…&quot;URL 클릭 말고
                            의심부터&quot; (출처: JTBC 뉴스룸)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 출처 섹션 */}
                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">
                    출처
                  </h3>
                  <ul className="text-xs text-slate-500 space-y-1">
                    <li>
                      <a
                        href="https://koreajoongangdaily.joins.com/news/2025-04-27/national/socialAffairs/Fear-anger-and-confusion-reign-in-wake-of-SK-Telecoms-historic-data-breach-/2294648"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 hover:underline"
                      >
                        Korea JoongAng Daily: &quot;Fear, anger and confusion reign
                        in wake of SK Telecom&apos;s historic data breach&quot;
                        (2025.04.27)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.koreaherald.com/article/10481817"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 hover:underline"
                      >
                        The Korea Herald: &quot;SK chief apologizes over SK Telecom
                        data leak&quot; (2025.05.07)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://news.nate.com/view/20250429n36723"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 hover:underline"
                      >
                        아주경제: &quot;[ABC 이모저모] &quot;역대급 해킹&quot; SK텔레콤 유심
                        사태가 빚은 사회 혼란&quot; (2025.04.29)
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://news.nate.com/view/20250429n18966"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 hover:underline"
                      >
                        디지털데일리: &quot;해킹 사고&quot; SK텔레콤, 후폭풍
                        일파만파…소비자 불만 고조&quot; (2025.04.29)
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 관련 페이지 링크 */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          >
            <Link
              href="/timeline"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-5 rounded-xl shadow-md flex items-center justify-between transition-colors"
            >
              <div>
                <span className="text-sm text-blue-100">사건 연대기</span>
                <h3 className="text-xl font-semibold">전체 타임라인 보기</h3>
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
              href="/analysis"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-5 rounded-xl shadow-md flex items-center justify-between transition-colors"
            >
              <div>
                <span className="text-sm text-green-100">기술적 분석</span>
                <h3 className="text-xl font-semibold">해킹 상세 분석</h3>
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
