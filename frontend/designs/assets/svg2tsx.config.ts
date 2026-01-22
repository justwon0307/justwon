import { defineConfig } from "@justkits/svg2tsx";

export default defineConfig({
  type: "standalone",
  suffix: "Logo",
  index: true,
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
        "prefixIds",
        "removeDimensions",
      ],
    },
    template: (variables, { tpl }) => {
      return tpl`
        import type { IconProps } from '@/types';

        export function ${variables.componentName}({ size = 24, ...props }: Readonly<IconProps>) {
          return (${variables.jsx});
        }
      `;
    },
  },
});
