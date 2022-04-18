module.exports = {
    source: ["tokens.json"],
    platforms: {
      css: {
        transformGroup: "css",
        buildPath: "src/tokens/css/",
        files: [
          {
            destination: "colors.css",
            format: "css/variables",
            options: {
              outputReferences: true,
            },
            filter: {
              "type": "color"
            }
          },
        ],
      },
      ts: {
        transformGroup: "js",
        buildPath: "src/tokens/js/",
        files: [
          {
            destination: "colors.js",
            format: "javascript/es6",
            options: {
              outputReferences: true,
            },
            filter: {
              "type": "color"
            }
          },
        ],
      },
      js: {
        transformGroup: "web",
        buildPath: "src/tokens/json/",
        files: [{
          destination: "colors.json",
          format: "json/nested",
          options: {
            outputReferences: true,
          },
          filter: {
            "type": "color"
          }
        }]
      },
    },
  };