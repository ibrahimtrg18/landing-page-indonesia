import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

const theme = {
  colors: {
    text: "#8984A1",
    borderInput: "#B2A7B8",

    primary: "#3E2E83",
    lightPrimary: "#776FC4",
    white: "#ffffff",
    danger: "#df2828",
  },
};

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  html, body{
    font-family: Helvetica;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    background-image: url("/images/rectangle.svg");
    background-repeat: no-repeat;
    background-size: 200px;
    background-position-x: -60px;

    @media screen and (min-width: 481px){
      background-size: unset;
      background-position-x: unset;
    }
  }

  main{
    margin: 20px 0;
  }

  h1 {
    font-size: 2.5em;
  }

  h5 {
    font-size: 1em;
  }

  ul {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  input,
  button,
  span,
  li,
  a {
    line-height: 125%;
  }

  img {
    width:100%;
    height:auto;
  }

  .wrapper-paragraph{
    & > p {
      margin-bottom: 20px;
    }
    & > h5{
      margin-bottom: 15px;
      & + p{
        margin-bottom: 0;
      }
    }
    &--space{
      margin-bottom: 30px;
      & > h5{
        margin-bottom: 15px;
        & + p{
          margin-bottom: 0;
        }
      }
    }
    
    @media screen and (min-width: 481px) {
      & > p {
        margin-bottom: 30px;
      }
    }
  }

  @font-face {
  font-family: Helvetica;
  src: url("/fonts/Helvetica/Helvetica-Regular.ttf");
  font-weight: 400;
  font-style: normal;
  }

  @font-face {
    font-family: Helvetica;
    src: url("/fonts/Helvetica/Helvetica-Bold.ttf");
    font-weight: 700;
    font-style: normal;
  }

  ${({ theme }) => {
    let textColors = ``;
    Object.keys(theme.colors).map((key) => {
      textColors += `
        .text-${key}{
          color: ${theme.colors[key]}
        }
      `;
    });
    return textColors;
  }}
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
