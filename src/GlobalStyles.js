import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  overflow-x: hidden;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* Global Styles */

${
  '' /* font-family: 'Azeret Mono', monospace;
font-family: 'Kalam', cursive;
font-family: 'Lato', sans-serif;
font-family: 'Lora', serif;
font-family: 'Rajdhani', sans-serif;
font-family: 'Roboto', sans-serif;
font-family: 'Ubuntu', sans-serif; */
}

*, :root {
  --color-text: black;
  --color-bg: white;
  --color-link-hover: #b00b69;
  --font-secondary:  'Rajdhani', sans-serif;
  --font-primary: 'Roboto', sans-serif;
  --font-accent: 'Azeret Mono', monospace;
}
i {
  font-style: italic;
}

button:active {
  transform: scale(0.90);
}



.navbar-scroll {
  background: var(--color-bg);
  transition: 0.3s ease-in-out;
  @media only screen and (min-width: 1200px) {
    background: var(--color-bg);
    ul {
      color: var(--color-text);
      li :not(.selected):hover:after, .selected:after {
        background-color: var(--color-text);
      }
    }
  }
  .hamburger {
    .bar {
      background-color: var(--color-text);
    }
  }
}


a:hover, .navlink:hover {
  cursor: pointer;
}

body {
  background-color: var(--color-bg) ;

}

main {
  width: 100%;
  margin-top: 0rem;
  z-index: -2;
}

@media only screen and (min-width: 1200px) {
  main {
    margin-top: 0;
  }
}

@media only screen and (max-width: 1500px) {
  html {
    font-size: 87.5%;
  }
}

@media only screen and (max-width: 1200px) {
  html {
    font-size: 75%;
  }
}

@media only screen and (max-width: 800px) {
  html {
    font-size: 70%;
  }
}


`;

export default GlobalStyles;
