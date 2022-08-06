require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note random uncle grace cart equal gift'; 
let testAccounts = [
"0x08c8b74f34ebf4d90bf6c88a6e00220e02d6509188323da99d25ad96f6a8b9c9",
"0x5c321a1c1e3d69d7fc7b9dbcae76eba829ea4ae1a9a5a2d1ad407cc7d4363d18",
"0x86bc9778fc5678b5a71594c831a0612659e51fff91b089cbf22e70cc21d8805e",
"0xb55856676bc4711b2c8ab363b53e2e7b5bfac3ae77ef78531a200efb0063f6c2",
"0xaff84981c9c48dcfd516c01612291d930bd20a6193dc16f71991cd7d6faf7d69",
"0xa3eef03a50544a39dbef3e1b392dcb225144f4628ebda4f2669cf618c2164501",
"0xddd90e369216cff10de5d9bb92546e93691601431ecc377dfc272289c525459d",
"0x657f4eb54c7b349aed6fe2fd7a8e1cf0031010852a4b0ef1527247ffed265d10",
"0xdb69eedd739d942ab22a6c51c8eaeb8b567621c135714f2279de9f57dc361a9f",
"0x3d7235b954851898b64d20af14f96d46538d6db6eeeae00555d7f2020364df2e"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

