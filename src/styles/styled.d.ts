import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      primary: string;
      white: string;
      black: string;
      red_300: string;
      background: string;
    };
  }
}
