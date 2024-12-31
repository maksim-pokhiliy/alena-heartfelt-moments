"use client";

import { Greeting } from "./components/greeting";
import { PageSection } from "./components/page-section";
import { content } from "./utils/content";

export const HomePage = () => {
  return (
    <>
      <PageSection
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        image={content.hero.image}
      />

      <PageSection
        title={content.cake.title}
        subtitle={content.cake.subtitle}
        image={content.cake.image}
        reverse
      />

      <PageSection
        title={content.mother.title}
        subtitle={content.mother.subtitle}
        image={content.mother.image}
      />

      <PageSection
        title={content.model.title}
        subtitle={content.model.subtitle}
        image={content.model.image}
        reverse
      />

      <PageSection
        title={content.wisdom.title}
        subtitle={content.wisdom.subtitle}
        image={content.wisdom.image}
      />

      <Greeting />
    </>
  );
};
