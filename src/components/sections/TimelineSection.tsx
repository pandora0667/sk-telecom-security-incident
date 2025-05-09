import { Card, CardContent } from "@/components/ui/card";
import { timelineData } from "@/lib/data/timeline";

export function TimelineSection() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">사건 타임라인</h2>
      <div className="space-y-4">
        {timelineData.map((event, index) => (
          <Card key={index} className="relative">
            <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">
                      {event.date}
                    </span>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{event.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {event.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 