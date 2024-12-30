import { Box, Stack } from "@mui/material";
import Image from "next/image";

import { AppTypography } from "@app/global/components/ui/app-typography";

import hero from "../../../../public/images/hero.jpg";

export const Hero = () => {
  return (
    <Stack
      spacing={2}
      direction={{ xs: "column", md: "row" }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        gap: 2,
      }}
    >
      <Stack spacing={2} sx={{ width: { xs: "100%", md: "50%" } }}>
        <AppTypography variant="h2" sx={{ textAlign: "center" }} squiggly>
          hero.title
        </AppTypography>

        <AppTypography variant="body2" sx={{ textAlign: "center" }}>
          hero.subtitle
        </AppTypography>
      </Stack>

      <Box
        sx={{
          position: "relative",
          width: { xs: "100%", md: "50%" },
          height: { xs: "200px", md: "500px" },
          borderRadius: (theme) => theme.typography.pxToRem(8),
          overflow: "hidden",
        }}
      >
        <Image
          src={hero}
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
