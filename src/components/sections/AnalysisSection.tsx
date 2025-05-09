import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { securityInfoData } from "@/lib/data/security-info";

export function AnalysisSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">침해 수법 분석</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {securityInfoData.map((info, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>{info.title}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  info.severity === 'critical' ? 'bg-red-100 text-red-700' :
                  info.severity === 'high' ? 'bg-orange-100 text-orange-700' :
                  info.severity === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-green-100 text-green-700'
                }`}>
                  {info.severity}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                {info.description}
              </p>
              <div className="space-y-2">
                <h4 className="text-sm font-medium">영향 받는 시스템:</h4>
                <div className="flex flex-wrap gap-2">
                  {info.affected.map((item, i) => (
                    <span key={i} className="text-xs bg-secondary px-2 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
                <h4 className="text-sm font-medium mt-4">해결 방안:</h4>
                <p className="text-sm text-muted-foreground">
                  {info.solution}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 