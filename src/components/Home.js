import {MainTitle,AppLogo} from "../style"
import TitleLogo from "../booklogo.jpg"
import ProductList from './ProductList';
// import { ThemeProvider } from "styled-components";
const Home= () =>{
   
    
return(
    <div>
    <MainTitle>The bookshops</MainTitle>
    <h4>Where all nerds be there</h4>
        <AppLogo src={TitleLogo}  alt="Library photo" />

        <ProductList  />
        </div>
        

 );
};
export default Home;