import { AlertTriangle } from "lucide-react";

export const RiskBanner = () => (
  <div className="sticky top-0 z-50 w-full border-b border-destructive/40 bg-destructive/15 backdrop-blur-md">
    <div className="container flex items-center justify-center gap-2 py-2 text-center text-xs text-destructive-foreground sm:text-sm">
      <AlertTriangle className="h-4 w-4 shrink-0 text-destructive" aria-hidden="true" />
      <p>
        <span className="font-semibold">18+ • Внимание:</span>{" "}
        азартные игры связаны с финансовым риском и могут вызвать зависимость. Играйте ответственно.
      </p>
    </div>
  </div>
);
