import Image from "next/image";
import ProductOptions from "../ProductOptions";
import {FC} from "react";
import {ProductComponentPropsType} from "./Product.types";

const ProductComponent: FC<ProductComponentPropsType> = ({data}) => {
    const {title, image: {src, alt = '', width, height}, options, variants} = data;

    return (
        <div>
            <div className="bg-orange-200 mb-14 rounded-b-xl py-7 px-4">
                <h1>{title}</h1>
            </div>
            <div className="px-28 pb-24 max-w-screen-md w-full m-auto">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                />
                <ProductOptions options={options} variants={variants}/>
                <button className="text-xl bg-gradient-to-b from-amber-400 to-amber-600 text-center m-auto w-full rounded-md text-white mt-14 h-16">
                    Add to My Store
                </button>
            </div>
        </div>
    )
}

export default ProductComponent