// const path = require('path');

// module.exports = {
//   entry: './src/ChatWidget.ts',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'mm-ai-chat-widget.js',
//     library: 'MMAIChatWidget',
//     libraryTarget: 'umd',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.tsx?$/,
//         use: [
//           {
//             loader: 'ts-loader',
//             options: {
//               compilerOptions: {noEmit: false},
//             }
//           }
//         ],
//         exclude: /node_modules/,
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['.tsx', '.ts', '.js'],
//   },
// };

// webpack.config.js

const path = require('path');

module.exports = {
    entry: './src/ChatWidget.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'mm-ai-chat-widget.js',
        library: 'MMAIChatWidget',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx','.ts','.tsx'],
    },
};