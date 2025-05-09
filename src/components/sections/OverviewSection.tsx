import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function OverviewSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">사건 개요</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>사건의 성격</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              SK텔레콤의 내부 VPN 장비를 통한 침투로 시작된 이번 사건은 
              통신사의 핵심 인증 시스템인 HSS 서버에 접근하여 가입자 인증 정보를 
              탈취한 심각한 보안 침해 사고입니다.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>유출된 정보의 민감성</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              IMSI, Ki, MSISDN, OPC 등 모바일 통신의 핵심 인증 정보가 유출되었으며,
              이를 통한 USIM 복제 및 스미싱 공격의 위험이 있습니다.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 