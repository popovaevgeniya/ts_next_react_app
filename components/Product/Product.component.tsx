import Image from "next/image";
import ProductOptions from "../ProductOptions";
import {FC} from "react";
import {ProductComponentPropsType} from "./Product.types";
import cn from 'classnames';

const ProductComponent: FC<ProductComponentPropsType> = ({
                                                             data,
                                                             currentVariant,
                                                             option1,
                                                             option2,
                                                             setOption1,
                                                             setOption2,
                                                             currentReward,
                                                             handleAddToCartClick
                                                         }) => {
    const {title, image: {src, alt = '', width, height}, options} = data

    return (
        <div>
            <div className="bg-red-light mb-14 rounded-b-xl py-7 px-4 flex justify-between">
                <h1>{title}</h1>
                <div>
                    <p className="text-red text-2xl">{currentVariant?.price ? `$${Number(currentVariant.price).toFixed(2)}` : `Variant Unavailable`}</p>
                    {currentReward && <p><span className="text-xs">You get: </span><span className="text-orange">${currentReward.toFixed(2)}</span></p>}
                </div>
            </div>
            <div className="px-28 pb-24 max-w-screen-md w-full m-auto">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                />
                <ProductOptions options={options} option1={option1} option2={option2}
                                setOption1={setOption1} setOption2={setOption2}/>
                <button
                    onClick={handleAddToCartClick}
                    className={cn("text-xl bg-gradient-to-b from-orange-light to-orange text-center m-auto w-full rounded-xl text-white mt-14 h-16",
                            {["cursor-not-allowed bg-gradient-to-b from-gray-light to-gray"]: !currentVariant})}>
                    Add to My Store
                </button>
            </div>
        </div>
    )
}

export default ProductComponent