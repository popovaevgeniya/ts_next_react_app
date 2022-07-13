import React, {FC} from "react";
import {PropTypeComponent} from "./ProductOptions.types";
import cn from 'classnames';

const ProductOptionsComponent: FC<PropTypeComponent> = ({
                                                            options,
                                                            option2,
                                                            option1,
                                                            handleButtonClick
                                                        }) => (
    <div>{options.map(({name, id, values}) => (
        <div key={id}>
            <h3 className="text-2xl text-slate-400 mb-3 mt-5">{name}</h3>
            <div className="grid grid-cols-3 gap-x-5 gap-y-2">
                {values.map((value) => {
                    const isActive = value === option1 || value === option2
                    return <button
                        key={value}
                        id={value}
                        className={cn("py-1 px-5 w-40 h-16 border-2 border-gray-light rounded-xl hover:border-black",
                            {["bg-black border-0 text-white"]: isActive})}
                        onClick={(event: React.MouseEvent<HTMLElement>)=>handleButtonClick(event, id)}
                    >{value}</button>
                })}
            </div>
        </div>
    ))}</div>
)

export default ProductOptionsComponent;