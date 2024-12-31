import { Box, Stack } from "@mui/material";
import Image from "next/image";

import { AppTypography } from "@app/global/components/ui/app-typography";

interface PageSectionProps {
  title: string;
  subtitle: string;
  image: string;
  reverse?: boolean;
}

export const PageSection = ({ title, subtitle, image, reverse = false }: PageSectionProps) => {
  return (
    <Stack
      spacing={2}
      direction={{ xs: "column", md: reverse ? "row-reverse" : "row" }}
      sx={{
        alignItems: "center",
        minHeight: "100vh",
        gap: { xs: 4, md: 8 },
        py: { xs: 8, md: 16 },
      }}
    >
      <Stack spacing={2} sx={{ width: { xs: "100%", md: "50%" } }}>
        <AppTypography variant="h2" sx={{ textAlign: reverse ? "left" : "right" }} squiggly>
          {title}
        </AppTypography>

        <AppTypography variant="body2" sx={{ textAlign: reverse ? "left" : "right" }}>
          {subtitle}
        </AppTypography>
      </Stack>

      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "50%" },
          height: { xs: "500px", md: "540px" },
          borderRadius: (theme) => theme.typography.pxToRem(8),
          overflow: "hidden",
        }}
      >
        <Image
          src={image}
          alt="Picture of the author"
          sizes="300px"
          priority
          fill
          style={{
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </Box>
    </Stack>
  );
};
