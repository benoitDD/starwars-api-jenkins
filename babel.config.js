const presets = [
    [
      "@babel/env",
      {
        targets: {
          node: "10.15.3"
        },
        useBuiltIns: "usage",
        "corejs": 3
      },
    ],
  ];
  
  module.exports = { presets };