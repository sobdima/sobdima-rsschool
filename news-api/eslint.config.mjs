import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["src/**/*.ts"],
    ignores: ["node_modules/", "dist/", "build/", "public/"],
  },
  { languageOptions: { globals: globals.browser } },
  {
    ...pluginJs.configs.recommended,
    rules: {
      "constructor-super": "off",
    },
  },
  ...tseslint.configs.recommended,
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
    },
  },
];
