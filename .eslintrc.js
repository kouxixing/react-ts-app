module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    quotes: ["warn", "single"],
    "prettier/prettier": [
      "warn",
      {
        singleQuote: true,
        printWidth: 150
      }
    ],
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "linebreak-style": ["off"],
    "no-param-reassign": ["off"],
    "no-case-declarations": ["off"],
    camelcase: ["off"],
    "no-unused-vars": "off", // 关掉无用变量定义未使用的校验
    "max-len": ["warn", 10000]
    // "no-unused-expressions": [
    //   "error",
    //   { allowTernary: true, allowShortCircuit: true }
    // ]
  },
  // overrides: [{ files: ["*.vue"], rules: { indent: "off" } }],
  parserOptions: {
    parser: "babel-eslint"
  }
};
