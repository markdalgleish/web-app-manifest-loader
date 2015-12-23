module.exports = {
  entry: {
    main: __dirname + '/index.js'
  },

  output: {
    filename: 'index.js',
    path: __dirname + '/actual-output'
  },

  module: {
    loaders: [
      {
        test: /manifest.json$/,
        loader: 'file?name=manifest.json!../../../index.js'
      }
    ]
  }
};
