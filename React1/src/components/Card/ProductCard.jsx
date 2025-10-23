import { Card } from "./Card"
import './ProductCard.css';

 export const ProductCards=(props)=>{

    return(
        <div className="Product_box" >
              <img src="https://static01.nyt.com/images/2022/06/27/dining/kc-mushroom-beef-burgers/merlin_209008674_b3fa58fa-9bb1-4cfe-a08a-40b4dda0de78-jumbo.jpg"/>
             <div className="descritption">
                <h2>{props.name}</h2>
                <p className="price">{props.price}</p>
                <p className="para">Hello I am Burger</p>
                <button className="btn">Buy Now</button>

            </div>
            
            
        </div>
    )

}