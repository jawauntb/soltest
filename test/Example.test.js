const assert = require('assert');
const ganache = require('ganache-cli')
const Web3 = require('web3')

const web3 = new Web3(ganache.provider())

const {abi, bytecode} = require('../compile')

let accounts;
let example;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    example = await new web3.eth.Contract(abi)
    .deploy({data:bytecode, arguments: ['Hello World']}).send({from: accounts[0], gas: "1000000"})
})

describe('Example', () => {
    it('deploys a sample contract', () => {
        console.log(example);
        assert.ok(example.options.address)
    })
})