// Source: https://github.com/safe-global/safe-deployments/blob/main/src/assets/v1.1.1/multi_send.json
export default {
  defaultAddress: '0x8D29bE29923b68abfDD21e541b9374737B49cdAD',
  released: true,
  contractName: 'MultiSend',
  version: '1.1.1',
  networkAddresses: {
    '1': '0x8D29bE29923b68abfDD21e541b9374737B49cdAD',
    '4': '0x8D29bE29923b68abfDD21e541b9374737B49cdAD',
    '5': '0x8D29bE29923b68abfDD21e541b9374737B49cdAD',
    '42': '0x8D29bE29923b68abfDD21e541b9374737B49cdAD',
    '88': '0x8D29bE29923b68abfDD21e541b9374737B49cdAD',
    '100': '0x8D29bE29923b68abfDD21e541b9374737B49cdAD',
    '246': '0x8D29bE29923b68abfDD21e541b9374737B49cdAD',
    '73799': '0x8D29bE29923b68abfDD21e541b9374737B49cdAD'
  },
  abi: [
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bytes',
          name: 'transactions',
          type: 'bytes'
        }
      ],
      name: 'multiSend',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ]
} as const
