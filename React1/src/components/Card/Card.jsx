import './ProductCard.css';

 export const Card=({curElem})=>{
    return(
    
      
         <li className="product-item">

          
        <div className="Product_box" >
              
              <img
              src={curElem.image}
              alt={curElem.name}
              className="product-image"
            />
             <div className="description">
                <h2>{curElem.name}</h2>
                <p className="price">{curElem.price}</p>
                <p className="para">{curElem.description}</p>
                <button className="btn">Buy Now</button>
               

            </div>
            
            
        </div>
        </li>
        
        
    )

}