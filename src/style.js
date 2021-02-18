import styled, { createGlobalStyle} from "styled-components";


// Working on style here .. Danke schön
export const GlobalStyle= createGlobalStyle`
body {
  color: ${(props) => props.theme.mainColor};
  background-color: ${(props) => props.theme.backgroundColor}
}

`


export const App1= styled.div`
text-align: center;


`;
export const AppHeader= styled.div`
background-color:${props => props.theme.backgroundColor};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${props => props.theme.mainColor};
`;
export const MainTitle= styled.h1 `
font-family:Cursive;
`

export const AppLogo= styled.img`
height: 70vmin;

`;

export const ListPod= styled.div`
align-items: center;
justify-content: center;
display: flex;
padding: 20px;


`;
export const ProductPod= styled.div`
margin: 20px;
height: 350px;
width: 300px;

cursor: pointer;
img {
  width: 200px;
  height: 250px;
}

p {
  text-align: center;

}
`


