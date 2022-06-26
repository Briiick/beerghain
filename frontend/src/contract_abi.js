export const InsuranceContractABI = 
[
    {
    "inputs": [],
    "name": "getBalance",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "recieveMoney",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "totalBalance",
    "outputs": [
    {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
    }
    ],
    "stateMutability": "view",
    "type": "function"
    },
    {
    "inputs": [
    {
    "internalType": "address payable",
    "name": "addy",
    "type": "address"
    }
    ],
    "name": "withdrawAllEthToAdd",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "withdrawAllEtherToCaller",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    },
    {
    "inputs": [],
    "name": "withdrawTimeLocked",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
    }
    ];

export const CONTRACT_ADDRESS = "0x0389b85179Acc1CCb4E6f1C274eF67997DB35FF1";