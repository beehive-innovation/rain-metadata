import { EVMAddress, Version } from "./general"
import { Word, WordPackMetadata } from "./wordpack"

/**
 * @title Rain Interpreter Metadata
 * @description Schema for an expression
 * @version 0.01
 */
export type InterpreterMetadata = {
    address: EVMAddress
    integrityAddress: EVMAddress
    name: string
    commit: string
    description: string
    wordpack: WordPackMetadata
    opmeta: OpMeta[]
    storageLength: number
    path: string
    version: Version
    author?: string
}

/**
 * Informatopn about opcodes
 */
export type OpMeta = {
    enum: number
    name: string
    description: string
    word: Word
    inputs: number
    outputs: number
    isZeroOperand: boolean
    category: string
    data?: any
}