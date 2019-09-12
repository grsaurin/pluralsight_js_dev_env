import webpack from 'webpack';
import path from 'path';

export default {
 // debug: true,      //set debbuging info
  devtool: 'inline-source-map',     //?
 // noInfo: false,       // to display the list of bundled files
  entry: [
    path.resolve(__dirname, 'src/index')     //?
  ],
  target: 'web',             //web or Node or Electron
  output: {    //where create the bundle
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  /*devServer: {          //
    contentBase: path.resolve(__dirname, 'src'),
  },*/
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true,
      noInfo: false
    })
  ],        //
  module: {           //wich file types has webpack to handle
    rules: [{
      test: /\.js$/,
      enforce: "pre",
      exclude: /node_modules/,
      loaders: ['babel-loader']
    },
    {
      //It's not longer allowed to omit the -loader suffix when using loaders.
      test: /\.css$/,
      loaders: ['style-loader','css-loader']
    }]
  }
};
