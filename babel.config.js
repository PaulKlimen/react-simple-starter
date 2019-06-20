module.exports = function (api) {
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: 'usage',
          corejs: {
            version: 3,
            proposals: true,
          }
        }
      ],
      [
        "@babel/preset-react",
        { development: api.env("development") },
      ],
      "@babel/preset-flow"
    ],

    plugins: [
      [
        "babel-plugin-styled-components",
        {
          displayName: true,
          fileName: false,
          pure: true,
        }
      ]
    ]
  };
};
