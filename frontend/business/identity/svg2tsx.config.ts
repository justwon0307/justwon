import { defineConfig } from "@justkits/svg2tsx";

export default defineConfig({
  type: "standalone",
  index: false,
  assetsDir: "./assets/",
  srcDir: "./src/",
  options: {
    expandProps: "end",
    svgProps: {
      width: "{size}",
      height: "{size}",
    },
    svgoConfig: {
      plugins: [
        {
          name: "preset-default",
          params: { overrides: { removeViewBox: false } },
        },
        {
          name: "convertColors",
          params: { currentColor: true },
        },
        "prefixIds",
        "removeDimensions",
      ],
    },
    template: (variables, { tpl }) => {
      return tpl`
        import type { IconProps } from '../types';

        export function ${variables.componentName}({ size = 48, ...props }: Readonly<IconProps>) {
          return (${variables.jsx});
        }
      `;
    },
  },
});
