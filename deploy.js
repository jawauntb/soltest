const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile')
const provider = new HDWalletProvider('please insert your own 12 word mnemonic from metammask here', 'https://infure.io/<code>')
const web3 = new Web3(provider)

const deploy = async () => {
accounts = await web3.eth.getAccounts();
console.log('trying to deploy from account', accounts[0]);
const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({data: '0x' + bytecode, arguments:['Hello World']}).send({gas: '100000', from: accounts[0]})
console.log('Contract deployed to', result.options.address)
}
//node compile.js
//npm run test
//node deploy.js
deploy()