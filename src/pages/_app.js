import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  body{
    font-family: Helvetica;
  }

  @font-face {
  font-family: Helvetica;
  src: url("/fonts/Helvetica/Helvetica-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  }

  @font-face {
    font-family: Helvetica;
    src: url("/fonts/Helvetica/Helvetica-Bold.ttf");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }
`;

const theme = {
  colors: {
    primary: "#fafafa",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
