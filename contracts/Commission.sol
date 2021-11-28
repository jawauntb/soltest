// SPDX-License-Identifier: Unlicensed
pragma solidity >=0.8.10;

//import
import "./StructuredIncentive.sol";

/*
check out https://docs.openzeppelin.com/contracts/4.x/wizard for helpful code
basic idea is this: buyer offers a structured incentive
buyer can request or allow
    arbitrary multiple or specifed individual sellers to
        submit drafts
        or actual submissions
buyer can
    pay a number of sellers up to some amount determined by the buyer in the incentive structure
any buyer can "broadcast" an offer for submissions of work,
anyone else can "pick up" an offer to
    submit work for a piece of the structured incentive dictated by a buyer

I'm thinking a "reputation token" would be helpful as well:
users could sell liquidity to mint their own reputation tokens (sell eth/dai =>mint reputation//user_reputation)
user can then stake newly minted reputation tokens to mint their own "individual" reputation tokens (stake REP to mint then borrow "USER"_REP)
when work agreement is reached, each party gives some amount of REP tokens to the incentive structure
after work completes, buyer and seller can rate each other
    by choosing to stake their rep in the other party's pool, burn the other party's rep, or do nothing to the other

*/

contract Commission {
    string public name;
    string public contactInfo;
    string public themes;
    string public tags;
    string public otherProperties;
    string public description;
    string public additionalInfo;
    address[] public requestedArtists;
    address[] public acceptedSubmissions;
    address[] public acceptedDrafts;
    address[] public submittedDrafts;

    uint public daysTillEnd;
    uint public reputationMinimum;
    uint public maxAcceptedSubmissions;
    uint public maxAcceptedSketches;
    uint public commissionProtocolFee;

    bool public buyerSaysTaskIsCompleted;
    bool public sellerSaysTaskIsCompleted;

    StructuredIncentive public incentiveStructure = new StructuredIncentive();
    constructor() {}

    function setX(string memory x) public {
        name = x;
    }
}