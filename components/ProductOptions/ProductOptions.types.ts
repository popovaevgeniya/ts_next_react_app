import React from "react";

export type ProductVariantType = {
    id: number
    option1: string
    option2: string
    price: string
}

export type ProductOptionType = {
    id: number
    name: string
    position: number
    values: Array<string>
}

export type PropTypeContainer = {
    options: Array<ProductOptionType>
    option1: string
    option2: string
    setOption1: (option1: string) => void
    setOption2: (option2: string) => void
}

export type PropTypeComponent = {
    options: Array<ProductOptionType>
    option1: string
    option2: string
    handleButtonClick: (event: React.MouseEvent<HTMLElement>, id: number) => void
}