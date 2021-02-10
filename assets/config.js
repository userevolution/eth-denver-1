const config = {}
config.contract = {
  address: '0xE9A0b4d00A2BAAB2e9ef52773BF6918ea3f1fd0C',
  abi: {
    Unirace: [
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_raceIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_horseIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_amount',
            type: 'uint256',
          },
        ],
        name: 'createBet',
        outputs: [],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256[]',
            name: '_unicorns',
            type: 'uint256[]',
          },
          {
            internalType: 'uint256',
            name: '_startTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_expiryTime',
            type: 'uint256',
          },
        ],
        name: 'createRace',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_raceIndex',
            type: 'uint256',
          },
        ],
        name: 'evaluateRace',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'userAddress',
            type: 'address',
          },
          {
            internalType: 'bytes',
            name: 'functionSignature',
            type: 'bytes',
          },
          {
            internalType: 'bytes32',
            name: 'sigR',
            type: 'bytes32',
          },
          {
            internalType: 'bytes32',
            name: 'sigS',
            type: 'bytes32',
          },
          {
            internalType: 'uint8',
            name: 'sigV',
            type: 'uint8',
          },
        ],
        name: 'executeMetaTransaction',
        outputs: [
          {
            internalType: 'bytes',
            name: '',
            type: 'bytes',
          },
        ],
        stateMutability: 'payable',
        type: 'function',
      },
      {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: 'address',
            name: 'userAddress',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address payable',
            name: 'relayerAddress',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'bytes',
            name: 'functionSignature',
            type: 'bytes',
          },
        ],
        name: 'MetaTransactionExecuted',
        type: 'event',
      },
      {
        inputs: [],
        name: 'getChainID',
        outputs: [
          {
            internalType: 'uint256',
            name: 'id',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'address',
            name: 'user',
            type: 'address',
          },
        ],
        name: 'getNonce',
        outputs: [
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_raceIndex',
            type: 'uint256',
          },
        ],
        name: 'getNumberOfBetsOnRace',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_raceIndex',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '_horseIndex',
            type: 'uint256',
          },
        ],
        name: 'getNumberOfBetsOnUnicorn',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'getNumberOfRaces',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: '_raceIndex',
            type: 'uint256',
          },
        ],
        name: 'getNumberOfUnicornsInRace',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [
          {
            internalType: 'uint256',
            name: 'raceIndex',
            type: 'uint256',
          },
        ],
        name: 'getRace',
        outputs: [
          {
            internalType: 'uint256[]',
            name: '',
            type: 'uint256[]',
          },
          {
            internalType: 'bool',
            name: '',
            type: 'bool',
          },
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
          {
            internalType: 'uint256[]',
            name: '',
            type: 'uint256[]',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
      {
        inputs: [],
        name: 'poolAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        stateMutability: 'view',
        type: 'function',
      },
    ],
  },
}

module.exports = { config }
