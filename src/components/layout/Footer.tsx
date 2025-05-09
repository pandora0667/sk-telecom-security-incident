export function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-r from-blue-50 via-white to-purple-100 py-6 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-2 px-4">
        <div className="text-sm text-muted-foreground">
          © 2025 SK텔레콤 유심 해킹 사건 종합 분석
        </div>
        <div className="text-xs text-muted-foreground">
          Powered by <span className="font-semibold">성원</span> | 데이터 및 분석은 공개 자료 기반 | <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">GitHub</a>
        </div>
      </div>
    </footer>
  );
} 