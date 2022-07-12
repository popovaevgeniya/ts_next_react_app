import {FC} from "react";
import { PropTypeComponent} from "./ProductOptions.types";

const ProductOptionsComponent: FC<PropTypeComponent> = ({options}) =>  (
    <div>{options.map(({name, id, values}) =>(
        <div key={id}>
            <h3 className="text-2xl text-slate-400 mb-3 mt-5">{name}</h3>
            <div className="grid grid-cols-3 gap-x-5 gap-y-2">
                {values.map((value)=>(
                    <button key={value} className="py-1 px-5 w-40 h-16 border-2 border-grey rounded-md hover:border-black">{value}</button>
                ))}
            </div>
        </div>
    ))}</div>
)

export default ProductOptionsComponent;