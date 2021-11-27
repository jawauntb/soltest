// SPDX-License-Identifier: Unlicensed
pragma solidity >=0.8.10;
/*

I'm thinking a "reputation token" would be helpful as well:
users could sell liquidity to mint their own reputation tokens (sell eth/dai =>mint reputation//user_reputation)
user can then stake newly minted reputation tokens to mint their own "individual" reputation tokens (stake REP to mint then borrow "USER"_REP)
when work agreement is reached, each party gives some amount of REP tokens to the incentive structure
after work completes, buyer and seller can rate each other
    by choosing to stake their rep in the other party's pool, burn the other party's rep, or do nothing to the other

*/

contract StructuredIncentive{
    string public name;
    address public paymentCurrency;
    uint public paymentTotal;
    uint pastDuePenalty;
    uint[] public vestingSchedule;
    uint[] public vestingPeriods;
    uint public daysTillEnd;
    uint buyerReputationAtStake;
    uint sellerReputationAtStake;

    constructor() {}

    function setX(string memory x) public {
        name = x;
    }
}