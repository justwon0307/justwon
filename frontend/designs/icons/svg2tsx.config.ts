import { defineConfig } from "@justkits/svg2tsx";

export default defineConfig({
  type: "family",
  suffix: "Icon",
  index: false,
  options: {
    svgProps: {
      width: "{size}",
      height: "{size}",
      color: "{color}",
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
        ${variables.imports}
        import type { IconProps } from '../../types';

        export function ${variables.componentName}({ size = 24, color = "currentColor" }: Readonly<IconProps>) {
          return (${variables.jsx});
        }
      `;
    },
  },
});
