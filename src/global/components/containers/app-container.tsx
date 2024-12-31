"use client";

import { Box, Container, BoxProps, useTheme } from "@mui/material";

export type AppContainerProps = BoxProps;

export const AppContainer = ({ children, ...props }: AppContainerProps) => {
  const theme = useTheme();

  const verticalRibbonWidth = {
    xs: theme.spacing(1.25),
    sm: theme.spacing(1.875),
    md: theme.spacing(2.5),
  };

  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
        position: "relative",
        "::before": {
          content: '""',
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: "url('images/snow.png')",
          backgroundSize: "800px",
          backgroundRepeat: "repeat",
          opacity: 0.3,
          pointerEvents: "none",
          zIndex: 1,
        },
      }}
      {...props}
    >
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: {
            xs: theme.spacing(5),
            sm: theme.spacing(7),
            md: theme.spacing(10),
          },
          width: verticalRibbonWidth,
          height: "100vh",
          backgroundColor: theme.palette.background.paper,
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: {
            xs: theme.spacing(5),
            sm: theme.spacing(7.5),
            md: theme.spacing(10),
          },
          left: 0,
          width: "100%",
          height: {
            xs: theme.spacing(1.25),
            sm: theme.spacing(1.875),
            md: theme.spacing(2.5),
          },
          backgroundColor: theme.palette.background.paper,
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: {
            xs: `calc(${theme.spacing(5)} + ${theme.spacing(1.25)})`,
            sm: `calc(${theme.spacing(7.5)} + ${theme.spacing(1.875)})`,
            md: `calc(${theme.spacing(10)} + ${theme.spacing(2.5)})`,
          },
          left: {
            xs: `calc(${theme.spacing(5)} + ${verticalRibbonWidth.xs} / 2)`,
            sm: `calc(${theme.spacing(7)} + ${verticalRibbonWidth.sm} / 2)`,
            md: `calc(${theme.spacing(10)} + ${verticalRibbonWidth.md} / 2)`,
          },
          width: {
            xs: theme.spacing(6.25),
            sm: theme.spacing(15.625),
            md: theme.spacing(18.75),
          },
          height: {
            xs: theme.spacing(6.25),
            sm: theme.spacing(15.625),
            md: theme.spacing(18.75),
          },
          backgroundImage: "url('/images/bow.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          zIndex: 3,
          transform: "translate(-50%, -50%)",
        }}
      />

      <Container maxWidth="lg" sx={{ backgroundColor: "background.default" }}>
        {children}
      </Container>
    </Box>
  );
};
