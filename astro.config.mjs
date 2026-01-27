// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Color Grading: Beginner to Intermediate Specialization",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/vhnam/color-grading-beginner-to-intermediate",
        },
      ],
      sidebar: [
        {
          label: "An Absolute Beginner's Crash Course",
          items: [
            {
              label: "Getting Started with Color Grading",
              slug: "an-absolute-beginner-s-crash-course/getting-started-with-color-grading",
            },
            {
              label: "Refining and Matching the Look",
              slug: "an-absolute-beginner-s-crash-course/refining-and-matching-the-look",
            }
          ],
        },
      ],
    }),
  ],
});
