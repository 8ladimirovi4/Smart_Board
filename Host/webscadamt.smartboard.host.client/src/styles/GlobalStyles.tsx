import { Global, css } from '@emotion/react';
import 'primereact/resources/themes/lara-light-teal/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons

const globalStyles = css`
  @font-face {
    font-family: 'OpenSans-Bold';
    src: url('src/assets/fonts/OpenSans-Bold.ttf');
  }

  @font-face {
    font-family: 'OpenSans-Semibold';
    src: url('src/assets/fonts/OpenSans-Semibold.ttf');
  }

  @font-face {
    font-family: 'OpenSans-Regular';
    src: url('src/assets/fonts/OpenSans-Regular.ttf');
  }

  @font-face {
    font-family: 'OpenSans-Light';
    src: url('src/assets/fonts/OpenSans-Light.ttf');
  }

  * {
    box-sizing: border-box;
  }

  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'OpenSans-Regular', sans-serif;
    /* font-family: "OpenSans-Light", sans-serif; additinal font*/
    color: #65655f;
    /* color:#d5d4c5 additional color*/
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul {
    margin: 0;
    padding: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
  }

  h1 {
    font-family: 'OpenSans-Bold', sans-serif;
    color: #65655f;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'OpenSans-Bold', sans-serif;
    /* font-family: "OpenSans-Semibold"; if font less then 16pt*/
    color: #65655f;
  }
`;

function GlobalStyles() {
  return <Global styles={globalStyles} />;
}

export default GlobalStyles;
