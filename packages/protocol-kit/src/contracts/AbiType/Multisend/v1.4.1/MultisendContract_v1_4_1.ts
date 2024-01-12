import { narrow } from 'abitype'
import multiSend_1_4_1_ContractArtifacts from '@safe-global/protocol-kit/contracts/AbiType/assets/MultiSend/v1.4.1/multi_send'
import MultiSendBaseContract from '../MultiSendBaseContract'

const multiSendContract_v1_4_1_AbiTypes = narrow(multiSend_1_4_1_ContractArtifacts.abi)

/**
 * Represents the ABI of the MultiSend contract version 1.4.1.
 *
 * @type {MultiSendContract_v1_4_1_Abi}
 */
export type MultiSendContract_v1_4_1_Abi = typeof multiSendContract_v1_4_1_AbiTypes

/**
 * Represents the contract type for a MultiSend contract version 1.4.1 defining read and write methods.
 * Utilizes the generic MultisendBaseContract with the ABI specific to version 1.4.1.
 *
 * @type {MultiSendContract_v1_4_1_Contract}
 */
type MultiSendContract_v1_4_1_Contract = MultiSendBaseContract<MultiSendContract_v1_4_1_Abi>

export default MultiSendContract_v1_4_1_Contract
