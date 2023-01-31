import { EVMAddress, Version } from "./general";

/**
 * @title Rain Contract Metadata
 * @description Schema for a contract
 * @version 0.01
 */
export type ContractMetadata = {
    addresses: EVMAddress[]
    name: string
    source: string
    commit: string
    bytecodeHash: string
    description: string
    type: string
    expressions?: Expression[]
    inputs?: Input[]
    version: Version
    interpreterFields?: InterpreterFields
}

/*
* Additional information about expressions (StateConfig) in this ABI.
*/
export type Expression = {
    name: string
    description: string
    path: string
    examples: string[]
    contextDescription?: string
    contextColumns?: ContextColumn[]
    signedContext?: boolean
    callerContext?: boolean
}

/*
 * The interpreter and deployer input fields.
 */
export type InterpreterFields = {
    // the path in the abi for the interpreter address input
    interpreterFieldPath: string
    // the path in the abi for the deployer address input
    deployerFieldPath: string
}

/*
 * Additional information about inputs in this ABI.
 */
export type Input = {
    name: string
    description?: string
    path: string
}

/*
 * Each column in the context, cells are optional in the case of additional context passed in at time of execution (like arbitrary signed context).
 */
export type ContextColumn = {
    name: string
    description?: string
    cells?: ContextCell[]
}

/*
 * One cell in the context.
 */
export type ContextCell = {
    name: string
    alias: string
    description: string
}