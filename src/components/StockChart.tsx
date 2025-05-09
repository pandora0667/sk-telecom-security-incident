"use client";

import { motion } from 'framer-motion';

export default function StockChart() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-slate-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
              <path d="M2 16l4-4 4 4 4-4 4 4 4-4"/>
              <path d="M2 12l4-4 4 4 4-4 4 4 4-4"/>
              <path d="M2 8l4-4 4 4 4-4 4 4 4-4"/>
            </svg>
          </div>
          <div>
            <h3 className="font-bold text-slate-800">SK텔레콤 주가 분석</h3>
            <p className="text-xs text-slate-500">017670.KS</p>
          </div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-6"
      >
        <p className="text-slate-600 mb-4">
          해킹 사태로 인한 주가 변동은 시장 반응의 중요한 지표입니다.<br />
          최신 주가 정보를 확인하려면 아래 링크를 이용하세요.
        </p>
        <a 
          href="https://finance.yahoo.com/quote/017670.KS" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center gap-2 bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/>
          </svg>
          <span>야후 파이낸스에서 실시간 주가 보기</span>
        </a>
      </motion.div>
      
      <div className="border-t border-slate-100 pt-4 mt-6">
        <p className="text-xs text-slate-500">
          * SK텔레콤 주가는 해킹 사태 이후 약 2.5% 하락했으며, 이에 따른 시가총액 손실은 약 5,800억원으로 추정됩니다.
        </p>
      </div>
    </div>
  );
} 