"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

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

export default function FAQPage() {
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

            <h1 className="text-4xl font-bold text-blue-900 mb-4">자주 묻는 질문 (FAQ)</h1>
            <p className="text-lg text-muted-foreground mb-8">
              SK텔레콤 유심 해킹 사건과 관련하여 자주 묻는 질문들에 대한 답변을 제공합니다.
            </p>
          </motion.div>

          {/* 준비 중 안내 섹션 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-8 border border-blue-100 flex flex-col items-center justify-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">FAQ 콘텐츠 준비 중</h2>
              <p className="text-gray-600 max-w-md mb-8">
                SK텔레콤 유심 해킹 사건과 관련된 FAQ 내용을 준비 중입니다.
              </p>
              <div className="bg-gray-50 w-full max-w-2xl p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">예정된 FAQ 카테고리</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <li className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <span className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.49-8.49A4 4 0 0 1 18 8.95L10.5 16.5a2 2 0 0 1-3-3l7.5-7.5"/></svg>
                    </span>
                    <span className="text-gray-700">해킹 사건 개요</span>
                  </li>
                  <li className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <span className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                    </span>
                    <span className="text-gray-700">개인정보 보호 대책</span>
                  </li>
                  <li className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <span className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M21 15V6"/><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M12 12H3"/><path d="M16 6H3"/><path d="M12 18H3"/></svg>
                    </span>
                    <span className="text-gray-700">보상 및 환불 정책</span>
                  </li>
                  <li className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <span className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    </span>
                    <span className="text-gray-700">집단소송 관련 문의</span>
                  </li>
                  <li className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <span className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>
                    </span>
                    <span className="text-gray-700">유심 교체 방법</span>
                  </li>
                  <li className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                    <span className="bg-blue-100 p-2 rounded-full mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                    </span>
                    <span className="text-gray-700">추가 피해 예방법</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* 연락처 및 문의 섹션 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5">문의 및 연락처</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    SK텔레콤 고객센터
                  </h3>
                  <p className="text-gray-700 mb-2">
                    전화: SKT 사용자 114 또는 080-816-2000 (무료)
                  </p>
                  <p className="text-gray-700">
                    운영시간: 평일 9:00 ~ 18:00
                  </p>
                </div>
                
                <div className="p-5 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    유심 교체 안내
                  </h3>
                  <p className="text-gray-700 mb-2">
                    장소: 전국 T월드 매장 및 공항 로밍센터
                  </p>
                  <p className="text-gray-700 mb-2">
                    예약: T월드 홈페이지 또는 예약 시스템
                  </p>
                  <p className="text-gray-700">
                  대상: 유심보호서비스 및 SKT 가입자 무료 교체
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 관련 페이지 링크 */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
          >
            <Link href="/response" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-5 rounded-xl shadow-md flex items-center justify-between transition-colors">
              <div>
                <span className="text-sm text-blue-100">대응 조치</span>
                <h3 className="text-xl font-semibold">SK텔레콤 대응 전략</h3>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
            
            <Link href="/classaction" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-5 rounded-xl shadow-md flex items-center justify-between transition-colors">
              <div>
                <span className="text-sm text-purple-100">집단소송</span>
                <h3 className="text-xl font-semibold">집단소송 참여 안내</h3>
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