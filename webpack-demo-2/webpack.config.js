const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    // this is to load css files
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // the chain of order here should be maintained
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
