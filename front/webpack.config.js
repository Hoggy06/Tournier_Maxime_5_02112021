const path = require('path');

module.exports = {
  mode: "production",
  entry: {
    app: "/js/script.js"
  },
  output: {
    filename: "app.bundle.js",
    path: path.resolve(__dirname, "js")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
};