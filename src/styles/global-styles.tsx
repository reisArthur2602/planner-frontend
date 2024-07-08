import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 
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
  padding: 0;
  outline: none;
  list-style: none;
  border-style: none;
  font-family: inherit;
  font-size:inherit;
}

body { 
  font-size: 0.875rem;
  font-weight: 500;
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
  cursor: pointer;
  background: transparent;
  color: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

#root, #__next {
  isolation: isolate;
}


a{
  text-decoration: none;
  color: inherit;
  font-family: inherit;
}

`;
