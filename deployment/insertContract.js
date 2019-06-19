import Contract from '../src/Models/Contract';

let v1 = new Contract({
    address: '0x10fff3f44af639d3cdaff8cd529b0e0419165d51',
    version: '0.0.1',
    abi: [
        {
            constant: false,
            inputs: [
                {
                    name: '_key',
                    type: 'string',
                },
            ],
            name: 'delMessage',
            outputs: [],
            payable: false,
            type: 'function',
            stateMutability: 'nonpayable',
        },
        {
            constant: false,
            inputs: [
                {
                    name: '_key',
                    type: 'string',
                },
                {
                    name: 'message',
                    type: 'string',
                },
            ],
            name: 'setMessage',
            outputs: [],
            payable: false,
            type: 'function',
            stateMutability: 'nonpayable',
        },
        {
            constant: false,
            inputs: [
                {
                    name: '_new',
                    type: 'address',
                },
            ],
            name: 'transferOwnership',
            outputs: [],
            payable: false,
            type: 'function',
            stateMutability: 'nonpayable',
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: false,
                    name: 'oldaddr',
                    type: 'address',
                },
                {
                    indexed: false,
                    name: 'newaddr',
                    type: 'address',
                },
            ],
            name: 'TransferOwnership',
            type: 'event',
        },
        {
            constant: true,
            inputs: [
                {
                    name: '_key',
                    type: 'string',
                },
            ],
            name: 'getMessage',
            outputs: [
                {
                    name: '',
                    type: 'string',
                },
            ],
            payable: false,
            type: 'function',
            stateMutability: 'view',
        },
        {
            constant: true,
            inputs: [],
            name: 'owner',
            outputs: [
                {
                    name: '',
                    type: 'address',
                },
            ],
            payable: false,
            type: 'function',
            stateMutability: 'view',
        },
    ],
});
v1.save();
