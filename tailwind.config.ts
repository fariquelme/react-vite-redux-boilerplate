import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{html,js,ts,tsx}",
    "./src/pages/**/*.{html,js,ts,tsx}",
    "./src/layouts/**/*.{html,js,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
    fontFamily: {}
  },
  colors: ({ colors }) => ({
    inherit: colors.inherit,
    current: colors.current,
    transparent: colors.transparent,
    black: colors.black,
    white: colors.white,
    slate: colors.slate,
    gray: colors.gray,
    zinc: colors.zinc,
    neutral: colors.neutral,
    stone: colors.stone,
    red: colors.red,
    orange: colors.orange,
    amber: colors.amber,
    yellow: colors.yellow,
    lime: colors.lime,
    green: colors.green,
    emerald: colors.emerald,
    teal: colors.teal,
    cyan: colors.cyan,
    sky: colors.sky,
    blue: colors.blue,
    indigo: colors.indigo,
    violet: colors.violet,
    purple: colors.purple,
    fuchsia: colors.fuchsia,
    pink: colors.pink,
    rose: colors.rose,
  }),
  plugins: [require("@tailwindcss/aspect-ratio"), require("flowbite/plugin")],
} satisfies Config;
