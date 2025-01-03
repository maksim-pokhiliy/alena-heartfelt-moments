"use client";

import { createTheme } from "@mui/material";
import { Great_Vibes as GreatVibes } from "next/font/google";

declare module "@mui/material/styles" {
  interface Theme {
    customSizes: {
      height: {
        full: string;
      };
    };
  }

  interface ThemeOptions {
    customSizes: {
      height: {
        full: string;
      };
    };
  }
}

const greatVibes = GreatVibes({
  subsets: ["latin"],
  weight: ["400"],
  style: "normal",
  display: "swap",
});

const baseTheme = createTheme({
  typography: {
    fontFamily: greatVibes.style.fontFamily,
  },
  customSizes: {
    height: {
      full: "100vh",
    },
  },
});

export const theme = createTheme(baseTheme, {
  palette: {
    primary: {
      main: "#B0C4DE",
      light: "#D8BFD8",
      dark: "#2F4F4F",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#D8BFD8",
      light: "#F5F5F5",
      dark: "#B0C4DE",
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#B22222",
    },
    action: {
      hover: "rgba(0, 0, 0, 0.08)",
      selected: "rgba(0, 0, 0, 0.14)",
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "#B0C4DE",
      active: "#2F4F4F",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#FFFFFF",
    },
    background: {
      default: "#DDDDDD",
      paper: "#D02426",
    },
    divider: "#FF0088",
  },
  typography: {
    h1: {
      fontSize: baseTheme.typography.pxToRem(75),
      lineHeight: baseTheme.typography.pxToRem(95),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(65),
        lineHeight: baseTheme.typography.pxToRem(85),
      },
    },
    h2: {
      fontSize: baseTheme.typography.pxToRem(65),
      lineHeight: baseTheme.typography.pxToRem(85),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(55),
        lineHeight: baseTheme.typography.pxToRem(75),
      },
    },
    h3: {
      fontSize: baseTheme.typography.pxToRem(60),
      lineHeight: baseTheme.typography.pxToRem(80),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(50),
        lineHeight: baseTheme.typography.pxToRem(70),
      },
    },
    h4: {
      fontSize: baseTheme.typography.pxToRem(55),
      lineHeight: baseTheme.typography.pxToRem(70),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(45),
        lineHeight: baseTheme.typography.pxToRem(60),
      },
    },
    h5: {
      fontSize: baseTheme.typography.pxToRem(45),
      lineHeight: baseTheme.typography.pxToRem(55),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(35),
        lineHeight: baseTheme.typography.pxToRem(45),
      },
    },
    h6: {
      fontSize: baseTheme.typography.pxToRem(35),
      lineHeight: baseTheme.typography.pxToRem(45),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(30),
        lineHeight: baseTheme.typography.pxToRem(40),
      },
    },
    body2: {
      fontSize: baseTheme.typography.pxToRem(34),
      lineHeight: baseTheme.typography.pxToRem(48),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(30),
        lineHeight: baseTheme.typography.pxToRem(36),
      },
    },
    body1: {
      fontSize: baseTheme.typography.pxToRem(30),
      lineHeight: baseTheme.typography.pxToRem(36),
      "@media (min-width: 376px) and (max-width: 1024px)": {
        fontSize: baseTheme.typography.pxToRem(26),
        lineHeight: baseTheme.typography.pxToRem(32),
      },
    },
  },
});
