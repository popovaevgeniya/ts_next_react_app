import {ProductOptionType, ProductVariantType} from "../ProductOptions/ProductOptions.types";

type ImageType = {
    src: string
    alt: string | undefined
    width: number
    height: number
}

export type ParseDataType = {
    title: string
    image: ImageType
    options: Array<ProductOptionType>
    variants: Array<ProductVariantType>
}

type ProductDataType = {
    data: string
    variantRewards: string
}

export type ProductContainerPropsType = {
    productById: ProductDataType
}

export type ProductComponentPropsType = {
    data: ParseDataType
    currentVariant: ProductVariantType
    currentReward: number
    option1: string
    option2: string
    setOption1: (option1: string) => void
    setOption2: (option2: string) => void
    handleAddToCartClick: () => void
}
