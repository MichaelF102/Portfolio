import { createGlobalStyle } from "styled-components";

/*
font-family: 'Source Sans Pro', sans-serif;
font-family: 'Ubuntu Mono', monospace;
*/

const GlobalStyle = createGlobalStyle`
*,*::before,*::after,h1,h2,h3,h4,h5,h6{
margin:0;
padding:0;


}

h1,h2,h3,h4,h5,h6{
display:inline-block;

}

  :root {
    /* Safe zones for fixed chrome: logo, social, side nav, bottom nav */
    --page-inset-top: 7rem;
    --page-inset-bottom: 5rem;
    --page-inset-left: 5.75rem;
    --page-inset-right: 5.75rem;
    --nav-side-gutter: 3rem;
  }

  @media (max-width: 40em) {
    :root {
      --page-inset-top: 8rem;
      --page-inset-bottom: 5.5rem;
      --page-inset-left: 4.75rem;
      --page-inset-right: 4.75rem;
      --nav-side-gutter: 2.5rem;
    }
  }

  body {
    margin: 0;
    padding: 0;
   overflow-x:hidden;
    font-family: 'Source Sans Pro', sans-serif;
  }
`;

export default GlobalStyle;
