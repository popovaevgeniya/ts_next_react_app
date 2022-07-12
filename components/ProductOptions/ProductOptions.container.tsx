import ProductOptionsComponent from "./ProductOptions.component";
import {FC} from "react";
import {PropTypeContainer} from "./ProductOptions.types";

const ProductOptionsContainer: FC<PropTypeContainer> = ({options, variants}) => {


    return <ProductOptionsComponent options={options}/>
}

export default ProductOptionsContainer;