"use client";

import { Typography, TypographyProps, TypographyVariant } from "@mui/material";

type AppTypographyProps = {
  variant?: TypographyVariant;
} & Omit<TypographyProps, "fontSize" | "fontWeight" | "fontStyle">;

export const AppTypography = ({ children, variant = "body1", ...props }: AppTypographyProps) => {
  return (
    <Typography {...props} variant={variant}>
      {children}
    </Typography>
  );
};
