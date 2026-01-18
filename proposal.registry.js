export function loadProposals() {
  console.log("Loading DAO proposals...");

  return [
    {
      id: 1,
      title: "Increase Treasury Allocation",
      quorum: 300,
      votesYes: 0,
      votesNo: 0
    },
    {
      id: 2,
      title: "Launch New Governance Token",
      quorum: 500,
      votesYes: 0,
      votesNo: 0
    }
  ];
}
