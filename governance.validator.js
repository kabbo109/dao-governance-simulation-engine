export function validateGovernance(result) {
  const totalVotes = result.votesYes + result.votesNo;
  const passed = totalVotes >= result.quorum && result.votesYes > result.votesNo;

  return {
    totalVotes,
    passed
  };
}
