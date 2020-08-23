require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remove exchange guess argue front taste'; 
let testAccounts = [
"0x19f6366960348f33e7dffce9268b9ce8c3e539cb0ebf32454e8ae6ae68b1e431",
"0xb5e49ef8a0982efb2257cc35d63fb1baab8a2e4b4b8d2b1988580e1b9875609d",
"0x906072ec2ce615b7e132865cbb9acbab7b372d7b3c3b2ade72e546d2848f6b2f",
"0xef9a3760d5c64a7b09f75eab63fed3aa567e52571647eb0e9ae01e364a2be771",
"0xe603e4fc26617fd43ff1ebba88023ada3e65e7dc25342e2c615a4b196aa30d20",
"0x8896a9d5ac98d7929e7296b0f4ebffada9b4af6210aa29778fc6b1b24ca39694",
"0xaa108e8057120e1ed9bcaf556234de9c88d8fc0322924b12a34a7c683a59c624",
"0x5e6a00ca5e3ab6728888b04b6516a72b981fe1e1b34fc325ad0cfed22256d072",
"0x1794d11d48d4daae91b91b094b00eac4e7155a91b00b8536fbbf5c09aff677ef",
"0x5372bcd088108c6afad0e538c42ad760ae82c5b9df7653efbd63423f5c7c898e"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
