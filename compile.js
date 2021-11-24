const path = require('path');
const examplePath = path.resolve(__dirname, 'contracts', 'Example.sol');
const fs = require('fs');
const solc = require('solc');
const source = fs.readFileSync(examplePath, 'UTF-8');


var input = {
    language: 'Solidity',
    sources: {
        'Example.sol' : {
            content: source
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
var output = JSON.parse(solc.compile(JSON.stringify(input)));

var outputContracts = output.contracts['Example.sol']['Example']
console.log({output})
module.exports.abi = outputContracts.abi;

// exports bytecode from smart contract
module.exports.bytecode = outputContracts.evm.bytecode.object;