import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import type { Metadata } from "next";

import { AppContainer } from "@app/global/components/containers/app-container";
import { theme } from "@app/global/theme";
import { BACK_TO_TOP_ANCHOR } from "@app/global/utils/constants/layout";

export const metadata: Metadata = {
  title: "Вебсайт-привітання для Альки",
  description:
    "Цей вебсайт присвячений дивовижній мамі, дружині, сестрі та подрузі. Дівчині, яка змогла втілити в собі все найкраще. Відкрийте для себе історії про Альку та її досягнення.",
  openGraph: {
    title: "Вебсайт-привітання для Альки",
    description:
      "Цей вебсайт присвячений дивовижній мамі, дружині, сестрі та подрузі. Дівчині, яка змогла втілити в собі все найкраще.",
    url: "https://alena-heartfelt-moments.vercel.app",
    type: "website",
    locale: "uk_UA",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Алька — дивовижна мама, дружина, сестра та подруга",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Вебсайт-привітання для Альки",
    description:
      "Познайомтесь із Алькою — дивовижною мамою, дружиною, сестрою та подругою. Цей сайт створений для найтепліших слів і моментів.",
    images: ["/images/hero.jpg"],
  },
  alternates: {
    canonical: "https://alena-heartfelt-moments.vercel.app",
    languages: {
      "uk-UA": "https://alena-heartfelt-moments.vercel.app",
    },
  },
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body id={BACK_TO_TOP_ANCHOR}>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <AppContainer component="main">{children}</AppContainer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
