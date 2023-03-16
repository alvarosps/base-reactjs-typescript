import { merge } from 'webpack-merge';
import common from './webpack.common';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const devConfig: Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: './dist',
        },
        historyApiFallback: true,
        open: true,
        compress: true,
        hot: true,
        port: 3000,
    },
};

export default merge(common, devConfig);
