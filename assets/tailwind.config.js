// See the Tailwind configuration guide for advanced usage
// https://tailwindcss.com/docs/configuration

const plugin = require("tailwindcss/plugin");
const fs = require("fs");
const path = require("path");

module.exports = {
  content: ["./js/**/*.js", "../lib/tasks_web.ex", "../lib/tasks_web/**/*.*ex"],
  corePlugins: {
    container: false,
  },
  theme: {
    fontSize: {
      banner: ["var(--fs-banner)", "1.15"],
      h1: ["var(--fs-h1)", "1.15"],
      h2: ["var(--fs-h2)", "1.15"],
      h3: ["var(--fs-h3)", "1.15"],
      h4: ["var(--fs-h4)", "1.18"],
      h5: ["var(--fs-h5)", "1.2"],
      h6: ["var(--fs-h6)", "1.3"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      brand: {
        DEFAULT: "#ABEDC6",
        light: "#B9FFB7",
        mid: "#ABEDC6",
        dark: "#98D9C2",
      },
      dark: {
        DEFAULT: "#0D0000",
        light: "#403233",
        mid: "#27191A",
        dark: "#120a0a",
      },
      light: {
        DEFAULT: "#fdfdfd",
        light: "#fdfdfd",
        mid: "#efefef",
        dark: "#dedede",
      },
      cta: {
        DEFAULT: "#F19A3E",
        mid: "#F19A3E",
        light: "#f8cc9d",
        dark: "#bb670e",
      },
      error: "rgb(157, 11, 11)",
      success: "green",

      text: "var(--color-text)",
      button: "var(--color-cta)",
      bg: "var(--color-bg)",
      outline: "var(--color-outline)",
    },
    spacing: {
      0: "0",
      px: "1px",
      pxx: "2px",
      tiny: "0.81rem",
      small: "1.3rem",
      medium: "2.09rem",
      large: "3.36rem",
      huge: "5.41rem",
      "dyn-tiny": "var(--spacer-tiny)",
      "dyn-small": "var(--spacer-small)",
      "dyn-medium": "var(--spacer-medium)",
      "dyn-large": "var(--spacer-large)",
      "dyn-huge": "var(--spacer-huge)",
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    // Allows prefixing tailwind classes with LiveView classes to add rules
    // only when LiveView classes are applied, for example:
    //
    //     <div class="phx-click-loading:animate-ping">
    //
    plugin(({ addVariant }) =>
      addVariant("phx-click-loading", [
        ".phx-click-loading&",
        ".phx-click-loading &",
      ]),
    ),
    plugin(({ addVariant }) =>
      addVariant("phx-submit-loading", [
        ".phx-submit-loading&",
        ".phx-submit-loading &",
      ]),
    ),
    plugin(({ addVariant }) =>
      addVariant("phx-change-loading", [
        ".phx-change-loading&",
        ".phx-change-loading &",
      ]),
    ),

    // Embeds Heroicons (https://heroicons.com) into your app.css bundle
    // See your `CoreComponents.icon/1` for more information.
    //
    plugin(function ({ matchComponents, theme }) {
      let iconsDir = path.join(__dirname, "../deps/heroicons/optimized");
      let values = {};
      let icons = [
        ["", "/24/outline"],
        ["-solid", "/24/solid"],
        ["-mini", "/20/solid"],
        ["-micro", "/16/solid"],
      ];
      icons.forEach(([suffix, dir]) => {
        fs.readdirSync(path.join(iconsDir, dir)).forEach((file) => {
          let name = path.basename(file, ".svg") + suffix;
          values[name] = { name, fullPath: path.join(iconsDir, dir, file) };
        });
      });
      matchComponents(
        {
          hero: ({ name, fullPath }) => {
            let content = fs
              .readFileSync(fullPath)
              .toString()
              .replace(/\r?\n|\r/g, "");
            let size = theme("spacing.6");
            if (name.endsWith("-mini")) {
              size = theme("spacing.5");
            } else if (name.endsWith("-micro")) {
              size = theme("spacing.4");
            }
            return {
              [`--hero-${name}`]: `url('data:image/svg+xml;utf8,${content}')`,
              "-webkit-mask": `var(--hero-${name})`,
              mask: `var(--hero-${name})`,
              "mask-repeat": "no-repeat",
              "background-color": "currentColor",
              "vertical-align": "middle",
              display: "inline-block",
              width: size,
              height: size,
            };
          },
        },
        { values },
      );
    }),
  ],
};
