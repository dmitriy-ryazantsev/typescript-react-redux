import * as path from 'path';
import * as webpack from 'webpack';
const ProgressBarPlugin = require('progress-bar-webpack-plugin');


const config: webpack.Configuration =
{
    entry: './src/main',
    output: 
    {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',// Enable sourcemaps for debugging webpack's output.
    resolve: 
    {
        extensions: ['.ts', '.tsx', '.js', '.json']// Add '.ts' and '.tsx' as resolvable extensions.
    },
    module: 
    {
        rules: 
        [
            {// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },
            {// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: 
    {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    plugins:
    [
        new ProgressBarPlugin()
    ]
};

export default config;