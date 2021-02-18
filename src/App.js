
import './App.css';
import {App1, AppHeader,GlobalStyle} from './style'
import Home from "./components/Home"
import { ThemeProvider } from "styled-components";




  //task 1
    //change the image and added my title

    //Task 2 
    //Added a list of product using the mapping method and changed css file to style.js

    //Task 3
    // Creating components with 

    
    const theme = {
      mainColor: "black", // main font color
      backgroundColor: " #D496A7", // main background color
    
    };

function App() {
  return (
    
  <ThemeProvider theme={theme}>
       <GlobalStyle />
    <AppHeader>
        <App1>
      {/* <AppHeader> */}
        <Home/>
      {/* </AppHeader> */}
    </App1>
    
    </AppHeader>
    
    </ThemeProvider>

  );
}

export default App;
