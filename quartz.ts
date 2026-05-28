import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import * as ExternalPlugin from "./.quartz/plugins";

const config = await loadQuartzConfig({
	theme: {
      fontOrigin: "local",
      cdnCaching: true,
      typography: {
        header: {
          name: "DM Serif Display",
          weights: [400],
        },
        body: "Bricolage Grotesque",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fffdfa",
          lightgray: "#d1caba",
          gray: "#9c9384",
          darkgray: "#2A354B",
          dark: "#08142C",
          secondary: "#274B75",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#0c0f14",
          lightgray: "#2b3443ff",
          gray: "#5A657B",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7188A9",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
	}
})



export default config

export const layout = await loadQuartzLayout() 

ExternalPlugin.Comments({
  provider: "giscus",
  options: {
    repo: "brandonxu6106/designnotes",
    repoId: "R_kgDOSn4_aw",
    category: "Announcements",
    categoryId: "DDIC_kwDOSn4_a84C98NW",
  },
});


// Transformer
ExternalPlugin.TableOfContentsTransformer({ maxDepth: 6 });
// Component
ExternalPlugin.TableOfContents({ layout: "modern" });



