const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
const babelOptions = preset => {
    const opts = {
        presets: [
            '@babel/preset-env'
        ]
    }

    if (preset){
        opts.presets.push(preset)
    }
    return opts
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: {
        main: ['@babel/polyfill', './index.tsx'],
    },
    resolve: {
        extensions: ['.js', '.json', '.png', '.jsx', '.ts', '.tsx'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    devServer: {
        port: 3000,
        hot: isDev
    },

    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "quiz-app",
            template: path.resolve(__dirname, 'public/index.html'),
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ {
                    loader: MiniCssExtractPlugin.loader,
                }, 'css-loader' ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: [ 'file-loader' ]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: [ 'file-loader' ]
            },
            {
                test: /\.xml$/,
                use: [ 'xml-loader' ]
            },
            {
                test: /\.csv$/,
                use: [ 'csv-loader' ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions()
                }
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions( '@babel/preset-typescript')
                }
            },
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-typescript')
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react')
                }
            },
        ]
    }
}