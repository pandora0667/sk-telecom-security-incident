"use client";

import { motion } from "framer-motion";
import Link from 'next/link';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useState } from 'react';
import Script from "next/script";
import { staggerContainer, fadeInUp } from '@/lib/animations';

// FAQ 아이템 컴포넌트
interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-blue-100 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-left bg-white hover:bg-blue-50 flex justify-between items-center transition-colors"
      >
        <span className="font-medium text-blue-900">{question}</span>
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
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 bg-blue-50 text-slate-700">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "SK텔레콤 유심 해킹 사건은 무엇이며 언제 발생했나요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SK텔레콤의 가입자 인증 서버(HSS)가 해킹을 당해 2천 5백만 명의 가입자 유심 정보가 유출된 사건입니다. 해킹은 2025년 4월 18일에 발생했으며, 성수 사옥에 설치된 가입자 인증 서버(HSS) 5대 중 3대에서 데이터가 유출되었습니다."
                }
              },
              {
                "@type": "Question",
                "name": "SKT는 해킹 사실을 언제 파악했고 고객에게는 언제 알렸나요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SKT는 4월 18일 저녁 6시 9분에 네트워크 인프라센터에서 트래픽 이상 징후를 처음으로 감지했고, 같은 날 밤 11시 20분에 실제 악성코드를 발견했습니다. 4월 19일 밤 11시 40분에 유심 정보 유출 사실을 내부적으로 확정했고, 4월 20일 오후 3시 30분에 내부 결정권자에게 보고한 후 KISA에 신고했습니다. 고객에게는 4월 22일 공식 홈페이지 공지 및 언론 발표를 통해 사이버 침해 사고 발생 사실을 인정하고 사과했습니다."
                }
              },
              {
                "@type": "Question",
                "name": "이번 해킹으로 몇 명의 고객 정보가 유출된 것으로 알려졌나요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SKT는 약 2300만명의 가입자를 보유한 통신사로, SK텔레콤 망을 사용하는 알뜰폰 가입자를 포함해 2500만 명의 유심 정보가 유출된 것으로 파악되고 있습니다."
                }
              },
              {
                "@type": "Question",
                "name": "유출된 정보에는 어떤 내용이 포함되었나요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "유출된 항목은 이용자의 △전화번호(MSISDN) △국제이동통신가입자식별번호(IMSI) △가입자 인증키(Ki) 등 유심을 개통하거나 인증할 때 필요한 핵심 정보들입니다. 과학기술정보통신부에 따르면 가입자 전화번호, 가입자식별키(IMSI) 등 유심 복제에 활용될 수 있는 4종과 유심 정보 처리 등에 필요한 관리용 정보 21종이 유출됐다고 합니다. 다만 단말기 고유식별번호(IMEI) 유출은 없었으며, 이름, 주민등록번호 등 개인식별정보도 유출되지 않았다고 합니다."
                }
              },
              {
                "@type": "Question",
                "name": "유출된 유심 정보로 인해 어떤 피해가 발생할 수 있나요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "유출된 유심 정보를 이용해 '심 스와핑'이라는 공격이 가능합니다. 심 스와핑은 공격자가 유출된 정보를 이용해 피해자의 전화번호와 동일하게 작동하는 복제폰을 만드는 수법입니다. 이를 통해 피해자의 문자나 전화를 가로챌 수 있고, 휴대폰 번호 인증을 사용하는 서비스(금융, SNS, 게임 등)에 접근하여 금전 탈취나 개인 정보 유출, 도용 등의 2차 피해를 발생시킬 수 있습니다. 또한 유출된 정보는 보이스피싱이나 스미싱 등 사기에 악용될 가능성도 있습니다."
                }
              },
              {
                "@type": "Question", 
                "name": "SKT는 해킹 후 고객 정보 보호를 위해 어떤 보안 대책을 시행하고 있나요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "SKT는 고객 정보 보호를 위해 유심보호서비스 무료 제공 및 자동 가입(5월 7일 기준, 2411만명 가입 완료), 유심 무료 교체 서비스 시행(4월 28일부터), 비정상인증 차단 시스템(FDS) 강화, 5월 12일부터 해외 로밍 이용자도 유심보호서비스 적용, '유심 재설정' 솔루션 제공(유심 내 인증 정보 중 일부를 소프트웨어로 변경) 등의 대책을 시행하고 있습니다."
                }
              },
              {
                "@type": "Question",
                "name": "해킹 사고로 불안해 통신사를 바꾸고 싶은데, 위약금 없이 해지할 수 있나요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "현재 과학기술정보통신부와 SK텔레콤은 위약금 면제 여부에 대해 최종 결정을 내리지 않았습니다. 유상임 과학기술정보통신부 장관은 5월 9일 정부서울청사에서 열린 월례 브리핑에서 '로펌에 의뢰한 법률 검토 결과를 요약해 보고받았지만, 아직 명확하지 않다. 민관 합동 조사단의 결과를 봐야 판단할 수 있다'고 말했습니다. 민관 합동 조사단의 결과는 6월 말쯤에 나올 것으로 예상됩니다."
                }
              },
              {
                "@type": "Question",
                "name": "집단소송이나 손해배상 청구 소송에 참여하려면 어떻게 해야 하나요?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "현재 SK텔레콤 해킹 사태와 관련해 집단소송을 진행하거나 준비 중인 로펌은 대륜, 로고스, 로집사, 로피드, 거북이, 노바 등 10여 곳이 있습니다. 소송에 참여하려면 이들 로펌의 홈페이지나 소송 참여 접수 페이지를 통해 신청할 수 있습니다. 소송 참여 시 필요한 정보와 서류는 각 로펌마다 안내하고 있으니 참고하시기 바랍니다."
                }
              }
            ],
            "datePublished": "2025-05-15",
            "dateModified": "2025-05-15",
            "author": {
              "@type": "Organization",
              "name": "SK텔레콤 유심 해킹 사태 분석팀",
              "url": "https://skt-hack.wisoft.io"
            },
            "publisher": {
              "@type": "Organization",
              "name": "SK텔레콤 유심 해킹 사태 분석",
              "logo": {
                "@type": "ImageObject",
                "url": "https://skt-hack.wisoft.io/skt-logo/SK-telecom_CMYK_EN.jpg",
                "width": "256",
                "height": "120"
              }
            },
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://skt-hack.wisoft.io",
              "name": "SK텔레콤 유심 해킹 사태 분석"
            },
            "inLanguage": "ko-KR",
            "headline": "SK텔레콤 유심 해킹 사태 자주 묻는 질문(FAQ)",
            "description": "SK텔레콤 유심 해킹 사건과 관련하여 자주 묻는 질문들에 대한 답변을 제공합니다.",
            "keywords": "SK텔레콤, 유심 해킹, FAQ, 보안 대책, 유심 교체, 집단소송, 배상 청구",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://skt-hack.wisoft.io/faq"
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

            <h1 className="text-4xl font-bold text-blue-900 mb-4">자주 묻는 질문 (FAQ)</h1>
            <p className="text-lg text-muted-foreground mb-8">
              SK텔레콤 유심 해킹 사건과 관련하여 자주 묻는 질문들에 대한 답변을 제공합니다.
            </p>
          </motion.div>

          {/* 해킹 사건 개요 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                <span className="bg-orange-100 text-orange-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.49-8.49A4 4 0 0 1 18 8.95L10.5 16.5a2 2 0 0 1-3-3l7.5-7.5"/></svg>
                </span>
                해킹 사건 개요
              </h2>
              
              <div className="space-y-2">
                <FAQItem 
                  question="SK텔레콤 유심 해킹 사건은 무엇이며 언제 발생했나요?"
                  answer={
                    <p>
                      SK텔레콤의 가입자 인증 서버(HSS)가 해킹을 당해 2천 5백만 명의 가입자 유심 정보가 유출된 사건입니다. 
                      해킹은 2025년 4월 18일에 발생했으며, 성수 사옥에 설치된 가입자 인증 서버(HSS) 5대 중 3대에서 데이터가 유출되었습니다.
                    </p>
                  }
                />
                
                <FAQItem 
                  question="SKT는 해킹 사실을 언제 파악했고 고객에게는 언제 알렸나요?"
                  answer={
                    <p>
                      SKT는 4월 18일 저녁 6시 9분에 네트워크 인프라센터에서 트래픽 이상 징후를 처음으로 감지했고, 
                      같은 날 밤 11시 20분에 실제 악성코드를 발견했습니다. 4월 19일 밤 11시 40분에 유심 정보 유출 사실을 
                      내부적으로 확정했고, 4월 20일 오후 3시 30분에 내부 결정권자에게 보고한 후 KISA에 신고했습니다. 
                      고객에게는 4월 22일 공식 홈페이지 공지 및 언론 발표를 통해 사이버 침해 사고 발생 사실을 인정하고 사과했습니다.
                    </p>
                  }
                />
                
                <FAQItem 
                  question="이번 해킹으로 몇 명의 고객 정보가 유출된 것으로 알려졌나요?"
                  answer={
                    <p>
                      SKT는 약 2300만명의 가입자를 보유한 통신사로, SK텔레콤 망을 사용하는 알뜰폰 가입자를 포함해 
                      2500만 명의 유심 정보가 유출된 것으로 파악되고 있습니다.
                    </p>
                  }
                />
                
                <FAQItem 
                  question="유출된 정보에는 어떤 내용이 포함되었나요?"
                  answer={
                    <p>
                      유출된 항목은 이용자의 △전화번호(MSISDN) △국제이동통신가입자식별번호(IMSI) △가입자 인증키(Ki) 등 
                      유심을 개통하거나 인증할 때 필요한 핵심 정보들입니다. 과학기술정보통신부에 따르면 가입자 전화번호, 
                      가입자식별키(IMSI) 등 유심 복제에 활용될 수 있는 4종과 유심 정보 처리 등에 필요한 관리용 정보 21종이 
                      유출됐다고 합니다. 다만 단말기 고유식별번호(IMEI) 유출은 없었으며, 이름, 주민등록번호 등 개인식별정보도 
                      유출되지 않았다고 합니다.
                    </p>
                  }
                />
                
                <FAQItem 
                  question="유출된 유심 정보로 인해 어떤 피해가 발생할 수 있나요?"
                  answer={
                    <p>
                      유출된 유심 정보를 이용해 &apos;심 스와핑&apos;이라는 공격이 가능합니다. 심 스와핑은 공격자가 유출된 정보를 이용해 
                      피해자의 전화번호와 동일하게 작동하는 복제폰을 만드는 수법입니다. 이를 통해 피해자의 문자나 전화를 가로챌 수 있고, 
                      휴대폰 번호 인증을 사용하는 서비스(금융, SNS, 게임 등)에 접근하여 금전 탈취나 개인 정보 유출, 도용 등의 
                      2차 피해를 발생시킬 수 있습니다. 또한 유출된 정보는 보이스피싱이나 스미싱 등 사기에 악용될 가능성도 있습니다.
                    </p>
                  }
                />
              </div>
            </div>
          </motion.section>

          {/* 개인정보 보호 대책 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                <span className="bg-green-100 text-green-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
                </span>
                개인정보 보호 대책
              </h2>
              
              <div className="space-y-2">
                <FAQItem 
                  question="SKT는 해킹 후 고객 정보 보호를 위해 어떤 보안 대책을 시행하고 있나요?"
                  answer={
                    <div>
                      <p className="mb-3">SKT는 고객 정보 보호를 위해 다음과 같은 대책을 시행하고 있습니다:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>유심보호서비스 무료 제공 및 자동 가입(5월 7일 기준, 2411만명 가입 완료)</li>
                        <li>유심 무료 교체 서비스 시행(4월 28일부터)</li>
                        <li>비정상인증 차단 시스템(FDS) 강화</li>
                        <li>5월 12일부터 해외 로밍 이용자도 유심보호서비스 적용</li>
                        <li>&apos;유심 재설정&apos; 솔루션 제공(유심 내 인증 정보 중 일부를 소프트웨어로 변경)</li>
                      </ul>
                    </div>
                  }
                />
                
                <FAQItem 
                  question="정부 및 관계 기관에서는 이번 유출 사고와 관련해 어떤 조치를 취하고 있나요?"
                  answer={
                    <div>
                      <p className="mb-3">정부 및 관계 기관의 조치는 다음과 같습니다:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>과학기술정보통신부가 비상대책반을 꾸려 피해 조사 시작</li>
                        <li>민관 합동 조사단을 구성하여 해킹 원인 분석 및 재발 방지책 마련 중</li>
                        <li>국가정보원이 정부 19개 부처와 전국 17개 광역자치단체, 교육청 등에 SKT 유심을 사용하는 업무용 단말·기기에 대한 안전조치 공문 발송</li>
                        <li>국방부는 전군 간부에 SKT 유심을 사용하는 경우 교체 지시</li>
                        <li>한국인터넷진흥원(KISA)은 해킹 사고를 악용한 피싱 문자 주의 보안 공지 배포</li>
                      </ul>
                    </div>
                  }
                />
                
                <FAQItem 
                  question="SKT의 유심보호서비스는 어떤 서비스이고, 어떻게 이용자의 정보를 보호하나요?"
                  answer={
                    <p>
                      유심보호서비스는 고객의 단말 정보와 유심 정보를 하나로 묶어 관리해 타인이 고객의 유심 정보를 탈취해 
                      다른 기기에서 서비스에 접속하는 것을 차단하는 서비스입니다. 현재 사용 중인 휴대폰과 유심 정보를 1대 1로 
                      짝을 지어 관리하므로, 내 정보가 담긴 유심이 다른 폰에 꽂히면 통화, 데이터, 문자 모두 즉각 차단됩니다. 
                      즉, 불법 복제로 인한 무단 유심 기변을 완벽하게 차단하는 원리입니다. 5월 12일부터는 해외 로밍 중에도 
                      이 서비스를 사용할 수 있도록 업그레이드되었습니다.
                    </p>
                  }
                />
              </div>
            </div>
          </motion.section>

          {/* 보상 및 환불 정책 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                <span className="bg-purple-100 text-purple-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15V6"/><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M12 12H3"/><path d="M16 6H3"/><path d="M12 18H3"/></svg>
                </span>
                보상 및 환불 정책
              </h2>
              
              <div className="space-y-2">
                <FAQItem 
                  question="해킹 사고로 불안해 통신사를 바꾸고 싶은데, 위약금 없이 해지할 수 있나요?"
                  answer={
                    <p>
                      현재 과학기술정보통신부와 SK텔레콤은 위약금 면제 여부에 대해 최종 결정을 내리지 않았습니다. 
                      유상임 과학기술정보통신부 장관은 5월 9일 정부서울청사에서 열린 월례 브리핑에서 &ldquo;로펌에 의뢰한 법률 검토 결과를 
                      요약해 보고받았지만, 아직 명확하지 않다. 민관 합동 조사단의 결과를 봐야 판단할 수 있다&rdquo;고 말했습니다. 
                      민관 합동 조사단의 결과는 6월 말쯤에 나올 것으로 예상됩니다.
                    </p>
                  }
                />
                
                <FAQItem 
                  question="이번 사고에 대해 SKT가 공식 보상이나 배상 계획을 발표한 것이 있나요?"
                  answer={
                    <p>
                      SK텔레콤은 해킹에 따른 피해가 생겼을 경우 100% 책임지겠다는 입장을 내놓았습니다. 
                      그러나 구체적인 보상 계획은 민관 합동 조사단의 조사 결과가 나온 후인, 6월 말경에 결정될 것으로 보입니다. 
                      유상임 과학기술정보통신부 장관은 SK텔레콤이 고객의 정신적 피해를 보상한다는 측면에서 
                      &ldquo;일정 부분 생각하지 않을까 한다&rdquo;고 의견을 밝혔습니다.
                    </p>
                  }
                />
                
                <FAQItem 
                  question="유심 정보 유출로 금전적 피해가 생긴다면 SKT에서 배상해주나요?"
                  answer={
                    <p>
                      SK텔레콤은 해킹으로 인한 2차 피해가 발생할 경우 100% 책임지겠다고 밝혔습니다. 
                      법률적으로는 SK텔레콤 서버 해킹으로 2차 피해를 본 가입자는 300만원 이하의 손해배상을 청구하거나, 
                      SKT 측의 고의 또는 중대한 과실로 인한 개인정보 유출이라면 손해액의 5배를 넘지 않는 범위에서 
                      징벌적 손해배상을 청구할 수 있습니다. 다만, 해킹 사고와 2차 피해 간의 연관성을 입증하기 위해 
                      최소한의 증거 수집은 필요할 것으로 보입니다.
                    </p>
                  }
                />
                
                <FAQItem 
                  question="해킹 직후 자비로 유심을 교체한 경우, 그 비용을 환불받을 수 있나요?"
                  answer={
                    <p>
                      네, 4월 18일 밤 12시 기준 SK텔레콤을 사용 중이었고, 4월 19~27일 사이에 자비로 유심 또는 이심을 교체했다면 
                      별도 신청 없이 통신요금에서 자동 환급을 받을 수 있습니다.
                    </p>
                  }
                />
              </div>
            </div>
          </motion.section>

          {/* 집단소송 관련 문의 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                <span className="bg-indigo-100 text-indigo-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </span>
                집단소송 관련 문의
              </h2>
              
              <div className="space-y-2">
                <FAQItem 
                  question="집단소송이나 손해배상 청구 소송에 참여하려면 어떻게 해야 하나요?"
                  answer={
                    <p>
                      현재 SK텔레콤 해킹 사태와 관련해 집단소송을 진행하거나 준비 중인 로펌은 대륜, 로고스, 로집사, 로피드, 거북이, 노바 등 10여 곳이 있습니다. 소송에 참여하려면 이들 로펌의 홈페이지나 소송 참여 접수 페이지를 통해 신청할 수 있습니다. 소송 참여 시 필요한 정보와 서류는 각 로펌마다 안내하고 있으니 참고하시기 바랍니다.
                    </p>
                  }
                />
                
                <FAQItem 
                  question="현재 진행 중이거나 준비되고 있는 법적 대응에는 어떤 것들이 있나요?"
                  answer={
                    <p>
                      5월 8일 기준으로 10여 개의 로펌이 SK텔레콤을 상대로 한 집단소송을 진행하거나 준비 중입니다. 
                      전체 참여자는 3만 4000명에 달하며, 소송 참여 인원이 많은 곳은 노바(1만 6760명), 대륜(9136명) 등입니다. 
                      이들 로펌은 정보 유출에 대한 SKT의 고의 또는 중대한 과실 여부, 안전의무 조치 이행 여부, 
                      사후 피해 회복을 위한 대응 등을 주요 쟁점으로 다루고 있습니다.
                    </p>
                  }
                />
                
                <FAQItem 
                  question="집단소송에서 요구하는 배상액은 어느 정도인가요?"
                  answer={
                    <p>
                      소송을 진행하는 로펌들이 청구했거나 청구 예정인 배상 금액은 개인당 30만~100만원 선입니다. 
                      이는 복제 가능한 유심 정보 유출이 사안의 심각성이 중대하고 피해자가 많아 적극 대응할 필요가 있다는 
                      판단에 따른 것입니다.
                    </p>
                  }
                />
                
                <FAQItem 
                  question="소송을 통해 실질적인 배상을 받으려면 얼마나 시간이 걸릴 것으로 예상되나요?"
                  answer={
                    <p>
                      정확한 소송 기간은 예측하기 어렵습니다. 다만, 과거 옥션 개인정보 유출 사건(2008년), 
                      KT 개인정보 유출 사건(2012년), 인터파크 개인정보 유출 사건(2016년) 등의 사례를 볼 때, 
                      법원의 판결까지는 상당한 시간이 소요될 것으로 예상됩니다.
                    </p>
                  }
                />
              </div>
            </div>
          </motion.section>

          {/* 유심 교체 방법 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                <span className="bg-cyan-100 text-cyan-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m4.93 4.93 4.24 4.24"/><path d="m14.83 9.17 4.24-4.24"/><path d="m14.83 14.83 4.24 4.24"/><path d="m9.17 14.83-4.24 4.24"/><circle cx="12" cy="12" r="4"/></svg>
                </span>
                유심 교체 방법
              </h2>
              
              <div className="space-y-2">
                <FAQItem 
                  question="유심 카드를 교체하려면 어디에서 어떻게 하면 되나요?"
                  answer={
                    <p>
                      유심 교체는 직접 SK텔레콤 공식 대리점을 방문해야 가능합니다. 본인 확인이 필요하므로 휴대전화와 신분증을 
                      함께 챙겨 가야 합니다. 유심 교체는 약 5분 정도 소요됩니다.
                    </p>
                  }
                />
                
                <FAQItem 
                  question="유심 교체 비용은 무료인가요? 추가로 내야 할 금액이 없나요?"
                  answer={
                    <p>
                      네, SK텔레콤은 4월 28일부터 유심 무료 교체 서비스를 시작했습니다. 해킹 사고 이후 고객 보호 조치의 
                      일환으로 추가 비용 없이 유심을 교체해주고 있습니다.
                    </p>
                  }
                />
                
                <FAQItem 
                  question="매장에 사람이 몰린다는데, 유심 교체를 예약해서 받을 수도 있나요?"
                  answer={
                    <p>
                      네, &apos;유심 무료 교체 예약 시스템&apos;(care.tworld.co.kr)을 통해 미리 신청할 수 있습니다. 
                      당일에는 물량이 부족하거나 가입자가 몰릴 수 있으므로 예약을 통해 원하는 지점을 선택할 수 있고, 
                      날짜는 추후 안내받을 수 있습니다.
                    </p>
                  }
                />
                
                <FAQItem 
                  question="현재 유심 재고가 부족하다는 말이 있는데, 당장 교체하지 못하면 어떻게 해야 하나요?"
                  answer={
                    <p>
                      유심 교체를 당장 하지 못하더라도 유심보호서비스에 가입하는 것이 좋습니다. 
                      유심보호서비스는 타인이 고객의 유심 정보를 복제하거나 탈취해 다른 기기를 통해 서비스에 접속하는 것을 
                      원천 차단해 주는 서비스로, 유심이 해킹됐더라도 이를 복제해 악용하는 것을 막을 수 있습니다. 
                      SK텔레콤은 5월 기준으로 이달 500만 장, 다음 달 577만 장의 유심을 공급할 계획이라고 밝혔습니다.
                    </p>
                  }
                />
                
                <FAQItem 
                  question="본인이 직접 가기 어렵다면, 가족 등 대리인이 대신 유심 교체를 해줄 수 있나요?"
                  answer={
                    <p>
                      일반적으로 통신사 업무는 본인 확인이 필요하므로, 대리인이 방문할 경우 본인의 신분증, 위임장, 
                      대리인의 신분증 등 추가 서류가 필요할 수 있습니다. 정확한 정보는 SK텔레콤 고객센터나 
                      공식 홈페이지를 통해 확인하시는 것이 좋습니다.
                    </p>
                  }
                />
              </div>
            </div>
          </motion.section>

          {/* 추가 피해 예방법 */}
          <motion.section variants={fadeInUp} className="mb-12">
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-5 flex items-center gap-2">
                <span className="bg-red-100 text-red-700 p-2 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </span>
                추가 피해 예방법
              </h2>
              
              <div className="space-y-2">
                <FAQItem 
                  question="해킹 사건을 악용한 보이스피싱이나 스미싱 문자를 받았을 때, 어떻게 주의하고 대응해야 하나요?"
                  answer={
                    <div>
                      <p className="mb-3">
                        한국인터넷진흥원(KISA)에 따르면 &apos;SKT 유심 해킹&apos; &apos;악성 앱 감염&apos; 등의 문구를 포함한 문자가 유포되고 있으며, 
                        이를 통해 사용자를 속여 악성 앱 설치를 유도하는 정황이 확인됐습니다.
                      </p>
                      <p className="mb-3">
                        이러한 피싱은 SKT 유심 해킹 피해에 따른 구제 조치 명목으로 정부 기관이나 SK텔레콤이라고 속이고 접근하여 
                        &apos;가짜 고객센터&apos; 번호로 전화하도록 유도합니다.
                      </p>
                      <p>
                        의심스러운 문자나 전화를 받으면 바로 응답하지 말고, 공식 채널(SKT 고객센터 등)을 통해 진위 여부를 확인해야 합니다. 
                        특히 개인정보 입력이나 앱 설치를 요구하는 경우 더욱 주의해야 합니다.
                      </p>
                    </div>
                  }
                />
                
                <FAQItem 
                  question="유심 정보가 유출된 후 개인이 할 수 있는 보안 조치에는 무엇이 있나요?"
                  answer={
                    <div>
                      <p className="mb-3">개인이 할 수 있는 보안 조치는 다음과 같습니다:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>유심보호서비스에 가입하기 (SK텔레콤 앱이나 홈페이지에서 신청 가능)</li>
                        <li>가능한 빨리 유심 교체하기</li>
                        <li>금융기관 인증서를 유심이나 스마트폰에 저장한 경우 유심 교체 후 다시 설치하기</li>
                        <li>모바일 티머니, 캐시비 등 교통카드 잔액을 소진하거나 환불받은 후 유심 교체하기</li>
                        <li>이전에 사용하던 유심은 반드시 잘라서 폐기하기</li>
                        <li>의심스러운 문자나 전화에 주의하고, 인증 요청에 신중하게 대응하기</li>
                      </ul>
                    </div>
                  }
                />
                
                <FAQItem 
                  question="유심 정보가 악용된 정황이 의심될 경우, 어디에 신고하거나 문의하면 되나요?"
                  answer={
                    <div>
                      <p className="mb-3">유심 정보가 악용된 정황이 의심될 경우, 다음 기관에 신고하거나 문의할 수 있습니다:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>SK텔레콤 고객센터(114 또는 080-816-2000)</li>
                        <li>한국인터넷진흥원(KISA) 인터넷침해대응센터(118)</li>
                        <li>경찰청 사이버안전국(182)</li>
                        <li>금융감독원(1332) - 금융 관련 피해 발생 시</li>
                        <li>개인정보침해신고센터(privacy.kisa.or.kr) - 개인정보 침해 관련</li>
                      </ul>
                    </div>
                  }
                />
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