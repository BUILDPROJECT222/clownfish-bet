import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'
import { PublicKey } from '@solana/web3.js'

// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://candace-x68syf-fast-mainnet.helius-rpc.com/"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = new PublicKey('6iPwVDV1EJ9gY5R7tXBdGVC8BVKBRhPge7petcQorNU6')

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'Play ClownFish'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
   {
  mint: new PublicKey("2BtpgypSfz8UHANz7ocGU4QWrNNTm7ncp5K4ZPKSjxQe"),
    symbol: 'CLOWN',
    name: 'ClownFish',
    image: "https://i.ibb.co/hmL3144/128-2.png",
    decimals: 9,
    baseWager: 1000 * 1e9,
   }
]
