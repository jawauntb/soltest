const assert = require('assert');
const ganache = require('ganache-cli')
const Web3 = require('web3')

const web3 = new Web3(ganache.provider())

const {abi, bytecode} = require('../compile')

let accounts;
let commission;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    commission = await new web3.eth.Contract(abi)
    .deploy({data:bytecode, arguments: []}).send({from: accounts[0], gas: "2000000"})
})

describe('Commission', () => {
    it('deploys a sample contract', () => {
        console.log(commission);
        assert.ok(commission.options.address)
    })
})