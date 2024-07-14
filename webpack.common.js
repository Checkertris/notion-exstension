const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");

module.exports = {
  entry: {
    popup: path.resolve("./src/pages/popup/Index.tsx"),
    options: path.resolve("./src/pages/options/Index.tsx"),
    newTab: path.resolve("./src/pages/tabs/Index.tsx"),
    contentScript: path.resolve("./src/scripts/contentScript.tsx"),
    background: path.resolve("./src/scripts/background.tsx"),
    sidePanel: path.resolve("./src/pages/sidePanel/Index.tsx"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx$/,
        exclude: /node_modules/,
      },
      {
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                ident: "postcss",
                plugin: [tailwindcss, autoprefixer],
              },
            },
          },
        ],
        test: /\.css$/i,
      },
      {
        use: "asset/resource",
        type: "asset/resource",
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static"),
          to: path.resolve("dist"),
        },
      ],
    }),
    ...getHtmlPlugins(["popup", "options", "dashboard", "newTab", "sidePanel"]),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      "~": path.resolve(__dirname, "./src/"),
    },
  },
  output: {
    filename: "[name].js",
  },
  optimization: {
    splitChunks: {
      chunks(chunk) {
        return chunk.name !== "contentScript";
      },
    },
  },
};

function getHtmlPlugins(chunks) {
  return chunks.map(
    (chunk) =>
      new HtmlPlugin({
        title: "React Extension",
        filename: `${chunk}.html`,
        chunks: [chunk],
      })
  );
}
