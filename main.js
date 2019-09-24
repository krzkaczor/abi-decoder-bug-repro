const Web3 = require("web3");
const abiDecoder = require("abi-decoder");

const pollingEmitter = require("./polling-emitter.json");
abiDecoder.addABI(pollingEmitter);

var web3 = new Web3("YOUR INFURA KEY");

web3.eth.getTransactionReceipt(
  "0x43b9b2006a00f867dcd2df9b9f7f33ac895f935154fe5acb74d51272885cd21e",
  function(e, receipt) {
    debugger;
    const decodedLogs = abiDecoder.decodeLogs(receipt.logs);
    console.log(JSON.stringify(decodedLogs));
    debugger;
  },
);
