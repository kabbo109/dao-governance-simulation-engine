import { connectRPC } from "./rpc.client.js";
import { loadProposals } from "./proposal.registry.js";
import { simulateVote } from "./voting.engine.js";
import { validateGovernance } from "./governance.validator.js";
import { generateReport } from "./analytics.report.js";
import { NETWORK } from "./network.config.js";

console.log("DAO Governance Simulation Engine");
console.log("Active Network:", NETWORK);

const provider = connectRPC();
const proposals = loadProposals();

const voteResult = simulateVote(proposals[0], "YES", 250);
const validation = validateGovernance(voteResult);

generateReport(voteResult, validation);
