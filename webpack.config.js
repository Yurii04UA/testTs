const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all',
        },
        minimize: false,
        minimizer: [],
    };

    if (isProd) {
        config.minimizer = [new CssMinimizerPlugin(), new TerserPlugin()];
        config.minimize = true;
    }

    return config;
};

const filename = (extensions) =>
    isDev ? `[name].${extensions}` : `[name].[hash].${extensions}`;

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname, 'src'),
    entry: {
        main: './script/index.ts',
    },
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
    },
    devServer: {
        port: 8080,
        watchFiles: ['src/index.html'],
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
        },
    },
    devtool: isDev ? 'source-map' : 'inline-source-map',
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html',
        }),

        new ESLintPlugin({
            extensions: ['ts'],
            fix: true,
        }),
    ],
    optimization: optimization(),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
};
