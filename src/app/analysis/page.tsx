"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import BPFDoorDiagram from "./BPFDoorDiagram";
import BPFDoorSource from "./BPFDoorSource";
import { useState } from "react";
import ImageViewer from "@/components/ui/image-viewer";
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

export default function AnalysisPage() {
  const [showBPFDoorSource, setShowBPFDoorSource] = useState(false);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Script
        id="analysis-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": "SK텔레콤 유심 해킹 침해 분석",
            "description": "2025년 4월 발생한 SK텔레콤 유심 해킹 사태의 침해 분석 보고서. BPFdoor 악성코드를 이용한 공격 방식과 HSS 서버 침투 과정, 유출된 데이터에 대한 전문적 분석을 제공합니다.",
            "datePublished": "2025-05-15",
            "dateModified": "2025-05-15",
            "author": {
              "@type": "Organization",
              "name": "SK텔레콤 유심 해킹 사태 분석",
              "url": "https://skt-hack.wisoft.io"
            },
            "about": [
              {
                "@type": "Thing",
                "name": "BPFdoor 악성코드"
              },
              {
                "@type": "Thing",
                "name": "통신망 보안"
              },
              {
                "@type": "Thing",
                "name": "사이버 공격 분석"
              }
            ],
            "keywords": "BPFdoor, 악성코드, SK텔레콤, 유심 해킹, HSS 서버, 사이버보안, IMSI, Ki 인증키",
            "articleSection": "기술 분석",
            "wordCount": "8500",
            "timeRequired": "PT30M",
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
            "image": {
              "@type": "ImageObject",
              "url": "https://skt-hack.wisoft.io/images/analysis/bpfdoor-diagram.png",
              "width": "800",
              "height": "600",
              "caption": "BPFdoor 악성코드 동작 다이어그램"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://skt-hack.wisoft.io/analysis"
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
              SK텔레콤 유심 해킹 사건 분석
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              해킹에 사용된 기법과 악성코드에 대한 상세 분석 정보를 제공합니다.
              초기 침투부터 데이터 유출까지의 과정을 기술적으로 정리했습니다.
            </p>
          </motion.div>

          {/* 비디오머그 내용 추가 */}
          <motion.div variants={fadeInUp} className="mb-8">
            <div className="bg-red-50 rounded-xl shadow-md p-6 border border-red-100">
              <div className="flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-red-100 p-3 rounded-full text-red-600 mt-1 flex-shrink-0">
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
                      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                      <path d="m10 15 5-3-5-3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      SK텔레콤 유심 해킹 사태: 소비자 피해와 대응
                    </h3>
                    <p className="text-sm text-gray-700">
                      보안 전문가들이 우려했던 최악의 해킹 시나리오가
                      SK텔레콤에서 현실화되었으며, 해킹 자체뿐만 아니라 이후
                      SKT의 대응 과정에서도 여러 문제점이 지적되고 있습니다.
                    </p>
                  </div>
                </div>

                {/* 유튜브 비디오 대신 이미지와 함께 정보 제공 */}
                <div className="flex flex-col md:flex-row gap-5">
                  {/* 비디오 대신 빈 공간 (실제로는 임베드 비디오가 렌더링될 공간) */}
                  <div className="w-full md:w-1/2 h-80 bg-white rounded-lg border border-gray-200 relative overflow-hidden">
                    <div
                      id="video-container"
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => {
                        const container =
                          document.getElementById("video-container");
                        if (container) {
                          const iframe = document.createElement("iframe");
                          iframe.setAttribute(
                            "src",
                            "https://www.youtube.com/embed/txVyWoeG0Fk?si=24LxF9kEAqLdESml&autoplay=1",
                          );
                          iframe.setAttribute(
                            "title",
                            "역사상 최악 해킹에도 말만 집단소송..참여 안 하면 배상도 없다",
                          );
                          iframe.setAttribute("frameBorder", "0");
                          iframe.setAttribute(
                            "allow",
                            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                          );
                          iframe.setAttribute("allowFullScreen", "true");
                          iframe.className =
                            "w-full h-full absolute top-0 left-0";

                          // 기존 내용 제거 후 iframe 추가
                          container.innerHTML = "";
                          container.appendChild(iframe);
                        }
                      }}
                    >
                      {/* 유튜브 썸네일 이미지 */}
                      <Image
                        src="https://img.youtube.com/vi/txVyWoeG0Fk/maxresdefault.jpg"
                        alt="역사상 최악 해킹에도 말만 집단소송..참여 안 하면 배상도 없다"
                        className="w-full h-full object-cover"
                        width={650}
                        height={400}
                      />
                      {/* 재생 버튼 */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        YouTube 영상
                      </div>
                    </div>
                  </div>

                  {/* 두 개로 나뉜 정보 컬럼 */}
                  <div className="w-full md:w-1/2 grid grid-cols-1 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        주요 문제점
                      </h4>
                      <ul className="text-sm list-disc pl-5 space-y-1">
                        <li>1차 조사: HSS 인증 서버 3대에서 9.7GB 데이터 유출(25만 명분), 전화번호·IMSI·Ki 인증키 탈취, IMEI 유출 없음</li>
                        <li>2차 조사: 감염서버 총 23대, 악성코드 25종 발견, 개인정보 서버 2대 감염 확인, IMEI 291,831건 포함 파일 발견</li>
                        <li>SKT의 지연된 신고와 미흡한 위기 대응</li>
                        <li>고객 개인정보 유출에 대한 명확한 통지 지연</li>
                        <li>유심 교체 과정에서의 혼란과 불편</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        피해자 대응 방안
                      </h4>
                      <ul className="text-sm list-disc pl-5 space-y-1">
                        <li>유심 교체 및 보호 서비스 신청 필수</li>
                        <li>
                          집단소송 참여 필요 (참여하지 않으면 배상받을 수 없음)
                        </li>
                        <li>법적으로는 최대 5천억 원 과징금 가능</li>
                        <li>소비자 대거 이탈 움직임 발생</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between mt-5 pt-4 border-t border-red-100">
                  <a
                    href="https://youtu.be/txVyWoeG0Fk?si=24LxF9kEAqLdESml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-red-600 hover:text-red-800 font-medium"
                  >
                    <span>YouTube에서 전체 영상 보기</span>
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
                      className="ml-1"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                  <span className="text-xs text-gray-500">
                    출처: SBS 비디오머그, 2025. 4. 29. &quot;역사상 최악
                    해킹에도 말만 집단소송..참여 안 하면 배상도 없다&quot;
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 해킹 기법 및 악성코드 분석 */}
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
                    <path d="M21 8v13H3V8" />
                    <path d="M1 3h22v5H1z" />
                    <path d="M10 12h4" />
                  </svg>
                </span>
                해킹에 사용된 기법 및 악성코드 분석
              </h2>

              <div className="text-slate-700 space-y-5">
                <p className="leading-relaxed">
                  이번 SKT 유심 해킹에 사용된 공격 기법은 고도로 치밀한
                  APT(Advanced Persistent Threat)
                  <sup
                    className="text-blue-600 cursor-help"
                    title="APT(Advanced Persistent Threat): 특정 조직이나 기업, 국가를 대상으로 한 장기적이고 지속적인 공격으로, 뚜렷한 목표를 가지고 다양한 해킹 기술을 복합적으로 사용하는 고도화된 위협"
                  >
                    1
                  </sup>{" "}
                  양상을 보였습니다. 공격자는 사전에 표적망(SKT 내부망)을
                  정찰하고, 통신 핵심 시스템에 지속적으로 잠입할 수 있는
                  백도어를 설치하여 정보를 빼내는 전략을 사용했습니다. 특히
                  주목되는 것은 리눅스 기반의 은밀한 백도어 악성코드인{" "}
                  <strong className="text-blue-700">BPFDoor</strong>
                  <sup
                    className="text-blue-600 cursor-help"
                    title="BPFDoor: 리눅스 운영체제의 Berkeley Packet Filter(BPF) 기능을 악용하여 만들어진 백도어 악성코드로, 특정 네트워크 패킷이 감지될 때만 활성화되는 은밀한 특성을 가진 악성코드"
                  >
                    2
                  </sup>
                  의 활용과, HSS
                  <sup
                    className="text-blue-600 cursor-help"
                    title="HSS(Home Subscriber Server): 이동통신망에서 가입자 정보를 관리하는 핵심 데이터베이스. USIM 카드의 인증 정보, 가입자 프로필, 서비스 권한 등을 저장하고 관리"
                  >
                    3
                  </sup>{" "}
                  서버에 대한 침투 과정입니다. 아래에 해당 기술적 쟁점들을 상세
                  분석합니다.
                </p>

                {/* 2.1 초기 침투: VPN 장비 취약점 악용 (추정) */}
                <div className="mt-8">
                  <h3
                    className="text-xl font-bold text-purple-900 mb-3"
                    id="initial-intrusion"
                  >
                    초기 침투: VPN 장비 취약점 악용 (추정)
                  </h3>
                  <div className="pl-4 border-l-4 border-purple-200 py-1">
                    <p className="mb-4 leading-relaxed">
                      조사단 및 보안업계에 따르면, 해커들은 SK텔레콤 내부망에
                      접근하기 위해 VPN(Virtual Private Network) 시스템의 보안
                      취약점을 노린 것으로 추정됩니다. 국내 언론 보도에 따르면,
                      대만 사이버보안업체 TeamT5는{" "}
                      <em>
                        &quot;중국과 연계된 해커 그룹이 Ivanti사의 VPN 장비 취약점을
                        악용해 여러 기관을 공격했다&quot;
                      </em>
                      는 정보를 공개했고, SKT 해킹 역시 이러한 이반티(Ivanti)
                      VPN 취약점과 관련되었을 가능성이 제기되었습니다.
                    </p>

                    <p className="mb-4 leading-relaxed">
                      구체적으로는, Ivanti Connect Secure
                      <sup
                        className="text-blue-600 cursor-help"
                        title="Ivanti Connect Secure: 미국 IT 보안 회사 Ivanti에서 제공하는 SSL VPN 솔루션으로, 원격 및 모바일 사용자들이 어떤 웹 지원 기기에서든 기업 리소스에 안전하게 접근할 수 있게 해주는 제품입니다."
                      >
                        4
                      </sup>
                      라는 SSL VPN 솔루션에서{" "}
                      <strong className="text-red-600">
                        2025년 초에 보고된 취약점(CVE-2025-0282, CVE-2025-22457
                        등)
                      </strong>
                      이 SKT 해킹의 초기 침입 경로로 거론되었습니다. 공격자는
                      해당 VPN 장비의 제로데이/엔데이 취약점을 통해 SKT 내부망에
                      원격으로 침투한 후, 리눅스 서버에 악성코드 설치 권한을
                      획득한 것으로 보입니다. TeamT5는{" "}
                      <em>
                        &quot;2025년 4월 이후 Ivanti VPN 기기를 대상으로 한 공격
                        시도가 관찰되었으며, 다수의 장비가 마비되어 악성코드
                        삽입이 가능해졌다&quot;
                      </em>
                      고 밝힌 바 있습니다.
                    </p>

                    <p className="mb-4 leading-relaxed">
                      SK텔레콤 측도 조사 중 다양한 가능성을 열어두고 VPN 취약점
                      연관성을 확인하고 있으나, 공식적으로는{" "}
                      <em>&quot;조사 중인 사항이라 구체적 확인이 어렵다&quot;</em>며
                      언급을 자제했습니다. 하지만 4월 18일 SKT 보안관제센터가
                      처음 이상 트래픽을 탐지한 장소가 과금 분석용 리눅스
                      서버였고, 이 서버가 외부와 연결되는 VPN 경로에 위치했던 점
                      등을 고려하면, VPN 취약점→리눅스 서버 악성코드 심기→내부망
                      장악의 흐름이 유력해 보입니다.
                    </p>

                    <p className="mb-4 leading-relaxed">
                      실제로 SKT는 조사 과정에서 자사 VPN 장비가 어느 제조사
                      제품인지를 명확히 밝히지 않았으나, 공격 정황 상 리눅스
                      기반 VPN 서버가 공격 통로였을 가능성이 높습니다. 또 다른
                      가설로는 내부자 계정 탈취나 관리자 권한 오남용 등이
                      있으나, 현재까지 공개된 정황은 외부 침입에 무게가
                      실립니다.
                    </p>

                    {/* Ivanti 취약점 상세 정보 */}
                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6">
                      <h4 className="text-blue-800 font-semibold mb-2 flex items-center">
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
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 16v-4" />
                          <path d="M12 8h.01" />
                        </svg>
                        이반티(Ivanti) VPN 취약점 상세 분석: CVE-2025-0282 및
                        CVE-2025-22457
                      </h4>
                      <p className="text-sm text-slate-700 mb-3">
                        최근 발생한 통신사 해킹 사건에 활용된 것으로 추정되는
                        Ivanti 취약점의 기술적 세부사항은 다음과 같습니다:
                      </p>

                      <div className="space-y-4 text-sm text-slate-700">
                        <div>
                          <p className="font-medium text-blue-700 mb-1">
                            CVE-2025-0282 (CVSS 9.0 - 심각)
                          </p>
                          <p className="leading-relaxed">
                            Ivanti Connect Secure, Policy Secure 및 Neurons for
                            ZTA Gateways 제품에서 발견된 스택 기반 버퍼
                            오버플로우 취약점입니다. 이 취약점은 TNC(Trusted
                            Network Connect) 메시지 전달에 사용되는 IF-T 패킷
                            처리 과정에서 발생합니다.
                            <code className="text-red-600 bg-red-50 px-1 py-0.5 rounded mx-1">
                              clientCapabilities
                            </code>{" "}
                            키 값을 처리하는 과정에서
                            <code className="text-red-600 bg-red-50 px-1 py-0.5 rounded mx-1">
                              strncpy
                            </code>{" "}
                            함수의 결함으로 인해 원격 코드 실행이 가능해집니다.
                          </p>

                          <p className="mt-2 leading-relaxed">
                            <strong>공격 방법</strong>: Mandiant의 분석에 따르면
                            공격자들은 다음과 같은 방식으로 취약점을
                            악용했습니다:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>
                              정찰 단계에서 특정 URL을 쿼리하여 대상 기기의 버전
                              확인
                            </li>
                            <li>
                              조작된 페이로드로 버퍼 오버플로우 유발 및 원격
                              코드 실행
                            </li>
                            <li>SELinux 비활성화 등 시스템 설정 변경</li>
                            <li>
                              합법적인 구성요소에 웹 셸 삽입하여 지속적 접근
                              확보
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="font-medium text-blue-700 mb-1">
                            CVE-2025-22457 (CVSS 9.8 - 심각)
                          </p>
                          <p className="leading-relaxed">
                            Ivanti 제품에서 발견된 또 다른 스택 기반 버퍼
                            오버플로우 취약점으로, 웹 프로세스에서 특별히 조작된{" "}
                            <code className="text-red-600 bg-red-50 px-1 py-0.5 rounded mx-1">
                              X-Forwarded-For
                            </code>{" "}
                            헤더를 처리하는 과정에서 발생합니다. 이 취약점은
                            처음에는 저위험 서비스 거부(DoS) 취약점으로
                            오인되었으나, 후에 원격 코드 실행으로 이어질 수 있는
                            것으로 확인되었습니다.
                          </p>

                          <p className="mt-2 leading-relaxed">
                            <strong>탐지 방법</strong>: 이 취약점의 악용은 다음
                            흔적으로 확인할 수 있습니다:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>
                              로그에{" "}
                              <code className="bg-gray-100 text-red-600 px-1 text-xs">
                                ERROR31093: Program web recently failed
                              </code>{" "}
                              메시지 발생
                            </li>
                            <li>
                              공격 성공 시{" "}
                              <code className="bg-gray-100 text-red-600 px-1 text-xs">
                                TRAILBLAZE
                              </code>
                              (메모리 내 드로퍼)와
                              <code className="bg-gray-100 text-red-600 px-1 text-xs">
                                BRUSHFIRE
                              </code>
                              (수동형 백도어) 악성코드 배포
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="font-medium text-blue-700 mb-1">
                            위협 행위자 및 악성코드
                          </p>
                          <p className="leading-relaxed">
                            Mandiant는 이러한 취약점을 악용한 활동을{" "}
                            <strong>UNC5221</strong>로 분류했으며, 중국 연계
                            스파이 행위자로 의심됩니다. 공격자들은 다음과 같은
                            다양한 악성코드를 배포했습니다:
                          </p>
                          <div className="grid grid-cols-2 gap-1 mt-2">
                            <div>
                              <span className="font-semibold text-xs">
                                DRYHOOK
                              </span>
                              : 자격 증명 탈취 도구
                            </div>
                            <div>
                              <span className="font-semibold text-xs">
                                PHASEJAM
                              </span>
                              : 웹 셸 드로퍼
                            </div>
                            <div>
                              <span className="font-semibold text-xs">
                                SPAWNSNAIL
                              </span>
                              : SSH 백도어
                            </div>
                            <div>
                              <span className="font-semibold text-xs">
                                SPAWNMOLE
                              </span>
                              : 터널링 도구
                            </div>
                            <div>
                              <span className="font-semibold text-xs">
                                SPAWNANT
                              </span>
                              : 설치 프로그램
                            </div>
                            <div>
                              <span className="font-semibold text-xs">
                                SPAWNSLOTH
                              </span>
                              : 로그 조작 유틸리티
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-medium text-blue-700 mb-1">
                            공격과 SK텔레콤 해킹의 연관성
                          </p>
                          <p className="leading-relaxed">
                            SK텔레콤이 자사 인프라에서 사용되는 VPN 제품을
                            명시적으로 확인하지 않았지만, 공격 시기와 패턴으로
                            볼 때 이번 사건은 위 취약점들을 이용한 공격과 상당한
                            유사성을 보입니다. 특히 공격자들이 국가 지원을 받는
                            APT 그룹이라는 점, BPFDoor와 같은 리눅스 기반
                            백도어를 심었다는 점, 그리고 정확한 표적을 겨냥한
                            장기간 잠복 패턴 등이 Ivanti 취약점을 이용한 다른
                            공격 사례와 일치합니다. 또한 CISA(미국 사이버보안 및
                            인프라 보안국)는 이 취약점들을 &quot;알려진 악용 취약점
                            카탈로그&quot;에 등재하여 즉각적인 대응을 권고한 바
                            있습니다.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6">
                      <h4 className="text-blue-800 font-semibold mb-2 flex items-center">
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
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 16v-4" />
                          <path d="M12 8h.01" />
                        </svg>
                        보안 패치 지연 요인
                      </h4>
                      <p className="text-sm text-slate-700">
                        일각에서는 2023년 MS Azure 클라우드 장애 사태 점검으로
                        SKT의 보안 패치 작업이 지연되어 취약점 노출 기간이
                        길어졌다는 지적도 있습니다. SKT 인프라 담당 임원은{" "}
                        <em>
                          &quot;네트워크 장비 보안 최신성을 유지하고 있었지만, Azure
                          사태 부작용 검토로 일부 작업이 늦어졌다. 7월 말까지
                          백신 작업을 완료할 계획&quot;
                        </em>
                        이라고 언급하여, 사건 당시 일부 시스템에 보안 공백이
                        있었음을 시사했습니다.
                      </p>
                    </div>

                    <p className="leading-relaxed">
                      요약하면, 초기 침투 경로는 공격자가 SKT의 경계 보안을 뚫기
                      위해 VPN 솔루션의 알려지지 않은 취약점을 악용했고, 이를
                      통해 내부 망 진입 및 리눅스 서버 접근 권한 획득에 성공한
                      것으로 판단됩니다. 이 점은 과거 다른 통신사 해킹
                      사례에서도 공통으로 나타나는 수법으로 (예: 2023년 LG U+
                      해킹 때도 VPN 계정 탈취 의혹), 기업 원격접속 장비의
                      보안취약 관리가 얼마나 중요한지 일깨워줍니다.
                    </p>
                  </div>
                </div>

                {/* 초기 침투: 웹셸 기반 침투 (추정) */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">
                    초기 침투: 웹셸 기반 침투 (추정)
                  </h3>
                  <div className="pl-4 border-l-4 border-purple-200 py-1">
                    <p className="mb-4 leading-relaxed">
                      민관 합동조사단의 2차 조사에서 가장 주목받고 있는 침투 방안은 웹셸을 통한 공격입니다. 조사단은 BPF도어 외에도 웹셸 악성코드 1종을 추가로 발견했으며, 이것이 2022년 6월 최초 공격의 핵심 수단이었을 것으로 추정하고 있습니다. 웹셸은 웹 서버의 취약점을 이용해 공격자가 원격에서 서버를 제어하고 명령을 실행할 수 있도록 만든 악성 스크립트 파일로, 해커가 SKT 서버를 최초 침입하는 과정에서 내부 권한을 획득하고 백도어 악성코드인 BPF도어를 설치하는 발판 역할을 했습니다.
                    </p>

                    <p className="mb-4 leading-relaxed">
                      보안 전문가들은 웹셸 공격이 망분리 환경에서도 효과적인 침투 수단이 될 수 있다고 분석합니다. 이는 &quot;망분리 환경에서도 80/443 웹 포트는 거의 유일한 통로&quot;이기 때문이며, DMZ에서 내부망으로 향하는 연결은 웹서비스 정도만 열려있는 경우가 많아 공격자가 웹셸·RCE를 노려 침투·측면이동하는 주요 원인이 됩니다.
                    </p>

                    <p className="mb-4 leading-relaxed">
                      웹셸 공격의 구체적인 시나리오를 보면, 공격자는 WebLogic, Tomcat, 혹은 자체 웹앱 취약점을 악용하여 HSS 관리 또는 관련 웹 서버 중 취약 버전에 침투한 후, curl -F file=@shell.jsp 같은 방식으로 웹셸을 업로드하거나 RCE 익스플로잇을 사용했을 것으로 추정됩니다.
                    </p>
                  </div>
                </div>

                {/* 초기 침투: SAP 넷위버 애플리케이션 취약점 */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">
                    초기 침투: SAP 넷위버 애플리케이션 취약점 (추정)
                  </h3>
                  <div className="pl-4 border-l-4 border-purple-200 py-1">
                    <p className="mb-4 leading-relaxed">
                      한국인터넷진흥원(KISA)이 발견한 또 다른 중요한 침투 경로는 SAP의 &apos;넷위버&apos;에서 파일 업로드 취약점입니다. SAP는 전사지원관리(ERP) 전문 소프트웨어 기업으로 통합 실행 플랫폼 넷위버를 제공하며, SKT는 2000년부터 SAP의 ERP를 도입해 현재 S/4HANA라는 ERP 제품을 프라이빗 클라우드 환경에서 사용하고 있습니다.
                    </p>

                    <p className="mb-4 leading-relaxed">
                      보안 전문가들은 &quot;SKT가 구축한 프라이빗 클라우드가 단일 포트로만 구축된 완전한 폐쇄망이 아니라면 외부 공격에 노출될 가능성이 있다&quot;고 분석합니다. 특히 SAP의 피오리 포털은 스마트폰과 PC 등 개인 디바이스에서 접근할 수 있어 더욱 해킹에 취약합니다. 이 경우 웹 통신 규약인 HTTP 포트를 열어야 하기 때문에 해커 입장에서는 공격 표면이 추가로 확보되는 셈입니다.
                    </p>

                    <p className="mb-4 leading-relaxed">
                      KISA는 SAP코리아의 권고에 따라 4월 중 넷위버에 최신 보안 패치를 적용했으며, 넷위버는 국내에서 구형 ERP 시스템을 사용하는 일부 기업만 사용 중인 것으로 확인됩니다.
                    </p>
                  </div>
                </div>

                {/* 초기 침투: 리눅스 커널 권한 상승 취약점 */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">
                    초기 침투: 리눅스 커널 권한 상승 취약점 (추정)
                  </h3>
                  <div className="pl-4 border-l-4 border-purple-200 py-1">
                    <p className="mb-4 leading-relaxed">
                      KISA는 리눅스 커널에서 발생하는 권한 상승 취약점(CVE-2025-21756)에 대한 보안 공지를 발표했는데, 이 취약점이 SKT 해킹과 연관될 가능성이 제기되고 있습니다. 이 취약점은 일반 사용자 권한만으로도 시스템 최고 권한인 &apos;루트(root)&apos; 접근을 가능하게 만드는 심각한 보안 결함입니다.
                    </p>

                    <p className="mb-4 leading-relaxed">
                      루트 권한을 획득한 공격자는 서버 내부를 마음껏 조작할 수 있으며, 이 상태에서는 BPF도어 같은 백도어를 설치하는 것도 어렵지 않습니다. SKT 서버에 설치된 BPF도어 역시 이 권한 상승 취약점을 활용해 심어졌을 가능성이 있으며, 업계 관계자는 &quot;SKT 해킹은 단일 침입경로가 아닌 웹, 커널, 계정관리 등 다층 방어 체계가 동시에 무너진 시나리오를 배제할 수 없다&quot;고 분석했습니다.
                    </p>

                    {/* CVE-2025-21756 상세 정보 */}
                    <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 my-6">
                      <h4 className="text-amber-800 font-semibold mb-2 flex items-center">
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
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        CVE-2025-21756: Linux 커널 vsock 서브시스템의 권한 상승 취약점
                      </h4>

                      <div className="space-y-3 text-sm text-slate-700">
                        <p className="leading-relaxed">
                          이 취약점은 2025년 2월 27일에 공개된 Linux 커널의 Virtual Socket(vsock) 구현에서 발견된 심각한 보안 취약점으로, CVSS v3.1 기준 7.8점의 높은 위험도를 가지고 있습니다. 특히 가상화 환경과 컨테이너 기반 인프라에서 중요한 보안 위험을 초래할 수 있으며, 실제 익스플로잇 코드가 이미 공개되어 있어 즉각적인 대응이 필요한 상황입니다.
                        </p>

                        <div className="mt-4">
                          <p className="font-medium text-amber-800 mb-2">1. 취약점 발생 메커니즘</p>
                          <p className="leading-relaxed mb-2">
                            이 취약점은 Linux 커널의 vsock(Virtual Socket) 구현에서 소켓 바인딩과 전송 재할당 과정 중 발생하는 메모리 관리 오류로 인해 발생합니다. 소켓이 바인딩된 상태에서 전송 계층이 재할당될 때 소켓의 참조 카운트가 올바르게 관리되지 않아 use-after-free 조건이 발생합니다.
                          </p>
                          <p className="leading-relaxed">
                            구체적으로는 다음과 같은 단계로 진행됩니다:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-1 mb-2">
                            <li>
                              <code className="bg-amber-100 px-1 py-0.5 rounded mx-1 text-red-600">vsock_create()</code> 함수가 호출되어 참조 카운트가 1로 설정되고, <code className="bg-amber-100 px-1 py-0.5 rounded mx-1 text-red-600">vsock_insert_unbound()</code> 함수를 통해 참조 카운트가 2로 증가
                            </li>
                            <li>
                              <code className="bg-amber-100 px-1 py-0.5 rounded mx-1 text-red-600">transport{'->'} release()</code> 함수가 소켓의 바인딩 상태를 확인하지 않고 <code className="bg-amber-100 px-1 py-0.5 rounded mx-1 text-red-600">vsock_remove_bound()</code>를 호출하여 참조 카운트가 1로 감소
                            </li>
                            <li>
                              <code className="bg-amber-100 px-1 py-0.5 rounded mx-1 text-red-600">vsock_bind()</code> 함수가 소켓이 언바인딩 리스트에 있다고 가정하고 작업을 수행하면서 참조 카운트가 0이 되어 메모리 해제
                            </li>
                            <li>
                              해제된 메모리를 이후에 다시 접근하는 use-after-free 상황 발생
                            </li>
                          </ul>
                          <p className="text-xs text-slate-600 bg-amber-100 p-2 rounded">
                            커널 주소 살균제(KASAN)는 <code>__vsock_bind+0x62e/0x730</code> 함수에서 이미 해제된 메모리 주소 <code>ffff88816b46a74c</code>에 접근하는 slab-use-after-free 오류를 보고했습니다.
                          </p>
                        </div>

                        <div className="mt-4">
                          <p className="font-medium text-amber-800 mb-2">2. 위험성 및 영향</p>
                          <p className="leading-relaxed">
                            이 취약점은 다음과 같은 심각한 보안 위험을 초래합니다:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>
                              <span className="font-semibold">권한 상승 위험</span>: 로컬 공격자가 일반 사용자 권한으로 시스템의 루트 권한을 획득할 수 있음
                            </li>
                            <li>
                              <span className="font-semibold">시스템 제어권 탈취</span>: 루트 권한을 통해 백도어 설치, 무단 데이터 접근, 시스템 조작 가능
                            </li>
                            <li>
                              <span className="font-semibold">가상화 환경 위협</span>: vsock은 가상 머신과 호스트 간 통신 기술로, 클라우드 인프라에서 특히 위험
                            </li>
                            <li>
                              <span className="font-semibold">악용 용이성</span>: 낮은 공격 복잡성과 이미 공개된 익스플로잇 코드로 인해 실제 공격 가능성이 높음
                            </li>
                          </ul>
                        </div>

                        <div className="mt-4">
                          <p className="font-medium text-amber-800 mb-2">3. 영향을 받는 시스템</p>
                          <p className="leading-relaxed mb-2">
                            다음 커널 버전이 이 취약점에 취약합니다:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Linux 커널 6.6.79 미만</li>
                            <li>Linux 커널 6.12.16 미만</li>
                            <li>Linux 커널 6.13.4 미만</li>
                            <li>Linux 커널 6.14-rc1 미만</li>
                            <li>일반적으로 Linux 커널 5.5 이상부터 영향을 받음</li>
                          </ul>
                          
                          <p className="leading-relaxed mt-2">
                            주요 배포판 영향:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Ubuntu 20.04 LTS, 22.04 LTS</li>
                            <li>Debian bullseye, bookworm</li>
                            <li>Red Hat Enterprise Linux 8 및 파생 배포판</li>
                            <li>Amazon Linux 2023, Kernel-5.10 Extra, Kernel-5.15 Extra</li>
                          </ul>
                        </div>

                        <div className="mt-4">
                          <p className="font-medium text-amber-800 mb-2">4. 해결 방안</p>
                          <p className="leading-relaxed">
                            다음과 같은 조치를 통해 이 취약점에 대응할 수 있습니다:
                          </p>
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>
                              <span className="font-semibold">패치 적용</span>: Linux 커널 6.6.79, 6.12.16, 6.13.4, 6.14-rc1 이상으로 업그레이드
                            </li>
                            <li>
                              <span className="font-semibold">기술적 수정</span>: 소켓 바인딩이 소켓 소멸까지 유지되도록 보장하는 패치 적용
                            </li>
                            <li>
                              <span className="font-semibold">임시 완화책</span>: vsock 모듈 사용 중단 또는 비활성화
                            </li>
                            <li>
                              <span className="font-semibold">클라우드 환경</span>: 클라우드 서비스 제공업체의 보안 공지 및 패치 확인
                            </li>
                          </ul>
                        </div>

                        <div className="bg-red-50 border border-red-100 rounded p-3 mt-4">
                          <p className="text-red-700 font-medium flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                              <line x1="12" y1="9" x2="12" y2="13"/>
                              <line x1="12" y1="17" x2="12.01" y2="17"/>
                            </svg>
                            SK텔레콤 사건과의 연관성
                          </p>
                          <p className="text-sm text-slate-700 mt-1">
                            SK텔레콤 침해 사고의 시기와 vsock 취약점 공개 시점을 고려할 때, 공격자들이 이 취약점의 알려지지 않은 변종이나 유사한 권한 상승 취약점을 사용했을 가능성이 있습니다. 특히 공격자가 초기 침투 이후 시스템 내부에서 권한을 상승시키고 BPFDoor를 설치하는 과정에서, 이와 같은 커널 취약점이 활용되었을 것으로 추정됩니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 초기 침투: 다중 벡터 침투 시나리오 */}
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">
                    초기 침투: 다중 벡터 침투 시나리오 (추정)
                  </h3>
                  <div className="pl-4 border-l-4 border-purple-200 py-1">
                    <p className="mb-4 leading-relaxed">
                      전문가들은 이번 SKT 해킹이 단일 침투 경로가 아닌 다중 벡터를 통한 복합적 공격일 가능성이 높다고 보고 있습니다. 한 업계 전문가는 &quot;피싱 이메일과 웹서버 취약점으로 이전부터 침입한 것 같다&quot;며 &quot;긴 시간에 걸쳐 단계적으로 접근 권한을 높이면서 HSS에 접근 가능했을 것&quot;이라고 분석했습니다.
                    </p>

                    <p className="mb-4 leading-relaxed">
                      보안 분석가들이 제시한 가설적 침투 시나리오를 종합하면, 공격자는 먼저 &quot;인터넷 노출된 웹 서비스를 발판 삼아 HSS 서버에 침투하고, BPFDoor를 설치하여 장기 거점을 확보했을 개연성이 높다&quot;고
                    </p>
                  </div>
                </div>

                {/* 2.2 악성코드: BPFDoor 백도어의 설치와 은밀한 동작 */}
                <div className="mt-10">
                  <h3
                    className="text-xl font-bold text-purple-900 mb-3"
                    id="bpfdoor-analysis"
                  >
                    악성코드: BPFDoor 백도어의 설치와 은밀한 동작
                  </h3>

                  <div className="pl-4 border-l-4 border-purple-200 py-1">
                    <p className="mb-4 leading-relaxed">
                      SK텔레콤 침해사고에서 발견된 악성코드 중 가장 핵심은{" "}
                      <strong className="text-blue-700">&quot;BPFDoor&quot;</strong>로
                      알려진 패시브 백도어입니다. BPFDoor는 리눅스 커널의 BPF
                      <sup
                        className="text-blue-600 cursor-help"
                        title="BPF(Berkeley Packet Filter): 네트워크 패킷을 커널 레벨에서 필터링하는 리눅스 내장 기능으로, 원래는 wireshark나 tcpdump 같은 네트워크 분석 도구에 사용됩니다. 커널 내부에서 패킷을 선별적으로 처리할 수 있어 효율적이지만, BPFDoor는 이를 악용해 특정 패턴의 패킷만 수신하는 은닉 기법으로 활용했습니다."
                      >
                        5
                      </sup>
                      (eBPF, 확장 Berkeley Packet Filter) 기능을 악용하여 거의
                      모든 흔적을 숨긴 채 원격에서 공격자 명령을 수신하고 제어
                      권한을 제공하는 특수한 악성코드입니다. 이번 사건에서도
                      해커는 내부망에 잠입한 후 BPFDoor를 주요 서버에
                      설치함으로써, 장기간 탐지되지 않고 HSS 데이터에 접근할
                      은신 통로를 마련했습니다.
                    </p>

                    {/* BPFDoor 악성코드 다이어그램 */}
                    <div className="my-8">
                      <BPFDoorDiagram />
                    </div>

                    <p className="font-semibold text-slate-800 mb-2">
                      탐지 회피 기법 및 유사 악성코드와의 비교:
                    </p>

                    <div className="space-y-5 mb-6">
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-blue-800 mb-2">
                          포트리스(Port-less) 백도어
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          BPFDoor의 가장 큰 특징은{" "}
                          <strong>어떤 포트도 열지 않는다</strong>는 점입니다.
                          일반적인 백도어나 RAT가 원격 접속을 위해 고정 포트를
                          사용하는 것과 달리, BPFDoor는 netstat이나 lsof로도
                          발견하기 어려운 Raw 소켓만을 사용합니다. 이는 2001년
                          cd00r POC에서 처음 소개된 개념을 실제 위협으로 가장
                          성공적으로 구현한 사례로 평가됩니다.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-blue-800 mb-2">
                          BPF 필터 기반 트래픽 은닉
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          커널 내부 BPF 필터를 통해 패킷을 선별하므로,
                          방화벽이나 IDS가 백도어 통신을 정상 트래픽과 구분하기
                          불가능합니다. 필터 코드가 커널 메모리에 로드되어
                          일반적인 메모리 포렌식으로도 탐지가 어렵습니다. 이러한
                          BPF 악용은 BPFDoor의 은신성 핵심이며, 기존 보안
                          제품들에게 새로운 도전 과제가 되었습니다.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-blue-800 mb-2">
                          프로세스 위장 (Masquerading)
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          dbus-daemon, sshd, rsyslogd 등 정상 시스템 프로세스로
                          위장하며, 실제 시스템 파일과 동일한 경로(/usr/sbin/atd
                          등)를 사용하기도 합니다. SKT 사례의 dbus-srv나
                          kdmtmpflush도 각각 dbus-daemon, kdmflush와 유사하게
                          명명되어 관리자나 EDR의 오탐을 유도하도록
                          설계되었습니다.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-blue-800 mb-2">
                          메모리 상주 및 Anti-Analysis
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          /dev/shm과 같은 휘발성 메모리 공간에서 동작하며, 실행
                          파일을 삭제하여 디스크 흔적을 최소화합니다. 파일
                          타임스탬프 조작, 로그 차단, bash 히스토리 비활성화 등
                          다양한 Anti-Forensic 기법을 사용합니다. 또한 ptrace
                          방지, LD_PRELOAD 환경변수 제거 등으로 디버깅과 분석을
                          어렵게 만듭니다.
                        </p>
                      </div>
                    </div>

                    <p className="mb-4 leading-relaxed">
                      이러한 특성들로 인해 BPFDoor는{" "}
                      <em>&quot;네트워크상 패킷 흔적이 0에 수렴&quot;</em>하는 스텔스
                      백도어로 평가됩니다. 2021년 PwC 보고서에서 최초 존재가
                      공개된 이후 중동과 아시아 지역의 통신망 공격에 중국계 APT
                      그룹(일명 &quot;레드멘션&quot;)이 활발히 활용해왔으며, 2022년
                      소스코드 유출 이후에는 다양한 공격자가 사용할 수 있게
                      되었습니다. CVE 번호가 없는 악성툴(시스템 합법 기능을
                      악용할 뿐 특정 취약점을 이용하지 않음)이라서, 시그니처
                      기반 방어체계로는 탐지 곤란하다는 점도 위험도를 높입니다.
                    </p>

                    <p className="mb-4 leading-relaxed">
                      SKT 사건에서 공격자는 이 BPFDoor를 과금서버 및 HSS 서버
                      등에 심어놓고 원격에서 내부망에 지속 접근했을 것으로
                      보입니다. 실제 KISA 조사단은 4월 19일 밤 SKT 내부에서
                      BPFDoor 계열 악성코드 의심 경보를 이미 인지한 것으로
                      전해졌고, 4월 25일 KISA가 공개한 보안 공지에도 BPFDoor
                      관련 해시와 IOC가 포함되었습니다. 또한 SKT 내부 포렌식에서
                      <strong className="text-red-600">
                        UDP 53, TCP 443 포트로 역쉘(reverse shell)
                      </strong>
                      이 열린 흔적이 식별되었다는 제보가 있어, BPFDoor 활동을
                      뒷받침합니다.
                    </p>

                    <p className="leading-relaxed">
                      정리하면, 해커는 내부 침투 후 BPFDoor 백도어를 심어
                      지속적이고 은밀한 통신 채널을 확보했고, 이를 통해 HSS
                      서버를 원격 제어·탈취 자료 유출에 악용했습니다. BPFDoor의
                      존재로 미루어 공격자들은 단발성 범죄 해커라기보다 APT
                      형태의 전문 조직일 가능성이 큽니다. (실제로 국가 지원을
                      받는 중국계 그룹이 연루되었을 가능성이 거론됩니다.)
                      BPFDoor 자체는 초기 침투를 가능케 한 취약점을 발생시킨
                      원인은 아니지만, 침투 후 흔적을 숨기고 권한을 유지하는 데
                      결정적 역할을 했습니다. 향후 이런 스텔스 백도어에
                      대비하려면, 메모리 상주 악성코드 탐지, 행위 기반 이상징후
                      탐지 (예: iptables 변조 모니터링) 등 고급 보안 모니터링
                      체계가 필요함을 본 사건이 보여주었습니다.
                    </p>
                    {/* BPFDoor 소스코드 분석 */}
                    <div className="mt-6">
                      <button
                        className="w-full flex items-center justify-between p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                        onClick={() =>
                          setShowBPFDoorSource((prev: boolean) => !prev)
                        }
                      >
                        <span className="font-medium text-purple-900">
                          BPFDoor 소스코드 상세 분석
                        </span>
                        <svg
                          className={`w-5 h-5 text-purple-700 transform transition-transform ${showBPFDoorSource ? "rotate-180" : ""}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {showBPFDoorSource && (
                        <div className="mt-4">
                          <BPFDoorSource />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* 2.3 HSS 서버 침투와 데이터 탈취 과정 */}
                <div className="mt-10">
                  <h3
                    className="text-xl font-bold text-purple-900 mb-3"
                    id="hss-intrusion"
                  >
                    HSS 서버 침투와 데이터 탈취 과정
                  </h3>

                  <div className="pl-4 border-l-4 border-purple-200 py-1">
                    <p className="mb-4 leading-relaxed">
                      공격자는 BPFDoor 등의 툴로 내부 거점을 확보한 후, 최종
                      목표인{" "}
                      <strong className="text-blue-700">
                        HSS(Home Subscriber Server)
                      </strong>
                      에 접근하여 거기 저장된 USIM 가입자 인증정보를
                      탈취했습니다. HSS는 LTE/5G 코어망에서{" "}
                      <strong>가입자 프로필(USIM 정보)</strong>을 관리하는
                      데이터베이스로, 가입자 식별과 인증에 필요한 거의 모든
                      정보(IMSI, 인증키 등)를 가지고 있습니다. 즉, 이동통신망의
                      핵심 신원정보 저장소라고 할 수 있습니다.
                    </p>

                    <p className="mb-4 leading-relaxed">
                      SKT의 HSS는 서울 성수동 사옥 IDC에 물리적으로 위치한
                      것으로 알려졌으며, 5대의 HSS 장비 중 3대가 이번 공격에
                      직접 피해를 입었습니다. 이는 해커가 HSS 클러스터 일부에
                      악성코드를 심어 DB 덤프 혹은 파일 형태로 가입자 정보를
                      탈취했다는 뜻입니다. 실제 확인된 바에 따르면 4월 19일 밤,
                      3개 HSS에서 총{" "}
                      <strong className="text-red-600">
                        9.7GB 규모의 데이터
                      </strong>
                      가 외부로 전송된 로그가 포착되었습니다. KISA 조사 결과 이
                      파일들에는 가입자별 USIM 관련 정보가 다수 포함되어 있었고,
                      해커가 이를 빼낸 뒤 파일 삭제 흔적까지 남겼습니다.
                    </p>

                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        데이터 탈취 가능 방법
                      </h4>
                      <div className="space-y-4 text-sm text-slate-700">
                        <div>
                          <p className="font-medium text-blue-700 mb-1">
                            (1) DB 내보내기 및 전송
                          </p>
                          <p className="leading-relaxed">
                            해커가 HSS 데이터베이스에 직접 쿼리를 실행해 IMSI,
                            Ki 등 원하는 필드를 추출하고, 이를 파일로 저장한 뒤
                            외부로 전송했을 가능성이 높습니다. BPFDoor 백도어를
                            통해 원격 쉘을 가진 상태에서 mysqldump 혹은 DB API를
                            이용했을 것입니다. SKT 내부에선{" "}
                            <span className="italic">
                              &quot;HSS의 USIM 정보 파일이 외부로 전송되었다&quot;
                            </span>
                            고 표현했는데, 이는 HSS가 flat file로도 데이터를
                            보관하거나, 백업 파일(예: .dump)을 해커가 이용했음을
                            시사합니다.
                          </p>
                        </div>

                        <div>
                          <p className="font-medium text-blue-700 mb-1">
                            (2) 애플리케이션 파일 탈취
                          </p>
                          <p className="leading-relaxed">
                            또는 HSS 운영체제 상에 평소 운영 정보를 담은
                            파일(가입자 정보 캐시, 로그 등)이 존재했고, 이를
                            복사해 갔을 수도 있습니다. 그러나 IMSI-Ki같은 핵심
                            정보는 보통 DB에 암호화되어 저장되므로, 해커가 실제
                            의미있는 형태로 가져가려면 DB 접근이 필요했을
                            것입니다. 따라서 첫 번째 시나리오가 더 유력합니다.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="mb-4 leading-relaxed">
                      공격자들은 이렇게 확보한 대량의 가입자 데이터를 4월
                      18~19일 사이 한번에 외부로 빼내는 과정에서 트래픽 폭증을
                      일으켰고, 이것이 SOC(보안관제센터)에 포착된 것입니다. 18일
                      오후에 감지된{" "}
                      <span className="italic">
                        &quot;장비 간 비정상 데이터 이동&quot;
                      </span>
                      이 바로 HSS→외부로의 대량 전송이었던 것이죠. SKT는 즉시
                      해당 구간 네트워크를 살펴 악성코드 존재를 확인하고
                      차단했지만, 이미 수GB의 자료가 유출된 뒤였습니다.
                    </p>

                    <p className="mb-4 leading-relaxed">
                      특이한 점은, 유출된 데이터 양(약 9.7GB) 대비 SKT 가입자
                      수가 2천3백만 명 수준이라는 것입니다. 단순 계산으로 가입자
                      1인당 수백 바이트~수 킬로바이트 수준 정보만 있다면 9.7GB는
                      훨씬 많은 가입자 분량을 담고 있습니다. SKT 조사단은{" "}
                      <span className="italic">
                        &quot;가입자당 USIM 정보는 100~300KB 수준&quot;
                      </span>
                      이라고 밝혔는데, 9.7GB라면 약 3천만~1억 건 범위의 레코드에
                      해당합니다. 여기에는 중복이나 기타 부가 데이터가
                      포함되었을 가능성이 높습니다.
                    </p>

                    {/* 유출된 정보의 종류와 기술적 의미 (추가) */}
                    <div className="bg-red-50 border border-red-100 rounded-lg p-4 my-6">
                      <h4 className="text-red-800 font-semibold mb-2 flex items-center">
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
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        유출된 정보의 종류와 기술적 의미
                      </h4>
                      <p className="text-sm text-slate-700 mb-3">
                        과기정통부 조사에서{" "}
                        <strong className="text-red-600">
                          &quot;유심 복제에 활용될 수 있는 정보 4종과, 유심 정보
                          처리용 관리 정보 21종&quot;
                        </strong>
                        이 유출된 것으로 확인되었습니다. 구체적으로 유출된 4종의
                        핵심 정보는 다음과 같습니다:
                      </p>

                      <ul className="space-y-3 text-sm text-slate-700">
                        <li className="flex gap-2">
                          <span className="font-bold text-red-700 min-w-fit">
                            IMSI
                          </span>
                          <span>
                            <span className="font-medium">
                              국제 이동가입자 식별번호
                            </span>
                            : 전 세계적으로 유일한 가입자 ID입니다. 보통 15자리
                            숫자로 구성되며, 앞부분은 통신사/국가 식별(MCC/MNC),
                            뒷부분은 가입자 번호입니다. USIM 칩 안에 저장되어
                            단말이 기지국에 접속할 때 자신을 식별하는 데
                            사용됩니다. IMSI만으로는 통신 서비스를 부정사용할 수
                            없고, <strong>인증키(Ki)</strong>가 함께 있어야
                            합니다.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-red-700 min-w-fit">
                            Ki
                          </span>
                          <span>
                            <span className="font-medium">가입자 인증키</span>:
                            USIM 인증 키로, SIM 카드와 HSS/인증센터(AuC)
                            <sup
                              className="text-blue-600 cursor-help"
                              title="AuC(Authentication Center): 이동통신망에서 사용자 인증을 담당하는 서버로, HSS와 함께 가입자 인증 정보를 관리. USIM 카드와 동일한 인증 키를 가지고 있어 정당한 사용자인지 확인하는 역할을 함"
                            >
                              8
                            </sup>
                            에만 저장된 비밀키입니다. 길이는 128bit (16바이트)
                            정도이며, 통신망에서 가입자 인증 절차(AKA)
                            <sup
                              className="text-blue-600 cursor-help"
                              title="AKA(Authentication and Key Agreement): 이동통신에서 사용되는 가입자 인증 프로토콜로, USIM 카드와 통신망 사이의 상호 인증 및 암호화 키 생성에 사용. 무선 네트워크 접속 시 사용자 신원을 확인하고 안전한 통신 채널을 수립하는 데 필수적인 보안 메커니즘"
                            >
                              9
                            </sup>
                            에 사용됩니다. Ki가 유출되면 공격자는 IMSI에
                            대응하는 Ki를 획득한 것이므로, 해당 USIM을 완전히
                            복제할 수 있는 위험이 발생합니다.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-red-700 min-w-fit">
                            MSISDN
                          </span>
                          <span>
                            <span className="font-medium">전화번호</span>:
                            일반적으로 말하는 전화번호입니다(예: 010-1234-5678).
                            HSS에는 IMSI와 1:1 또는 1:N으로 매핑되어 저장됩니다.
                            해커는 IMSI-Ki뿐 아니라 그것이 어느 전화번호의
                            가입자인지도 알게 되어, 사회공학 공격 등에 악용될 수
                            있습니다.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-red-700 min-w-fit">
                            OPc
                          </span>
                          <span>
                            <span className="font-medium">사업자 인증키</span>:
                            3G/4G USIM 인증에 Milenage 알고리즘이 사용되며, 이때
                            각 통신사 고유의 상수인 OP 또는 OPc가 활용됩니다. 이
                            값은 동일 통신사 모든 USIM에 공통이거나, 각 USIM별로
                            생성되어 HSS에 저장됩니다.
                          </span>
                        </li>
                      </ul>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-4 mb-2">
                        <h5 className="text-yellow-800 font-semibold mb-1 flex items-center">
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
                            <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                            <line x1="12" y1="9" x2="12" y2="13"/>
                            <line x1="12" y1="17" x2="12.01" y2="17"/>
                          </svg>
                          2차 조사 결과 추가 발견된 유출 가능성 정보
                        </h5>
                        <p className="text-sm text-slate-700">
                          민관합동조사단이 2025년 5월 19일 발표한 2차 조사 결과에 따르면, 통합고객인증 서버와 연동되는 서버 2대에서 다음과 같은 추가 정보 유출 가능성이 확인되었습니다:
                        </p>
                        <ul className="mt-2 space-y-2 text-sm text-slate-700 pl-5 list-disc">
                          <li>
                            <span className="font-medium text-yellow-800">IMEI(단말기 고유식별번호)</span>: 
                            총 291,831건의 단말기 고유식별번호가 포함된 파일이 감염된 서버의 임시 저장 파일에서 발견되었습니다. 이 정보는 특정 기간(2024.12.3~2025.4.24) 동안은 유출되지 않았으나, 로그가 없는 기간(2022.6.15~2024.12.2)의 유출 여부는 확인할 수 없는 상태입니다.
                          </li>
                          <li>
                            <span className="font-medium text-yellow-800">개인정보</span>: 
                            이름, 생년월일, 전화번호, 이메일 등 다수의 개인정보가 감염된 서버 2대에서 발견되었습니다. 이 정보들의 유출 여부도 로그가 없는 기간에 대해서는 확인이 불가능합니다.
                          </li>
                        </ul>
                      </div>

                      <p className="text-sm text-slate-700 mt-3">
                        1차 조사 결과에서는 <strong>IMEI(단말기 고유식별번호)</strong>가 HSS가 아닌
                        별도 시스템에서 관리되어 유출되지 않았다고 밝혔으나, 2차 조사에서는 이 정보가 포함된 파일이 발견되었습니다. 
                        <strong className="text-red-600"> IMEI가 유출되었다면 더욱 심각한 문제</strong>가 될 수 있습니다. 일반적으로 통신사는 IMSI와 IMEI를 매칭하여 비정상 접속을 판단하기 때문입니다.
                        IMEI까지 함께 유출된 경우, 복제 SIM으로 정상 단말기인 것처럼 위장하는 것이 더 용이해집니다.
                      </p>

                      <p className="text-sm text-slate-700 mt-3">
                        결론적으로, 이번 유출 정보의 기술적 의미는 이동통신
                        가입자의 가장 근본적인 보안근간이 노출되었다는 점입니다.
                        비유하자면 수백만 명의 휴대폰에 대한{" "}
                        <strong className="text-red-600">
                          &quot;디지털 열쇠 복제본&quot;
                        </strong>
                        이 유출된 것으로, 통신사 입장에선 이를 무력화하려면
                        열쇠를 전부 교체(USIM 교체)하거나 자물쇠 구조를 바꾸는
                        것(네트워크 인증체계 보강) 외엔 방법이 없습니다. 
                        2차 조사 결과는 이 문제가 더욱 복잡하고 심각할 수 있음을 시사합니다.
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 my-6">
                      <h4 className="text-blue-800 font-semibold mb-2 flex items-center">
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
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10 9 9 9 8 9" />
                        </svg>
                        HSS 침투 후 해커의 행동 흐름
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex gap-2">
                          <span className="font-bold text-blue-700">1.</span>
                          <span>
                            <span className="font-medium">권한 상승</span>: HSS
                            서버에 접근한 해커는 루트 또는 DB관리 권한을
                            획득해야 했습니다. BPFDoor로 진입한 계정이 일반
                            권한이었다면, 커널 익스플로잇이나 구성 오류를 이용해
                            root로 상승했을 것입니다.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-blue-700">2.</span>
                          <span>
                            <span className="font-medium">데이터 수집</span>:
                            권한을 얻은 후 HSS DB나 파일시스템에서 IMSI, Ki,
                            MSISDN 등 데이터를 수집했습니다. 아마도 SQL 쿼리로
                            전체 테이블 dump를 받았거나, HSS 백엔드
                            애플리케이션의 export 기능을 악용했을 가능성이
                            있습니다.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-blue-700">3.</span>
                          <span>
                            <span className="font-medium">압축/암호화</span>:
                            대량의 민감정보를 유출할 때 흔적을 줄이기 위해,
                            해커는 데이터를 압축하고 암호화했을 것입니다. 예컨대
                            tar.gz로 묶은 뒤 자체 암호화 유틸리티로 파일을
                            위장했을 가능성이 있습니다.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-blue-700">4.</span>
                          <span>
                            <span className="font-medium">
                              전송 및 흔적삭제
                            </span>
                            : 준비된 데이터를 외부 C2 서버로 전송했으며,
                            BPFDoor의 reverse shell을 통해 직접 전송하거나,
                            일시적으로 FTP/HTTP 통신을 개시했을 가능성이
                            높습니다. 전송 후에는 로그와 흔적을 지웠습니다.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="leading-relaxed">
                      KISA와 조사단은 이후 해커의 행위 타임라인과 침입 지점을
                      포렌식으로 재구성 중이며,
                      <span className="italic">
                        &quot;정확한 악성코드 유입 시점과 경로를 확인하고 있다&quot;
                      </span>
                      고 밝혔습니다. 아직 초기 침투 시각(HSS에 악성코드가 심긴
                      시점)이 언제인지 공식 발표되진 않았으나, 4월 18일 이전
                      며칠간 혹은 수주간 잠복해 있었을 가능성도 있습니다. (APT
                      공격에서는 몇 개월간 잠복 후 특정일에 작전 개시하는 경우도
                      흔함.)
                    </p>

                    <p className="leading-relaxed mt-4">
                      요컨대, HSS 침투 과정은{" "}
                      <strong className="text-blue-700">
                        &quot;외부 → VPN 취약점 → 내부 리눅스 서버 → 백도어 설치 →
                        HSS 서버로 이동 → 데이터 탈취&quot;
                      </strong>
                      의 단계적 Lateral Movement
                      <sup
                        className="text-blue-600 cursor-help"
                        title="Lateral Movement: '수평적 이동'이라는 의미로, 해커가 초기 침투 지점에서 네트워크 내부의 다른 시스템으로 이동하는 기법. 내부망에 첫 진입한 후 더 중요한 시스템을 찾아 접근 권한을 확대해나가는 해킹 과정의 핵심 단계"
                      >
                        9
                      </sup>
                      가 이루어진 사례로 볼 수 있습니다. 해커들은 최종 목표
                      시스템인 HSS에 도달하기까지 다단계로 움직였고, 각 단계마다
                      은폐 기술을 활용하여 보안 장비의 탐지를 회피했습니다.
                      이러한 해킹의 전술 기법은 전형적인 APT 공격 패턴과
                      부합하며, 목표지향적이고, 필요한 모든 수법(취약점
                      익스플로잇, 백도어, 권한상승, 적응형 데이터 유출)을
                      동원했습니다.
                    </p>

                    {/* 보안 위협과 영향 (추가) */}
                    <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 my-6">
                      <h4 className="text-amber-800 font-semibold mb-2 flex items-center">
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
                          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                          <line x1="12" y1="9" x2="12" y2="13" />
                          <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                        USIM 데이터 유출로 인한 보안 위협
                      </h4>

                      <ul className="space-y-3 text-sm text-slate-700">
                        <li className="flex gap-2">
                          <span className="font-bold text-amber-700 min-w-fit">
                            USIM 복제 위험
                          </span>
                          <span>
                            유출된 정보(특히 IMSI + Ki)로 공격자는 정식 USIM과
                            구분할 수 없는 복제 USIM을 제작할 수 있습니다. 이는
                            통신사 네트워크가 원본과 복제본을 구별할 수 없게
                            만들어, 인증 시스템의 근간을 훼손합니다.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-amber-700 min-w-fit">
                            SIM 스와핑
                          </span>
                          <span>
                            악의적인 공격자가 특정인의 전화번호를 가로채는
                            기법으로, 복제된 USIM으로 정상 가입자의
                            통화·문자·인증코드 등을 가로챌 수 있습니다. OTP나
                            인증문자를 훔쳐 금융사기에 악용될 위험이 있습니다.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-amber-700 min-w-fit">
                            감청 및 추적
                          </span>
                          <span>
                            IMSI, Ki 정보를 알고 있는 공격자는 &quot;스팅레이&quot;와 같은
                            장비를 통해 특정 사용자의 위치를 추적하거나 통화를
                            감청할 수 있는 기술적 기반을 갖게 됩니다. 이는 개인
                            프라이버시 침해뿐 아니라 국가 안보에도 위협이
                            됩니다.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-amber-700 min-w-fit">
                            디지털 신분증 도용
                          </span>
                          <span>
                            이동통신 인증정보는 디지털 신분증 역할을 하며,
                            이것이 유출되면 다양한 온라인 서비스에서 본인 확인
                            시스템을 우회할 수 있습니다. 특히 통신사 기반 인증
                            서비스를 활용하는 금융, 공공서비스의 취약점이 될 수
                            있습니다.
                          </span>
                        </li>
                      </ul>

                      <p className="text-sm text-slate-700 mt-3">
                        이러한 위험 때문에 SK텔레콤은 전례 없는 전체 가입자 USIM
                        교체 조치를 결정했습니다. 과기정통부와
                        개인정보보호위원회도 이 사태를 심각하게 인식하여
                        유출정보 개별 통지, USIM 보호 서비스 제공 등 강력한 대응
                        조치를 권고했습니다. 이번 사건은 통신 인프라 보안이 국가
                        안보와 직결된다는 점을 다시 한번 상기시켰습니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2.4 SK텔레콤 네트워크 구조와 HSS 서버 위치 (추가) */}
                <div className="mt-10">
                  <h3
                    className="text-xl font-bold text-purple-900 mb-3"
                    id="skt-network"
                  >
                    SK텔레콤 네트워크 구조와 HSS 서버 위치
                  </h3>

                  <div className="pl-4 border-l-4 border-purple-200 py-1">
                    <p className="mb-4 leading-relaxed">
                      이번 해킹 사고를 더 깊이 이해하기 위해 SK텔레콤의 전체적인
                      네트워크 구조와 HSS 서버의 위치를 살펴볼 필요가 있습니다.
                      SK텔레콤은 국내 최대 통신사로서 4G/5G 네트워크를 포괄하는
                      복잡한 네트워크 인프라를 운영하고 있습니다.
                    </p>

                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
                      <h4 className="font-semibold text-blue-800 mb-2">
                        SK텔레콤 모바일 네트워크 구조
                      </h4>
                      <div className="space-y-6 my-4">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2">
                            LTE 네트워크 구조
                          </h5>
                          <ImageViewer 
                            src="/images/analysis/skt-lte-network-architecture.jpg"
                            alt="SK텔레콤 LTE 네트워크 아키텍처"
                            caption="SK텔레콤 LTE 네트워크 구조"
                          />
                        </div>
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2">
                            5G 네트워크 구조
                          </h5>
                          <ImageViewer 
                            src="/images/analysis/skt-5g-network-architecture.gif"
                            alt="SK텔레콤 5G 네트워크 아키텍처"
                            caption="SK텔레콤 5G 네트워크 구조"
                          />
                        </div>
                        <div className="text-xs text-right text-gray-500 mt-1">
                          출처: 넷마니아즈(Netmanias) - SK Telecom Network
                          Architecture
                        </div>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">
                        SK텔레콤의 네트워크는 크게 무선 액세스 네트워크(RAN)와
                        코어 네트워크로 구분됩니다. 4G/5G 네트워크에서 HSS(Home
                        Subscriber Server)는 코어 네트워크의 핵심 요소로, 가입자
                        데이터베이스 역할을 담당합니다. 특히 HSS는 EPC(Evolved
                        Packet Core) 내에 위치하며, 삼성전자, 에릭슨 등의 장비를
                        사용하고 있습니다. 5G 네트워크에서는 HSS의 기능이
                        UDM/UDR로 진화하였습니다.
                      </p>
                    </div>

                    <div className="space-y-5 mb-6">
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-blue-800 mb-2">
                          HSS 서버의 역할과 네트워크 내 위치
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          HSS 서버는 이동통신망의 인증 및 권한 부여를 담당하는
                          중앙 데이터베이스입니다. 기본적으로 다음과 같은 정보를
                          관리합니다:
                        </p>
                        <ul className="list-disc pl-5 mt-2 text-sm text-slate-700 space-y-1">
                          <li>가입자 식별정보 (IMSI)</li>
                          <li>인증 키 (Ki) 및 인증 벡터</li>
                          <li>가입자 프로필 및 서비스 정보</li>
                          <li>위치 정보 및 라우팅 데이터</li>
                          <li>QoS(Quality of Service) 파라미터</li>
                        </ul>
                        <p className="text-sm text-slate-700 leading-relaxed mt-3">
                          네트워크 구조상 HSS는 MME
                          <sup
                            className="text-blue-600 cursor-help"
                            title="MME(Mobility Management Entity): 4G LTE 네트워크의 핵심 구성요소로, 사용자 인증과 이동성 관리를 담당합니다. 단말기가 네트워크에 연결될 때의 인증 절차를 처리하고, 사용자가 이동할 때 위치 추적 및 핸드오버 관리를 수행합니다."
                          >
                            10
                          </sup>
                          (Mobility Management Entity), SGW
                          <sup
                            className="text-blue-600 cursor-help"
                            title="SGW(Serving Gateway): 4G LTE 네트워크에서 데이터 패킷을 처리하고 사용자 데이터 경로 전환을 관리하는 구성요소입니다. 여러 기지국 간 사용자 이동 시 데이터 경로를 유지하고, IP 패킷의 라우팅과 포워딩을 담당합니다."
                          >
                            11
                          </sup>
                          (Serving Gateway), PGW
                          <sup
                            className="text-blue-600 cursor-help"
                            title="PGW(Packet Data Network Gateway): 4G LTE 네트워크와 외부 IP 네트워크를 연결하는 게이트웨이입니다. 사용자 단말기에 IP 주소를 할당하고, 데이터 패킷을 외부 네트워크로 라우팅합니다."
                          >
                            12
                          </sup>
                          (Packet Gateway) 등 다른 코어 네트워크 요소들과
                          연동되어 작동합니다. 특히 SK텔레콤은 이중화된 HSS
                          구조를 통해 안정성을 확보하고 있으며, 여러 지역에 분산
                          배치된 HSS 서버 클러스터를 운영합니다.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-blue-800 mb-2">
                          5G 네트워크에서의 HSS 진화
                        </h4>
                        <p className="text-sm text-slate-700 leading-relaxed">
                          5G 네트워크에서는 4G의 HSS가 UDM
                          <sup
                            className="text-blue-600 cursor-help"
                            title="UDM(Unified Data Management): 5G 네트워크에서 사용자 인증과 구독 정보를 관리하는 기능으로, 4G의 HSS 역할을 확장한 것입니다. 가입자 데이터 관리를 통합하여 더 효율적인 네트워크 운영을 가능하게 합니다."
                          >
                            13
                          </sup>
                          (Unified Data Management)과 UDR
                          <sup
                            className="text-blue-600 cursor-help"
                            title="UDR(Unified Data Repository): 5G 네트워크에서 가입자 데이터를 저장하는 중앙 저장소입니다. UDM과 함께 작동하여 5G 네트워크의 가입자 정보 관리 기능을 수행합니다."
                          >
                            14
                          </sup>
                          (Unified Data Repository)로 기능이 분리되어
                          진화했습니다. SK텔레콤의 5G 네트워크는 삼성전자의 5G
                          코어 솔루션을 사용하고 있으며, 가상화된 코어
                          네트워크를 기반으로 운영됩니다. UDM/UDR은 HSS보다 더
                          유연하고 확장성 있는 구조로 설계되어 있어 다양한
                          사용자와 서비스를 효율적으로 관리할 수 있습니다.
                        </p>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-4 my-6">
                      <h4 className="text-yellow-800 font-semibold mb-2 flex items-center">
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
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        HSS 서버 보안 취약점
                      </h4>
                      <p className="text-sm text-slate-700 mb-3">
                        이번 해킹 사고에서 드러난 HSS 서버의 보안 취약점은
                        다음과 같습니다:
                      </p>

                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex gap-2">
                          <span className="font-bold text-yellow-700 min-w-fit">
                            내부망 격리 미흡
                          </span>
                          <span>
                            SK텔레콤의 네트워크 구조에서 HSS 서버가 위치한 코어
                            네트워크는 일반적으로 외부와 격리되어 있어야 합니다.
                            그러나 VPN 취약점을 통한 초기 침투 이후, 내부망에서
                            HSS 서버로의 접근이 가능했다는 점은 네트워크
                            세그먼테이션이 적절히 이루어지지 않았음을
                            시사합니다.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-yellow-700 min-w-fit">
                            접근 제어 취약점
                          </span>
                          <span>
                            HSS 서버는 최고 수준의 접근 제어가 적용되어야 하는
                            핵심 인프라임에도 불구하고, 해커가 권한 상승을 통해
                            데이터베이스에 접근할 수 있었던 것으로 보입니다.
                            이는 다단계 인증 및 권한 관리의 취약점을 드러냅니다.
                          </span>
                        </li>
                        <li className="flex gap-2">
                          <span className="font-bold text-yellow-700 min-w-fit">
                            모니터링 체계 미비
                          </span>
                          <span>
                            대규모 데이터 유출(9.7GB)이 발생했음에도 실시간
                            탐지가 되지 않았다는 점은 비정상 트래픽 및 데이터
                            접근에 대한 모니터링 체계가 미비했음을 보여줍니다.
                            SK텔레콤의 네트워크는 DPI
                            <sup
                              className="text-blue-600 cursor-help"
                              title="DPI(Deep Packet Inspection): 네트워크 패킷의 헤더뿐만 아니라 내용(페이로드)까지 검사하는 고급 패킷 필터링 기술입니다. 네트워크 보안 모니터링과 트래픽 분석에 사용됩니다."
                            >
                              12
                            </sup>
                            (Deep Packet Inspection)와 같은 고급 모니터링
                            솔루션을 갖추고 있지만, 내부망에서의 이상 행위
                            탐지에는 한계가 있었던 것으로 판단됩니다.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="leading-relaxed">
                      SK텔레콤의 4G/5G 네트워크 구조를 고려할 때, 이번 해킹은
                      단순한 시스템 침입을 넘어 통신사 코어 인프라의 가장 민감한
                      부분을 노린 고도의 표적 공격이었습니다. 특히 HSS 서버가
                      네트워크 구조상 여러 보안 레이어로 보호되어 있음에도
                      불구하고 침투가 가능했다는 점은, 다단계
                      방어(Defense-in-Depth) 전략의 중요성과 내부자 위협에 대한
                      대비가 필요함을 시사합니다.
                    </p>
                  </div>
                </div>

                {/* 2.5 BPF/eBPF 기술 심층 분석 - 새로운 섹션 추가 */}
                <div className="mt-10">
                  <h3
                    className="text-xl font-bold text-purple-900 mb-3"
                    id="bpf-analysis"
                  >
                    BPF/eBPF 기술 심층 분석: 원리와 응용
                  </h3>

                  <div className="pl-4 border-l-4 border-purple-200 py-1">
                    <p className="mb-4 leading-relaxed">
                      이번 해킹 사태에서 공격자는 BPF 기술을 악용한 BPFDoor
                      악성코드를 사용했지만, 실제 Berkeley Packet Filter(BPF)와
                      그 확장 버전인 eBPF는 현대 리눅스 시스템의 중요한 기술적
                      기반입니다. 여기서는 BPF/eBPF의 동작 원리와 아키텍처,
                      그리고 효과적인 방어 방안을 심층적으로 살펴보겠습니다.
                    </p>

                    <div className="bg-blue-50 rounded-lg border border-blue-100 p-5 my-5">
                      <h4 className="text-lg font-semibold text-blue-800 mb-3">
                        BPF/eBPF 아키텍처와 동작 원리
                      </h4>

                      <div className="space-y-4">
                        <div>
                          <h5 className="text-md font-medium text-blue-700 mb-2">
                            1. BPF의 역사적 발전
                          </h5>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            Berkeley Packet Filter는 1992년 Lawrence Berkeley
                            Laboratory에서 개발된 기술로, 처음에는 네트워크 패킷
                            필터링을 위해 설계되었습니다. 초기 형태인 Classic
                            BPF(cBPF)는 특정 패턴의 네트워크 패킷만 사용자
                            공간으로 전달함으로써 불필요한 패킷 처리를 줄이는
                            것이 주 목적이었습니다. 2014년에 리눅스 커널
                            3.15에서 Extended BPF(eBPF)가 도입되면서 단순한 패킷
                            필터링을 넘어 범용 실행 환경으로 발전하게
                            되었습니다.
                          </p>
                        </div>

                        <div>
                          <h5 className="text-md font-medium text-blue-700 mb-2">
                            2. eBPF의 필요성과 사용 목적
                          </h5>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            운영체제 커널은 시스템 전체를 관리하고 감독하는
                            특권적 위치에 있어 관측성, 보안, 네트워킹 기능을
                            구현하는 이상적인 장소입니다. 그러나 커널을 수정하는
                            전통적인 방법은 여러 제약이 있습니다:
                          </p>
                          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1 mt-2">
                            <li>
                              <strong>커널 소스 코드 변경</strong>: 커널 코드를
                              직접 수정하고 리눅스 커널 커뮤니티에 반영을
                              요청하는 과정은 수년이 걸릴 수 있으며, 모든 변경이
                              수용되는 것도 아닙니다.
                            </li>
                            <li>
                              <strong>커널 모듈 개발</strong>: 매 커널
                              릴리스마다 호환성이 깨질 수 있고, 보안 경계가 없어
                              시스템 전체가 손상될 위험이 있습니다.
                            </li>
                          </ul>
                          <p className="text-sm text-slate-700 leading-relaxed mt-2">
                            eBPF는 이러한 문제를 해결하기 위해 다음과 같은
                            목적으로 사용됩니다:
                          </p>
                          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1 mt-2">
                            <li>
                              <strong>동적 기능 확장</strong>: 커널 소스코드
                              수정이나 모듈 로딩 없이 런타임에 커널 기능을
                              안전하게 확장합니다.
                            </li>
                            <li>
                              <strong>프로그래밍 가능한 유연성</strong>:
                              개발자가 자신의 요구에 맞게 커널 동작을
                              커스터마이즈할 수 있습니다.
                            </li>
                            <li>
                              <strong>고성능 실행</strong>: JIT 컴파일을 통해
                              네이티브 코드와 유사한 성능을 제공합니다.
                            </li>
                            <li>
                              <strong>안전한 실행 모델</strong>: 검증 엔진을
                              통해 시스템 안정성과 보안을 유지합니다.
                            </li>
                            <li>
                              <strong>지속적인 혁신</strong>: 커널 업데이트
                              주기에 얽매이지 않는 빠른 기능 개발과 배포가
                              가능합니다.
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h5 className="text-md font-medium text-blue-700 mb-2">
                            3. 커널 내 가상 머신으로서의 eBPF
                          </h5>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            eBPF는 리눅스 커널 내에서 동작하는 가상
                            머신(VM)으로, 사용자 공간에서 작성된 프로그램을 커널
                            공간에서 안전하게 실행할 수 있게 합니다. 이 VM은
                            11개의 64비트 레지스터, 512바이트의 스택, 그리고
                            특정 메모리 영역에 접근할 수 있는 능력을 가지고
                            있습니다. eBPF VM은 RISC 기반 명령어 집합을
                            사용하며, 프로그램은 일련의 eBPF 명령어로
                            구성됩니다.
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed mt-2">
                            eBPF VM의 주요 구성 요소는 다음과 같습니다:
                          </p>
                          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1 mt-2">
                            <li>
                              <strong>명령어 세트 아키텍처(ISA)</strong>: 64비트
                              레지스터 10개(R0-R9), 스택 포인터 레지스터(R10)를
                              포함하는 RISC 스타일의 명령어 세트입니다. 이는
                              로드/스토어, 산술 연산, 점프, 호출 등의 명령어를
                              지원합니다.
                            </li>
                            <li>
                              <strong>메모리 모델</strong>: 512바이트 제한의
                              스택과 맵을 통한 영구 저장소를 제공합니다. 이는
                              eBPF 프로그램이 자체 데이터를 저장하고 사용자
                              공간과 통신하는 메커니즘입니다.
                            </li>
                            <li>
                              <strong>헬퍼 함수 인터페이스</strong>: 프로그램이
                              커널 함수를 직접 호출하는 대신, 안정적인 API인
                              헬퍼 함수를 통해 커널과 상호작용합니다. 이는
                              프로그램의 호환성을 보장하고 커널 내부 구현과의
                              의존성을 줄입니다.
                            </li>
                            <li>
                              <strong>JIT 컴파일러</strong>: eBPF 바이트코드를
                              호스트 CPU의 네이티브 명령어로 변환하여 실행
                              성능을 최적화합니다.
                            </li>
                            <li>
                              <strong>검증 엔진</strong>: 커널 무결성을 보호하기
                              위해 프로그램이 안전하게 종료되고, 허용된 메모리
                              영역만 접근하며, 허용된 함수만 호출하는지
                              확인합니다.
                            </li>
                          </ul>
                          <p className="text-sm text-slate-700 leading-relaxed mt-2">
                            이러한 아키텍처는 eBPF 프로그램이 높은 성능으로
                            동작하면서도 커널의 안정성과 보안을 해치지 않도록
                            보장합니다. eBPF VM은 사실상 커널 내부의 격리된
                            샌드박스 환경으로, 커널 모듈보다 훨씬 더 안전한
                            방식으로 커널 기능을 확장할 수 있게 해줍니다.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
                            <h5 className="text-md font-medium text-blue-700 mb-2">
                              eBPF 프로그램 실행 흐름
                            </h5>
                            <ol className="text-sm text-slate-700 list-decimal pl-5 space-y-2">
                              <li>
                                <strong>작성 및 컴파일</strong>: 개발자는 C,
                                Rust 등의 언어로 eBPF 프로그램을 작성하고,
                                LLVM과 같은 컴파일러를 사용해 eBPF 바이트코드로
                                변환합니다.
                              </li>
                              <li>
                                <strong>로딩</strong>: bpf() 시스템 호출을 통해
                                eBPF 바이트코드가 커널에 로드됩니다.
                              </li>
                              <li>
                                <strong>검증</strong>: eBPF 검증기(Verifier)가
                                프로그램의 안전성을 검사합니다. 무한 루프 방지,
                                메모리 접근 제한, 허용된 함수 호출 확인 등의
                                검증을 수행합니다.
                              </li>
                              <li>
                                <strong>JIT 컴파일</strong>: 검증을 통과한
                                코드는 JIT(Just-In-Time) 컴파일러에 의해
                                네이티브 기계어로 변환되어 성능을 최적화합니다.
                              </li>
                              <li>
                                <strong>연결(Attach)</strong>: 컴파일된
                                프로그램이 특정 이벤트(네트워크 패킷 수신,
                                시스템 호출 등)에 연결됩니다.
                              </li>
                              <li>
                                <strong>실행</strong>: 정의된 이벤트가 발생할
                                때마다 eBPF 프로그램이 실행됩니다.
                              </li>
                            </ol>
                          </div>

                          <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm">
                            <h5 className="text-md font-medium text-blue-700 mb-2">
                              eBPF 검증기(Verifier) 작동 원리
                            </h5>
                            <p className="text-sm text-slate-700 mb-2 leading-relaxed">
                              커널 보호를 위한 eBPF 검증기는 다음과 같은 핵심
                              검사를 수행합니다:
                            </p>
                            <ol className="text-sm text-slate-700 list-decimal pl-5 space-y-2">
                              <li>
                                <strong>무한 루프 방지</strong>: 모든 프로그램
                                경로가 유한한지 확인하며, 커널 버전 5.3부터는
                                유한한 루프도 제한적으로 허용됩니다.
                              </li>
                              <li>
                                <strong>메모리 안전성</strong>: 모든 메모리
                                접근이 유효한 범위 내에서 이루어지는지
                                검사합니다.
                              </li>
                              <li>
                                <strong>허용된 함수 호출</strong>: 프로그램이
                                허용된 helper 함수만 호출하는지 확인합니다.
                              </li>
                              <li>
                                <strong>컨텍스트 유효성</strong>: 프로그램이
                                실행 컨텍스트에 적합한 작업만 수행하는지
                                검사합니다.
                              </li>
                              <li>
                                <strong>스택 크기 제한</strong>: 512바이트 스택
                                제한을 초과하지 않는지 확인합니다.
                              </li>
                            </ol>
                          </div>
                        </div>

                        <div>
                          <h5 className="text-md font-medium text-blue-700 mb-2">
                            6. eBPF 맵(Maps): 데이터 공유 메커니즘
                          </h5>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            eBPF 맵은 사용자 공간 프로그램과 커널 내 eBPF
                            프로그램 간의 데이터 공유와 지속성을 제공하는 핵심
                            메커니즘입니다. 다양한 유형의 맵(해시 맵, 배열, 큐
                            등)을 통해 키-값 쌍 형태로 데이터를 저장하고 접근할
                            수 있습니다. 이 맵들은 bpf() 시스템 호출을 통해
                            생성되며, 사용자 공간과 커널 공간 사이의 데이터
                            교환, eBPF 프로그램 간 통신, 그리고 상태 저장에
                            활용됩니다.
                          </p>
                          <p className="text-sm text-slate-700 leading-relaxed mt-2">
                            eBPF 맵은 다양한 타입이 제공되어 다양한 사용 사례에
                            최적화되어 있습니다:
                          </p>
                          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1 mt-2">
                            <li>
                              <strong>배열(Array)</strong>: 고정 크기의 원소에
                              인덱스로 접근하는 단순한 배열 구조로, 빠른 룩업이
                              필요한 경우에 적합합니다.
                            </li>
                            <li>
                              <strong>해시 테이블(Hash)</strong>: 키-값 쌍을
                              저장하는 해시 테이블로, 동적인 키 집합에
                              효율적입니다.
                            </li>
                            <li>
                              <strong>LRU(Least Recently Used)</strong>: 가장
                              최근에 사용되지 않은 항목부터 제거하는 캐시
                              메커니즘이 포함된 맵입니다.
                            </li>
                            <li>
                              <strong>링 버퍼(Ring Buffer)</strong>: 이벤트나
                              로그를 효율적으로 전달하기 위한 선입선출(FIFO) 큐
                              구조의 맵입니다.
                            </li>
                            <li>
                              <strong>스택 트레이스(Stack Trace)</strong>: 스택
                              트레이스를 저장하고 검색하기 위한 특수 맵입니다.
                            </li>
                            <li>
                              <strong>LPM(Longest Prefix Match) Trie</strong>:
                              IP 라우팅과 같은 최장 접두사 매칭에 최적화된
                              맵입니다.
                            </li>
                          </ul>
                          <p className="text-sm text-slate-700 leading-relaxed mt-2">
                            이러한 맵을 통해 eBPF는 단순한 일회성 작업을 넘어
                            상태를 유지하고 복잡한 로직을 구현할 수 있는 강력한
                            플랫폼으로 발전했습니다.
                          </p>
                        </div>

                        <div>
                          <h5 className="text-md font-medium text-blue-700 mb-2">
                            7. 프로그램 타입 및 이벤트 후크
                          </h5>
                          <p className="text-sm text-slate-700 mb-2 leading-relaxed">
                            eBPF 프로그램은 다양한 이벤트에 연결(attach)될 수
                            있으며, 이는 프로그램 타입에 따라 결정됩니다:
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                            <div className="bg-gray-50 p-2 rounded-lg">
                              <strong>XDP (eXpress Data Path)</strong>: 네트워크
                              드라이버 수준에서 패킷을 처리합니다. 매우 빠른
                              패킷 필터링과 처리를 제공합니다.
                            </div>
                            <div className="bg-gray-50 p-2 rounded-lg">
                              <strong>트래픽 제어 (TC)</strong>: 네트워크 스택
                              내에서 패킷 처리를 수행합니다. QoS(Quality of
                              Service) 구현에 활용됩니다.
                            </div>
                            <div className="bg-gray-50 p-2 rounded-lg">
                              <strong>소켓 필터</strong>: 소켓 레벨에서 패킷을
                              필터링합니다. Berkeley Packet Filter의 기본 활용
                              사례입니다.
                            </div>
                            <div className="bg-gray-50 p-2 rounded-lg">
                              <strong>kprobe/uprobe</strong>: 커널/사용자 공간
                              함수 실행을 인터셉트하고 추적합니다. 동적
                              트레이싱에 활용됩니다.
                            </div>
                            <div className="bg-gray-50 p-2 rounded-lg">
                              <strong>트레이스포인트</strong>: 커널 내 정적으로
                              정의된 추적 지점에 연결됩니다. 안정적인 커널
                              인터페이스를 제공합니다.
                            </div>
                            <div className="bg-gray-50 p-2 rounded-lg">
                              <strong>성능 이벤트</strong>: 하드웨어/소프트웨어
                              성능 이벤트를 캡처합니다. 프로파일링에 활용됩니다.
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="text-md font-medium text-blue-700 mb-2">
                            8. eBPF 성능과 최적화
                          </h5>
                          <p className="text-sm text-slate-700 leading-relaxed">
                            eBPF의 주요 장점 중 하나는 높은 성능입니다. eBPF는
                            여러 성능 최적화 기술을 활용합니다:
                          </p>
                          <ul className="text-sm text-slate-700 list-disc pl-5 space-y-1 mt-2">
                            <li>
                              <strong>JIT 컴파일</strong>: 바이트코드를 CPU의
                              네이티브 명령어로 변환하여 해석 오버헤드를
                              제거합니다.
                            </li>
                            <li>
                              <strong>컨텍스트 전환 최소화</strong>: 커널-사용자
                              공간 전환을 줄여 시스템 호출 오버헤드를
                              최소화합니다.
                            </li>
                            <li>
                              <strong>초기 패킷 처리</strong>: XDP 프로그램은
                              네트워크 스택 진입 전에 패킷을 처리하여 불필요한
                              처리를 제거합니다.
                            </li>
                            <li>
                              <strong>병렬 처리</strong>: 여러 CPU 코어에서
                              독립적으로 eBPF 프로그램을 실행하여 확장성을
                              제공합니다.
                            </li>
                            <li>
                              <strong>하드웨어 오프로딩</strong>: 일부 네트워크
                              카드는 eBPF 프로그램을 직접 하드웨어에서 실행할 수
                              있습니다.
                            </li>
                          </ul>
                          <p className="text-sm text-slate-700 leading-relaxed mt-2">
                            이러한 최적화 기술 덕분에 eBPF는 커널 모듈과 유사한
                            성능을 제공하면서도 더 안전한 실행 환경을
                            제공합니다. 실제 성능 측정에서는 XDP를 사용한 패킷
                            처리가 일반 리눅스 네트워킹 스택보다 최대 4-5배
                            빠르며, 초당 수천만 패킷을 처리할 수 있음이
                            입증되었습니다.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-lg border border-green-100 p-5 my-5">
                      <h4 className="text-lg font-semibold text-green-800 mb-3">
                        BPF/eBPF의 산업적 활용
                      </h4>

                      <div className="space-y-4">
                        <p className="text-sm text-slate-700 leading-relaxed">
                          eBPF는 오늘날 클라우드 네이티브 환경과 리눅스
                          시스템에서 다양한 목적으로 광범위하게 활용되고
                          있습니다. 많은 기업과 오픈소스 프로젝트들이 eBPF를
                          활용하여 모니터링, 네트워킹, 보안 솔루션을 개발하고
                          있습니다.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white p-3 rounded-lg border border-green-100">
                            <h5 className="font-medium text-green-700 mb-2">
                              모니터링 및 관측성
                            </h5>
                            <ul className="text-xs text-slate-700 list-disc pl-4 space-y-1">
                              <li>
                                <strong>Cilium</strong>: 컨테이너 네트워킹 및
                                보안
                              </li>
                              <li>
                                <strong>Pixie</strong>: 애플리케이션 모니터링
                              </li>
                              <li>
                                <strong>Falco</strong>: 런타임 보안 모니터링
                              </li>
                              <li>
                                <strong>BPFtrace</strong>: 시스템 분석 및 추적
                              </li>
                            </ul>
                          </div>
                          <div className="bg-white p-3 rounded-lg border border-green-100">
                            <h5 className="font-medium text-green-700 mb-2">
                              네트워킹
                            </h5>
                            <ul className="text-xs text-slate-700 list-disc pl-4 space-y-1">
                              <li>
                                <strong>Katran</strong>: 페이스북의 L4 로드
                                밸런서
                              </li>
                              <li>
                                <strong>Calico</strong>: 쿠버네티스 네트워킹
                              </li>
                              <li>
                                <strong>Cilium Service Mesh</strong>: L7 서비스
                                메시
                              </li>
                              <li>
                                <strong>TC (Traffic Control)</strong>: QoS 구현
                              </li>
                            </ul>
                          </div>
                          <div className="bg-white p-3 rounded-lg border border-green-100">
                            <h5 className="font-medium text-green-700 mb-2">
                              보안
                            </h5>
                            <ul className="text-xs text-slate-700 list-disc pl-4 space-y-1">
                              <li>
                                <strong>seccomp-BPF</strong>: 시스템 호출 제한
                              </li>
                              <li>
                                <strong>Tetragon</strong>: 런타임 보안 시행
                              </li>
                              <li>
                                <strong>BPFBox</strong>: 애플리케이션 샌드박싱
                              </li>
                              <li>
                                <strong>XDP 방화벽</strong>: 고성능 패킷 필터링
                              </li>
                            </ul>
                          </div>
                        </div>

                        <p className="text-sm text-slate-700 leading-relaxed">
                          특히 클라우드 네이티브 컴퓨팅 재단(CNCF)의 많은
                          프로젝트가 eBPF를 핵심 기술로 채택하고 있으며, 대규모
                          기술 기업(Google, Facebook, Netflix 등)도 자체
                          인프라에 eBPF 기반 솔루션을 구축하고 있습니다. 이는
                          eBPF가 가진 커널 수준의 유연성과 성능, 그리고 안전성이
                          현대 인프라 요구사항을 충족시키기 때문입니다.
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-50 rounded-lg border border-red-100 p-5 my-5">
                      <h4 className="text-lg font-semibold text-red-800 mb-3">
                        BPFDoor 악성코드의 기술적 분석과 방어 전략
                      </h4>

                      <div className="space-y-4">
                        <p className="text-sm text-slate-700 leading-relaxed">
                          BPFDoor는 eBPF의 정당한 기능을 악용하여 스텔스
                          백도어를 구현한 악성코드입니다. 공격자는 eBPF의 패킷
                          필터링 능력과 커널 수준 액세스를 이용해 기존 보안
                          시스템의 탐지를 회피합니다.
                        </p>

                        <div className="bg-white p-4 rounded-lg border border-red-100">
                          <h5 className="font-medium text-red-700 mb-2">
                            BPFDoor의 기술적 특징
                          </h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                            <div>
                              <p className="font-semibold mb-1">
                                1. 패시브 트리거 메커니즘
                              </p>
                              <p className="text-slate-700 leading-relaxed mb-2">
                                BPF 소켓 필터를 통해 특정 &quot;매직 패킷&quot;을
                                모니터링하고, 해당 패턴이 감지될 때만
                                활성화됩니다. 이 방식은 리스닝 포트 없이
                                동작하므로 포트 스캐닝으로 탐지되지 않습니다.
                              </p>

                              <p className="font-semibold mb-1">
                                2. 패킷 페이로드 분석
                              </p>
                              <p className="text-slate-700 leading-relaxed">
                                eBPF 프로그램이 모든 들어오는 패킷을 검사하여
                                특정 매직 문자열(command signature)을 찾습니다.
                                이 문자열은 TCP, UDP, ICMP 등 어떤 프로토콜에도
                                숨겨질 수 있으며, 일반적인 트래픽으로
                                위장됩니다.
                              </p>
                            </div>
                            <div>
                              <p className="font-semibold mb-1">
                                3. 동적 방화벽 조작
                              </p>
                              <p className="text-slate-700 leading-relaxed mb-2">
                                명령이 감지되면 BPFDoor는 일시적으로 iptables
                                규칙을 수정하여 공격자 IP의 커넥션을 허용한 후,
                                작업이 완료되면 다시 규칙을 원상복구함으로써
                                흔적을 지웁니다.
                              </p>

                              <p className="font-semibold mb-1">4. 은닉 기법</p>
                              <p className="text-slate-700 leading-relaxed">
                                프로세스 이름을 시스템 데몬(/sbin/udevd 등)으로
                                위장하고, /dev/shm 등의 메모리 파일시스템에
                                자신을 복사한 후 원본을 삭제하는 등의 방법으로
                                탐지를 회피합니다.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-4 rounded-lg border border-red-100">
                          <h5 className="font-medium text-red-700 mb-2">
                            방어 및 탐지 전략
                          </h5>
                          <ol className="list-decimal pl-5 text-sm text-slate-700 space-y-2">
                            <li>
                              <strong>eBPF 활동 모니터링</strong>: eBPF 프로그램
                              로딩과 연결을 감시합니다.
                              <code className="bg-gray-100 text-red-600 px-1 text-xs">
                                bpftool
                              </code>
                              을 사용하여 현재 로드된 eBPF 프로그램을 주기적으로
                              검사합니다.
                            </li>
                            <li>
                              <strong>패킷 캡처 및 이상 탐지</strong>: 딥 패킷
                              검사(DPI)를 수행하여 일반적이지 않은 패턴의 매직
                              패킷을 탐지합니다.
                            </li>
                            <li>
                              <strong>프로세스 무결성 확인</strong>: 실행 중인
                              프로세스의 실제 경로와 /proc 엔트리를 비교하여
                              불일치를 탐지합니다.
                            </li>
                            <li>
                              <strong>네트워크 세그먼테이션</strong>: 중요
                              서버의 네트워크를 분리하고, 필요한 통신만 허용하는
                              제로 트러스트 접근법을 적용합니다.
                            </li>
                            <li>
                              <strong>iptables 모니터링</strong>: 방화벽 규칙의
                              동적 변경을 추적하고 알림을 설정합니다.
                            </li>
                            <li>
                              <strong>메모리 상주 프로세스 검사</strong>:
                              /dev/shm, /tmp 등의 메모리 파일시스템에서 실행
                              중인 프로세스를 정기적으로 스캔합니다.
                            </li>
                            <li>
                              <strong>행위 기반 보안</strong>: 시스템 호출 패턴,
                              네트워크 활동, 파일 액세스 등을 분석하여 이상
                              행위를 탐지합니다.
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>

                    <p className="leading-relaxed mt-4">
                      BPF와 eBPF 기술 자체는 네트워크 및 시스템 성능을
                      향상시키고 보안을 강화하는 데 중요한 도구이지만, BPFDoor와
                      같은 악성코드에 악용될 수 있습니다. 보안 관리자는 이러한
                      기술의 양면성을 이해하고, 정당한 사용을 허용하면서도
                      악의적인 활동을 탐지하고 차단할 수 있는 체계를 구축해야
                      합니다. 이러한 커널 수준의 보안 위협에 대비하기 위해서는
                      지속적인 모니터링과 심층 방어 전략이 필수적입니다.
                    </p>
                  </div>
                </div>

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
                      <h3 className="text-xl font-semibold">
                        전체 타임라인 보기
                      </h3>
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
                      <span className="text-sm text-purple-100">
                        대응과 조치
                      </span>
                      <h3 className="text-xl font-semibold">
                        SK텔레콤 대응 전략
                      </h3>
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

                {/* 각주 섹션 */}
                <motion.div
                  variants={fadeInUp}
                  className="border-t border-gray-200 pt-8 mt-12"
                >
                  <h2 className="text-xl font-bold text-blue-900 mb-4">
                    용어 해설
                  </h2>
                  <div className="space-y-4 text-sm text-slate-700">
                    <div className="flex gap-2">
                      <span className="text-blue-600 font-semibold min-w-[24px]">
                        1.
                      </span>
                      <p>
                        <span className="font-medium">
                          APT(Advanced Persistent Threat)
                        </span>
                        : 특정 조직이나 기업, 국가를 대상으로 한 장기적이고
                        지속적인 공격으로, 뚜렷한 목표를 가지고 다양한 해킹
                        기술을 복합적으로 사용하는 고도화된 위협.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="text-blue-600 font-semibold min-w-[24px]">
                        2.
                      </span>
                      <p>
                        <span className="font-medium">BPFDoor</span>: 리눅스
                        운영체제의 Berkeley Packet Filter(BPF) 기능을 악용하여
                        만들어진 백도어 악성코드로, 특정 네트워크 패킷이 감지될
                        때만 활성화되는 은밀한 특성을 가진 악성코드.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="text-blue-600 font-semibold min-w-[24px]">
                        3.
                      </span>
                      <p>
                        <span className="font-medium">
                          HSS(Home Subscriber Server)
                        </span>
                        : 이동통신망에서 가입자 정보를 관리하는 핵심
                        데이터베이스. USIM 카드의 인증 정보, 가입자 프로필,
                        서비스 권한 등을 저장하고 관리.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="text-blue-600 font-semibold min-w-[24px]">
                        4.
                      </span>
                      <p>
                        <span className="font-medium">
                          Ivanti Connect Secure
                        </span>
                        : 미국 IT 보안 회사 Ivanti에서 제공하는 SSL VPN
                        솔루션으로, 원격 및 모바일 사용자들이 어떤 웹 지원
                        기기에서든 기업 리소스에 안전하게 접근할 수 있게 해주는
                        제품입니다. 이반티는 전 세계 34,000개 이상의 고객을
                        보유하고 있으며, 원격 접속 보안 제품으로 유명합니다.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="text-blue-600 font-semibold min-w-[24px]">
                        5.
                      </span>
                      <p>
                        <span className="font-medium">
                          BPF(Berkeley Packet Filter)
                        </span>
                        : 원래 네트워크 패킷을 필터링하고 분석하기 위한 리눅스
                        커널 기능으로, 네트워크 모니터링 도구에서 주로
                        사용됩니다. 그러나 이 기능을 악용하면 네트워크 트래픽을
                        감시하거나 조작하는 악성 프로그램을 만들 수 있습니다.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="text-blue-600 font-semibold min-w-[24px]">
                        6.
                      </span>
                      <p>
                        <span className="font-medium">IDS/IPS</span>: 침입 탐지
                        시스템(Intrusion Detection System)과 침입 방지
                        시스템(Intrusion Prevention System)의 약자로, 네트워크나
                        시스템에 대한 비정상적인 접근이나 공격을 탐지하고
                        차단하는 보안 장비입니다.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="text-blue-600 font-semibold min-w-[24px]">
                        7.
                      </span>
                      <p>
                        <span className="font-medium">Lateral Movement</span>:
                        &quot;수평적 이동&quot;이라는 의미로, 해커가 초기 침투 지점에서
                        네트워크 내부의 다른 시스템으로 이동하는 기법. 내부망에
                        첫 진입한 후 더 중요한 시스템을 찾아 접근 권한을
                        확대해나가는 해킹 과정의 핵심 단계.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="text-blue-600 font-semibold min-w-[24px]">
                        8.
                      </span>
                      <p>
                        <span className="font-medium">
                          AuC(Authentication Center)
                        </span>
                        : 이동통신망에서 사용자 인증을 담당하는 서버로, HSS와
                        함께 가입자 인증 정보를 관리합니다. USIM 카드와 동일한
                        인증 키를 가지고 있어 정당한 사용자인지 확인하는 역할을
                        합니다.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="text-blue-600 font-semibold min-w-[24px]">
                        9.
                      </span>
                      <p>
                        <span className="font-medium">
                          AKA(Authentication and Key Agreement)
                        </span>
                        : 이동통신에서 사용되는 가입자 인증 프로토콜로, USIM
                        카드와 통신망 사이의 상호 인증 및 암호화 키 생성에
                        사용됩니다. 무선 네트워크 접속 시 사용자 신원을 확인하고
                        안전한 통신 채널을 수립하는 데 필수적인 보안
                        메커니즘입니다.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="text-blue-600 font-semibold min-w-[24px]">
                        10.
                      </span>
                      <p>
                        <span className="font-medium">
                          MME(Mobility Management Entity)
                        </span>
                        : 4G LTE 네트워크의 핵심 구성요소로, 사용자 인증과
                        이동성 관리를 담당합니다. 단말기가 네트워크에 연결될
                        때의 인증 절차를 처리하고, 사용자가 이동할 때 위치 추적
                        및 핸드오버 관리를 수행합니다. 단말기와 네트워크 간 신호
                        메시지를 처리하는 주요 제어 노드입니다.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="text-blue-600 font-semibold min-w-[24px]">
                        11.
                      </span>
                      <p>
                        <span className="font-medium">
                          SGW(Serving Gateway)
                        </span>
                        : 4G LTE 네트워크에서 데이터 패킷을 처리하고 사용자
                        데이터 경로 전환을 관리하는 구성요소입니다. 여러 기지국
                        간 사용자 이동 시 데이터 경로를 유지하고, IP 패킷의
                        라우팅과 포워딩을 담당합니다. 데이터 트래픽의 앵커
                        포인트 역할을 하며 과금 정보 수집에도 관여합니다.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="text-blue-600 font-semibold min-w-[24px]">
                        12.
                      </span>
                      <p>
                        <span className="font-medium">
                          PGW(Packet Data Network Gateway)
                        </span>
                        : 4G LTE 네트워크와 외부 IP 네트워크를 연결하는
                        게이트웨이입니다. 사용자 단말기에 IP 주소를 할당하고,
                        데이터 패킷을 외부 네트워크(인터넷 등)로 라우팅합니다.
                        QoS(Quality of Service) 정책 적용, 데이터 사용량
                        모니터링 및 과금 정보 수집의 핵심 역할도 수행합니다.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="text-blue-600 font-semibold min-w-[24px]">
                        13.
                      </span>
                      <p>
                        <span className="font-medium">
                          UDM(Unified Data Management)
                        </span>
                        : 5G 네트워크에서 사용자 인증과 구독 정보를 관리하는
                        기능으로, 4G의 HSS 역할을 확장한 것입니다. 가입자 데이터
                        관리를 통합하여 더 효율적인 네트워크 운영을 가능하게
                        합니다.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="text-blue-600 font-semibold min-w-[24px]">
                        14.
                      </span>
                      <p>
                        <span className="font-medium">
                          UDR(Unified Data Repository)
                        </span>
                        : 5G 네트워크에서 가입자 데이터를 저장하는 중앙
                        저장소입니다. UDM과 함께 작동하여 5G 네트워크의 가입자
                        정보 관리 기능을 수행합니다.
                      </p>
                    </div>

                    <div className="flex gap-2">
                      <span className="text-blue-600 font-semibold min-w-[24px]">
                        15.
                      </span>
                      <p>
                        <span className="font-medium">
                          DPI(Deep Packet Inspection)
                        </span>
                        : 네트워크 패킷의 헤더뿐만 아니라 내용(페이로드)까지
                        검사하는 고급 패킷 필터링 기술입니다. 네트워크 보안
                        모니터링과 트래픽 분석에 사용되며, 악성 데이터를
                        탐지하거나 트래픽을 분류하는 데 활용됩니다.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </motion.div>
      </main>
      <Footer />

      {/* 페이지에 필요한 CSS 스타일 추가 */}
      <style jsx global>{`
        sup.text-blue-600 {
          transition: all 0.2s;
        }

        sup.text-blue-600:hover {
          background-color: #3b82f6;
          color: white;
          border-radius: 50%;
          padding: 0 5px;
        }

        [title] {
          position: relative;
        }

        @media (hover: hover) {
          [title]:hover::after {
            content: attr(title);
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: 280px;
            padding: 10px;
            border-radius: 8px;
            background: #ffffff;
            color: #333;
            text-align: left;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
            z-index: 100;
            line-height: 1.5;
            font-size: 14px;
            font-weight: normal;
            border: 1px solid #e2e8f0;
          }
        }
      `}</style>
    </div>
  );
}
