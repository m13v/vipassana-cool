import type { Metadata } from "next";
import { MatchingDashboard } from "@/components/admin/matching-dashboard";

export const metadata: Metadata = {
  title: "Practice Buddy Matching — Admin",
  robots: { index: false, follow: false },
};

export default function MatchingPage() {
  return (
    <div className="px-4 py-8">
      <h1 className="mb-2 text-2xl font-bold">Practice Buddy Matching</h1>
      <p className="mb-8 text-sm text-muted">
        Match waitlist signups with compatible practice buddies.
      </p>
      <MatchingDashboard />
    </div>
  );
}
