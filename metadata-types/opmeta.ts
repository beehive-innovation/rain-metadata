/**
 * @minimum 0
 */
type Integer = number
/**
 * @minimum 0
 * @maximum 15
 */
type BitInteger = number
/**
 * @minimum 0
 * @maximum 65535
 */
type LengthInteger = number
/**
 * @pattern ^[A-Za-z_][0-9A-Za-z-_]*$
 */
type StringArray = string
/**
 * @title Opcode Metadata
 * @description Schema for opcodes metadata used by Rainlang parser and formatter
 * @version 0.01
*/
export type OpMeta = {
    /**
     * @title Opcode Name
     * @description The primary word used to identify the opcode
     * @pattern ^[A-Za-z_][0-9A-Za-z-_]*$
     */
    name: string;
    /**
     * @title Opcode Description
     * @description Describes what the opcode does briefly
     */
    desc: string;
    /**
     * @title Opcode Operand
     * @description Data required in order to calculate and format the operand
     */
    operand: 0 | OperandArg[];
    /**
     * @title Opcode Inputs
     * @description Data required to specify the inputs the opcode
     */
    inputs: InputMeta;
    /**
     * @title Opcode Outputs
     * @description Data required to specify the outputs the opcode
     */
    outputs: OutputMeta;
    /**
     * @title Opcode Aliases
     * @description Extra word used to identify the opcode
     * @pattern ^[A-Za-z_][0-9A-Za-z-_]*$
     */
    aliases?: StringArray[];
}

// Data type of opcode's inputs that determines the number of  
// inputs an opcode has and provide information about them
export type InputMeta = 0 | {
    /**
     * @title Parameters
     * @description 
     * Data type for opcode's inputs parameters, the length determines the number of inputs for constant (non-computed) inputs.
     */
    parameters: {
        /**
         * @title Input Parameter Name
         * @description Name of the input parameter
         * @pattern ^[A-Za-z0-9_][A-Za-z0-9-_\s]*[A-Za-z0-9-_]$
         */
        name: string;
        /**
         * @title Input Parameter Description
         * @description Description of the input parameter
         */
        desc?: string;
        /**
         * @title Parameter Spread
         * @description 
         * Specifies if an argument is dynamic in length, default is false, so only needs to be defined if an argument is spread.
         */
        spread?: boolean;

    }[]
    /**
     * @title Inputs-Allocated Operand Bits
     * @description 
     * Specifies bits of the operand allocated for number of inputs. Determines the number of inputs for a computed opcode inputs. Required only for computed (non-constant) inputs
     */
    bits?: [BitInteger, BitInteger];
    /**
     * @title Inputs-Allocated Operand Bits Computation
     * @description 
     * Specifies any arithmetical operation that needs to be applied on value of the extracted operand bits. The "bits" keyword is reserved for accessing the exctraced value, example: "(bits + 1) * 2". Required only for computed (non-constant) inputs
     */
    computation?: string;
}

// Data type of opcode's outputs that determines the number of  
// outputs an opcode has and provide information about them
export type OutputMeta = Integer | {
    /**
     * @title Outputs-Allocated Operand Bits
     * @description 
     * Specifies bits of the operand allocated for number of outputs. Determines the number of outputs for a computed opcode outputs. Required only for computed (non-constant) outputs
     */
    bits?: [BitInteger, BitInteger];
    /**
     * @title Outputs-Allocated Operand Bits Computation
     * @description 
     * Specifies any arithmetical operation that needs to be applied on value of the extracted operand bits. The "bits" keyword is reserved for accessing the exctraced value, example: "(bits + 1) * 2". Required only for computed (non-constant) outputs
     */
    computation?: string;
}

// Data type of operand arguments, used only for non-constant operands
export type OperandArg = {
    /**
     * @title Allocated Operand Bits
     * @description Specifies the bits to allocate to this operand argument
     */
    bits: [BitInteger, BitInteger];
    /**
     * @title Operand Argument Name
     * @description 
     * Name of the operand argument. Argument with the name of "inputs" is reserved so that it wont be be typed inside <> and its value needed to construct the operand will be the number of items inside the opcode's parens (computation will apply to this value if provided)
     * @pattern ^[A-Za-z0-9_][A-Za-z0-9-_\s]*[A-Za-z0-9-_]$
     */
    name: "inputs" | string;
    /**
     * @title Operand Argument Description
     * @description Description of the operand argument
     */
    desc?: string;
    /**
     * @title Allocated Operand Bits Computation
     * @description 
     * Specifies any arithmetical operation that needs to be applied on the value of this operand argument. The "arg" keyword is reserved for accessing the value of this operand argument, example: "(arg + 1) * 2"
     */
    computation?: string;
    /**
     * @title Operand Argument Range
     * @description 
     * Determines the valid range of the operand argument before any computation applied. For an Operand Argument named \"Inputs\" it defines the valid length of items inside opcode's parens. For example an operand argument can be any range between 1 - 10: [[1, 10]] or an operand argument can only be certain exact number: [[2], [3], [9]], meaning it can only be 2 or 3 or 9
     */
    validRange?: ([LengthInteger] | [LengthInteger, LengthInteger])[];
}
