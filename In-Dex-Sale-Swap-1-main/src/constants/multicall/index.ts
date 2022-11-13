import { ChainId } from '@pancakeswap/sdk'
import MULTICALL_ABI from './abi.json'
import { multicall } from '../../pcs_address.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: multicall,
  [ChainId.TESTNET]: "0xae11C5B5f29A6a25e955F0CB8ddCc416f522AF5C"
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
