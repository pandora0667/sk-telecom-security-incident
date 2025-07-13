"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGE_SIZES } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export function OverviewSection() {
  return (
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
              width={IMAGE_SIZES.LOGO_LARGE.width}
              height={IMAGE_SIZES.LOGO_LARGE.height}
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
  );
} 