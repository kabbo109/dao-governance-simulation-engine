export function generateReport(result, validation) {
  console.log("----- Governance Report -----");
  console.log("Proposal:", result.proposal);
  console.log("YES Votes:", result.votesYes);
  console.log("NO Votes:", result.votesNo);
  console.log("Total Votes:", validation.totalVotes);
  console.log("Passed:", validation.passed);
  console.log("-----------------------------");
}
