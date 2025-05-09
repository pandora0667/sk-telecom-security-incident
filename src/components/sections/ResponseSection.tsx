import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ResponseSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">대응 조치</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>즉시 대응 조치</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>침입 경로 차단 및 시스템 격리</li>
              <li>전 고객 대상 유심 무상 교체 프로그램 시작</li>
              <li>USIM 보호서비스 자동 적용</li>
              <li>고객 대상 보안 경고 발령</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>장기적 대응 방안</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>HSS 구조 개편 및 인증키 분산 관리</li>
              <li>AI 기반 이상징후 탐지 시스템 도입</li>
              <li>위기 커뮤니케이션 체계 구축</li>
              <li>통신망 보안 제도 및 규제 개편</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 