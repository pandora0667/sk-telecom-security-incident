"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/layout/HeroSection';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { timelineData } from '@/lib/data/timeline';
import { useState } from 'react';
import StockChart from '@/components/StockChart';
import Script from "next/script";

// 자연스러운 애니메이션 순서를 위한 설정
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

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Script
        id="main-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "SK텔레콤 유심 해킹 사태 종합 분석",
            "description": "2025년 4월 발생한 SK텔레콤 유심 해킹 사태의 종합 분석 사이트입니다. 해킹 과정, 대응 조치, 보상, 집단소송, 미래 보안 대책까지 모든 정보를 제공합니다.",
            "publisher": {
              "@type": "Organization",
              "name": "SK텔레콤 유심 해킹 사태 분석",
              "logo": {
                "@type": "ImageObject",
                "url": "https://skt-hack.wisoft.io/skt-logo/SK-telecom_CMYK_EN.jpg"
              }
            },
            "mainEntity": {
              "@context": "https://schema.org",
              "@type": "Event",
              "name": "SK텔레콤 유심 해킹 사태",
              "startDate": "2025-04-18",
              "performer": {
                "@type": "Organization",
                "name": "SK텔레콤"
              },
              "eventStatus": "https://schema.org/EventScheduled",
              "image": "https://skt-hack.wisoft.io/skt-logo/SK-telecom_CMYK_EN.jpg",
              "offers": {
                "@type": "Offer",
                "url": "https://www.sktelecom.com",
                "price": "0",
                "priceCurrency": "KRW",
                "availability": "https://schema.org/InStock"
              },
              "endDate": "2025-05-15",
              "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
              "location": {
                "@type": "Place",
                "name": "SK텔레콤 성수 사옥",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "서울",
                  "addressCountry": "대한민국"
                }
              },
              "description": "2025년 4월 18일 발생한 SK텔레콤의 유심(USIM) 정보 유출 사태",
              "organizer": {
                "@type": "Organization",
                "name": "SK텔레콤",
                "url": "https://www.sktelecom.com"
              }
            }
          })
        }}
      />
      
      <Header />
      <HeroSection />
      <main className="mx-auto w-full max-w-6xl px-4 py-16 flex-1">
        {/* SK텔레콤 유심 해킹 사태 */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.div 
            className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-2xl shadow-lg p-8 border border-blue-100"
            variants={fadeInUp}
          >
            <div className="flex items-center justify-center w-64 flex-shrink-0 md:self-stretch">
              <div className="relative flex items-center justify-center w-full h-full">
                <Image 
                  src="/skt-logo/SK-telecom_CMYK_EN.jpg" 
                  alt="SK텔레콤 로고" 
                  width={256}
                  height={120}
                  priority
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-1">
              <motion.h2 
                className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-fuchsia-600 bg-clip-text text-transparent"
                variants={fadeInUp}
              >
                SK텔레콤 유심 해킹 사태
              </motion.h2>
              <motion.p 
                className="text-base text-muted-foreground mb-4 leading-relaxed"
                variants={fadeInUp}
              >
                2025년 4월 18일 발생한 SK텔레콤의 유심(USIM) 정보 유출 사태는 국내 통신 역사상 최대 규모의 개인정보 침해 사례로 기록되었습니다. 
                5월 8일 기준으로 법적·정치적 파장이 확산 중이며, 해킹으로 인해 2,500만 명 이상의 가입자 정보가 유출되었고,
                BPFdoor 악성코드를 통한 고도화된 공격이 확인되었습니다.
              </motion.p>
          <motion.p 
                className="text-base text-muted-foreground leading-relaxed"
                variants={fadeInUp}
              >
                SK텔레콤의 지연된 신고와 미흡한 위기 대응은 기업 책임론을 부각시켰고, 집단소송 참여자 수가 3만 명을 넘어섰습니다.
                국회는 5월 8일 청문회를 통해 위약금 면제 및 법적 책임 강화 방안을 논의 중입니다.
              </motion.p>
            </div>
          </motion.div>
        </motion.section>

        {/* KBS 2차 조사 결과 뉴스 영상 */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          animate="show"
          variants={staggerContainer}
        >
          <motion.div 
            className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-900 flex items-center gap-2">
              <span className="bg-red-100 text-red-700 p-1.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
              </span>
              [현장영상] SKT &apos;이용자 유심 정보&apos; 2,600만 건 유출…악성코드 25종 확인
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              SKT 해킹 사태로 유출된 이용자의 유심 정보가 SKT 전체 이용자 규모를 뛰어넘는 2천6백만 여건으로 드러났습니다. 민관합동조사단의 2차 조사 결과, 유출된 유심 정보는 9.82GB 규모, 가입자 식별키(IMSI) 기준으로는 2천695만 7,749건에 이르며, 단말기 고유식별번호(IMEI) 29만 1,831건과 개인정보가 포함된 파일이 발견되었습니다.
            </p>
            <div className="aspect-video w-full overflow-hidden rounded-xl border shadow-sm">
              <iframe
                src="https://www.youtube.com/embed/30_jXxL7LIc"
                title="[현장영상] SKT '이용자 유심 정보' 2,600만 건 유출…악성코드 25종 확인"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4 text-xs text-muted-foreground text-right">
              출처: <a href="https://youtu.be/30_jXxL7LIc?si=TOkWI-klA7sv6g_V" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">KBS 뉴스 (2025.05.19)</a>
            </div>
          </motion.div>
        </motion.section>

        {/* SKT 공식 안내 영상 및 주요 정보 요약 카드 나란히 배치 (데스크탑) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* SKT 공식 안내 영상 */}
          <motion.section 
            className="lg:col-span-7"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div
              className="h-full bg-white rounded-2xl shadow-lg p-8 border border-blue-100"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-900 flex items-center gap-2">
                <span className="bg-red-100 text-red-700 p-1.5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>
                </span>
                고객 보호를 위한 추가 조치 안내
              </h2>
              <p className="text-muted-foreground mb-6">
                SK텔레콤의 공식 채널에서 제공하는 &quot;[알려드립니다] 고객 보호를 위한 추가 조치 안내&quot; 영상입니다. 유심 해킹 사태에 대한 공식 대응 및 고객 보호 조치에 대해 확인하세요.
              </p>
              <div className="aspect-video w-full overflow-hidden rounded-xl border shadow-sm">
                <iframe
                  src="https://www.youtube.com/embed/9RItjUTupJM"
                  title="[알려드립니다] 고객 보호를 위한 추가 조치 안내"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-4 text-xs text-muted-foreground text-right">
                출처: <a href="https://youtu.be/9RItjUTupJM?si=O2xWm6Mv_nWJiKN9" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SK텔레콤 공식 유튜브</a>
              </div>
            </motion.div>
          </motion.section>

          {/* 주요 정보 요약 카드 */}
          <motion.section 
            className="lg:col-span-5"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="grid grid-cols-1 gap-8 h-full"
              variants={fadeInUp}
            >
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg border border-blue-200 p-8 flex flex-col gap-2 hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-bold mb-3 text-blue-900 flex items-center gap-2">
                  <span className="bg-blue-100 text-blue-700 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 16V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z"/><path d="M6 12h12"/><path d="M8 16V8"/></svg>
                  </span>
                  핵심 침해 정보
                </h2>
                <p className="text-muted-foreground mb-3 text-base leading-relaxed">
                  1차 조사: HSS 인증 서버 3대에서 9.7GB 데이터 유출(25만 명분), 전화번호·IMSI·Ki 인증키 탈취, IMEI 유출 없음
                  <br /><br />
                  2차 조사: 감염서버 총 23대, 악성코드 25종 발견, 개인정보 서버 2대 감염 확인, IMEI 291,831건 포함 파일 발견
                </p>
                <Link href="/analysis" className="inline-flex items-center justify-center mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                  침해 분석 바로가기
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
              <div className="bg-gradient-to-br from-fuchsia-50 to-fuchsia-100 rounded-2xl shadow-lg border border-fuchsia-200 p-8 flex flex-col gap-2 hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-bold mb-3 text-fuchsia-900 flex items-center gap-2">
                  <span className="bg-fuchsia-100 text-fuchsia-700 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m14.5 9-5 5"/><path d="m9.5 9 5 5"/></svg>
                  </span>
                  핵심 대응 조치
                </h2>
                <p className="text-muted-foreground mb-3 text-base leading-relaxed">전국 가입자 대상 유심 무상 교체, 유심보호서비스 도입, KISA·경찰청 합동 대응</p>
                <Link href="/response" className="inline-flex items-center justify-center mt-auto px-4 py-2 bg-fuchsia-600 text-white rounded-lg text-sm font-medium hover:bg-fuchsia-700 transition-colors">
                  대응 조치 바로가기
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </motion.div>
          </motion.section>
        </div>

        {/* 주요 섹션 탭 형태로 표시 */}
        <motion.section 
          className="mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-lg border overflow-hidden"
            variants={fadeInUp}
          >
            <div className="grid grid-cols-4 border-b">
              {['사건 개요', '대응과 논란', '법적 파장', '향후 과제'].map((tab, idx) => (
                <div 
                  key={idx} 
                  className={`text-center py-4 font-medium cursor-pointer transition-colors hover:bg-slate-50 ${
                    idx === activeTab 
                      ? 'text-blue-700 border-b-2 border-blue-500' 
                      : 'text-slate-600'
                  }`}
                  onClick={() => setActiveTab(idx)}
                >
                  {tab}
                </div>
              ))}
            </div>

            <div className="p-8">
              {activeTab === 0 && (
                <>
                  <h3 className="text-xl font-bold text-blue-900 flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-700 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
                    </span>
                    사건 개요 및 기술적 배경
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="bg-slate-50 p-5 rounded-xl border">
                        <h4 className="font-bold text-blue-900 mb-2">유출 규모와 정보 특성</h4>
                        <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                          <li>2025년 4월 18일 SK텔레콤 네트워크 인프라센터 비정상 트래픽 탐지</li>
                          <li>음성인증장비(HSS) 3대에서 9.7GB 데이터 유출 (약 25만 명분)</li>
                          <li>전화번호(MSISDN), 국제이동통신가입자식별번호(IMSI), 유심 인증키(Ki) 유출</li>
                          <li>유출된 정보로 심스와핑(SIM swapping)이나 복제폰 제작 가능</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="bg-slate-50 p-5 rounded-xl border">
                        <h4 className="font-bold text-blue-900 mb-2">공격 기법과 보안 취약점</h4>
                        <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                          <li>BPFdoor 리눅스 기반 백도어 악성코드 사용</li>
                          <li>eBPF 기술 악용하여 방화벽 우회 및 탐지 회피</li>
                          <li>포트 노출 없이 외부 서버와 통신하는 특수 기술 활용</li>
                          <li>SK텔레콤 VPN 취약점을 통한 내부망 침투</li>
                          <li>침투 시점은 수개월 전으로 추정</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 1 && (
                <>
                  <h3 className="text-xl font-bold text-emerald-900 flex items-center gap-2 mb-4">
                    <span className="bg-emerald-100 text-emerald-700 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"/><circle cx="17" cy="7" r="5"/></svg>
                    </span>
                    대응과 논란
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="bg-slate-50 p-5 rounded-xl border">
                        <h4 className="font-bold text-emerald-900 mb-2">SK텔레콤 초기 대응</h4>
                        <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                          <li>4월 18일 해킹 발견 후 5일 뒤 개인정보위원회에 신고</li>
                          <li>유심 교체 프로그램 무상 제공 및 알림문자 발송</li>
                          <li>개인정보 유출 여부 확인 페이지 오픈</li>
                          <li>과기정통부 합동 조사반 구성 및 협력</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="bg-slate-50 p-5 rounded-xl border">
                        <h4 className="font-bold text-emerald-900 mb-2">주요 논란 사항</h4>
                        <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                          <li>신고 지연 논란 (5일 지연, 전산 장애로 최초 해명)</li>
                          <li>유출 규모 축소 의혹 (25만명→최대 2,500만명)</li>
                          <li>보안 인력 부족 및 관리 부실 지적</li>
                          <li>CEO 공식 사과 및 책임자 인사 조치 부재</li>
                          <li>개인정보 유출 피해 보상 규모 논란</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 2 && (
                <>
                  <h3 className="text-xl font-bold text-purple-900 flex items-center gap-2 mb-4">
                    <span className="bg-purple-100 text-purple-700 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8"/><path d="M13 12h8"/><path d="M13 18h8"/></svg>
                    </span>
                    법적 파장
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="bg-slate-50 p-5 rounded-xl border">
                        <h4 className="font-bold text-purple-900 mb-2">집단소송 현황</h4>
                        <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                          <li>7개 법무법인이 집단소송 진행 (참여자 3만명 초과)</li>
                          <li>개인정보보호법 제39조 근거, 1인당 50~300만원 위자료 청구</li>
                          <li>개인정보분쟁조정위원회 집단분쟁조정 신청</li>
                          <li>금감원, 보험사 협상 통해 배상 책임보험 한도 상향 논의</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="bg-slate-50 p-5 rounded-xl border">
                        <h4 className="font-bold text-purple-900 mb-2">규제기관 조치</h4>
                        <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                          <li>개인정보위원회 현장 조사 및 과징금 검토 중</li>
                          <li>과기정통부, 행정처분 및 과징금 부과 검토</li>
                          <li>방통위 이용자 보호 관련 조사 진행</li>
                          <li>국정조사 및 청문회 개최 (5월 8일)</li>
                          <li>통신법 개정안 발의 (보안 의무 강화)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 3 && (
                <>
                  <h3 className="text-xl font-bold text-orange-900 flex items-center gap-2 mb-4">
                    <span className="bg-orange-100 text-orange-700 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
                    </span>
                    향후 과제
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <div className="bg-slate-50 p-5 rounded-xl border">
                        <h4 className="font-bold text-orange-900 mb-2">기술적 과제</h4>
                        <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                          <li>Ki값 암호화 및 HSS 서버 이중화 도입</li>
                          <li>실시간 보안 모니터링 강화</li>
                          <li>API 통신 보안 기준 재정립</li>
                          <li>유심 암호화 기술 고도화 필요</li>
                          <li>생체인증 기반 인증 시스템 도입</li>
                        </ul>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="bg-slate-50 p-5 rounded-xl border">
                        <h4 className="font-bold text-orange-900 mb-2">제도적 과제</h4>
                        <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                          <li>통신사 보안 예산 증액 의무화</li>
                          <li>주기적 모의해킹 테스트 의무화</li>
                          <li>개인정보 유출 신고 제도 개선</li>
                          <li>보안 전문인력 확충 및 교육</li>
                          <li>정부-기업 사이버 보안 협력체계 강화</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="mt-5 flex justify-center">
                <Link href="/analysis" className="text-primary underline text-sm font-medium flex items-center gap-1">
                  기술적 배경 더 알아보기
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* 최근 타임라인 미리보기와 법적·사회적 영향 섹션 나란히 배치 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* 최근 타임라인 미리보기 */}
          <motion.section 
            className="lg:col-span-6 mb-16 lg:mb-0"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="flex items-center mb-4"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                <span className="bg-blue-100 text-blue-700 p-1.5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"/></svg>
                </span>
                최근 타임라인
              </h2>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 h-full"
              variants={fadeInUp}
            >
              <div className="relative pl-12 h-full">
                <motion.div 
                  className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-fuchsia-400 rounded-full"
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />
                <ul className="space-y-4">
                  {timelineData.slice(-3).reverse().map((event, idx) => (
                    <motion.li 
                      key={idx} 
                      className="relative flex items-start gap-4"
                      variants={fadeInUp}
                      custom={idx}
                      transition={{ delay: 0.1 * idx }}
                    >
                      <motion.span 
                        className={`absolute -left-7 top-0 ${idx === 0 ? 'w-7 h-7' : 'w-5 h-5'} rounded-full border-2 ${idx === 0 ? 'border-blue-500' : 'border-fuchsia-400'} bg-white shadow-md flex items-center justify-center z-10`}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2 + 0.1 * idx, duration: 0.3 }}
                      >
                        {idx === 0 ? (
                          <div className="relative flex items-center justify-center w-full h-full">
          <motion.div
                              className="absolute inset-0 rounded-full bg-blue-400 opacity-30"
                              animate={{ 
                                scale: [1, 1.8, 1],
                                opacity: [0.3, 0.1, 0.3]
                              }}
                              transition={{ 
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                              }}
                            />
                            <div className="relative z-10 flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700"><path d="m9 12 2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                            </div>
                          </div>
                        ) : (
                          <span className="w-2 h-2 bg-fuchsia-400 rounded-full" />
                        )}
                      </motion.span>
                      <div className={`flex flex-col w-full pb-3 border-b border-slate-100 ${idx === 0 ? 'bg-blue-50/40 -mx-2 px-2 py-1 rounded-lg' : ''}`}>
                        <div className="flex items-center mb-1.5">
                          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">{event.date}</span>
                          <span className={`ml-2 text-xs px-2 py-0.5 rounded-full font-bold border whitespace-nowrap ${
                            event.category === 'hacking' ? 'bg-blue-100 text-blue-700 border-blue-200' :
                            event.category === 'response' ? 'bg-emerald-100 text-emerald-700 border-emerald-200' :
                            event.category === 'investigation' ? 'bg-purple-100 text-purple-700 border-purple-200' :
                            event.category === 'customer' ? 'bg-orange-100 text-orange-700 border-orange-200' :
                            'bg-fuchsia-100 text-fuchsia-700 border-fuchsia-200'}
                          `}>{event.category}</span>
                          {idx === 0 && (
                            <span className="ml-2 text-xs px-2 py-0.5 rounded-full font-bold bg-blue-500 text-white whitespace-nowrap flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                              진행중
                            </span>
                          )}
                        </div>
                        <div className="flex flex-col mt-1">
                          <span className="font-bold text-base text-blue-900">{event.title}</span>
                          <span className="text-sm text-slate-600 mt-0.5">{event.description}</span>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <div className="mt-6 flex justify-center">
                  <Link 
                    href="/timeline" 
                    className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-colors"
                  >
                    <span>전체 타임라인 보기</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* 모바일 환경에서만 보이는 구분선 */}
          <div className="col-span-1 lg:hidden mb-8 w-full">
            <hr className="border-t border-slate-200" />
          </div>

          {/* 법적·사회적 영향 */}
          <motion.section 
            className="lg:col-span-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div 
              className="flex items-center mb-4"
              variants={fadeInUp}
            >
              <h2 className="text-2xl font-bold text-purple-900 flex items-center gap-2">
                <span className="bg-purple-100 text-purple-700 p-1.5 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><path d="M9 9h6"/><path d="M9 12h6"/><path d="M9 15h4"/></svg>
                </span>
                법적·사회적 영향 요약
              </h2>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 h-full"
              variants={fadeInUp}
            >
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-purple-100 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-700"><path d="M12 10V2"/><path d="m7.5 5.5 9 9"/><path d="M2 12h8"/><path d="m5.5 16.5 9-9"/><path d="M12 22v-8"/><path d="m16.5 18.5-9-9"/><path d="M22 12h-8"/><path d="m18.5 7.5-9 9"/></svg>
                    </div>
                    <h3 className="text-lg font-bold text-purple-900">집단소송 현황</h3>
                  </div>
                  <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground text-sm flex-1">
                    <li>7개 법무법인이 집단소송 진행 (참여자 3만명 초과)</li>
                    <li>개인정보보호법 제39조 근거, 1인당 50~300만원 위자료 청구</li>
                    <li>SK텔레콤 손해배상 책임보험 한도 10억원 불과</li>
                    <li>금융감독원, 보험사 협상 통해 한도 상향 검토중</li>
                  </ul>
                  <div className="mt-4 pt-3 border-t">
                    <Link href="/response#legal" className="text-purple-700 text-sm font-medium hover:underline flex items-center gap-1">
                      집단소송 상세정보
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-700"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/></svg>
                    </div>
                    <h3 className="text-lg font-bold text-orange-900">향후 과제</h3>
                  </div>
                  <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground text-sm flex-1">
                    <li>통신사 보안 예산 증액 (SKT 600억→KT 1,218억원 수준으로)</li>
                    <li>과기정통부, 5월 15일까지 전 통신사 보안 인프라 특별점검</li>
                    <li>HSS 서버 이중화 및 실시간 모니터링 시스템 도입</li>
                    <li>2026년 모바일 신분증 연계 통신 인프라 보안 강화</li>
                    <li>생체인증 또는 블록체인 기반 솔루션 도입 검토</li>
                  </ul>
                  <div className="mt-4 pt-3 border-t">
                    <Link href="/analysis#future" className="text-orange-700 text-sm font-medium hover:underline flex items-center gap-1">
                      향후 과제 상세내용
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </main>
      
      {/* 사회적 반응 섹션 */}
      <motion.section 
        className="w-full bg-gradient-to-r from-slate-50 to-indigo-50 py-12 border-y border-slate-200 mb-0"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="mx-auto w-full max-w-6xl px-4">
          <motion.div 
            className="text-center mb-8"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-indigo-900 mb-3">사회적 반응</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              SK텔레콤 유심 해킹 사태에 대한 국내외 언론, 보안 전문가들의 분석 및 일반 대중들의 반응을 확인하세요. 이를 통해 사건의 전체적인 맥락을 이해할 수 있습니다.
            </p>
          </motion.div>

          <motion.div
            className="flex justify-center"
            variants={fadeInUp}
          >
            <Link 
              href="/press" 
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-base font-medium shadow-md transition-colors"
            >
              사회적 반응 보기
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </motion.div>
                </div>
      </motion.section>
      
      {/* 주식 시장 반응 섹션 */}
      <motion.section 
        className="w-full bg-slate-50 py-12 border-b border-slate-200"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="mx-auto w-full max-w-6xl px-4">
          <motion.div 
            className="text-center mb-8"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-3">시장 반응</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              SK텔레콤 유심 해킹 사태가 주식 시장에 미친 영향을 확인하세요.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="max-w-xl mx-auto"
          >
            <StockChart />
          </motion.div>
        </div>
      </motion.section>
      
      {/* 참고 출처 섹션 */}
      <section 
        className="w-full bg-slate-50 border-t border-slate-200 py-16"
      >
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-3">참고 출처</h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              본 웹사이트는 아래 출처의 신뢰성 있는 자료를 바탕으로 제작되었습니다. 더 자세한 정보는 각 링크를 참고하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <a 
              href="https://lastcard.tistory.com/722" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col h-full group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                </span>
                <span className="text-sm text-slate-500">lastcard.tistory.com</span>
              </div>
              <h3 className="font-medium text-slate-800 mb-2 group-hover:text-blue-600">SK텔레콤 해킹사태: 유심 정보 유출 사고</h3>
              <p className="text-xs text-slate-600 flex-1 leading-relaxed">SK텔레콤의 유심 해킹 사고에 대한 상세 분석 및 시간순 진행 상황을 정리한 자료입니다.</p>
            </a>
            
            <a 
              href="https://hg2lee.tistory.com/entry/2025-SKT-%ED%95%B4%ED%82%B9-%EC%82%AC%EA%B1%B4-%EC%A0%95%EB%A6%AC-Feat-BPFdoor-%EC%95%85%EC%84%B1%EC%BD%94%EB%93%9C" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col h-full group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-purple-100 text-purple-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 20h-8a4 4 0 1 1 0-8h9a3 3 0 1 0 0-6h-9"/></svg>
                </span>
                <span className="text-sm text-slate-500">hg2lee.tistory.com</span>
              </div>
              <h3 className="font-medium text-slate-800 mb-2 group-hover:text-purple-600">2025 SKT 해킹 사건 정리: BPFdoor 악성코드 분석</h3>
              <p className="text-xs text-slate-600 flex-1 leading-relaxed">BPFdoor 악성코드를 중심으로 SK텔레콤 해킹 사건의 기술적 분석과 세부 정보를 다룬 자료입니다.</p>
            </a>
            
            <a 
              href="https://blog.plura.io/ko/column/leak_of_skt_usim/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col h-full group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-emerald-100 text-emerald-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Z"/><path d="M16 2v10h-4a2 2 0 0 0-2 2v8"/></svg>
                </span>
                <span className="text-sm text-slate-500">blog.plura.io</span>
              </div>
              <h3 className="font-medium text-slate-800 mb-2 group-hover:text-emerald-600">SKT 유심 해킹 사건 총정리: 원인, 피해, 대응</h3>
              <p className="text-xs text-slate-600 flex-1 leading-relaxed">유출 원인부터 피해 규모, 구체적인 대응 방법까지 SKT 유심 해킹 사건의 전체적인 내용을 정리한 자료입니다.</p>
            </a>
            
            <a 
              href="https://www.koreadaily.com/article/20250429012211977" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col h-full group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-amber-100 text-amber-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2v3m2 5H2m10 0h10M5 9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2z"/></svg>
                </span>
                <span className="text-sm text-slate-500">koreadaily.com</span>
              </div>
              <h3 className="font-medium text-slate-800 mb-2 group-hover:text-amber-600">SKT 해킹 1차 조사 결과: 유심 복제 가능 정보 유출</h3>
              <p className="text-xs text-slate-600 flex-1 leading-relaxed">민관합동조사단이 발표한 SK텔레콤 해킹 사건의 1차 조사 결과와 유출된 정보 유형에 대한 보도입니다.</p>
            </a>
            
            <a 
              href="https://www.kyeonggi.com/article/20250506580117" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col h-full group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-100 text-red-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 10h5v4h-5"/><path d="m2 8 7.25 10 7.25-10"/></svg>
                </span>
                <span className="text-sm text-slate-500">kyeonggi.com</span>
              </div>
              <h3 className="font-medium text-slate-800 mb-2 group-hover:text-red-600">SKT 유심 사태 핵심 정리: 해킹은 확인, 피해는 미확인</h3>
              <p className="text-xs text-slate-600 flex-1 leading-relaxed">SK텔레콤의 유심 해킹이 확인되었으나 실제 피해 사례는 확인되지 않은 상황에 대한 분석 보도입니다.</p>
            </a>
            
            <a 
              href="https://www.yna.co.kr/view/AKR20250506021951017" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col h-full group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                </span>
                <span className="text-sm text-slate-500">yna.co.kr</span>
              </div>
              <h3 className="font-medium text-slate-800 mb-2 group-hover:text-blue-600">민관조사단: 추가 악성코드 8종 분석 중</h3>
              <p className="text-xs text-slate-600 flex-1 leading-relaxed">민관합동조사단이 추가로 발견한 8종의 악성코드에 대한 위치와 경로 분석 상황을 다룬 보도자료입니다.</p>
            </a>
            
            <a 
              href="https://www.ahnlab.com/ko/contents/content-center/35827" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col h-full group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-indigo-100 text-indigo-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                </span>
                <span className="text-sm text-slate-500">ahnlab.com</span>
              </div>
              <h3 className="font-medium text-slate-800 mb-2 group-hover:text-indigo-600">BPFDoor 악성코드 분석 및 안랩 대응 현황</h3>
              <p className="text-xs text-slate-600 flex-1 leading-relaxed">SKT 해킹에 사용된 BPFDoor 악성코드의 기술적 분석과 보안업체 안랩의 대응 현황을 정리한 자료입니다.</p>
            </a>
            
            <a 
              href="https://blog.plura.io/ko/respond/bpfdoor/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col h-full group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-cyan-100 text-cyan-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 14c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6Z"/><path d="m22 22-10-2-10 2V11c0-.35.07-.68.18-1"/><path d="M4 15v2"/><path d="M12 12v5"/><path d="M20 15v2"/></svg>
                </span>
                <span className="text-sm text-slate-500">blog.plura.io</span>
              </div>
              <h3 className="font-medium text-slate-800 mb-2 group-hover:text-cyan-600">SKT 해킹 악성코드 BPFDoor: 대응 전략</h3>
              <p className="text-xs text-slate-600 flex-1 leading-relaxed">BPFDoor 악성코드에 대한 보안 전문가들의 분석과 대응 전략을 상세히 소개한 기술 자료입니다.</p>
            </a>
            
            <a 
              href="https://www.khan.co.kr/article/202504301850001" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col h-full group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-rose-100 text-rose-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18.06 7.94a8.15 8.15 0 0 1 1.85 5A8.98 8.98 0 0 1 12 21a8.98 8.98 0 0 1-7.91-8.06A8.15 8.15 0 0 1 6 7.94"/><path d="m7 2 5 5-5 5"/></svg>
                </span>
                <span className="text-sm text-slate-500">khan.co.kr</span>
              </div>
              <h3 className="font-medium text-slate-800 mb-2 group-hover:text-rose-600">SKT 유심 해킹: VPN 취약점 노린 해커그룹 가능성</h3>
              <p className="text-xs text-slate-600 flex-1 leading-relaxed">이반티 VPN 취약점을 이용한 중국 해커그룹 소행 가능성과 APT 공격 특성에 대한 전문가 분석입니다.</p>
            </a>
            
            <a 
              href="https://it.donga.com/106870/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col h-full group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-orange-100 text-orange-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 8a3 3 0 0 0-3-3h-5V4a2 2 0 0 0-4 0v1H5a3 3 0 0 0-3 3v2h6.5"/><path d="M2 14h6.5"/><path d="M8.5 8v13"/><path d="M15.5 8v13"/><path d="M22 14h-6.5"/></svg>
                </span>
                <span className="text-sm text-slate-500">it.donga.com</span>
              </div>
              <h3 className="font-medium text-slate-800 mb-2 group-hover:text-orange-600">SKT 해킹사고: 유심 무료 교체 및 이심 전환 안내</h3>
              <p className="text-xs text-slate-600 flex-1 leading-relaxed">SK텔레콤의 유심 무료 교체 결정과 향후 이심(eSIM) 전환 계획에 대한 상세 정보를 다룬 기사입니다.</p>
            </a>
            
            <a 
              href="https://www.reuters.com/sustainability/boards-policy-regulation/sk-telecom-shares-plunge-after-data-breach-due-cyberattack-2025-04-28/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col h-full group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-100 text-green-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18h12v4H2z"/><path d="M14 18h8v4h-8z"/><path d="M22 8v10h-8V4h4"/><path d="M18 4V2"/><path d="M14 8h.01"/><rect width="4" height="6" x="6" y="10"/></svg>
                </span>
                <span className="text-sm text-slate-500">reuters.com</span>
              </div>
              <h3 className="font-medium text-slate-800 mb-2 group-hover:text-green-600">SK텔레콤 데이터 유출로 인한 주가 하락</h3>
              <p className="text-xs text-slate-600 flex-1 leading-relaxed">SK텔레콤의 사이버공격으로 인한 데이터 유출 이후 주가 급락과 금융시장의 반응을 분석한 로이터 통신의 보도입니다.</p>
            </a>
            
            <a 
              href="https://lawnethicsintech.medium.com/lessons-from-the-skt-hack-a-wake-up-call-for-digital-security-and-corporate-responsibility-9aa90b3ced41" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white p-4 rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all flex flex-col h-full group"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-fuchsia-100 text-fuchsia-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
                </span>
                <span className="text-sm text-slate-500">medium.com</span>
              </div>
              <h3 className="font-medium text-slate-800 mb-2 group-hover:text-fuchsia-600">SKT 해킹 사례의 교훈: 디지털 보안과 기업 책임</h3>
              <p className="text-xs text-slate-600 flex-1 leading-relaxed">SK텔레콤 해킹 사례를 통해 디지털 보안의 중요성과 기업의 사회적 책임에 대한 교훈을 분석한 칼럼입니다.</p>
            </a>
          </div>
      </div>
      </section>
      
      <Footer />
    </div>
  );
}
