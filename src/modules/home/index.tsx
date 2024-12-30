"use client";

import { Greeting } from "./components/greeting";
import { Hero } from "./components/hero";
import { PageSection } from "./components/page-section/page-section";
import { catsImages } from "./utils/cats-images";
import { cozinessImages } from "./utils/coziness-images";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <PageSection title="music.title" subtitle="music.subtitle" center />
      <PageSection title="cats.title" subtitle="cats.subtitle" images={catsImages} />
      <PageSection title="reading.title" subtitle="reading.subtitle" center />
      <PageSection title="psychology.title" subtitle="psychology.subtitle" center />
      <PageSection title="coziness.title" subtitle="coziness.subtitle" images={cozinessImages} />
      <Greeting />
    </>
  );
};
