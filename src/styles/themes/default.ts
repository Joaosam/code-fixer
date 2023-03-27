import { createTheme } from "@mui/material/styles";

export const themeDefault = {
  white: "#fff",
  danger: "#E25858",

  "bg-body": "#29292E",
  "bg-secundary": "#323238",
  "bg-secundary-2": "#202124",
  "bg-components": "#212121",
  "bg-components-2": "#161717",
  "default-green": "#00875F",
  "text-default": "#c4c4c4",
} as const;

export const myStyledTheme = {
  colors: {
    primary: "#c4c4c4",
    secondary: "#00875F",
    background: "#29292E",
  },
};

export const myMuiTheme = createTheme({
  palette: {
    background: {
      paper: myStyledTheme.colors.background,
    },
    text: {
      primary: myStyledTheme.colors.primary,
    },
  },
});
