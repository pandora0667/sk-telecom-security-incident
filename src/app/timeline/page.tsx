"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { timelineData } from '@/lib/data/timeline';
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import Script from "next/script";
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function TimelinePage() {
  // 타임라인 데이터를 날짜별로 정렬 (최신 순)
  const sortedTimelineData = React.useMemo(() => {
    return [...timelineData].sort((a, b) => {
      // 날짜 비교
      const dateA = new Date(a.date.replace(/\./g, "-"));
      const dateB = new Date(b.date.replace(/\./g, "-"));
      
      if (dateA.getTime() !== dateB.getTime()) {
        return dateB.getTime() - dateA.getTime();
      }
      
      // 동일한 날짜인 경우 시간 비교
      if (a.time && b.time) {
        const timeA = a.time.split(':').map(Number);
        const timeB = b.time.split(':').map(Number);
        
        // 시간을 비교
        if (timeA[0] !== timeB[0]) {
          return timeB[0] - timeA[0];
        }
        
        // 분을 비교
        return timeB[1] - timeA[1];
      }
      
      // 한쪽에만 시간이 있는 경우 또는 둘 다 없는 경우
      return a.time ? -1 : b.time ? 1 : 0;
    });
  }, []);

  // 카테고리별 필터링
  const categories = React.useMemo(() => {
    const cats = new Set<string>();
    timelineData.forEach(event => cats.add(event.category));
    return Array.from(cats);
  }, []);

  const [activeCategory, setActiveCategory] = React.useState<string>("all");
  
  const filteredTimelineData = React.useMemo(() => {
    if (activeCategory === "all") return sortedTimelineData;
    return sortedTimelineData.filter(event => event.category === activeCategory);
  }, [sortedTimelineData, activeCategory]);

  // 날짜별로 그룹화
  const groupedByDate = React.useMemo(() => {
    const groups: Record<string, typeof timelineData> = {};
    
    filteredTimelineData.forEach(event => {
      if (!groups[event.date]) {
        groups[event.date] = [];
      }
      groups[event.date].push(event);
    });
    
    return groups;
  }, [filteredTimelineData]);

  // 날짜 목록 (최신 순)
  const dateList = React.useMemo(() => {
    return Object.keys(groupedByDate).sort((a, b) => {
      const dateA = new Date(a.replace(/\./g, "-"));
      const dateB = new Date(b.replace(/\./g, "-"));
      return dateB.getTime() - dateA.getTime();
    });
  }, [groupedByDate]);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'hacking': return "bg-blue-100 text-blue-700 border-blue-200";
      case 'response': return "bg-emerald-100 text-emerald-700 border-emerald-200";
      case 'investigation': return "bg-purple-100 text-purple-700 border-purple-200";
      case 'customer': return "bg-orange-100 text-orange-700 border-orange-200";
      case 'government': return "bg-cyan-100 text-cyan-700 border-cyan-200";
      case 'legal': return "bg-rose-100 text-rose-700 border-rose-200";
      case 'media': return "bg-amber-100 text-amber-700 border-amber-200";
      case 'financial': return "bg-indigo-100 text-indigo-700 border-indigo-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'hacking': return "해킹/공격";
      case 'response': return "SKT 대응";
      case 'investigation': return "조사/분석";
      case 'customer': return "고객 영향";
      case 'government': return "정부 조치";
      case 'legal': return "법적 조치";
      case 'media': return "언론 보도";
      case 'financial': return "금융/경제";
      default: return category;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Script
        id="timeline-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "SK텔레콤 유심 해킹 사태 타임라인",
            "description": "SK텔레콤 유심 해킹 사태의 주요 사건과 대응 과정을 시간순으로 정리했습니다.",
            "datePublished": "2025-05-05",
            "dateModified": "2025-05-26",
            "publisher": {
              "@type": "Organization",
              "name": "SK텔레콤 유심 해킹 사태 분석",
              "url": "https://skt-hack.wisoft.io"
            },
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "item": {
                  "@type": "NewsArticle",
                  "headline": "SK텔레콤 유심 해킹 사태 최초 발견",
                  "datePublished": "2025-04-19",
                  "articleBody": "SK텔레콤에서 유심(USIM) 정보가 유출된 해킹 사태가 발견되었습니다."
                }
              },
              {
                "@type": "ListItem",
                "position": 2,
                "item": {
                  "@type": "NewsArticle",
                  "headline": "민관합동조사단 1차 조사 결과 발표",
                  "datePublished": "2025-04-29",
                  "articleBody": "공격 받은 정황이 있는 5대 서버 조사, 유심(USIM) 정보(전화번호, 가입자 식별키<IMSI> 등) 등 25종 유출, BPFDoor 계열 악성코드 4종 발견 및 피해확산 방지를 위해 기관⋅기업 공유, 단말기 고유식별번호(IMEI) 유출은 없었음"
                }
              },
              {
                "@type": "ListItem",
                "position": 3,
                "item": {
                  "@type": "NewsArticle",
                  "headline": "민관합동조사단 2차 조사 결과 발표",
                  "datePublished": "2025-05-19",
                  "articleBody": "4차에 걸친 BPFDoor 계열 악성코드 감염여부 집중 점검 결과, 현재까지 감염서버 총 23대, 악성코드 총 25종 확인 및 조치. 개인정보가 일정기간 임시로 관리되는 서버(2대)의 감염사실 확인. 단말기 고유식별번호(IMEI) 291,831건이 포함된 파일 발견."
                }
              },
              {
                "@type": "ListItem",
                "position": 4,
                "item": {
                  "@type": "NewsArticle",
                  "headline": "KT, LG유플러스 직접 점검 착수",
                  "datePublished": "2025-05-26",
                  "articleBody": "SKT 해킹 사건을 조사하고 있는 민관합동조사단이 KT와 LG유플러스의 해킹 피해 여부에 대해서도 직접 점검에 착수. 조사단은 SKT의 서버 점검에 사용한 악성코드 변종 202종에 대한 백신을 적용해 감염 여부를 조사 중."
                }
              }
            ],
            "mainEntity": {
              "@type": "Timeline",
              "name": "SK텔레콤 유심 해킹 사태 타임라인",
              "description": "2025년 4월부터 발생한 SK텔레콤 유심 해킹 사태의 주요 사건과 대응 과정을 시간순으로 정리했습니다.",
              "about": {
                "@type": "Thing",
                "name": "SK텔레콤 유심 해킹 사태",
                "description": "SK텔레콤의 유심(USIM) 정보가 해킹되어 유출된 사건"
              },
              "timeline": [
                {
                  "@type": "Event",
                  "name": "SK텔레콤 유심 해킹 사태 최초 발견",
                  "startDate": "2025-04-19",
                  "endDate": "2025-04-19",
                  "description": "SK텔레콤에서 유심(USIM) 정보가 유출된 해킹 사태가 발견되었습니다."
                },
                {
                  "@type": "Event",
                  "name": "민관합동조사단 1차 조사 결과 발표",
                  "startDate": "2025-04-29",
                  "endDate": "2025-04-29",
                  "description": "공격 받은 정황이 있는 5대 서버 조사, 유심(USIM) 정보(전화번호, 가입자 식별키<IMSI> 등) 등 25종 유출, BPFDoor 계열 악성코드 4종 발견 및 피해확산 방지를 위해 기관⋅기업 공유, 단말기 고유식별번호(IMEI) 유출은 없었음"
                },
                {
                  "@type": "Event",
                  "name": "민관합동조사단 2차 조사 결과 발표",
                  "startDate": "2025-05-19",
                  "endDate": "2025-05-19",
                  "description": "4차에 걸친 BPFDoor 계열 악성코드 감염여부 집중 점검 결과, 현재까지 감염서버 총 23대, 악성코드 총 25종 확인 및 조치. 개인정보가 일정기간 임시로 관리되는 서버(2대)의 감염사실 확인. 단말기 고유식별번호(IMEI) 291,831건이 포함된 파일 발견."
                },
                {
                  "@type": "Event",
                  "name": "KT, LG유플러스 직접 점검 착수",
                  "startDate": "2025-05-26",
                  "endDate": "2025-05-26",
                  "description": "SKT 해킹 사건을 조사하고 있는 민관합동조사단이 KT와 LG유플러스의 해킹 피해 여부에 대해서도 직접 점검에 착수. 조사단은 SKT의 서버 점검에 사용한 악성코드 변종 202종에 대한 백신을 적용해 감염 여부를 조사 중."
                }
              ]
            }
          })
        }}
      />
      
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

            <h1 className="text-4xl font-bold text-blue-900 mb-2">SK텔레콤 유심 해킹 사건 전체 타임라인</h1>
            <p className="text-lg text-muted-foreground mb-8">
              2025년 4월 18일 발생한 SK텔레콤 유심 해킹 사건의 시간순 상세 내역입니다. 현재까지의 진행 상황과 대응 조치를 확인하세요.
            </p>

            <div className="mb-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-600"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
                사건 개요
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                SK텔레콤(SKT) 유심 해킹 사건은 2025년 4월 중순 발생한 대규모 통신망 침해 사고로, 4월 18일에 처음 이상 징후가 감지되고 이후 고객 통신 인증정보 유출 사실이 확인되었습니다. 
                정부와 SKT는 즉각 대응에 나서 민관합동조사단 구성, 전국민 대상 유심 무상 교체, USIM 보호서비스 자동 적용 등 조치를 시행했으며, 5월 11일에는 유심 재설정(USIM 포맷) 설루션을 도입하여 고객 편의성을 높였습니다.
                최근 5월 26일에는 민관합동조사단이 KT와 LG유플러스에 대한 직접 점검에 착수하여 국가 통신망 전체에 대한 보안 검증이 이루어지고 있습니다.
                현재(2025.05.26 기준) 약 143만 명이 유심 교체를 완료했으며, 추가 722만 명이 예약을 마친 상태입니다.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="mb-8">
            <Tabs defaultValue="all" className="w-full">
              <div className="mb-6 overflow-x-auto scrollbar-hide pb-2 -mx-4 px-4">
                <TabsList className="flex w-max min-w-full gap-1.5">
                  <TabsTrigger 
                    value="all" 
                    onClick={() => setActiveCategory("all")}
                    className="min-w-max px-2 py-1.5 text-xs sm:text-sm sm:px-3 sm:py-1.5"
                  >
                    전체 ({timelineData.length})
                  </TabsTrigger>
                  
                  {categories.map(category => (
                    <TabsTrigger 
                      key={category} 
                      value={category}
                      onClick={() => setActiveCategory(category)}
                      className={`min-w-max px-2 py-1.5 text-xs sm:text-sm sm:px-3 sm:py-1.5 mx-0 sm:mx-0.5 ${getCategoryColor(category)}`}
                    >
                      {getCategoryLabel(category)} ({timelineData.filter(e => e.category === category).length})
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
            </Tabs>
          </motion.div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="relative mb-12"
        >
          {/* 타임라인 컨테이너 */}
          <div className="ml-0 md:ml-0 lg:ml-24 relative">
            {/* 중앙 세로선 */}
            <div className="absolute top-0 bottom-0 left-4 md:left-28 w-0.5 bg-gradient-to-b from-blue-300 via-purple-300 to-fuchsia-300 z-0"></div>
            
            {dateList.map((date) => (
              <div key={date} className="mb-14 relative">
                {/* 날짜 표시 - 모바일에서는 위에, 태블릿/데스크탑에서는 왼쪽에 */}
                <motion.div 
                  variants={fadeInUp}
                  className="bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white py-1.5 px-4 mb-6 font-semibold inline-block rounded-lg shadow-md text-sm md:text-base absolute left-12 md:left-0 lg:-left-24 top-0 md:top-0 z-20"
                >
                  {date.replace(/\./g, '-')}
                </motion.div>

                {/* 날짜별 이벤트 그룹 */}
                <div className="pl-12 md:pl-40 space-y-6 mt-16 md:mt-0">
                  {groupedByDate[date].map((event, eventIndex) => (
                    <motion.div 
                      key={`${date}-${eventIndex}`}
                      variants={fadeInUp}
                      custom={eventIndex}
                      transition={{ delay: 0.05 * eventIndex }}
                      className="relative"
                    >
                      {/* 이벤트 원형 마커 */}
                      <div className={cn(
                        "absolute -left-8 md:-left-12 top-4 w-6 h-6 rounded-full flex items-center justify-center border shadow-md z-10",
                        event.important 
                          ? "bg-gradient-to-br from-blue-500 to-fuchsia-500 border-white" 
                          : "bg-white border-slate-200"
                      )}>
                        {event.important ? (
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="m9 12 2 2 4-4"/></svg>
                        ) : (
                          <div className={cn(
                            "w-3 h-3 rounded-full",
                            event.category === 'hacking' ? "bg-blue-400" :
                            event.category === 'response' ? "bg-emerald-400" :
                            event.category === 'investigation' ? "bg-purple-400" :
                            event.category === 'customer' ? "bg-orange-400" :
                            event.category === 'government' ? "bg-cyan-400" :
                            event.category === 'legal' ? "bg-rose-400" :
                            event.category === 'media' ? "bg-amber-400" :
                            event.category === 'financial' ? "bg-indigo-400" :
                            "bg-gray-400"
                          )}/>
                        )}
                      </div>
                      
                      {/* 이벤트 카드 */}
                      <Card className={cn(
                        "border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300",
                        event.important && "border-2 border-blue-200 bg-blue-50/30"
                      )}>
                        <CardContent className="p-5 md:p-6">
                          <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-3 flex-wrap">
                              {event.time && (
                                <span className="text-xs font-mono bg-slate-100 px-2 py-0.5 rounded flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1 text-slate-500"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                                  {event.time}
                                </span>
                              )}
                              <span className={cn(
                                "text-xs px-2 py-0.5 rounded-full font-medium border",
                                getCategoryColor(event.category)
                              )}>
                                {getCategoryLabel(event.category)}
                              </span>
                              {event.important && (
                                <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white flex items-center">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-0.5"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/></svg>
                                  중요
                                </span>
                              )}
                            </div>
                            
                            <h3 className="text-lg font-bold text-slate-900 mb-3">{event.title}</h3>
                            <p className="text-slate-600 mb-3 text-sm leading-relaxed">{event.description}</p>
                            
                            {(event.source || event.link) && (
                              <div className="mt-2 pt-2 border-t border-slate-100 text-xs text-slate-500 flex flex-wrap items-center gap-3">
                                {event.source && (
                                  <span className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2Z"/><path d="M16 2v10h-4a2 2 0 0 0-2 2v8"/></svg>
                                    출처: {event.source}
                                  </span>
                                )}
                                {event.link && (
                                  <a 
                                    href={event.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline flex items-center"
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                                    관련 링크
                                  </a>
                                )}
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <div className="mt-12 border-t border-slate-200 pt-6">
          <p className="text-center text-sm text-slate-500">
            본 타임라인은 언론 보도 및 공식 발표를 기반으로 작성되었으며, 추가 정보가 확인됨에 따라 지속적으로 업데이트됩니다.
            <br />마지막 업데이트: 2025년 5월 8일
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
} 