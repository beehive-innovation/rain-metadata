/**
 * @title Rain Contract Metadata
 * @description Required info about a contract that receives expression in at least one of its methods.
 */
export type ContractMetadata = {
    /**
     * @title Contract Name
     * @pattern ^[a-z][0-9a-z-]*$
     */
    name: string;
    /**
     * @title Contract Description
     * @description A brief description about the contract.
     */
    desc: string;
    /**
     * @title Contract Source
     * @description Github repository URL where this contract belongs to.
     */
    source: string;
    /**
     * @title Contract Git Commit
     * @pattern [a-f0-9]{40}
     */
    commit: string;
    /**
     * @title Contract's Expression Receiving Methods
     * @description Methods of the contract that receive at least one expression (EvaluableConfig) from arguments.
     * @minItems 1
     */
    expReceiveingMethods: ExpressionReceiveingMethods[]
}

export type ExpressionReceiveingMethods = {
    /**
     * @title Method Name
     */
    name: string;
    /**
     * @title Method Description
     */
    desc: string;
    /**
     * @title Method Arguments
     * @minItems 1
     */
    args: Arguments[]
}

// type of contract method arguments for metadata
export type Arguments = Bool | Number | String | Tuple | Array | Expression

// argument type for boolean
export type Bool = {
    /**
     * @title Argument Name
     */
    name: string;
    /**
     * @title Argument Description
     */
    desc: string;
    /**
     * @title Argument Path
     * @description Argument's path in contract's ABI, relative to parents path.
     */
    path: string;
    /**
     * @title Argument Type
     * @description Determines the type of the argument which can be either of string, nummber, boolean, tuple, array or exp (EvaluableConfig).
     */
    type: "boolean"
}

// argument type for numbers
export type Number = {
    /**
     * @title Argument Name
     */
    name: string;
    /**
     * @title Argument Description
     */
    desc: string;
    /**
     * @title Argument Path
     * @description Argument's path in contract's ABI, relative to parents path.
     */
    path: string;
    /**
     * @title Argument Type
     * @description Determines the type of the argument which can be either of string, nummber, boolean, tuple, array or exp (EvaluableConfig).
     */
    type: "number"
}

// argument type for string
export type String = {
    /**
     * @title Argument Name
     */
    name: string;
    /**
     * @title Argument Description
     */
    desc: string;
    /**
     * @title Argument Path
     * @description Argument's path in contract's ABI, relative to parents path.
     */
    path: string;
    /**
     * @title Argument Type
     * @description Determines the type of the argument which can be either of string, nummber, boolean, tuple, array or exp (EvaluableConfig).
     */
    type: "string"
}

// argument type for tuple (key/value)
export type Tuple = {
    /**
     * @title Argument Name
     */
    name: string;
    /**
     * @title Argument Description
     */
    desc: string;
    /**
     * @title Argument Path
     * @description Argument's path in contract's ABI, relative to parents path.
     */
    path: string;
    /**
     * @title Argument Type
     * @description Determines the type of the argument which can be either of string, nummber, boolean, tuple, array or exp (EvaluableConfig).
     */
    type: "tuple"
    /**
     * @title Tuple Properties
     */
    props: (Number | String | Tuple | Array | Expression)[]
}

// argument type for array
export type Array = {
    /**
     * @title Argument Name
     */
    name: string;
    /**
     * @title Argument Description
     */
    desc: string;
    /**
     * @title Argument Path
     * @description Argument's path in contract's ABI, relative to parents path.
     */
    path: string;
    /**
     * @title Argument Type
     * @description Determines the type of the argument which can be either of string, nummber, boolean, tuple, array or exp (EvaluableConfig).
     */
    type: "array";
    /**
     * @title Array Item Type
     * @description Determines the type of the items of the array.
     */
    items: Number | String | Tuple | Array | Expression
}

// Additional information about expressions (EvaluableConfig) in this ABI.
// argument type for expression (EvaluableConfig)
export type Expression = {
    /**
     * @title Argument Name
     */
    name: string;
    /**
     * @title Argument Description
     */
    desc: string;
    /**
     * @title Argument Path
     * @description Argument's path in contract's ABI, relative to parents path.
     */
    path: string;
    /**
     * @title Argument Type
     * @description Determines the type of the argument which can be either of string, nummber, boolean, tuple, array or exp (EvaluableConfig).
     */
    type: "exp"
    /**
     * @title Expression Context Columns
     * @description Specifies the reserved context columns of this expression.
     */
    contextColumns?: ContextColumn[];
    /**
     * @title Expression Signed Context
     * @description Determines if this expression has signedContext.
     */
    signedContext?: boolean;
    /**
     * @title Expression Signed Context
     * @description Determines if this expression has callerContext.
     */
    callerContext?: boolean;
}

// Each column in the context, cells are optional in the case of additional
// context passed in at time of execution (like arbitrary signed context).
export type ContextColumn = {
    /**
     * @title Context Column Name
     * @pattern ^[a-z][a-z0-9]*$
     */
    name: string;
    /**
     * @title Context Column Description
     */
    desc: string;
    /**
     * @title Context Column Cells
     * @description Info about the cells in this context column.
     */
    cells?: ContextCell[]
}

// One cell in the context.
export type ContextCell = {
    /**
     * @title Context Cell Name
     * @pattern ^[a-z][a-z0-9]*$
     */
    name: string;
    /**
     * @title Context Cell Description
     */
    desc: string;
}
