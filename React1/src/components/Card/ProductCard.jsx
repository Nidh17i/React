
import { Card } from './Card';
import './ProductCard.css';
import cardData from "./cardData.json"

 export const ProductCards=()=>{

    return(
        <ul>
            {cardData.map((curElem)=>(
                <Card curElem={curElem}/>
          
          ))}
        </ul>
    )

}