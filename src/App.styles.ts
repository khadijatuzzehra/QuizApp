import styled, { createGlobalStyle } from "styled-components";
import BgImage from "./assets/background.jpg";

export const GlobalStyle = createGlobalStyle`
html{
  height:100%;
}
body {
    background-image: url(${BgImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
* {
  box-sizing: border-box;
  font-family:'Nunito', sans-serif;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #ffffff;
  }
  .score {
    color: #ffffff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: "Nunito", sans-serif;
    background-image: linear-gradient(180deg, #ffffff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    backgroun: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38588;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
