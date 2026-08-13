import assert from "node:assert/strict";
import test from "node:test";

import { buildBlockedPairSet, pairKey } from "../src/lib/matching-guards";

test("pair keys do not depend on participant order", () => {
  assert.equal(pairKey("person-a", "person-b"), pairKey("person-b", "person-a"));
});

test("every historical match blocks the pair, including declines", () => {
  const historicalMatches = [
    { person_a_id: "declined-a", person_b_id: "declined-b", status: "declined" },
    { person_a_id: "expired-a", person_b_id: "expired-b", status: "expired" },
    { person_a_id: "ended-a", person_b_id: "ended-b", status: "ended" },
    { person_a_id: "active-a", person_b_id: "active-b", status: "active" },
  ];

  const blocked = buildBlockedPairSet(historicalMatches);

  for (const match of historicalMatches) {
    assert.equal(
      blocked.has(pairKey(match.person_a_id, match.person_b_id)),
      true,
      `${match.status} pair should be blocked`,
    );
  }
});
