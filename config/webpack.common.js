const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.ts'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, '../dist')
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
              { loader: "sass-loader" },
            ],
          },
          { test: /\.(png|jpe?g|gif|svg)$/i, loader: 'file-loader' },
          { test: /\.([cm]?ts|tsx)$/, loader: 'ts-loader' }
        ],
      },
}
