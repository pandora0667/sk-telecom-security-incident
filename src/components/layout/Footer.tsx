export function Footer() {
  return (
    <footer className="w-full border-t bg-gradient-to-r from-blue-50 via-white to-purple-100 py-6 mt-16">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4">
        <div className="text-sm text-center max-w-3xl text-gray-700">
          <p className="mb-2">
          본 웹사이트는 교육 및 정보 제공 목적으로 제작되었으며, 공개된 자료에 기반하여 작성되었습니다.
          </p>
          <p className="text-xs text-gray-600">
            개인 제작으로 인한 실수나 부정확한 정보가 있을 수 있으니 무조건적인 맹신은 자제해 주시기 바랍니다.
            잘못된 정보나 의견이 있을 경우 <a href="mailto:judo0179@gmail.com" className="text-blue-600 hover:underline">judo0179@gmail.com</a>으로 연락 부탁드립니다.
          </p>
        </div>
        
        <div className="w-full border-t border-gray-200 my-2"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-2">
          <div className="text-sm text-muted-foreground">
            © 2025 SK텔레콤 유심 해킹 사건 종합 분석
          </div>
          <div className="text-xs text-muted-foreground">
            Powered by <span className="font-semibold">성원</span> | 데이터 및 분석은 공개 자료 기반 | AWS | Cursor AI
          </div>
        </div>
      </div>
    </footer>
  );
} 