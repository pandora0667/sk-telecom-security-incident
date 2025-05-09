import { ShieldAlert, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-100 overflow-hidden">
      {/* 배경 패턴 */}
      <motion.div 
        className="absolute inset-0 pointer-events-none select-none opacity-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="400" cy="200" r="180" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientTransform="translate(400 200) scale(180)" gradientUnits="userSpaceOnUse">
              <stop stopColor="#a5b4fc" stopOpacity="0.25" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-2xl mx-auto px-4">
        <motion.span 
          className="mb-4 flex items-center gap-2 px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm shadow-sm mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ShieldAlert className="w-5 h-5" />
          SKT 유심 해킹 사건
        </motion.span>
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-center tracking-tight mb-4 bg-gradient-to-r from-blue-700 via-purple-600 to-fuchsia-500 text-transparent bg-clip-text drop-shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          SK텔레콤 유심 해킹 사건<br className="hidden xs:block sm:hidden" /> 종합 분석
        </motion.h1>
        <motion.p 
          className="text-base sm:text-lg md:text-2xl text-center text-muted-foreground max-w-2xl mb-6 mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          전세계적으로 전례없는 대규모 유심 해킹 사건의<br className="hidden xs:block sm:hidden" /> 핵심 요약과 분석
        </motion.p>
        <motion.div 
          className="flex gap-2 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-fuchsia-100 text-fuchsia-700 text-xs font-semibold">
            <Sparkles className="w-4 h-4" /> 현재 진행중인 사건 지속 업데이트
          </span>
        </motion.div>
      </div>
    </section>
  );
} 