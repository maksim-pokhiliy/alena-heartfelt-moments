import { Box } from "@mui/material";

import { AppTypography } from "@app/global/components/ui/app-typography";

import { content } from "../utils/content";

export const Greeting = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        position: "relative",
        gap: { xs: 2, md: 4 },
        py: { xs: 8, md: 16 },
      }}
    >
      <AppTypography variant="h1" sx={{ textAlign: "center" }} squiggly>
        {content.greeting.title}
      </AppTypography>

      <AppTypography
        variant="body2"
        sx={{ mb: 4, textAlign: "center", width: { xs: "100%", md: "60%" } }}
      >
        {content.greeting.subtitle}
      </AppTypography>

      <video
        controls
        width="100%"
        height="100%"
        style={{
          borderRadius: "8px",
        }}
      >
        <source src="/greeting.mp4" type="video/mp4" />

        <track kind="captions" srcLang="en" label="English captions" />
      </video>
    </Box>
  );
};
