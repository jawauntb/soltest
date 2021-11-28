//https://docs.soliditylang.org/en/develop/using-the-compiler.html

const path = require('path');
const commissionPath = path.resolve(__dirname, 'contracts', 'Commission.sol');
const incentivePath = path.resolve(__dirname, 'contracts', 'StructuredIncentive.sol');

const fs = require('fs');
const solc = require('solc');

const commissionSource = fs.readFileSync(commissionPath, 'UTF-8');
const incentiveSource = fs.readFileSync(incentivePath, 'UTF-8');

var input = {
    language: 'Solidity',
    sources: {
        'Commission.sol' : {
            content: commissionSource
        },
        'StructuredIncentive.sol' : {
            content: incentiveSource
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
};
var unparsedOutput = solc.compile(JSON.stringify(input))
console.log({unparsedOutput});

var output = JSON.parse(unparsedOutput);

var outputContracts = output.contracts['Commission.sol']['Commission']
console.log({output})
module.exports.abi = outputContracts.abi;

// exports bytecode from smart contract
module.exports.bytecode = outputContracts.evm.bytecode.object;