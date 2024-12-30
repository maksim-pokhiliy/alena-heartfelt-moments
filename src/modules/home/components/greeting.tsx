import { Box } from "@mui/material";

import { AppTypography } from "@app/global/components/ui/app-typography";

export const Greeting = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        gap: 2,
        position: "relative",
      }}
    >
      <AppTypography variant="h1" sx={{ textAlign: "center" }} squiggly>
        video.title
      </AppTypography>

      <AppTypography
        variant="body2"
        sx={{ mb: 4, textAlign: "center", width: { xs: "100%", md: "60%" } }}
      >
        video.subtitle
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
