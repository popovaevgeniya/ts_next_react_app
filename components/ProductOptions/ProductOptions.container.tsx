import ProductOptionsComponent from "./ProductOptions.component";
import React, {FC} from "react";
import {PropTypeContainer} from "./ProductOptions.types";

const ProductOptionsContainer: FC<PropTypeContainer> = (props) => {
    const {options, setOption1, setOption2} = props
    const handleButtonClick = (event: React.MouseEvent<HTMLElement>, id: number) => {
        const optionId = (event.target as HTMLInputElement).id
        if(options[0].id === id) {
            setOption1(optionId)
        } else setOption2(optionId)
    }

    return <ProductOptionsComponent {...props} handleButtonClick={handleButtonClick} />
}

export default ProductOptionsContainer