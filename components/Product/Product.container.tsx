import ProductComponent from "./Product.component";
import {FC, useEffect, useState} from "react";
import {ProductComponentPropsType, ProductContainerPropsType} from "./Product.types";
import {ProductVariantType} from "../ProductOptions/ProductOptions.types";
import {gql, useMutation} from "@apollo/client";

const ADD_TO_CART_MUTATION = gql`
  mutation AddToCart($variantId: String!){
     addToCart(variantId: $variantId)
  }
`

const ProductContainer: FC<ProductContainerPropsType> = ({productById: {data, variantRewards}}) => {
    const parseVariantRewards = JSON.parse(variantRewards)
    const parseData = JSON.parse(data)

    const maxVariantReward = Math.max.apply(null, Object.values(parseVariantRewards))
    const maxRewardProductId = Object.keys(parseVariantRewards).find((key) => (parseVariantRewards[key] === maxVariantReward))
    const maxRewardVariant = parseData.variants.find((variant: ProductVariantType) => (variant.id === Number(maxRewardProductId)))

    const [currentVariant, setCurrentVariant] = useState(maxRewardVariant)
    const [currentReward, setCurrentReward] = useState(maxVariantReward || null)
    const [option1, setOption1] = useState(maxRewardVariant.option1)
    const [option2, setOption2] = useState(maxRewardVariant.option2)

    const findVariant = () => {
        const existingVariant = parseData.variants.find((variant: ProductVariantType) => (variant.option1 === option1 && variant.option2 === option2))
        if (!existingVariant) {
            setCurrentVariant(null)
            setCurrentReward(null)
        } else {
            setCurrentVariant(existingVariant)
            Object.keys(parseVariantRewards).forEach((key) => {
                if (Number(key) === existingVariant.id) {
                    setCurrentReward(parseVariantRewards[key])
                }
            })
        }
    }

    useEffect(() => {
        findVariant()
    }, [option1, option2])

    const [addToCart] = useMutation(ADD_TO_CART_MUTATION)

    const handleAddToCartClick = () => {
        if (!currentVariant) return;
        const variantId = String(currentVariant.id)
        addToCart({variables: {variantId}}).then(r => {
            if (r) {
                alert('The product added to the cart!')
            } else alert('The product didn\'t add to the cart!')
        });
    }

    const containerProps = {
        data: parseData,
        currentVariant,
        currentReward,
        option1,
        option2,
        setOption1,
        setOption2,
        handleAddToCartClick
    } as ProductComponentPropsType

    return <ProductComponent {...containerProps}/>
}

export default ProductContainer;