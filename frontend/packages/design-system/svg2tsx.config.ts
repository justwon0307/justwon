import { defineConfig } from "@justkits/svg2tsx";

export default defineConfig({
  type: "family",
  suffix: "Icon",
  index: false,
  assetsDir: "./src/icons/svgs/",
  srcDir: "./src/icons/components/",
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
        import type { IconProps } from '../../types';

        export function ${variables.componentName}({ size = 24, ...props }: Readonly<IconProps>) {
          return (${variables.jsx});
        }
      `;
    },
  },
});
