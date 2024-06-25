import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
 
:root{
    --violet-text-100:#E2DDFE ;
    --violet-text-200:#BAA7FF ;
    --violet-500:#6E56CF ;
    --violet-600:#33255B ;
    --violet-700:#291F43 ;
    --violet-800:#1B1525 ;
    --violet-900:#14121F ;
}

*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

body { 
  font-size: 0.875rem;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  line-height: 1.5;
  background-color: var(--violet-900);
  color: var(--violet-text-100);

}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
color: inherit;
font: inherit;
cursor: pointer;
outline: none; 
background: 0;
}


p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}

`;

export { GlobalStyled };
