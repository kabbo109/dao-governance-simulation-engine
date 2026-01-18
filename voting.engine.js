export function simulateVote(proposal, choice, power) {
  console.log("Casting vote on proposal:", proposal.title);

  if (choice === "YES") {
    proposal.votesYes += power;
  } else {
    proposal.votesNo += power;
  }

  return {
    proposal: proposal.title,
    votesYes: proposal.votesYes,
    votesNo: proposal.votesNo,
    quorum: proposal.quorum
  };
}
