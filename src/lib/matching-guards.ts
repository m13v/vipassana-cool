export type MatchParticipants = {
  person_a_id: string;
  person_b_id: string;
};

/** Stable key for an unordered pair of waitlist entries. */
export function pairKey(personAId: string, personBId: string): string {
  return [personAId, personBId].sort().join("|");
}

/**
 * Every historical pairing is blocked, regardless of how it ended.
 *
 * A decline is a decision about the pair, not a temporary person status. Once
 * either participant says no, the matcher must offer both people someone new.
 */
export function buildBlockedPairSet(matches: MatchParticipants[]): Set<string> {
  return new Set(matches.map((match) => pairKey(match.person_a_id, match.person_b_id)));
}
