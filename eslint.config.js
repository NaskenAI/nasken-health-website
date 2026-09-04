import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import jsxA11y from "eslint-plugin-jsx-a11y";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist", "node_modules"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      // jsx-a11y at error, so an accessibility regression blocks a merge
      // instead of accumulating as a warning. Severity is promoted while the
      // recommended options are preserved: several rules carry option objects
      // (control-has-associated-label ignores input/textarea, which
      // label-has-associated-control already covers), and replacing a rule
      // with a bare severity silently drops them. Rules the plugin ships as
      // "off" stay off -- label-has-for is deprecated in favour of
      // label-has-associated-control.
      ...Object.fromEntries(
        Object.entries(jsxA11y.flatConfigs.recommended.rules).map(([rule, value]) => {
          if (value === "off" || value === 0) return [rule, "off"];
          if (Array.isArray(value)) return [rule, ["error", ...value.slice(1)]];
          return [rule, "error"];
        })
      ),
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  }
);
