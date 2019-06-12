module.exports = function (api) {
  api.cache(true); // cache babel config

  return {
    presets: [
      [
        "@babel/preset-env",
        { useBuiltIns: "usage" },
      ],
      [
        "@babel/preset-react",
        { development: api.env("development") },
      ],
      "@babel/preset-flow"
    ],
  };
};
