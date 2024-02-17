import { GambaStandardTokens, TokenMeta } from 'gamba-react-ui-v2'
import { PublicKey } from '@solana/web3.js'

// Can be configured in .env
export const RPC_ENDPOINT = import.meta.env.VITE_RPC_ENDPOINT ?? "https://mainnet.helius-rpc.com/?api-key=d9b8833d-3b0c-4b8d-a808-1a59305fe8c4"

// Change this value to your Solana address
export const PLATFORM_CREATOR_ADDRESS = new PublicKey('6iPwVDV1EJ9gY5R7tXBdGVC8BVKBRhPge7petcQorNU6')

// Appears in ShareModal
export const PLATFORM_SHARABLE_URL = 'Play ClownFish'

// List of tokens supported by this platform
export const TOKENS: TokenMeta[] = [
  GambaStandardTokens.sol,
  GambaStandardTokens.usdc,
  // {
  //   mint: new PublicKey(""),
  //   symbol: '???',
  //   name: 'Custom SPL Token',
  //   image: "image url",
  //   decimals: 6,
  //   baseWager: 1 * 1e6,
  // }
]
