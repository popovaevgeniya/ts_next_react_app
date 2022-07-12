import ProductComponent from "./Product.component";
import {FC} from "react";
import {ProductContainerPropsType} from "./Product.types";

const ProductContainer: FC<ProductContainerPropsType> = ({productById: {data, variantRewards}}) => {
    return <ProductComponent data={JSON.parse(data)}/>
}

export default ProductContainer;