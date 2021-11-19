import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: freight-big-pro, serif;
	}
  	body {
      max-width: 100vw;
      min-height: 100vh;
      overflow-x: hidden;
	}
	body, input, textarea, select, button {
        font-family: Georgia, "Times New Roxman", Times, serif;
	}
	button{
		cursor: pointer;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
	h1{
		text-align: center;
		text-transform: uppercase;
		margin-top: 4rem;
	}
`;
