// SPDX-License-Identifier: Unlicensed
pragma solidity >=0.8.10;

contract Example {
    string public message;

    constructor(string memory initialMessage) {
        message = initialMessage;
    }

    function setMessage(string memory newMessage) public {
        message = newMessage;
    }
}
