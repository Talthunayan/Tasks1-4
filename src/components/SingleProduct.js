import {ProductPod} from "../style"

 const SingleProduct = (props) =>{
const product= props.product;
const key= props.key;
return(      
    
 
        
     
             <ProductPod>
            <img alt={product.name} src={product.image} />
         
            <p>{product.name}</p>
            <p>{product.price} KD</p>
       
            </ProductPod>
       
        
         
       
)

}
export default SingleProduct;
