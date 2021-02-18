import book from "./products";
import SingleProduct from "./SingleProduct";
import {ListPod} from "../style"


const ProductList= () =>{

    
return(
     <ListPod>  
    {book.map((books) =>   
    <SingleProduct product={books} key={book.id}/>
    

)}
   </ListPod>
)
}
export default ProductList;

