import { ThemeProvider } from "styled-components";
import { ResponseGPTProvider } from "./contexts/ResponseGPTContext";
import { GlobalStyle } from "./styles/global";
import { myMuiTheme, themeDefault } from "./styles/themes/default";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { Router } from "../Router";
import { GenerateCodeProvider } from "./contexts/GenerateCodeContext";

export function App() {
  return (
    <ThemeProvider theme={themeDefault}>
      <MuiThemeProvider theme={myMuiTheme}>
        <GlobalStyle />
        <ResponseGPTProvider>
          <GenerateCodeProvider>
            <Router />
          </GenerateCodeProvider>
        </ResponseGPTProvider>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}
