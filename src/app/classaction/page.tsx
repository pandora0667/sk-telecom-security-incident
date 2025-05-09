"use client";

import { motion } from "framer-motion";
import Link from "next/link";
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

export default function ClassActionPage() {
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
              SK텔레콤 유심 해킹 집단소송 안내
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              이 페이지에서는 SK텔레콤 유심 해킹 사건 관련 집단소송 참여 방법과
              현황에 대한 정보를 제공합니다.
            </p>
          </motion.div>

          {/* 집단소송 소개 섹션 */}
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
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </span>
                집단소송 현황
              </h2>

              <div className="text-slate-700 space-y-5">
                <p className="leading-relaxed">
                  SK텔레콤 유심(USIM) 정보 유출 사건으로 피해자들이 빠르게
                  뭉치면서 집단소송·집단분쟁조정·형사고발이 동시에 진행
                  중입니다. 5월 9일 기준, 네이버 카페·로펌 플랫폼 등을 통해
                  참여자가 3만 명 이상으로 불어났고, 일부 로펌은 1인당 30만
                  원∼100만 원의 위자료(최대 1백만 원) 또는 위약금 면제를
                  요구하고 있습니다.
                </p>

                {/* 알림 컴포넌트 */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <div className="text-amber-600 mt-1">
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
                        <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                        <line x1="12" y1="9" x2="12" y2="13" />
                        <line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-800">
                        면책 고지
                      </h3>
                      <p className="text-sm text-amber-700 mt-1">
                        본 페이지는 공신력 있는 언론·정부 발표를 종합한 정보
                        제공용 요약이며, 법률적 조언을 대체할 수 없습니다.
                        구체적 소송 참여 전에는 반드시 전문 법률가와 상담하시기
                        바랍니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 사건 경과와 피해 규모 */}
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    사건 경과와 피해 규모
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>
                      <strong>침해 일시:</strong> 2025년 4월 19일 전후 침투 정황
                      확인, 23백만 명 가입자의 유심 관련 인증정보 일부가 유출된
                      것으로 잠정 집계
                    </li>
                    <li>
                      <strong>SKT 대응:</strong> 4월 27일부터 무료 유심
                      교체·유심보호서비스 제공, 5월 7일 유영상 대표·최태원 회장
                      공식 사과
                    </li>
                    <li>
                      <strong>정부 대응:</strong> 방통위·개보위 합동조사와
                      과징금 검토 착수, 국회 과방위 청문회 개최
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 집단소송 진행 현황 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-purple-100">
              <h2 className="text-2xl font-bold text-purple-900 mb-5">
                집단소송‧분쟁조정 진행 현황
              </h2>

              {/* 모바일 최적화 표 - 카드 형태로 변경 */}
              <div className="block md:hidden space-y-5">
                {/* 로집사 */}
                <div className="bg-white rounded-lg border border-purple-200 overflow-hidden">
                  <div className="bg-purple-50 px-4 py-3 border-b border-purple-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-purple-900">
                        법무법인 로집사
                      </h3>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-medium">
                        민사 손해배상
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <span className="text-xs text-gray-500 block">
                        참여자 현황
                      </span>
                      <span className="text-sm font-medium">
                        4명 1차 접수, 플랫폼 모집 9천 명+
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        청구 내용
                      </span>
                      <span className="text-sm font-medium">
                        위자료 1,000만 원/인
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        비용 구조
                      </span>
                      <span className="text-sm font-medium">
                        착수 1만 1천 원, 성과보수 10%
                      </span>
                    </div>
                  </div>
                </div>

                {/* 로고스 */}
                <div className="bg-white rounded-lg border border-purple-200 overflow-hidden">
                  <div className="bg-purple-50 px-4 py-3 border-b border-purple-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-purple-900">
                        법무법인 로고스
                      </h3>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-medium">
                        민사 손해배상
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <span className="text-xs text-gray-500 block">
                        참여자 현황
                      </span>
                      <span className="text-sm font-medium">
                        첫 주 500여 명
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        청구 내용
                      </span>
                      <span className="text-sm font-medium">
                        위자료 100만 원/인
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        비용 구조
                      </span>
                      <span className="text-sm font-medium">
                        무료 착수, 보수 별도 협의
                      </span>
                    </div>
                  </div>
                </div>

                {/* 로피드법률사무소 */}
                <div className="bg-white rounded-lg border border-purple-200 overflow-hidden">
                  <div className="bg-purple-50 px-4 py-3 border-b border-purple-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-purple-900">
                        로피드법률사무소
                      </h3>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-medium">
                        민사 손해배상
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <span className="text-xs text-gray-500 block">
                        담당 변호사
                      </span>
                      <span className="text-sm font-medium">하희봉 변호사</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        참여자 현황
                      </span>
                      <span className="text-sm font-medium">
                        8,000명 이상 (5월 16일 소장 제출 예정)
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        청구 내용
                      </span>
                      <span className="text-sm font-medium">
                        위자료 50만 원/인
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        비용 구조
                      </span>
                      <span className="text-sm font-medium">별도 안내</span>
                    </div>
                  </div>
                </div>

                {/* 서민민생대책위원회 */}
                <div className="bg-white rounded-lg border border-purple-200 overflow-hidden">
                  <div className="bg-purple-50 px-4 py-3 border-b border-purple-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-purple-900">
                        서민민생대책위원회
                      </h3>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-medium">
                        민사 손해배상
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <span className="text-xs text-gray-500 block">성격</span>
                      <span className="text-sm font-medium">시민단체</span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        참여자 현황
                      </span>
                      <span className="text-sm font-medium">
                        4월 30일 7명과 함께 소송 제기
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        청구 내용
                      </span>
                      <span className="text-sm font-medium">
                        위자료 300만 원/인
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        비용 구조
                      </span>
                      <span className="text-sm font-medium">별도 안내</span>
                    </div>
                  </div>
                </div>

                {/* 법무법인 대륜 */}
                <div className="bg-white rounded-lg border border-purple-200 overflow-hidden">
                  <div className="bg-purple-50 px-4 py-3 border-b border-purple-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-purple-900">
                        법무법인 대륜
                      </h3>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-medium">
                        형사고발
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <span className="text-xs text-gray-500 block">
                        담당 팀
                      </span>
                      <span className="text-sm font-medium">
                        SKT 개인정보 유출 전담 TF
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        참여자 현황
                      </span>
                      <span className="text-sm font-medium">
                        고발인 3명 (디지털포렌식센터 전문가 포함)
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        청구 내용
                      </span>
                      <span className="text-sm font-medium">
                        정보통신망법·개보법 위반
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        비용 구조
                      </span>
                      <span className="text-sm font-medium">무료</span>
                    </div>
                  </div>
                </div>

                {/* 법무법인 이공 */}
                <div className="bg-white rounded-lg border border-purple-200 overflow-hidden">
                  <div className="bg-purple-50 px-4 py-3 border-b border-purple-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-purple-900">
                        법무법인 이공
                      </h3>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-medium">
                        민사+집단분쟁조정
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <span className="text-xs text-gray-500 block">
                        참여자 현황
                      </span>
                      <span className="text-sm font-medium">
                        집단분쟁조정신청과 소송 병행 추진
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        청구 내용
                      </span>
                      <span className="text-sm font-medium">
                        위자료 50만 원/인 예정
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        비용 구조
                      </span>
                      <span className="text-sm font-medium">별도 안내</span>
                    </div>
                  </div>
                </div>

                {/* 이철우 변호인단 */}
                <div className="bg-white rounded-lg border border-purple-200 overflow-hidden">
                  <div className="bg-purple-50 px-4 py-3 border-b border-purple-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-purple-900">
                        이철우 변호인단
                      </h3>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-medium">
                        집단분쟁조정
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <span className="text-xs text-gray-500 block">
                        진행 현황
                      </span>
                      <span className="text-sm font-medium">
                        한국소비자원에 59명 대표 신청 (5월 9일 제출)
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        청구 내용
                      </span>
                      <span className="text-sm font-medium">
                        배상 30만 원, 위약금 면제, 택배 유심교체
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        비용 구조
                      </span>
                      <span className="text-sm font-medium">
                        무료(행정절차)
                      </span>
                    </div>
                  </div>
                </div>

                {/* 온라인 카페 */}
                <div className="bg-white rounded-lg border border-purple-200 overflow-hidden">
                  <div className="bg-purple-50 px-4 py-3 border-b border-purple-200">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-purple-900">
                        SKT 개인정보유출 집단소송
                      </h3>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded font-medium">
                        온라인 카페
                      </span>
                    </div>
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <span className="text-xs text-gray-500 block">
                        참여자 현황
                      </span>
                      <span className="text-sm font-medium">
                        4월 28일 기준 2만 명+ 돌파
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        활동 내용
                      </span>
                      <span className="text-sm font-medium">
                        로펌 연계·불매 운동
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-gray-500 block">
                        가입 비용
                      </span>
                      <span className="text-sm font-medium">무료</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 데스크탑용 테이블 */}
              <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-purple-50 text-purple-900">
                    <tr>
                      <th className="py-3 px-4 text-left font-semibold border-b w-1/6">
                        구분
                      </th>
                      <th className="py-3 px-4 text-left font-semibold border-b w-1/5">
                        주관 단체/로펌
                      </th>
                      <th className="py-3 px-4 text-left font-semibold border-b w-1/4">
                        참여자 현황
                      </th>
                      <th className="py-3 px-4 text-left font-semibold border-b w-1/5">
                        청구 내용
                      </th>
                      <th className="py-3 px-4 text-left font-semibold border-b w-1/6">
                        비용 구조
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 align-top whitespace-nowrap">
                        민사 손해배상
                      </td>
                      <td className="py-3 px-4">법무법인 로집사</td>
                      <td className="py-3 px-4">
                        4명 1차 접수, 플랫폼 모집 9천 명+
                      </td>
                      <td className="py-3 px-4">위자료 1,000만 원/인</td>
                      <td className="py-3 px-4">
                        착수 1만 1천 원, 성과보수 10%
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 align-top whitespace-nowrap">
                        민사 손해배상
                      </td>
                      <td className="py-3 px-4">법무법인 로고스</td>
                      <td className="py-3 px-4">첫 주 500여 명</td>
                      <td className="py-3 px-4">위자료 100만 원/인</td>
                      <td className="py-3 px-4">무료 착수, 보수 별도 협의</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 align-top whitespace-nowrap">
                        민사 손해배상
                      </td>
                      <td className="py-3 px-4">
                        로피드법률사무소
                        <br />
                        (하희봉 변호사)
                      </td>
                      <td className="py-3 px-4">
                        8,000명 이상
                        <br />
                        (5월 16일 소장 제출 예정)
                      </td>
                      <td className="py-3 px-4">위자료 50만 원/인</td>
                      <td className="py-3 px-4">별도 안내</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 align-top whitespace-nowrap">
                        민사 손해배상
                      </td>
                      <td className="py-3 px-4">
                        서민민생대책위원회
                        <br />
                        (시민단체)
                      </td>
                      <td className="py-3 px-4">
                        4월 30일 7명과 함께 소송 제기
                      </td>
                      <td className="py-3 px-4">위자료 300만 원/인</td>
                      <td className="py-3 px-4">별도 안내</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 align-top whitespace-nowrap">
                        형사고발
                      </td>
                      <td className="py-3 px-4">
                        법무법인 대륜
                        <br />
                        (SKT 개인정보 유출 전담 TF)
                      </td>
                      <td className="py-3 px-4">
                        고발인 3명
                        <br />
                        (디지털포렌식센터 전문가 포함)
                      </td>
                      <td className="py-3 px-4">정보통신망법·개보법 위반</td>
                      <td className="py-3 px-4">무료</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 align-top">
                        <div className="whitespace-nowrap">민사 손해배상</div>
                        <div className="whitespace-nowrap">+ 집단분쟁조정</div>
                      </td>
                      <td className="py-3 px-4">법무법인 이공</td>
                      <td className="py-3 px-4">
                        집단분쟁조정신청과
                        <br />
                        소송 병행 추진
                      </td>
                      <td className="py-3 px-4">위자료 50만 원/인 예정</td>
                      <td className="py-3 px-4">별도 안내</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 align-top whitespace-nowrap">
                        집단분쟁조정
                      </td>
                      <td className="py-3 px-4">
                        이철우 변호인단 → 한국소비자원
                      </td>
                      <td className="py-3 px-4">
                        59명 대표 신청
                        <br />
                        (5월 9일 제출)
                      </td>
                      <td className="py-3 px-4">
                        배상 30만 원, 위약금 면제, 택배 유심교체
                      </td>
                      <td className="py-3 px-4">무료(행정절차)</td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 align-top whitespace-nowrap">
                        온라인 카페
                      </td>
                      <td className="py-3 px-4">
                        <span className="whitespace-nowrap">
                          &apos;SKT 개인정보유출 집단소송&apos;
                        </span>
                      </td>
                      <td className="py-3 px-4">4월 28일 기준 2만 명+ 돌파</td>
                      <td className="py-3 px-4">로펌 연계·불매 운동</td>
                      <td className="py-3 px-4">가입 무료</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>

          {/* 법적 근거 섹션 추가 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-indigo-100">
              <h2 className="text-2xl font-bold text-indigo-900 mb-5">
                소송의 법적 근거
              </h2>

              <div className="p-6 bg-indigo-50 rounded-lg mb-6">
                <div className="flex items-start">
                  <div className="text-indigo-600 mr-4 mt-1">
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
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-indigo-900 mb-2">
                      개인정보보호법 제39조(손해배상책임)
                    </h3>
                    <blockquote className="pl-4 border-l-4 border-indigo-300 text-gray-700">
                      <p className="mb-3">
                        &quot;정보주체는 개인정보처리자의 고의 또는 과실로 인해
                        개인정보가 유출된 경우 300만원 이하의 범위에서 손해를
                        배상할 책임이 있다&quot;
                      </p>
                    </blockquote>
                    <p className="mt-4 text-gray-700">
                      법조계 다수 의견에 따르면, 이번 해킹은 SKT의{" "}
                      <strong>과실에 의한 것</strong>으로 배상책임 가능성이
                      높다고 판단되고 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-white rounded-lg border border-indigo-100">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                    <span className="mr-2 bg-indigo-100 text-indigo-600 p-1 rounded-full">
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
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    정보통신망법 위반사항
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>제28조 - 개인정보 보호조치 의무 위반</li>
                    <li>제32조 - 이용자에 대한 통지 의무 위반</li>
                    <li>
                      제73조 - 위반 시 5년 이하 징역 또는 5천만 원 이하 벌금
                    </li>
                  </ul>
                </div>

                <div className="p-5 bg-white rounded-lg border border-indigo-100">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-3 flex items-center">
                    <span className="mr-2 bg-indigo-100 text-indigo-600 p-1 rounded-full">
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
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    개인정보보호법 위반사항
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>제29조 - 안전조치의무 위반</li>
                    <li>제34조 - 유출 통지·신고 의무 위반</li>
                    <li>
                      제75조 - 위반 시 2년 이하 징역 또는 2천만 원 이하 벌금
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 법적 쟁점과 배상 규모 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  법적 쟁점과 배상 규모 전망
                </h3>

                <div className="space-y-4 text-slate-700">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">
                      고의·중과실 인정 여부
                    </h4>
                    <p>
                      SKT가 해킹 차단·암호화·접근통제 의무를 다했는지가 핵심
                      쟁점입니다.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">
                      2차 피해 현실성
                    </h4>
                    <p>
                      유심정보는 &quot;재현 가능한 인증수단&quot;이어서
                      보이스피싱·심스와핑 우려가 크다는 점이 손해배상액을
                      끌어올리고 있습니다.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">
                      선례 비교
                    </h4>
                    <p>
                      LGU+·카카오 사건(2023) 과징금 68억~151억 원, 미국 T-Mobile
                      집단소송(2023) 5.5억 달러 합의 등이 참고 사례로
                      인용됩니다.
                    </p>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-blue-900 mb-2">
                      위자료 범위
                    </h4>
                    <p>
                      국내 개인정보 유출 소송은 통상 5만∼30만 원이었으나, 이번
                      사건은 최대 100만 원+를 요구하며 상향 압박 중입니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-green-100">
                <h3 className="text-xl font-semibold text-green-800 mb-4">
                  정부·국회·규제 대응
                </h3>

                <div className="space-y-4 text-slate-700">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">
                      방송통신위원회
                    </h4>
                    <p>
                      미끼문자 모니터링, 본인확인 시스템 특별점검, 과징금·과태료
                      예고를 진행 중입니다.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">
                      개인정보보호위원회
                    </h4>
                    <p>
                      조사에 착수했으며, 과징금 규모는 &quot;LGU+ 때보다 클
                      것&quot;이라고 시사했습니다.
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-green-900 mb-2">
                      국회 과방위
                    </h4>
                    <p>
                      5월 8일 청문회에서 SKT 보안체계·보상안을 추궁했습니다.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <h4 className="font-medium text-amber-900 mb-2">
                    향후 예상 조치
                  </h4>
                  <p className="text-amber-800">
                    과징금·시정명령 및 추가적인 소비자 보호 대책 발표가
                    예상됩니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 참여 방법 안내 - 내용 확장 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5">
                소송 참여 방법 및 절차
              </h2>

              {/* 온라인 집단 대응 플랫폼 */}
              <div className="mb-6 p-5 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">
                  온라인 집단 대응 플랫폼
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-700 mb-2 flex items-center">
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
                        className="mr-2"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      SK텔레콤 개인정보 유출 집단소송 카페
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                      <li>2025년 4월 28일 기준 2만 명 돌파</li>
                      <li>가입 후 공지사항을 통해 소송 참여 절차 확인 가능</li>
                      <li>피해 사례 공유 및 법적 대응 정보 제공</li>
                      <li>
                        <a
                          href="https://cafe.naver.com/hapticw740"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          네이버 카페 방문하기
                        </a>{" "}
                        (외부 링크)
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h4 className="font-medium text-blue-700 mb-2 flex items-center">
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
                        className="mr-2"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                      SKT 유심 해킹 공동대응 공식 홈페이지
                    </h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700 text-sm">
                      <li>국회 국민동의 청원 진행(목표: 5만 명 서명)</li>
                      <li>철저한 진상규명과 피해 규모 파악 요구</li>
                      <li>
                        정부의 실효성 있는 피해 구제 및 재발 방지책 마련 촉구
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 참여 절차 */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">
                  법무법인 대건 소송 참여 절차
                </h3>

                <div className="bg-white p-5 rounded-lg border border-blue-200">
                  <ol className="relative border-l border-blue-300">
                    <li className="mb-6 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white text-blue-800 font-bold">
                        1
                      </span>
                      <h4 className="font-semibold text-blue-700">
                        기본정보 접수 (5월 18일까지)
                      </h4>
                      <p className="mt-2 text-gray-700">
                        네이버폼으로 기본정보만 접수:{" "}
                        <a
                          href="https://naver.me/x4F0hYMN"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          https://naver.me/x4F0hYMN
                        </a>
                      </p>
                    </li>
                    <li className="mb-6 ml-6">
                      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white text-blue-800 font-bold">
                        2
                      </span>
                      <h4 className="font-semibold text-blue-700">
                        필요서류 제출 (5월 19일 이후)
                      </h4>
                      <p className="mt-2 text-gray-700">
                        접수 휴대폰 번호로 발송되는 링크를 통해 필요서류 제출:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-700">
                        <li>신분증</li>
                        <li>이용계약 등록사항 증명서</li>
                        <li>기타 안내되는 서류</li>
                      </ul>
                    </li>
                  </ol>

                  <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                    <p className="text-amber-800 flex items-start">
                      <span className="text-amber-600 mr-2">⚠️</span>
                      <span>
                        <strong>중요 안내:</strong> 피해를 직접 입었는지 여부와
                        관계없이, 예방 차원에서도 소송 참여가 가능합니다.
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* 기존 내용 - 필요 서류와 비용 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3">
                    필요 서류
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>휴대폰 가입증명서</li>
                    <li>최근 3개월 통신요금 납부내역</li>
                    <li>사건 관련 안내 문자·메시지 캡처</li>
                    <li>신분증(개인정보 일부 가려서) 사본</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-800 mb-3">
                    비용·보수율 차이
                  </h3>
                  <ul className="list-disc pl-5 space-y-2 text-slate-700">
                    <li>착수금: 0원~1만 1천 원</li>
                    <li>성과보수: 0%~10%</li>
                    <li>약관·환불 조건을 반드시 확인하세요</li>
                    <li>
                      대리인 중복 신청은 소송권이 충돌할 수 있으니 한 곳만
                      선택하세요
                    </li>
                  </ul>
                </div>
              </div>

              {/* 기존 내용 - 분쟁조정 vs 본안소송 */}
              <div className="bg-gray-50 p-5 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  분쟁조정 vs 본안소송
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">
                      소비자원 분쟁조정
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>결정까지 평균 60일 내외로 빨리 끝남</li>
                      <li>배상액이 상대적으로 낮을 수 있음</li>
                      <li>절차가 간소하고 비용 부담이 없음</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-700 mb-2">
                      본안소송
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>진행 기간 1~3년 소요될 수 있음</li>
                      <li>판결 확정 시 선례 효과와 고액 배상 가능성</li>
                      <li>법원 판단에 따른 확정력이 있음</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 기존 내용 - 실질적 조언 */}
              <div className="bg-red-50 p-5 rounded-lg border border-red-100">
                <h3 className="text-lg font-semibold text-red-800 mb-3">
                  실질적 조언
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">⚠️</span>
                    <span>
                      <strong>증빙은 지금 바로 백업:</strong> 문자·앱 알림, 통화
                      내역, 유심 교체 영수증 등을 캡처해 안전한
                      저장소(클라우드·USB)에 보관하세요.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-600">⚠️</span>
                    <span>
                      <strong>피싱·스미싱 주의:</strong> &quot;무료 유심 교체&quot;
                      &quot;위약금 환불&quot; 등을 사칭한 문자 링크를 클릭하지 말고,
                      118·1833-9119(불법스팸)로 신고하세요.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 향후 일정 체크리스트 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5">
                향후 일정 체크리스트
              </h2>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg overflow-hidden">
                  <thead className="bg-blue-50 text-blue-900">
                    <tr>
                      <th className="py-3 px-4 text-left font-semibold border-b">
                        날짜
                      </th>
                      <th className="py-3 px-4 text-left font-semibold border-b">
                        예정 절차
                      </th>
                      <th className="py-3 px-4 text-left font-semibold border-b">
                        비고
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-3 px-4">5월 16일</td>
                      <td className="py-3 px-4">
                        서울중앙지법 첫 변론기일(개별 손배 소장)
                      </td>
                      <td className="py-3 px-4">하 변호사 건</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">5월 ~ 6월</td>
                      <td className="py-3 px-4">
                        소비자원 집단분쟁조정 조사·합의 권고
                      </td>
                      <td className="py-3 px-4">30만 원·위약금 면제안 심사</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">6월 말(예상)</td>
                      <td className="py-3 px-4">
                        방통위·개보위 과징금·시정명령 발표
                      </td>
                      <td className="py-3 px-4"></td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">하반기</td>
                      <td className="py-3 px-4">
                        집단소송 본안 병합 여부 결정, 1차 선고 가능
                      </td>
                      <td className="py-3 px-4">
                        사건 복잡도·증거 개시에 따라 변동
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.section>

          {/* FAQ 섹션 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5">
                자주 묻는 질문
              </h2>

              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Q: 집단소송에 참여하지 않으면 어떻게 되나요?
                  </h3>
                  <p className="text-gray-600">
                    A: 집단소송에 참여하지 않으면 향후 SK텔레콤이 집단소송
                    결과에 따라 배상금을 지급하더라도 개별적으로 배상을 받기
                    어려울 수 있습니다. 소송 결과와 무관하게 독자적으로 소송을
                    제기할 권리는 유지됩니다.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Q: 소송 비용은 어떻게 되나요?
                  </h3>
                  <p className="text-gray-600">
                    A: 로펌에 따라 다르지만 착수금은 0원~1만 1천 원, 성과보수는
                    0%~10% 정도입니다. 소송 결과에 따라 변동될 수 있으니 참여 전
                    약관과 비용 구조를 꼼꼼히 확인하세요.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Q: 소송 진행 상황은 어떻게 확인할 수 있나요?
                  </h3>
                  <p className="text-gray-600">
                    A: 참여한 로펌이나 단체에서 정기적으로 진행 상황을
                    공유합니다. 대부분 이메일이나 문자메시지로 안내하며, 네이버
                    카페 &quot;SKT 개인정보유출 집단소송&quot;에서도 최신 정보를
                    확인할 수 있습니다.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Q: 여러 로펌에 동시에 신청해도 되나요?
                  </h3>
                  <p className="text-gray-600">
                    A: 여러 로펌에 중복 신청하면 소송권이 충돌할 수 있으므로 한
                    곳만 선택하는 것이 좋습니다. 중복 신청 시 소송 진행에 혼선이
                    생길 수 있습니다.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Q: 분쟁조정과 소송 중 어느 것이 유리한가요?
                  </h3>
                  <p className="text-gray-600">
                    A: 분쟁조정은 빠른 시일 내에 결과를 볼 수 있지만 배상액이
                    낮을 수 있습니다. 소송은 시간이 오래 걸리지만 고액 배상
                    가능성이 있습니다. 개인 상황에 맞게 선택하시기 바랍니다.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 관련 링크 */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          >
            <Link
              href="/response"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-5 rounded-xl shadow-md flex items-center justify-between transition-colors"
            >
              <div>
                <span className="text-sm text-blue-100">대응 조치</span>
                <h3 className="text-xl font-semibold">SK텔레콤 대응 전략</h3>
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
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-5 rounded-xl shadow-md flex items-center justify-between transition-colors"
            >
              <div>
                <span className="text-sm text-purple-100">침해 분석</span>
                <h3 className="text-xl font-semibold">기술적 분석 내용</h3>
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
