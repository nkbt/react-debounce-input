'use strict';


const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const pathTo = path.join.bind(null, process.cwd());

const {config: {component: COMPONENT_NAME} = {}} = require(pathTo('./package.json'));

if (!COMPONENT_NAME) {
  throw Error('<package.json>.config.component name is required');
}


const loaders = [
  {
    test: /\.css$/,
    loader: 'style-loader!css-loader?sourceMap&modules&localIdentName=[path][name]---[local]',
    include: [pathTo('src', 'example')]
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    include: [pathTo('src')]
  }
];


const definePlugin = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  'process.env.npm_package_name': JSON.stringify(process.env.npm_package_name)
});


const resolve = {};
const stats = {colors: true};


const development = {
  devtool: '#source-map',

  entry: [
    pathTo('src', 'example', 'Example.js'),
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {filename: 'bundle.js', path: pathTo('example')},
  plugins: [
    new HtmlWebpackPlugin(),
    definePlugin
  ],
  module: {
    loaders
  },
  resolve,
  stats,
  devServer: {
    historyApiFallback: true,
    stats: {
      // Do not show list of hundreds of files included in a bundle
      chunkModules: false,
      colors: true
    }
  }
};


const ghPages = {
  devtool: '#source-map',
  entry: pathTo('src', 'example', 'Example.js'),
  output: {filename: 'bundle.js', path: pathTo('example')},
  plugins: [new HtmlWebpackPlugin(), definePlugin],
  module: {loaders},
  resolve,
  stats
};


const dist = {
  devtool: '#source-map',
  entry: pathTo('src', 'index.js'),
  output: {
    filename: `${require(pathTo('package.json')).name}.js`,
    path: pathTo('build'),
    library: COMPONENT_NAME,
    libraryTarget: 'umd'
  },
  plugins: [definePlugin],
  module: {loaders},
  resolve,
  stats,
  externals: {
    react: {root: 'React', commonjs2: 'react', commonjs: 'react', amd: 'react'}
  }
};


const min = {
  devtool: '#source-map',
  entry: pathTo('src', 'index.js'),
  output: {
    filename: `${require(pathTo('package.json')).name}.min.js`,
    path: pathTo('build'),
    library: COMPONENT_NAME,
    libraryTarget: 'umd'
  },
  plugins: [
    definePlugin,
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {loaders},
  resolve,
  stats,
  externals: {
    react: {root: 'React', commonjs2: 'react', commonjs: 'react', amd: 'react'}
  }
};


const test = {
  output: {libraryTarget: 'commonjs2'},
  module: {loaders}
};


const configs = {development, ghPages, dist, min, test};
const build = process.env.BUILD || process.env.NODE_ENV || 'development';


module.exports = configs[build];
