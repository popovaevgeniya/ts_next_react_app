type ProductVariantType = {
    id: number
    option1: string
    option2: string
}

type ProductOptionType = {
    id: number
    name: string
    position: number
    values: Array<string>
}

export type PropTypeContainer = {
    options: Array<ProductOptionType>
    variants: Array<ProductVariantType>
}

export type PropTypeComponent = {
    options: Array<ProductOptionType>
}