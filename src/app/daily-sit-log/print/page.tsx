import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printable Daily Sit Log (Vipassana) — Free, One Page",
  description:
    "A one-page, printable daily sit log for Vipassana old students. 366 blank squares, one calendar year, no streaks. Press Cmd+P or Ctrl+P to save as PDF.",
  alternates: { canonical: "https://vipassana.cool/daily-sit-log/print" },
  robots: { index: true, follow: true },
};

const MONTHS = [
  { name: "January", days: 31 },
  { name: "February", days: 29 },
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "May", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "August", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 },
];

export default function PrintableSitLogPage() {
  return (
    <div className="sit-log-wrap mx-auto max-w-5xl px-6 py-10 print:p-0">
      <style>{`
        @page { size: Letter portrait; margin: 0.5in; }
        @media print {
          html, body { background: #ffffff !important; color: #000000 !important; }
          .no-print { display: none !important; }
          .sit-log-wrap { padding: 0 !important; max-width: none !important; }
          nav, footer, header.site-header { display: none !important; }
        }
        .cell { border: 0.5px solid #222; }
        .cell .split {
          background-image: linear-gradient(to bottom right, transparent calc(50% - 0.5px), #222 calc(50% - 0.5px), #222 calc(50% + 0.5px), transparent calc(50% + 0.5px));
        }
      `}</style>

      <div className="no-print mb-8 rounded-lg border border-accent/30 bg-accent/5 p-4">
        <p className="text-sm font-medium text-accent mb-1">How to save this as a PDF</p>
        <p className="text-sm text-muted">
          Press Cmd+P (Mac) or Ctrl+P (Windows/Linux). In the dialog, choose destination &quot;Save as PDF&quot;. Paper size Letter or A4, portrait, margins default. The whole year fits on a single page.
        </p>
      </div>

      <div className="print-sheet" style={{ color: "#000" }}>
        <div className="mb-3 flex items-end justify-between border-b border-black pb-2">
          <div>
            <h1 className="text-lg font-bold tracking-tight">Daily Sit Log</h1>
            <p className="text-[10px] uppercase tracking-widest text-black/70">One year. One pen. One page.</p>
          </div>
          <div className="text-[10px] text-right">
            <p>Name _______________________</p>
            <p className="mt-1">Year ________</p>
          </div>
        </div>

        <p className="mb-2 text-[10px] leading-snug text-black/80">
          Each square is one day. The diagonal splits AM (upper-left) and PM (lower-right). After you sit, draw a stroke in the half you completed. Do not write the duration. Do not count streaks. If you miss a day, leave the square empty and sit tomorrow.
        </p>

        <table className="w-full border-collapse" style={{ tableLayout: "fixed" }}>
          <thead>
            <tr>
              <th className="w-16 text-left text-[9px] font-semibold uppercase tracking-wider text-black/70 pb-1">Month</th>
              {Array.from({ length: 31 }, (_, i) => (
                <th key={i} className="text-[8px] font-normal text-black/60 pb-1">
                  {i + 1}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {MONTHS.map((m) => (
              <tr key={m.name}>
                <td className="text-[9px] font-medium pr-2 py-0.5 text-black/80">{m.name}</td>
                {Array.from({ length: 31 }, (_, i) => {
                  const dayIndex = i + 1;
                  const exists = dayIndex <= m.days;
                  return (
                    <td key={i} className="p-0">
                      {exists ? (
                        <div className="cell relative mx-auto" style={{ width: "100%", paddingTop: "100%" }}>
                          <div className="split absolute inset-0" />
                        </div>
                      ) : (
                        <div className="relative mx-auto" style={{ width: "100%", paddingTop: "100%", background: "#e5e5e5" }} />
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-3 flex items-start justify-between border-t border-black pt-2 text-[9px] text-black/80">
          <div>
            <p className="font-semibold">Rules kept short on purpose:</p>
            <ol className="mt-0.5 list-decimal pl-4 space-y-0.5">
              <li>Mark after you sit, not before.</li>
              <li>No colors. No metrics. No streak.</li>
              <li>Missing a day is not failure. Stopping is.</li>
              <li>Keep this page somewhere you will see it.</li>
            </ol>
          </div>
          <div className="text-right">
            <p className="font-semibold">vipassana.cool</p>
            <p className="text-black/60">Free. Public domain. Share freely.</p>
          </div>
        </div>
      </div>

      <div className="no-print mt-10 text-center">
        <p className="text-sm text-muted">Ready? Press <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-xs">Cmd</kbd> + <kbd className="rounded border border-border bg-card px-1.5 py-0.5 font-mono text-xs">P</kbd> and choose &quot;Save as PDF&quot;.</p>
      </div>
    </div>
  );
}
