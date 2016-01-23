module.exports = {
  entry: {
    main: __dirname + '/index.js'
  },

  output: {
    filename: 'index.js',
    path: __dirname + '/actual-output',
    publicPath: 'http://some-cdn.com/'
  },

  module: {
    loaders: [
      {
        test: /manifest.json$/,
        loader: 'file?name=manifest.json!../../../index.js'
      },
      {
        test: /.gif$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
};
